import React from 'react';
import { Link } from 'react-router-dom';
import { CocktailCard } from '../components/CocktailCard';
import { cocktails } from '../data/cocktails';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Favorites: React.FC = () => {
    const [likedCocktails, setLikedCocktails] = useLocalStorage<string[]>('likedCocktails', []);

    const favoriteCocktails = cocktails.filter(c => likedCocktails.includes(c.id));

    const toggleLike = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        setLikedCocktails(likedCocktails.filter(cocktailId => cocktailId !== id));
    };

    if (favoriteCocktails.length === 0) {
        return (
            <div className="text-center py-20 space-y-4">
                <h2 className="text-3xl font-bold text-white">No Favorites Yet</h2>
                <p className="text-slate-400">Start exploring and heart your favorite drinks!</p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-medium transition-colors"
                >
                    Explore Cocktails
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="py-8">
                <h1 className="text-3xl font-bold text-white mb-2">Your Favorites</h1>
                <p className="text-slate-400">Your personal collection of best-loved cocktails.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoriteCocktails.map(cocktail => (
                    <CocktailCard
                        key={cocktail.id}
                        cocktail={cocktail}
                        isLiked={true}
                        onToggleLike={(e) => toggleLike(e, cocktail.id)}
                    />
                ))}
            </div>
        </div>
    );
};
