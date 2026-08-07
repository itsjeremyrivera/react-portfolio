/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/JeremyRiveraResume.pdf",
        destination:
          "https://drive.google.com/file/d/1XdM44WUwbX-LU90X0TzeibxlC9fV9Hho/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
