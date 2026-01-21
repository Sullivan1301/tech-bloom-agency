import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-beige flex items-center justify-center px-6 py-24">
            <div className="max-w-lg text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white text-2xl font-bold">
                    404
                </div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue">
                    Page introuvable
                </h1>
                <p className="text-gray-700">
                    La page que vous cherchez n&apos;existe pas ou a été déplacée. Retournez vers l&apos;accueil ou contactez-nous.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <Link
                        href="/"
                        className="bg-accent text-white px-5 py-3 rounded-full font-heading font-semibold hover:opacity-90 transition"
                    >
                        Retour à l&apos;accueil
                    </Link>
                    <Link
                        href="/contact"
                        className="border-2 border-primary text-primary px-5 py-3 rounded-full font-heading font-semibold hover:bg-primary hover:text-white transition"
                    >
                        Nous contacter
                    </Link>
                </div>
            </div>
        </div>
    );
}

