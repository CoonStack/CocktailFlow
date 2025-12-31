import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, GlassWater, ScrollText } from 'lucide-react';
import { cocktails } from '../data/cocktails';

export const CocktailDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const cocktail = cocktails.find(c => c.id === id);

    if (!cocktail) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl text-slate-400">Cocktail not found</h2>
                <Link to="/" className="text-rose-500 hover:text-rose-400 mt-4 inline-block">
                    Return Home
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto">
            <Link
                to="/"
                className="inline-flex items-center space-x-2 text-slate-400 hover:text-white mb-8 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Collection</span>
            </Link>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-rose-500/10 relative">
                        <img
                            src={cocktail.image}
                            alt={cocktail.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-sm font-medium border border-rose-500/20">
                                {cocktail.category}
                            </span>
                            {cocktail.tags?.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-sm border border-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{cocktail.name}</h1>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            {cocktail.history}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                            <div className="flex items-center space-x-3 mb-2 text-rose-400">
                                <GlassWater className="w-5 h-5" />
                                <span className="font-medium">Glass Type</span>
                            </div>
                            <p className="text-slate-300">{cocktail.glass}</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                            <div className="flex items-center space-x-3 mb-2 text-rose-400">
                                <Clock className="w-5 h-5" />
                                <span className="font-medium">Preparation</span>
                            </div>
                            <p className="text-slate-300">Stir / Shake</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                            <ScrollText className="w-6 h-6 text-rose-500" />
                            <span>Ingredients</span>
                        </h2>
                        <ul className="space-y-3">
                            {cocktail.ingredients.map((ing, idx) => (
                                <li key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800/50">
                                    <span className="text-slate-200 font-medium">{ing.name}</span>
                                    <span className="text-rose-400">{ing.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Instructions</h2>
                        <div className="space-y-4">
                            {cocktail.instructions.map((step, idx) => (
                                <div key={idx} className="flex space-x-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold border border-rose-500/20">
                                        {idx + 1}
                                    </div>
                                    <p className="text-slate-300 pt-1 leading-relaxed">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
