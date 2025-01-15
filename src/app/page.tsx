import {FeatureGrid, ContactForm, HeroSection } from '@/components/ui';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4">
      <HeroSection />
      <FeatureGrid />
      <ContactForm /> 
    </main>
  );
}
