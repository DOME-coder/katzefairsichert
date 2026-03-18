import Hero from '@/components/sections/Hero'
import Team from '@/components/sections/Team'
import Vorteile from '@/components/sections/Vorteile'
import VorteileLeistungen from '@/components/sections/VorteileLeistungen'
import TarifVergleich from '@/components/sections/TarifVergleich'
import ExtraLeistungen from '@/components/sections/ExtraLeistungen'
import Versicherungsfall from '@/components/sections/Versicherungsfall'
import Wissenswertes from '@/components/sections/Wissenswertes'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import SectionDivider from '@/components/ui/SectionDivider'

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <Vorteile />
      <VorteileLeistungen />
      <TarifVergleich />
      <ExtraLeistungen />
      <SectionDivider imageSrc="/images/katzen/vet-exam.jpg" alt="Katze beim Tierarzt" />
      <Versicherungsfall />
      <SectionDivider imageSrc="/images/katzen/cat-window.jpg" alt="Katze am Fenster" />
      <Wissenswertes />
      <FAQ />
      <CTA />
    </>
  )
}
