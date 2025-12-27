'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderItem } from '@/types/menu'

/* =========================
   MOBILE HEADER LINK
   ========================= */

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const pathname = usePathname()
  
  const isActive = pathname === item.href || pathname.startsWith(`/${item.label.toLowerCase()}`)

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault()
      setSubmenuOpen(!submenuOpen)
    }
  }

  return (
    <div className="w-full">
      <Link
        href={item.href}
        onClick={handleToggle}
        className={`
          flex items-center justify-between w-full py-3 px-4 rounded-lg
          font-medium transition-all duration-200
          ${isActive
            ? 'bg-accent text-beige shadow-glow'
            : 'text-beige hover:bg-darklight'
          }
        `}
      >
        <span className="flex items-center gap-3">
          {/* Icon indicator */}
          <span 
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              isActive ? 'bg-beige' : 'bg-gray'
            }`}
          />
          {item.label}
        </span>
        
        {item.submenu && (
          <Icon 
            icon="mdi:chevron-down" 
            className={`text-xl transition-transform duration-300 ${
              submenuOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </Link>

      {/* Submenu */}
      {submenuOpen && item.submenu && (
        <div className="mt-2 ml-4 space-y-1 pl-4 border-l-2 border-dark_border">
          {item.submenu.map((subItem, index) => {
            const isSubActive = pathname === subItem.href
            
            return (
              <Link
                key={index}
                href={subItem.href}
                className={`
                  flex items-center gap-2 py-2 px-3 rounded-lg
                  text-sm transition-all duration-200
                  ${isSubActive
                    ? 'bg-primary text-beige font-medium'
                    : 'text-gray-light hover:text-beige hover:bg-darklight'
                  }
                `}
              >
                <Icon 
                  icon={isSubActive ? 'mdi:circle' : 'mdi:circle-outline'} 
                  className="text-xs" 
                />
                {subItem.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default MobileHeaderLink