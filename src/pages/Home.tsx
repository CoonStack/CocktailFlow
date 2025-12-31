import React from 'react';
import { CocktailCard } from '../components/CocktailCard';
import { cocktails } from '../data/cocktails';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Home: React.FC = () => {
    const [likedCocktails, setLikedCocktails] = useLocalStorage<string[]>('likedCocktails', []);

    const toggleLike = (e: React.MouseEvent, id: string) => {
        e.preventDefault(); // Prevent navigation when clicking heart
        if (likedCocktails.includes(id)) {
            setLikedCocktails(likedCocktails.filter(cocktailId => cocktailId !== id));
        } else {
            setLikedCocktails([...likedCocktails, id]);
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center space-y-4 py-8">
                <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                    Discover the Art of Mixology
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Explore our curated collection of classic and modern cocktails.
                    Find your perfect drink for any occasion.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cocktails.map(cocktail => (
                    <CocktailCard
                        key={cocktail.id}
                        cocktail={cocktail}
                        isLiked={likedCocktails.includes(cocktail.id)}
                        onToggleLike={(e) => toggleLike(e, cocktail.id)}
                    />
                ))}
            </div>
        </div>
    );
};
