import type { Cocktail } from '../types';

export const cocktails: Cocktail[] = [
    {
        id: '1',
        name: 'Old Fashioned',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
        category: 'IBA Official',
        glass: 'Old Fashioned glass',
        instructions: [
            'Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water.',
            'Muddle until dissolved.',
            'Fill the glass with ice cubes and add whiskey.',
            'Garnish with orange slice, and a cocktail cherry.'
        ],
        ingredients: [
            { name: 'Bourbon or Rye whiskey', amount: '45ml' },
            { name: 'Angostura bitters', amount: '2 dashes' },
            { name: 'Sugar cube', amount: '1' },
            { name: 'Water', amount: 'Few dashes' }
        ],
        history: 'The Old Fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey or, less commonly, brandy, and garnishing with an orange slice or zest and a cocktail cherry. It is traditionally served in an old fashioned glass (also known as rocks glass), which predated the cocktail.',
        tags: ['Classic', 'Strong', 'Whiskey']
    },
    {
        id: '2',
        name: 'Mojito',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
        category: 'IBA Official',
        glass: 'Highball glass',
        instructions: [
            'Muddle mint leaves with sugar and lime juice.',
            'Add a splash of soda water and fill the glass with cracked ice.',
            'Pour the rum and top with soda water.',
            'Garnish with sprig of mint leaves and lemon slice.'
        ],
        ingredients: [
            { name: 'White Rum', amount: '45ml' },
            { name: 'Fresh lime juice', amount: '20ml' },
            { name: 'Mint leaves', amount: '6 sprigs' },
            { name: 'White sugar', amount: '2 tsp' },
            { name: 'Soda water', amount: 'Top up' }
        ],
        history: 'Mojito is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar (traditionally sugar cane juice), lime juice, soda water, and mint. Its combination of sweetness, citrus, and herbaceous mint flavors is intended to complement the rum, and has made the mojito a popular summer drink.',
        tags: ['Refreshing', 'Summer', 'Rum']
    },
    {
        id: '3',
        name: 'Martini',
        image: 'https://images.unsplash.com/photo-1575023782549-62ca2d2f3b8e?auto=format&fit=crop&w=800&q=80',
        category: 'IBA Official',
        glass: 'Cocktail glass',
        instructions: [
            'Pour all ingredients into mixing glass with ice cubes.',
            'Stir well.',
            'Strain in chilled martini cocktail glass.',
            'Squeeze oil from lemon peel onto the drink, or garnish with olive.'
        ],
        ingredients: [
            { name: 'Gin', amount: '60ml' },
            { name: 'Dry Vermouth', amount: '10ml' }
        ],
        history: 'The Martini is a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist. Over the years, the martini has become one of the best-known mixed alcoholic beverages.',
        tags: ['Classic', 'Strong', 'Gin']
    },
    {
        id: '4',
        name: 'Margarita',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
        category: 'IBA Official',
        glass: 'Margarita glass',
        instructions: [
            'Rub the rim of the glass with the lime slice to make the salt stick to it.',
            'Shake the other ingredients with ice, then carefully pour into the glass.'
        ],
        ingredients: [
            { name: 'Tequila', amount: '50ml' },
            { name: 'Triple Sec', amount: '20ml' },
            { name: 'Lime juice', amount: '15ml' }
        ],
        history: 'A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice.',
        tags: ['Party', 'Sour', 'Tequila']
    },
    {
        id: '5',
        name: 'Negroni',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80', // Placeholder, need better image
        category: 'IBA Official',
        glass: 'Old Fashioned glass',
        instructions: [
            'Stir into glass over ice, garnish and serve.'
        ],
        ingredients: [
            { name: 'Gin', amount: '30ml' },
            { name: 'Campari', amount: '30ml' },
            { name: 'Sweet Red Vermouth', amount: '30ml' }
        ],
        history: 'The Negroni is a popular Italian cocktail, made of one part gin, one part vermouth rosso, and one part Campari, garnished with orange peel. It is considered an apéritif.',
        tags: ['Bitter', 'Classic', 'Gin']
    },
    {
        id: '6',
        name: 'Cosmopolitan',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80', // Placeholder
        category: 'IBA Official',
        glass: 'Cocktail glass',
        instructions: [
            'Shake with ice and strain into a chilled cocktail glass.'
        ],
        ingredients: [
            { name: 'Vodka Citron', amount: '40ml' },
            { name: 'Cointreau', amount: '15ml' },
            { name: 'Fresh lime juice', amount: '15ml' },
            { name: 'Cranberry juice', amount: '30ml' }
        ],
        history: 'A cosmopolitan, or informally a cosmo, is a cocktail made with vodka, triple sec, cranberry juice, and freshly squeezed or sweetened lime juice.',
        tags: ['Sweet', 'Party', 'Vodka']
    }
];
