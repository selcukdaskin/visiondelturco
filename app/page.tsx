import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Services from '@/app/components/Services';
import Process from '@/app/components/Process';
import Benefits from '@/app/components/Benefits';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
