'use client'

import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'stock' | 'featured' | 'default'
  className?: string
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantStyles = {
    stock: 'bg-valentino-red/10 text-valentino-red',
    featured: 'bg-valentino-gold/10 text-valentino-gold',
    default: 'bg-gray-100 text-gray-700',
  }

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        ${variantStyles[variant]} ${className}
      `}
    >
      {children}
    </span>
  )
}