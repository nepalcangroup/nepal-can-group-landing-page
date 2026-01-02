import "./globals.css";
import Providers from "./provider";
import { TopProgressBar } from "@/components/TopProgressBar";

export async function generateMetadata() {
  return {
    title: "Nepal Can Group",
   description:
      "Nepal Can Group: Your trusted partner for comprehensive logistics solutions in Nepal. Featuring Nepal Can Move (national & international courier, cargo, delivery), Nepal Can Packaging, Nepal Can International, Nepal Can Code, Nepal Can Buy, Nepal Can Hire and more. Fast. Secure. Reliable.",
    icons: {
      icon: "/favicon.png",
    },

    openGraph: {
      title: "Nepal Can Group",
      description:
        "Discover Nepal Can Group brands: Nepal Can Move for fast & reliable national/international delivery, Nepal Can Packaging, Nepal Can International shipping, Nepal Can Code, Nepal Can Buy & Nepal Can Hire. Your full-service logistics partner in Nepal.",
      images: ["/meta-image.jpg"],
    },
  };
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopProgressBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
