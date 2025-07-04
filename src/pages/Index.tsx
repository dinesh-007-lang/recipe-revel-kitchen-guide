import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedRecipes } from "@/components/FeaturedRecipes";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedRecipes />
    </div>
  );
};

export default Index;
