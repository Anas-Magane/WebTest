/** @type {import('next').NextConfig} */
const nextConfig = {
  
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