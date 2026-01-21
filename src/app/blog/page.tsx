import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import Footer from "@/components/layout/Footer";

export default function BlogPage() {
    return (
        <div className="bg-beige min-h-screen">
            <Navbar />
            <main>
                <Blog />
            </main>
            <Footer />
        </div>
    );
}

