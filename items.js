const items = [
    {
        name: "Burger",
        details:
            "A veggie burger is a hamburger made with a patty that does not contain meat, or the patty of such a hamburger. The patty may be made from ingredients like beans (especially soybeans and tofu), nuts, grains, seeds, or fungi such as mushrooms or mycoprotein. The essence of the veggie burger patty has existed in various Eurasian cuisines for millennia, including in the form of grilled or fried meatless discs, or as koftas, a commonplace item in Indian cuisine. These may be made of entirely vegetarian ingredients such as legumes or other plant-derived proteins. Some popular brands of veggie burger include the Boca Burger, the Gardenburger, Morningstar Farms, and Quorn. In the 2010s, realistic imitations were developed, led by the companies Beyond Meat and Impossible Foods.",
        references:{
            website:"https://en.wikipedia.org/wiki/Veggie_burger",
            recipe: "https://www.indianhealthyrecipes.com/veg-burger-recipe-veggie-burger-recipe/"
        } ,
        image: require("./assets/burger.jpg")   
    },
    {
        name: "Pizza",
        details:
            "Pizza  is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven. The term pizza was first recorded in the year 997, in a Latin manuscript from the southern Italian town of Gaeta, in Lazio, on the border with Campania.Raffaele Esposito is often credited for creating modern pizza in Naples. In 2009, Neapolitan pizza was registered with the European Union as a traditional speciality guaranteed dish. In 2017, the art of making Neapolitan pizza was added to UNESCO's list of intangible cultural heritage.",
        references:{
            website:"https://en.wikipedia.org/wiki/Pizza",
            recipe: "https://www.indianhealthyrecipes.com/pizza-recipe-make-pizza/"
        },
        image:require("./assets/pizza.jpg")  
    },
    {
        name: "Ramen",
        details:
            "Ramen is a Japanese noodle dish. It consists of Chinese-style wheat noodles (中華麺, chūkamen) served in a broth; common flavors are soy sauce and miso, with typical toppings including sliced pork (chāshū), nori (dried seaweed), menma (bamboo shoots), and scallions. Ramen has its roots in Chinese noodle dishes.[1] Nearly every region in Japan has its own variation of ramen, such as the tonkotsu (pork bone broth) ramen of Kyushu and the miso ramen of Hokkaido. The origins of ramen can be traced back to Yokohama Chinatown in the early 20th century. The word 'ramen' is a Japanese borrowing of the Chinese word lamian (拉麵), meaning 'pulled noodles'. The dish evolved from southern Chinese noodle dishes, reflecting the demographics of Chinese settlers in Yokohama. Ramen gained popularity in Japan, especially during food shortages following World War II. In 1958, instant noodles were invented by Momofuku Ando, further popularizing the dish.",
        references:{
            website:"https://en.wikipedia.org/wiki/Ramen",
            recipe: "https://minimalistbaker.com/easy-vegan-ramen/"
        },
        image:require("./assets/ramen.jpg")  
    },
    {
        name: "Drinks",
        details:
            "Common types of drinks include plain drinking water, milk, juice, smoothies and soft drinks. Traditionally warm beverages include coffee, tea, and hot chocolate. Caffeinated drinks that contain the stimulant caffeine have a long history. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years. Non-alcoholic drinks often signify drinks that would normally contain alcohol, such as beer, wine and cocktails, but are made with a sufficiently low concentration of alcohol by volume. The category includes drinks that have undergone an alcohol removal process such as non-alcoholic beers and de-alcoholized wines.",
        references:{
            website:"https://en.wikipedia.org/wiki/Drink",
            recipe: "https://www.fifteenspatulas.com/4-refreshing-summer-drinks/"
        },
        image:require("./assets/drinks.jpg")    
    },
];

const restaurants = [
    {
        name: "McDonald's",
        details:
            "McDonald's Corporation is an American multinational fast food chain, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States. They rechristened their business as a hamburger stand, and later turned the company into a franchise, with the Golden Arches logo being introduced in 1953 at a location in Phoenix, Arizona. In 1955, Ray Kroc, a businessman, joined the company as a franchise agent and in 1961 bought out the McDonald brothers. Previously headquartered in Oak Brook, Illinois, it moved to nearby Chicago in June 2018.[9][10][11][12] McDonald's is also a real estatecompany through its ownership of around 70% of restaurant buildings and 45% of the underlying land (which it leases to its franchisees).",
        references:{
            website:"https://en.wikipedia.org/wiki/McDonald's",
        },
        image:require("./assets/mcdonalds.jpg")    
    },
    {
        name: "Domino's",
        details:
            "Domino's is an American multinational pizza restaurant chain. Founded in 1960, the chain is owned by master franchisor Domino's Pizza, Inc.[3] and led by CEO Russell Weiner. The corporation is Delaware-domiciled[4] and headquartered at the Domino's Farms Office Park in Ann Arbor Township, near Ann Arbor, Michigan. As of 2018, Domino's had approximately 15,000 stores, with 5,649 in the United States, 1,500 in India, and 1,249 in the United Kingdom. Domino's has stores in over 83 countries and 5,701 cities worldwide.",
        references:{
            website:"https://en.wikipedia.org/wiki/Domino's",
        },
        image:require("./assets/dominos.jpg")    
    },
    {
        name: "Starbucks",
        details:
            "Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington. It was founded in 1971, and is currently the world's largest coffeehouse chain. As of November 2022, the company had 35,711 stores in 80 countries, 15,873 of which were located in the United States. Of Starbucks' U.S.-based stores, over 8,900 are company-operated, while the remainder are licensed.            ",
        references:{
            website:"https://en.wikipedia.org/wiki/McDonald%27s",
        },
        image:require("./assets/starbucks.webp")    
    },
    {
        name: "Tacobell",
        details:
            "Taco Bell IP Holder, LLC, doing business as Taco Bell (stylized in all caps), is an American multinational chain of fast food restaurants founded in 1962 by Glen Bell (1923–2010) in Downey, California.[5] Taco Bell is a subsidiary of Yum! Brands, Inc. The restaurants serve a variety of Mexican-inspired foods, including tacos, burritos, quesadillas, nachos, novelty, and speciality items, and a variety of 'value menu' items. As of 2018, Taco Bell serves over two billion customers each year, at 7,072 restaurants, more than 93 percent of which are owned and operated by independent franchisees and licensees. PepsiCo purchased Taco Bell in 1978,[7] and later spun off its restaurants division as Tricon Global Restaurants, which later changed its name to Yum! Brands.",
        references:{
            website:"https://en.wikipedia.org/wiki/McDonald%27s",
        },
        image:require("./assets/tacobell.jpg")    
    },

]

export {items,restaurants}