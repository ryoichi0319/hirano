/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ["images.microcms-assets.io", "res.cloudinary.com","lh3.googleusercontent.com"],
      },
      async headers() {
        return [
          {
            source: "/api/:path*",
            headers: [
              { key: "Access-Control-Allow-Origin", value: "*", },
              { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
              { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
            ],
          },
        ];
      },
    
}

module.exports = nextConfig
