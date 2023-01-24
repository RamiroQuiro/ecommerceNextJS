/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains:["www.dropbox.com"],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dropbox.com',
        port: '',
        pathname: '/s/**',
      },
    ],
  },
  experimental:{
    appDir: true
  }
}
