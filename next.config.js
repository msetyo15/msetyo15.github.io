/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // enabled during build, turn off during develop
  // images: {
  //   loader: "akamai",
  //   path: "",
  // },
  // basePath: "/nextjs-pages", // enabled during build, turn off during develop
  // assetPrefix: "/nextja-pages", //enabled during build, turn off during develop
}

module.exports = nextConfig
