import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
    return (
        <div className="bg-beige min-h-screen">
            <Navbar />
            <main>
                <Portfolio />
            </main>
            <Footer />
        </div>
    );
}

