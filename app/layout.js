import { siteContent } from "@/data/siteContent";
import ClientLayout from "./ClientLayout";

export const metadata = {
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
