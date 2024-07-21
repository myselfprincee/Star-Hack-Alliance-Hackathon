/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['apod.nasa.gov','www.youtube.com', 'https://princegupta.azurewebsites.net'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'apod.nasa.gov',
            port: '',
            pathname: '/get-random-knowledge',
          },
        ],
      },
    env: {
        NASA_API_KEY: process.env.NASA_API_KEY,
        GEMINI_API_KEY: process.env.GEMINI_API_KEY,
        MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
    }
};

export default nextConfig;
