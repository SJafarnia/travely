/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.cloudinary.com",
                port: '',
                pathname: "/dnlzotkzq/**"
            }
        ]
    }
}

module.exports = nextConfig
