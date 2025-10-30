/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: false
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' }
    ]
  }
};

export default nextConfig;

