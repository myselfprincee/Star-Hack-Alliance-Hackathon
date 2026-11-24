import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'About Spacey',
    description: 'Discover the purpose behind Spacey, why space studies matter, and our Bronze award at Star Hacks.',
};

const reasonsToStudySpace = [
    {
        number: '01',
        title: 'Take care of Earth',
        description:
            'Satellites help us track storms, oceans, forests, fires, and ice. Looking down from orbit gives researchers context that is difficult to see from the ground.',
    },
    {
        number: '02',
        title: 'Invent for exploration',
        description:
            'Space missions push sensors, communications, robotics, and materials to work where repairs are not easy. Solving those problems expands the tools scientists can use on Earth and beyond.',
    },
    {
        number: '03',
        title: 'Understand our place',
        description:
            "From the Moon's history to distant planets, space research helps test how worlds form, what makes a planet habitable, and whether life could exist elsewhere.",
    },
];

const waysToExplore = [
    {
        href: '/get-space-knowledge/knowledge',
        number: '01',
        title: 'Explore a space fact',
        description: 'Short, illustrated discoveries about the universe.',
    },
    {
        href: '/get-space-knowledge/apod',
        number: '02',
        title: 'See the sky today',
        description: 'A daily astronomy image and the story behind it.',
    },
    {
        href: '/get-space-knowledge/meteorite-landings',
        number: '03',
        title: 'Trace meteorite landings',
        description: 'Browse recorded meteorite finds and their locations.',
    },
];

export default function AboutPage() {
    return (
        <main className="mt-20 mx-auto w-[90%] min-w-0 pb-20 text-white">
            <section className="grid min-w-0 items-center gap-8 lg:grid-cols-2">
                <div className="min-w-0">
                    <p className="mb-4 font-mono text-xs opacity-60">
                        About Spacey
                    </p>
                    <h1 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                        You love space? So do we.
                    </h1>
                    <p className="mt-4 max-w-2xl leading-7 opacity-80">
                        Spacey is a small project with one big goal: make space fun to explore
                        and easy to learn about. Dip into quick facts, NASA missions, daily
                        space images, and meteorite records.
                    </p>
                    <Link
                        href="/get-space-knowledge"
                        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-black transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        Let&apos;s explore
                        <span aria-hidden="true">↗</span>
                    </Link>
                </div>

                <figure className="relative min-w-0">
                    <Image
                        src="/images/space.jpg"
                        alt="An astronaut exploring the lunar surface"
                        width={2048}
                        height={2048}
                        priority
                        className="aspect-[4/3] w-full max-w-full rounded-lg object-cover"
                    />
                    <figcaption className="mt-2 text-xs opacity-60">
                        The view from space begins with the home we share.
                    </figcaption>
                </figure>
            </section>

            <section
                aria-labelledby="award-heading"
                className="my-12 flex flex-col gap-4 rounded-lg bg-white p-5 text-black sm:flex-row sm:items-center sm:gap-6"
            >
                <div
                    aria-hidden="true"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-orange-700/40 text-orange-800"
                >
                    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.6">
                        <path d="M8 3h8v5a4 4 0 0 1-8 0V3Z" />
                        <path d="M8 5H5v2a4 4 0 0 0 4 4M16 5h3v2a4 4 0 0 1-4 4M12 12v5m-4 4h8l-1-4H9l-1 4Z" />
                    </svg>
                </div>
                <div>
                    <p className="font-mono text-xs opacity-60">
                        A little milestone
                    </p>
                    <h2 id="award-heading" className="mt-2 text-2xl font-semibold">
                        We earned Bronze at Star Hacks.
                    </h2>
                    <p className="mt-2 max-w-3xl leading-7 opacity-75">
                        We built Spacey to make a huge subject feel welcoming and fun to explore.
                    </p>
                </div>
            </section>

            <section aria-labelledby="significance-heading" className="mb-20">
                <div className="mb-8 grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                    <div>
                        <p className="mb-3 font-mono text-xs opacity-60">
                            The big question
                        </p>
                        <h2 id="significance-heading" className="text-2xl font-semibold sm:text-3xl">
                            So, why study space?
                        </h2>
                    </div>
                    <p className="max-w-2xl leading-7 opacity-75">
                        It is not just about going far away. Space research helps us understand
                        Earth, build better tools, and ask how worlds work.
                    </p>
                </div>

                <div className="border-t border-white/20">
                    {reasonsToStudySpace.map((reason) => (
                        <article
                            key={reason.number}
                            className="grid gap-3 border-b border-white/20 py-6 sm:grid-cols-[4rem_0.8fr_1.2fr] sm:gap-6"
                        >
                            <span className="font-mono text-sm opacity-50">{reason.number}</span>
                            <h3 className="text-lg font-semibold">{reason.title}</h3>
                            <p className="max-w-2xl leading-7 opacity-70">{reason.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section aria-labelledby="explore-heading">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="mb-3 font-mono text-xs opacity-60">
                            Keep exploring
                        </p>
                        <h2 id="explore-heading" className="text-3xl font-semibold">
                            Where to next?
                        </h2>
                    </div>
                    <p className="max-w-md leading-7 opacity-70">
                        No telescope required. Follow a question, an image, or a meteorite trail.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    {waysToExplore.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group grid gap-2 rounded-lg p-3 transition-colors hover:bg-white hover:text-black sm:grid-cols-[4rem_0.8fr_1.2fr_auto] sm:items-center sm:gap-6"
                        >
                            <span className="font-mono text-xs opacity-60">{item.number}</span>
                            <span className="text-lg font-semibold">{item.title}</span>
                            <span className="text-sm opacity-60 group-hover:opacity-80">
                                {item.description}
                            </span>
                            <span aria-hidden="true" className="text-xl">↗</span>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
