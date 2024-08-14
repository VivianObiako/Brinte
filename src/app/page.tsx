import ContactSection from "@/components/ContactSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <ContactSection />
      <ResourcesSection />
      <Footer />
    </main>
  );
}
