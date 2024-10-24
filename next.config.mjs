/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/content/home",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
