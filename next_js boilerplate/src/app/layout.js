import "./globals.css";
import Providers from "./provider";
import { TopProgressBar } from "@/components/TopProgressBar";

export async function generateMetadata() {
  return {
    title: "Nepal Can Move",
    description:
      "Nepal Can Move: A top courier company in Nepal offering fast, secure, and reliable national & international delivery services. Contact us !",
    icons: {
      icon: "/favicon.png",
    },

    openGraph: {
      title: "Nepal Can Move",
      description:
        "Nepal Can Move: A top courier company in Nepal offering fast, secure, and reliable national & international delivery services. Contact us !",
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
