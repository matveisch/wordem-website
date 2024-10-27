import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cpsynqohyobfkkbkljle.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/posts-images/**',
      },
    ],
  },
};

export default nextConfig;
