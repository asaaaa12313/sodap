import Hero from "@/components/home/Hero";
import FeatureSection from "@/components/home/FeatureSection";
import BrandStorySection from "@/components/home/BrandStorySection";
import MenuSection from "@/components/home/MenuSection";
import GallerySection from "@/components/home/GallerySection";
import LocationSection from "@/components/home/LocationSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-black">
      <Hero />
      <FeatureSection />
      <BrandStorySection />
      <MenuSection />
      <GallerySection />
      <LocationSection />
    </main>
  );
}
