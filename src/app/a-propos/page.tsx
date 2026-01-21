import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
    return (
        <div className="bg-beige min-h-screen">
            <Navbar />
            <main>
                <About />
            </main>
            <Footer />
        </div>
    );
}

