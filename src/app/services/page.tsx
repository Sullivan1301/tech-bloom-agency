import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
    return (
        <div className="bg-beige min-h-screen">
            <Navbar />
            <main>
                <Services />
            </main>
            <Footer />
        </div>
    );
}

