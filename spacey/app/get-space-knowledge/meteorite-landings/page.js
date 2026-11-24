'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const meteoriteApiUrl = 'https://spacey-nasa-api-proxy.princegupta.workers.dev/api/meteorites-landings';
const pageSize = 10;

const getCoordinates = (meteorite) => {
    const latitudeValue = meteorite.geolocation?.latitude ?? meteorite.reclat;
    const longitudeValue = meteorite.geolocation?.longitude ?? meteorite.reclong;

    if (
        latitudeValue === null ||
        latitudeValue === undefined ||
        latitudeValue === '' ||
        longitudeValue === null ||
        longitudeValue === undefined ||
        longitudeValue === ''
    ) {
        return null;
    }

    const latitude = Number(latitudeValue);
    const longitude = Number(longitudeValue);

    if (
        !Number.isFinite(latitude) ||
        !Number.isFinite(longitude) ||
        latitude < -90 ||
        latitude > 90 ||
        longitude < -180 ||
        longitude > 180
    ) {
        return null;
    }

    return { latitude, longitude };
};

const formatMass = (mass) => {
    if (mass === null || mass === undefined || String(mass).trim() === '') {
        return 'Unknown';
    }

    const grams = Number(mass);
    if (!Number.isFinite(grams) || grams < 0) {
        return 'Unknown';
    }

    const formatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });
    return grams >= 1000
        ? `${formatter.format(grams / 1000)} kg`
        : `${formatter.format(grams)} g`;
};

const formatYear = (year) => {
    const match = String(year ?? '').match(/^\d{4}/);
    return match ? match[0] : 'Unknown';
};

const getCountryFlag = (countryCode) => {
    if (typeof countryCode !== 'string' || !/^[a-z]{2}$/i.test(countryCode)) {
        return null;
    }

    return Array.from(countryCode.toUpperCase(), (letter) =>
        String.fromCodePoint(letter.charCodeAt(0) + 127397)
    ).join('');
};

