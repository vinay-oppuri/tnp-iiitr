import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
    title: "TNP | IIIT Raichur",
    description: "Official Training and Placement Cell of Indian Institute of Information Technology Raichur.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${poppins.variable} base antialiased`} id="back-to-top">
                <Navbar />
                <main className="mainBody relative min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
