import React from 'react';
import { Link } from 'react-router-dom';
import { Wine, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
    return (
        <nav className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="p-2 bg-rose-500 rounded-lg group-hover:bg-rose-600 transition-colors">
                            <Wine className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent">
                            CocktailFlow
                        </span>
                    </Link>

                    <div className="flex items-center space-x-4">
                        <Link
                            to="/favorites"
                            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors text-sm font-medium text-slate-200"
                        >
                            <Heart className="w-4 h-4 text-rose-500" />
                            <span>Favorites</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
