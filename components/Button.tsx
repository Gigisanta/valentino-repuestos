'use client'

import { forwardRef, type ButtonHTMLAttributes } from 'react'
import Icons from './Icons'

type ButtonVariant = 'primary' | 'secondary' | 'whatsapp'
type ButtonSize = 'default' | 'lg' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  asChild?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-valentino-red text-white hover:bg-valentino-red-dark focus:ring-valentino-red',
  secondary: 'bg-valentino-dark text-white hover:bg-valentino-dark-light focus:ring-valentino-dark',
  whatsapp: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
}

const sizeStyles: Record<ButtonSize, string> = {
  default: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  icon: 'p-3',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'default', isLoading, asChild, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const Component = asChild ? 'span' : 'button'
    
    return (
      <Component
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'

// WhatsApp floating button
export function WhatsAppFloat() {
  const whatsappUrl = 'https://wa.me/5492994719426?text=Hola%2C%20quisiera%20consultar%20por%20repuestos%20en%20Valentino%20Repuestos.'
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      aria-label="Consultar por WhatsApp"
    >
      <Icons.WhatsApp />
    </a>
  )
}