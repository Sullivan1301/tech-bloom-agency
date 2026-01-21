import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
    return (
        <div className="bg-beige min-h-screen">
            <Navbar />
            <main>
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

