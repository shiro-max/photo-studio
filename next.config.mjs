/** @type {import('next').NextConfig} */
const nextConfig = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)']
            }
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
                pathname: "/uploads/**/*",
            },
            {
                protocol: "https",
                hostname: "localhost",
                port: "1337",
                pathname: "/**",
            },
        ],
    },

};

export default nextConfig;