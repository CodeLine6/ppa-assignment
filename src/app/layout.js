import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexcent",
  icons: {
    icon: 'favicon.svg', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
