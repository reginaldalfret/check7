/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  experimental: {
    turboDrive: true,
    optimizePackageImports: [
      '@radix-ui/react-icons',
      'lucide-react'
    ]
  },
  distDir: '.next',
  poweredByHeader: false
}

export default nextConfig
