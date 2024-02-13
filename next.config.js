/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.cloudinary.com',
                port: '',
                pathname: '/dnlzotkzq/**',
            },
            {
                protocol: 'https',
                hostname: '**.googleusercontent.com',
                port: '',
            },
        ],
    },
};

module.exports = nextConfig;
