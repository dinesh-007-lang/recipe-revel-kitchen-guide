import { RecipeCard } from "./RecipeCard";
import pastaImage from "@/assets/pasta-recipe.jpg";
import saladImage from "@/assets/salad-recipe.jpg";
import dessertImage from "@/assets/dessert-recipe.jpg";

const featuredRecipes = [
  {
    id: "1",
    title: "Creamy Herb Pasta with Fresh Basil",
    image: pastaImage,
    cookTime: "25 min",
    difficulty: "Easy" as const,
    calories: 380,
    isFavorited: true,
  },
  {
    id: "2",
    title: "Garden Fresh Mediterranean Salad",
    image: saladImage,
    cookTime: "15 min",
    difficulty: "Easy" as const,
    calories: 220,
    isFavorited: false,
  },
  {
    id: "3",
    title: "Decadent Chocolate Berry Tart",
    image: dessertImage,
    cookTime: "45 min",
    difficulty: "Medium" as const,
    calories: 420,
    isFavorited: true,
  },
];

export const FeaturedRecipes = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-foreground mb-4">
            Featured Recipes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked recipes from our community of passionate home cooks and professional chefs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredRecipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary/80 font-semibold text-lg underline underline-offset-4 transition-colors">
            View All Recipes →
          </button>
        </div>
      </div>
    </section>
  );
};