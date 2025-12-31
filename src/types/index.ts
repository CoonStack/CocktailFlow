export interface Cocktail {
    id: string;
    name: string;
    image: string;
    category: string;
    glass: string;
    instructions: string[];
    ingredients: Ingredient[];
    history?: string;
    tags?: string[];
}

export interface Ingredient {
    name: string;
    amount: string;
}
