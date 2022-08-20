/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // enabled during build, turn off during develop
  images: {
    loader: "akamai",
    path: "",
  },
}

module.exports = nextConfig
