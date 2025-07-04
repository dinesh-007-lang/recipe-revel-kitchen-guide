import { Search, Heart, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">RR</span>
            </div>
            <h1 className="font-display font-bold text-xl text-foreground">
              Recipe Revel
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search recipes..."
                className="pl-10 bg-muted/50 border-border"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Book className="h-4 w-4" />
              Recipes
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
              Favorites
            </Button>
            <Button variant="hero" size="sm">
              Get Cooking
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};