const MeteoriteLandings = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');
    const [visibleCount, setVisibleCount] = useState(pageSize);
    const [retryCount, setRetryCount] = useState(0);
    const [locationStates, setLocationStates] = useState({});

    useEffect(() => {
        let cancelled = false;

        const fetchData = async () => {
            setLoading(true);
            setMessage('');

            try {
                const response = await fetch(meteoriteApiUrl);

                if (response.status === 503) {
                    throw new Error('The data source is under maintenance. Please try again later.');
                }
                if (!response.ok) {
                    throw new Error(`Could not load meteorite data (HTTP ${response.status}).`);
                }

                const result = await response.json();
                if (!Array.isArray(result)) {
                    throw new Error('Meteorite data has an unexpected format.');
                }

                if (!cancelled) {
                    setData(result);
                    setVisibleCount(pageSize);
                }
            } catch (error) {
                console.error('Failed to fetch meteorite landings:', error);
                if (!cancelled) {
                    setMessage(
                        error instanceof Error
                            ? error.message
                            : 'An error occurred while fetching meteorite data.'
                    );
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        fetchData();
        return () => {
            cancelled = true;
        };
    }, [retryCount]);

    const getLocation = async (meteorite, coordinates) => {
        const token = process.env.MAPBOX_API_KEY;
        if (!token) {
            setLocationStates((previous) => ({
                ...previous,
                [meteorite.id]: {
                    status: 'error',
                    message: 'Location lookup is not configured.',
                },
            }));
            return;
        }

        setLocationStates((previous) => ({
            ...previous,
            [meteorite.id]: { status: 'loading' },
        }));

        const params = new URLSearchParams({
            longitude: String(coordinates.longitude),
            latitude: String(coordinates.latitude),
            access_token: token,
        });

        try {
            const response = await fetch(
                `https://api.mapbox.com/search/geocode/v6/reverse?${params}`
            );
            if (!response.ok) {
                throw new Error(`Location lookup failed (HTTP ${response.status}).`);
            }

            const result = await response.json();
            const feature = result.features?.[0];
            setLocationStates((previous) => ({
                ...previous,
                [meteorite.id]: {
                    status: 'success',
                    address: feature?.properties?.full_address || 'Unknown location',
                    countryCode: feature?.properties?.context?.country?.country_code?.toUpperCase(),
                    countryName: feature?.properties?.context?.country?.name,
                },
            }));
        } catch (error) {
            console.error(`Failed to look up location for meteorite ${meteorite.id}:`, error);
            setLocationStates((previous) => ({
                ...previous,
                [meteorite.id]: {
                    status: 'error',
                    message: 'Could not retrieve this location. Please try again.',
                },
            }));
        }
    };

    return (
        <main className="mt-20 mx-auto w-[90%] text-white">
            <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap gap-2 opacity-60">
                <Link href="/">Home</Link>
                <span aria-hidden="true">&gt;</span>
                <Link href="/get-space-knowledge">Get Space Knowledge</Link>
                <span aria-hidden="true">&gt;</span>
                <span aria-current="page">Meteorite Landings</span>
            </nav>

            <h1 className="my-5 text-2xl font-semibold">Known Meteorite Landings</h1>

            {loading ? (
                <p role="status" className="py-8">Loading meteorite records...</p>
            ) : message ? (
                <div role="alert" className="my-6 rounded-lg bg-white p-5 text-black">
                    <p>{message}</p>
                    <button
                        type="button"
                        onClick={() => setRetryCount((count) => count + 1)}
                        className="mt-4 rounded-md bg-black px-4 py-2 text-white"
                    >
                        Try again
                    </button>
                </div>
            ) : data.length === 0 ? (
                <p className="py-8">No meteorite records were returned.</p>
            ) : (
                <>
                    <p className="mb-5 text-sm opacity-70">
                        Showing {Math.min(visibleCount, data.length).toLocaleString()} of{' '}
                        {data.length.toLocaleString()} records.
                    </p>

                    <div className="mb-10 grid gap-4 lg:grid-cols-2">
                        {data.slice(0, visibleCount).map((meteorite) => {
                            const coordinates = getCoordinates(meteorite);
                            const location = locationStates[meteorite.id];

                            return (
                                <article
                                    key={meteorite.id}
                                    className="rounded-lg bg-white p-4 text-black"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div>
                                            <h2 className="text-xl font-semibold">
                                                {meteorite.name || 'Unnamed meteorite'}
                                            </h2>
                                            <p className="mt-1 text-sm text-gray-600">
                                                {meteorite.recclass || 'Classification unknown'}
                                            </p>
                                        </div>
                                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                                            {meteorite.fall === 'Fell'
                                                ? 'Observed fall'
                                                : meteorite.fall || 'Fall status unknown'}
                                        </span>
                                    </div>

                                    <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                                        <div>
                                            <dt className="text-gray-500">Year</dt>
                                            <dd className="font-medium">{formatYear(meteorite.year)}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-gray-500">Mass</dt>
                                            <dd className="font-medium">{formatMass(meteorite.mass)}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-gray-500">Record type</dt>
                                            <dd className="font-medium">{meteorite.nametype || 'Unknown'}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-gray-500">Record ID</dt>
                                            <dd className="font-medium">{meteorite.id}</dd>
                                        </div>
                                    </dl>

                                    <div className="mt-5 border-t border-gray-200 pt-4">
                                        <h3 className="font-semibold">Location</h3>
                                        {coordinates ? (
                                            <>
                                                <p className="mt-1 text-sm text-gray-600">
                                                    Latitude {coordinates.latitude.toFixed(4)}, longitude{' '}
                                                    {coordinates.longitude.toFixed(4)}
                                                </p>
                                                {location?.status === 'success' && (
                                                    <div className="mt-3">
                                                        {location.countryCode && getCountryFlag(location.countryCode) && (
                                                            <span
                                                                role="img"
                                                                aria-label={`${location.countryName || location.countryCode} flag`}
                                                                className="mb-2 block text-4xl leading-none"
                                                            >
                                                                {getCountryFlag(location.countryCode)}
                                                            </span>
                                                        )}
                                                        <p className="text-sm">{location.address}</p>
                                                        {(location.countryName || location.countryCode) && (
                                                            <p className="mt-1 text-xs text-gray-500">
                                                                {location.countryName || location.countryCode}
                                                            </p>
                                                        )}
                                                    </div>
                                                )}
                                                {location?.status === 'error' && (
                                                    <p role="alert" className="mt-2 text-sm text-red-700">
                                                        {location.message}
                                                    </p>
                                                )}
                                                {location?.status === 'success' ? (
                                                    <a
                                                        href={`https://www.google.com/maps/search/?api=1&query=${coordinates.latitude},${coordinates.longitude}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-3 inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            className="h-4 w-4"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                                                            <path d="m9 10 2 2 4-4" />
                                                        </svg>
                                                        View on Google Maps
                                                    </a>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        disabled={location?.status === 'loading'}
                                                        onClick={() => getLocation(meteorite, coordinates)}
                                                        className="mt-3 rounded-md bg-black px-4 py-2 text-sm text-white disabled:cursor-wait disabled:opacity-60"
                                                    >
                                                        {location?.status === 'loading'
                                                            ? 'Looking up...'
                                                            : location?.status === 'error'
                                                                ? 'Try again'
                                                                : 'Get location'}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <p className="mt-1 text-sm text-gray-600">
                                                Coordinates are not available in the source data.
                                            </p>
                                        )}
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {visibleCount < data.length && (
                        <button
                            type="button"
                            onClick={() =>
                                setVisibleCount((count) => Math.min(count + pageSize, data.length))
                            }
                            className="mb-8 w-full rounded-lg bg-white p-3 font-semibold text-black transition-colors hover:bg-gray-200"
                        >
                            Load more
                        </button>
                    )}
                </>
            )}
        </main>
    );
};

export default MeteoriteLandings;
