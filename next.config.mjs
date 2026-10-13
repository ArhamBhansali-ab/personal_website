/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [{ source: "/playground", destination: "/photography", permanent: false }];
  },
  experimental: {
    // the Open Graph image routes read covers, fonts and MDX from disk
    outputFileTracingIncludes: {
      "/projects/[slug]/opengraph-image": [
        "./public/work/**/*.jpg",
        "./assets/fonts/*",
        "./content/projects/*",
      ],
      "/opengraph-image": ["./assets/fonts/*"],
    },
  },
};

export default nextConfig;
