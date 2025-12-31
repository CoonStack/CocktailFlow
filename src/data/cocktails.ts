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
        image: import.meta.env.BASE_URL + 'cocktails/cocktail_martini.png',
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
        image: import.meta.env.BASE_URL + 'cocktails/cocktail_margarita.jpg',
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
        image: import.meta.env.BASE_URL + 'cocktails/cocktail_negroni.jpg',
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
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80', // Placeholder
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
    },
    {
        id: '7',
        name: 'Whiskey Sour',
        image: import.meta.env.BASE_URL + 'cocktails/cocktail_whiskey_sour.png',
        category: 'IBA Official',
        glass: 'Old Fashioned glass',
        instructions: [
            'Pour all ingredients into cocktail shaker filled with ice.',
            'Shake well.',
            'Strain in chilled cocktail glass.',
            'Garnish with half orange slice and maraschino cherry.'
        ],
        ingredients: [
            { name: 'Bourbon Whiskey', amount: '45ml' },
            { name: 'Fresh Lemon Juice', amount: '25ml' },
            { name: 'Sugar Syrup', amount: '20ml' },
            { name: 'Egg White (Optional)', amount: 'Few drops' }
        ],
        history: 'The Whiskey Sour is a mixed drink containing whiskey (often bourbon), lemon juice, sugar, and optionally, a dash of egg white. It is a traditional cocktail that dates back to the 1870s.',
        tags: ['Classic', 'Sour', 'Whiskey']
    },
    {
        id: '8',
        name: 'Daiquiri',
        image: import.meta.env.BASE_URL + 'cocktails/cocktail_daiquiri.png',
        category: 'IBA Official',
        glass: 'Cocktail glass',
        instructions: [
            'Pour all ingredients into shaker with ice cubes.',
            'Shake well.',
            'Strain in chilled cocktail glass.'
        ],
        ingredients: [
            { name: 'White Rum', amount: '60ml' },
            { name: 'Fresh Lime Juice', amount: '20ml' },
            { name: 'Superfine Sugar', amount: '2 tsp' }
        ],
        history: 'The Daiquiri is a family of cocktails whose main ingredients are rum, citrus juice (typically lime juice), and sugar or other sweetener. It is one of the six basic drinks listed in David A. Embury\'s The Fine Art of Mixing Drinks.',
        tags: ['Classic', 'Sour', 'Rum']
    },
    {
        id: '9',
        name: 'Manhattan',
        image: import.meta.env.BASE_URL + 'cocktails/cocktail_manhattan.png',
        category: 'IBA Official',
        glass: 'Cocktail glass',
        instructions: [
            'Pour all ingredients into mixing glass with ice cubes.',
            'Stir well.',
            'Strain into chilled cocktail glass.',
            'Garnish with cocktail cherry.'
        ],
        ingredients: [
            { name: 'Rye Whiskey', amount: '50ml' },
            { name: 'Sweet Red Vermouth', amount: '20ml' },
            { name: 'Angostura Bitters', amount: '1 dash' }
        ],
        history: 'A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. While rye is the traditional whiskey of choice, other commonly used whiskies include Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey.',
        tags: ['Classic', 'Strong', 'Whiskey']
    },
    {
        id: '10',
        name: 'Moscow Mule',
        image: import.meta.env.BASE_URL + 'cocktails/cocktail_moscow_mule.png',
        category: 'IBA Official',
        glass: 'Copper Mug',
        instructions: [
            'Combine vodka and ginger beer in a highball glass filled with ice.',
            'Add lime juice.',
            'Stir gently.',
            'Garnish with a lime slice.'
        ],
        ingredients: [
            { name: 'Vodka', amount: '45ml' },
            { name: 'Ginger Beer', amount: '120ml' },
            { name: 'Fresh Lime Juice', amount: '10ml' }
        ],
        history: 'The Moscow mule is a cocktail made with vodka, spicy ginger beer, and lime juice, garnished with a slice or wedge of lime. It is a type of buck, therefore sometimes called a vodka buck.',
        tags: ['Refreshing', 'Spicy', 'Vodka']
    },
    {
        id: '11',
        name: 'Piña Colada',
        image: import.meta.env.BASE_URL + 'cocktails/cocktail_pina_colada.png',
        category: 'IBA Official',
        glass: 'Hurricane glass',
        instructions: [
            'Blend all the ingredients with ice in a electric blender.',
            'Pour into a large glass or Hurricane glass.',
            'Garnish with a slice of pineapple and a cocktail cherry.'
        ],
        ingredients: [
            { name: 'White Rum', amount: '50ml' },
            { name: 'Coconut Cream', amount: '30ml' },
            { name: 'Fresh Pineapple Juice', amount: '50ml' }
        ],
        history: 'The Piña Colada is a sweet cocktail made with rum, cream of coconut or coconut milk, and pineapple juice, usually served either blended or shaken with ice. It may be garnished with either a pineapple wedge, maraschino cherry, or both.',
        tags: ['Sweet', 'Tropical', 'Rum']
    },
    {
        id: '12',
        name: 'Grasshopper',
        image: import.meta.env.BASE_URL + 'cocktails/cocktail_grasshopper.jpg',
        category: 'IBA Official',
        glass: 'Cocktail glass',
        instructions: [
            'Pour all ingredients into cocktail shaker filled with ice.',
            'Shake vigorously.',
            'Strain into chilled cocktail glass.'
        ],
        ingredients: [
            { name: 'Crème de Menthe (Green)', amount: '30ml' },
            { name: 'Crème de Cacao (White)', amount: '30ml' },
            { name: 'Fresh Cream', amount: '30ml' }
        ],
        history: 'The Grasshopper is a sweet, mint-flavored, after-dinner drink. The name of the drink derives from its green color, which comes from crème de menthe. The drink reputedly originated at Tujague\'s, a landmark bar in the French Quarter of New Orleans, Louisiana, and was invented by its owner, Philip Guichet, for a cocktail competition in New York City in 1918, where he won second place.',
        tags: ['Sweet', 'After Dinner', 'Mint']
    }
];
