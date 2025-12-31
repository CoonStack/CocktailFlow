import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import type { Cocktail } from '../types';
import { clsx } from 'clsx';

interface CocktailCardProps {
    cocktail: Cocktail;
    isLiked: boolean;
    onToggleLike: (e: React.MouseEvent) => void;
}

export const CocktailCard: React.FC<CocktailCardProps> = ({ cocktail, isLiked, onToggleLike }) => {
    return (
        <Link
            to={`/cocktail/${cocktail.id}`}
            className="group relative block bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/10"
        >
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute top-3 right-3">
                <button
                    onClick={onToggleLike}
                    className="p-2 rounded-full bg-slate-900/50 backdrop-blur-sm border border-white/10 hover:bg-slate-800 transition-colors"
                >
                    <Heart
                        className={clsx(
                            "w-5 h-5 transition-colors",
                            isLiked ? "fill-rose-500 text-rose-500" : "text-slate-300 hover:text-white"
                        )}
                    />
                </button>
            </div>

            <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                        {cocktail.category}
                    </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">
                    {cocktail.name}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                    {cocktail.history || "A classic cocktail recipe."}
                </p>
            </div>
        </Link>
    );
};
