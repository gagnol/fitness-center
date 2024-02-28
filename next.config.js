/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["res.cloudinary.com",
    "www.themealdb.com","www.google.com",
    "images.pexels.com","m.media-amazon.com","alan.app.com","d205bpvrqc9yn1.cloudfront.net",
    "i.ytimg.com","api.exercisedb.io"],
  },
}

module.exports = nextConfig
