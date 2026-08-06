import "./globals.css";

export const metadata = {
  title: "Jeremy Rivera — Product Designer",
  description:
    "Product Designer bridging UX and front-end engineering across enterprise software, SaaS, dashboards, and mobile products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
