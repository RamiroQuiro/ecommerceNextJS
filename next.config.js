/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains:["www.dropbox.com","lh3.googleusercontent.com"],
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
