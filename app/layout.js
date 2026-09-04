import "./globals.css";
import ScrollToTopButton from "../Components/ScrollToTopButton";

export const metadata = {
  metadataBase: new URL("https://jeremyrivera.design"),
  title: {
    default: "Jeremy Rivera | Product Designer",
    template: "%s | Jeremy Rivera",
  },
  description:
    "Product Designer bridging UX and front-end engineering across enterprise software, SaaS, dashboards, and mobile products.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jeremy Rivera | Product Designer",
    description:
      "Product design, systems thinking, interaction design, and front-end fluency for complex digital products.",
    url: "/",
    siteName: "Jeremy Rivera | Product Designer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremy Rivera | Product Designer",
    description:
      "Product design, systems thinking, interaction design, and front-end fluency for complex digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
  try {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (error) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
