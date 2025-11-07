import { siteContent } from "@/data/siteContent";
import ClientLayout from "./ClientLayout";

// Get the base URL from environment variables or use a default
const getBaseUrl = () => {
  // Check for Netlify URL first
  if (process.env.URL) {
    return process.env.URL;
  }
  // Check for Vercel URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Check for custom site URL
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  // Default to localhost for development
  return process.env.NODE_ENV === 'production' 
    ? 'https://yourdomain.com' // Replace with actual domain
    : 'http://localhost:3000';
};

const baseUrl = getBaseUrl();

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: `${siteContent.agent.name} - ${siteContent.agent.title}`,
  description: siteContent.metadata.baseDescription,
  openGraph: {
    title: `${siteContent.agent.name} - ${siteContent.agent.title}`,
    description: siteContent.metadata.baseDescription,
    type: "website",
    images: [
      {
        url: "/images/agent/jonathan-york-normal-1.png",
        width: 1200,
        height: 630,
        alt: `${siteContent.agent.name} - ${siteContent.agent.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.agent.name} - ${siteContent.agent.title}`,
    description: siteContent.metadata.baseDescription,
    images: ["/images/agent/jonathan-york-normal-1.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="popup-loader">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
