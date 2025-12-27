import Image from 'next/image'
import Link from 'next/link'

/* =========================
   LOGO COMPONENT
   ========================= */

const Logo: React.FC = () => {
  return (
    <Link 
      href="/" 
      className="relative flex items-center transition-transform hover:scale-105 duration-300"
      aria-label="Tech Bloom Agency - Accueil"
    >
      {/* Logo Light Mode */}
      <Image
        src="/images/logo/logo.svg"
        alt="Tech Bloom Agency Logo"
        width={50}
        height={50}
        priority
        quality={100}
        className="h-10 w-auto sm:h-12 dark:hidden"
      />
      
      {/* Logo Dark Mode */}
      <Image
        src="/images/logo/logo.svg"
        alt="Tech Bloom Agency Logo"
        width={50}
        height={50}
        priority
        quality={100}
        className="hidden h-10 w-auto sm:h-12 dark:block"
      />
    </Link>
  )
}

export default Logo