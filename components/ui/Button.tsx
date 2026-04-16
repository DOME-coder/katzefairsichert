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
    'group relative inline-flex items-center justify-center min-h-[44px] font-heading font-semibold text-sm md:text-base tracking-tight-2 rounded-full transition-all duration-600 ease-emil will-change-transform'

  const variants = {
    primary:
      'overflow-hidden px-8 md:px-12 py-3.5 md:py-4 bg-gradient-to-r from-brand-accent via-brand-accentDark to-brand-accent bg-220 animate-gradient-drift text-white shadow-brand-glow ring-1 ring-white/20 hover:-translate-y-0.5',
    secondary:
      'px-7 md:px-10 py-3 md:py-3.5 bg-white/70 backdrop-blur-sm border border-brand-accent/60 text-brand-accent hover:bg-brand-lavender hover:border-brand-accent hover:-translate-y-0.5 shadow-brand-sm',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  // Inner radial light-sweep on hover (only for primary)
  const innerSweep =
    variant === 'primary' ? (
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-emil group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.22), transparent 60%)',
        }}
      />
    ) : null

  if (href) {
    return (
      <a href={href} className={classes}>
        {innerSweep}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {innerSweep}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
}
