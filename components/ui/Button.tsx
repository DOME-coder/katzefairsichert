import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  href?: string
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-heading font-semibold text-base tracking-wide transition-all duration-200'

  const variants = {
    primary:
      'bg-brand-accent text-white hover:bg-brand-accentDark hover:scale-[1.02]',
    secondary:
      'bg-transparent border-2 border-brand-accent text-brand-accent hover:bg-brand-lavender',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
