import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            <footer className="border-t border-slate-800 mt-auto py-8 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} CocktailFlow. All rights reserved.</p>
            </footer>
        </div>
    );
};
