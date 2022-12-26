/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['i.ibb.co']
  }
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'i.ibb.co',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // }
}

module.exports = nextConfig
