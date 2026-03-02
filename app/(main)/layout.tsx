import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="mainBody relative min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    );
}
