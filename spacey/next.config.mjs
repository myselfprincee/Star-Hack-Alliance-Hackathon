/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['169.254.83.107', '192.168.0.153'],
    images: {
        remotePatterns: [
              {
                  protocol: 'https',
                  hostname: 'assets.science.nasa.gov',
                  pathname: '/**',
              },
              {
                  protocol: 'https',
                  hostname: 'space.nasa.gov',
                  pathname: '/**',
              },
              {
                  protocol: 'https',
                  hostname: 'science.nasa.gov',
                  pathname: '/**',
              },
            {
                protocol: 'https',
                hostname: 'apod.nasa.gov',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.youtube.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'princegupta.azurewebsites.net',
                pathname: '/**',
            },
        ],
    },
    env: {
        NASA_API_KEY: process.env.NASA_API_KEY,
        MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
        GROQ_API_KEY: process.env.GROQ_API_KEY,
        GEMINI_API_KEY: process.env.GEMINI_API_KEY,
        TECHPORT_API_KEY: process.env.TECHPORT_API_KEY
    }
};

export default nextConfig;
