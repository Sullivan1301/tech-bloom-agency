'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderItem } from '@/types/menu'

/* =========================
   HEADER LINK (DESKTOP)
   ========================= */

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const pathname = usePathname()
  
  const isActive = pathname === item.href || pathname.startsWith(`/${item.label.toLowerCase()}`)

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true)
    }
  }

  const handleMouseLeave = () => {
    setSubmenuOpen(false)
  }

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`
          flex items-center gap-1 py-2 px-1 text-base font-medium
          transition-all duration-300 relative
          ${isActive 
            ? 'text-accent' 
            : 'text-beige hover:text-accent-light'
          }
        `}
      >
        <span>{item.label}</span>
        
        {item.submenu && (
          <Icon 
            icon="mdi:chevron-down" 
            className={`text-lg transition-transform duration-300 ${
              submenuOpen ? 'rotate-180' : ''
            }`}
          />
        )}
        
        {/* Active Indicator */}
        <span 
          className={`
            absolute bottom-0 left-0 h-0.5 bg-accent
            transition-all duration-300
            ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
          `}
        />
      </Link>

      {/* Submenu */}
      {submenuOpen && item.submenu && (
        <div 
          className="absolute top-full left-0 mt-2 w-60 py-2 
                     bg-darklight backdrop-blur-lg rounded-xl shadow-2xl
                     border border-dark_border overflow-hidden
                     animate-fadeIn"
        >
          {item.submenu.map((subItem, index) => {
            const isSubActive = pathname === subItem.href
            
            return (
              <Link
                key={index}
                href={subItem.href}
                className={`
                  flex items-center gap-3 px-4 py-3
                  transition-all duration-200
                  ${isSubActive
                    ? 'bg-accent text-beige'
                    : 'text-beige hover:bg-primary/50 hover:text-accent-light'
                  }
                `}
              >
                <Icon 
                  icon={isSubActive ? 'mdi:chevron-right' : 'mdi:circle-small'} 
                  className="text-xl flex-shrink-0" 
                />
                <span className="text-sm font-medium">{subItem.label}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HeaderLink