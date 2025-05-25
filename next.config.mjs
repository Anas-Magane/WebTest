/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  reactStrictMode: true,

  images: {
    unoptimized: true, 
  },

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  eslint: {
    ignoreDuringBuilds: true, 
  },

  typescript: {
    ignoreBuildErrors: true, 
  },
}

export default nextConfig