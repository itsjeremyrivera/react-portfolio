/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/JeremyRiveraResume.pdf",
        destination:
          "https://drive.google.com/file/d/1UpmabTY5aSsfH0QBlERqbHoqLAWeP9dp/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
