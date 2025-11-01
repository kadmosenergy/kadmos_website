import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Kadmos Energy — Scalable Passive-Safety Reactors",
  description: "Kadmos Energy designs practical, scalable nuclear reactors using proven components—the 'Home Depot' approach.",
  icons: { icon: "/favicon.ico" },
};
export default function RootLayout({ children }) {
  return (<html lang="en"><body className={inter.className}><NavBar/><main>{children}</main><Footer/></body></html>);
}
