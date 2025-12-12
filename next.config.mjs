/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { // ✅ Add images object
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

