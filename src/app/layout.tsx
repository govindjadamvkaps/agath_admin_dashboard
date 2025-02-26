import { Outfit } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
// import AuthGuard from "@/components/AuthGuard";
import { Toaster } from 'react-hot-toast';
import PersistantProvider from "./StoreProvider";
const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} dark:bg-gray-900`}>
        <PersistantProvider>
        <ThemeProvider>
          <SidebarProvider>
            {/* <AuthGuard> */}
              {children}
            {/* </AuthGuard>  */}
            
          <Toaster />
          </SidebarProvider>
        </ThemeProvider>
        </PersistantProvider>
      </body>
    </html>
  );
}
