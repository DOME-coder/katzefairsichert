interface SectionDividerProps {
  imageSrc: string
  alt: string
}

export default function SectionDivider({ imageSrc, alt }: SectionDividerProps) {
  return (
    <div
      className="h-[250px] md:h-[350px] bg-fixed bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageSrc})` }}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}
