/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "source.unsplash.com",
      "avatars.githubusercontent.com",
      "flowbite.com",
      "upload.wikimedia.org",
      "i.ibb.co",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en-AR",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
