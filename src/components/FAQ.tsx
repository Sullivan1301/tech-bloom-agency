import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Combien de temps prend la création d'un site web ?",
      answer: "Le délai varie selon la complexité du projet. Pour un site vitrine simple, comptez 2-3 semaines. Pour un site e-commerce ou une application plus complexe, cela peut prendre 4-8 semaines. Nous établissons toujours un planning détaillé dès le début du projet."
    },
    {
      question: "Proposez-vous des services de maintenance après la livraison ?",
      answer: "Oui, nous proposons des formules de maintenance et support technique à partir de 132€/mois. Cela inclut les mises à jour, sauvegardes, corrections de bugs et support réactif. L'hébergement est également inclus la première année pour tous nos projets."
    },
    {
      question: "Travaillez-vous avec des clients internationaux ?",
      answer: "Absolument ! Basés à Madagascar, nous travaillons avec des clients locaux et internationaux (France, Canada, Afrique francophone). Nous communiquons principalement en français et anglais, et adaptons nos horaires pour faciliter les échanges."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs varient selon le service et la complexité du projet. Un site web démarre à 385€, le branding à 220€, et le marketing digital à 275€. Nous proposons également des packs combinés pour des solutions complètes. Contactez-nous pour un devis personnalisé adapté à votre budget."
    },
    {
      question: "Puis-je voir des exemples de vos réalisations ?",
      answer: "Bien sûr ! Consultez notre page Portfolio pour découvrir nos projets récents. Nous avons accompagné des entreprises dans différents secteurs : e-commerce, soins bio, coaching, et bien d'autres. Chaque projet est unique et adapté aux besoins du client."
    },
    {
      question: "Comment se déroule un projet avec Tech Bloom Agency ?",
      answer: "Notre processus est simple : 1) Prise de contact et analyse de vos besoins, 2) Proposition de devis détaillé, 3) Validation et signature, 4) Développement/création avec points de validation réguliers, 5) Livraison et formation, 6) Suivi et support. Nous vous tenons informé à chaque étape."
    },
    {
      question: "Proposez-vous des formations pour utiliser le site créé ?",
      answer: "Oui, la formation est incluse dans tous nos projets de création de site web. Nous vous formons à l'utilisation du CMS, à la gestion du contenu, et aux bonnes pratiques. Nous restons également disponibles pour des questions après la livraison."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bitter font-bold text-3xl md:text-4xl text-tech-primary dark:text-tech-light mb-4">
            Questions Fréquentes
          </h2>
          <p className="font-montserrat text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Vous avez des questions ? Nous avons les réponses. Consultez notre FAQ ou contactez-nous directement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700">
                <AccordionTrigger className="font-montserrat font-semibold text-tech-primary dark:text-tech-light hover:text-tech-accent dark:hover:text-tech-accent text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-montserrat text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

