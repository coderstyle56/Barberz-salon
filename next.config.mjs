/** @type {import('next').NextConfig} */
const nextConfig = {  
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
    },
]
};

export default nextConfig;
