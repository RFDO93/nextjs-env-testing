/** @type {import('next').NextConfig} */
const path = require('path')
const withLess = require("next-with-less")

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
    NEXT_PUBLIC_X_BFF_API: process.env.NEXT_PUBLIC_X_BFF_API,
    NEXT_PUBLIC_API_KEY_AM: process.env.NEXT_PUBLIC_API_KEY_AM,
    NEXT_PUBLIC_TK: process.env.NEXT_PUBLIC_TK,
    NEXT_PUBLIC_GOOGLE_RECAPTCHA: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA,
  },
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  sassOptions:{
    includePaths: [path.join(__dirname, './src/**/*.scss')],
  },
}

module.exports = withLess(nextConfig)
