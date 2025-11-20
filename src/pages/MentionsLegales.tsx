import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MentionsLegales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mentions Légales - Tech Bloom Agency";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-tech-light via-white to-tech-light/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-bitter font-bold text-4xl md:text-5xl lg:text-6xl text-tech-primary mb-6">
                Mentions Légales
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-montserrat text-gray-700 leading-relaxed">
                {/* Informations légales */}
                <div>
                  <h2 className="font-bitter font-bold text-2xl text-tech-primary mb-4">
                    1. Informations légales
                  </h2>
                  <p className="mb-2">
                    <strong>Raison sociale :</strong> Tech Bloom Agency
                  </p>
                  <p className="mb-2">
                    <strong>Forme juridique :</strong> SARLU (Société à Responsabilité Limitée Unipersonnelle) - en cours de formalisation
                  </p>
                  <p className="mb-2">
                    <strong>Fondateur :</strong> Joro Sullivan RAKOTONIAINA
                  </p>
                  <p className="mb-2">
                    <strong>Siège social :</strong> Toamasina, Madagascar
                  </p>
                  <p className="mb-2">
                    <strong>Email :</strong> sullivanjoro3@gmail.com
                  </p>
                  <p className="mb-2">
                    <strong>Téléphone :</strong> +261 34 10 608 02
                  </p>
                  <p className="mb-2">
                    <strong>WhatsApp Business :</strong> +261 37 87 17 959
                  </p>
                  <p className="mb-2">
                    <strong>Directeur de publication :</strong> Joro Sullivan RAKOTONIAINA
                  </p>
                </div>

                {/* Hébergement */}
                <div>
                  <h2 className="font-bitter font-bold text-2xl text-tech-primary mb-4">
                    2. Hébergement du site
                  </h2>
                  <p className="mb-2">
                    Ce site est hébergé par :
                  </p>
                  <p className="mb-2">
                    <strong>Vercel Inc.</strong><br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789<br />
                    États-Unis
                  </p>
                  <p className="mb-2">
                    Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-tech-accent hover:underline">vercel.com</a>
                  </p>
                </div>

                {/* Propriété intellectuelle */}
                <div>
                  <h2 className="font-bitter font-bold text-2xl text-tech-primary mb-4">
                    3. Propriété intellectuelle
                  </h2>
                  <p className="mb-2">
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                    Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                  </p>
                  <p className="mb-2">
                    La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation expresse de l'éditeur.
                  </p>
                </div>

                {/* Protection des données */}
                <div>
                  <h2 className="font-bitter font-bold text-2xl text-tech-primary mb-4">
                    4. Protection des données personnelles
                  </h2>
                  <p className="mb-2">
                    Conformément à la loi n° 2016-679 du 6 janvier 2016 relative à la protection des données personnelles (RGPD), 
                    vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                  </p>
                  <p className="mb-2">
                    Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. 
                    Elles ne sont en aucun cas transmises à des tiers à des fins commerciales.
                  </p>
                  <p className="mb-2">
                    Pour exercer vos droits, vous pouvez nous contacter à l'adresse : sullivanjoro3@gmail.com
                  </p>
                </div>

                {/* Cookies */}
                <div>
                  <h2 className="font-bitter font-bold text-2xl text-tech-primary mb-4">
                    5. Cookies
                  </h2>
                  <p className="mb-2">
                    Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                    En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
                  </p>
                  <p className="mb-2">
                    Les cookies utilisés peuvent inclure :
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Cookies de session nécessaires au fonctionnement du site</li>
                    <li>Cookies analytiques (Google Analytics) pour mesurer l'audience</li>
                    <li>Cookies de réseaux sociaux pour le partage de contenu</li>
                  </ul>
                  <p className="mb-2 mt-4">
                    Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, 
                    mais cela peut affecter certaines fonctionnalités du site.
                  </p>
                </div>

                {/* Responsabilité */}
                <div>
                  <h2 className="font-bitter font-bold text-2xl text-tech-primary mb-4">
                    6. Limitation de responsabilité
                  </h2>
                  <p className="mb-2">
                    Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, 
                    mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                  </p>
                  <p className="mb-2">
                    Tech Bloom Agency ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, 
                    lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications, 
                    soit de l'apparition d'un bug ou d'une incompatibilité.
                  </p>
                </div>

                {/* Liens externes */}
                <div>
                  <h2 className="font-bitter font-bold text-2xl text-tech-primary mb-4">
                    7. Liens hypertextes
                  </h2>
                  <p className="mb-2">
                    Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. 
                    Les liens vers ces autres ressources vous font quitter le site Tech Bloom Agency.
                  </p>
                  <p className="mb-2">
                    Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de l'éditeur. 
                    Aucune autorisation ni demande d'information préalable ne peut être exigée par l'éditeur à l'égard d'un site qui souhaite établir 
                    un lien vers le site de l'éditeur. Il convient toutefois d'afficher ce site dans une nouvelle fenêtre du navigateur.
                  </p>
                </div>

                {/* Droit applicable */}
                <div>
                  <h2 className="font-bitter font-bold text-2xl text-tech-primary mb-4">
                    8. Droit applicable
                  </h2>
                  <p className="mb-2">
                    Les présentes mentions légales sont régies par le droit malgache. 
                    En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux malgaches conformément aux règles de compétence en vigueur.
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <h2 className="font-bitter font-bold text-2xl text-tech-primary mb-4">
                    9. Contact
                  </h2>
                  <p className="mb-2">
                    Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter à :
                  </p>
                  <p className="mb-2">
                    <strong>Email :</strong> sullivanjoro3@gmail.com<br />
                    <strong>Téléphone :</strong> +261 34 10 608 02<br />
                    <strong>WhatsApp Business :</strong> +261 37 87 17 959<br />
                    <strong>Adresse :</strong> Toamasina, Madagascar
                  </p>
                </div>

                {/* Dernière mise à jour */}
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <strong>Dernière mise à jour :</strong> Janvier 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MentionsLegales;

