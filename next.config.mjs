/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/JeremyRiveraResume.pdf",
        destination:
          "https://drive.google.com/file/d/1QOMANcqVvlxiBwIrWUiEXT-1QYgAN54C/view?usp=drivesdk",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
