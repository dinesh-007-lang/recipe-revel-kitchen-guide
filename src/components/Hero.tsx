import { Button } from "@/components/ui/button";
import { Search, Utensils } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful gourmet food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your Next
            <span className="text-primary-glow block mt-2">
              Favorite Recipe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            From quick weeknight dinners to show-stopping desserts, 
            find recipes that inspire your culinary journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="animate-scale-in">
              <Search className="h-5 w-5" />
              Explore Recipes
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Utensils className="h-5 w-5" />
              Start Cooking
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};