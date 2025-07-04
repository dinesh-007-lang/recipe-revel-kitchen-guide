import { Clock, Heart, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  cookTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  calories: number;
  isFavorited?: boolean;
  className?: string;
}

export const RecipeCard = ({
  title,
  image,
  cookTime,
  difficulty,
  calories,
  isFavorited = false,
  className,
}: RecipeCardProps) => {
  const difficultyColors = {
    Easy: "text-secondary",
    Medium: "text-primary",
    Hard: "text-accent",
  };

  return (
    <Card className={cn(
      "group cursor-pointer transition-all duration-300 hover:shadow-recipe hover:scale-105 overflow-hidden",
      className
    )}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-3 right-3 bg-card/80 backdrop-blur-sm hover:bg-card",
            isFavorited && "text-accent"
          )}
        >
          <Heart className={cn("h-4 w-4", isFavorited && "fill-current")} />
        </Button>

        {/* Difficulty Badge */}
        <div className="absolute bottom-3 left-3">
          <span className={cn(
            "px-2 py-1 rounded-full text-xs font-medium bg-card/90 backdrop-blur-sm",
            difficultyColors[difficulty]
          )}>
            {difficulty}
          </span>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{cookTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ChefHat className="h-4 w-4" />
              <span>{calories} cal</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};