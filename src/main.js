import './style.css'

const STORAGE_KEY = 'freshcart-mobile-v1'


const categories = [
    { name: 'Fresh Produce', icon: '🥦' },
    { name: 'Dairy Products', icon: '🥛' },
    { name: 'Frozen Foods', icon: '🧊' },
    { name: 'Food Essentials', icon: '🍚' },
    { name: 'Baked Goods', icon: '🥐' },
    { name: 'Meat & Seafood', icon: '🥩' },
    { name: 'Beverages', icon: '🥤' },
    { name: 'Snacks & Confectionery', icon: '🍫' },
    { name: 'Ice Cream', icon: '🍦' },
    { name: 'Organic Products', icon: '🌿' },
    { name: 'Baby Care', icon: '🍼' },
    { name: 'Beauty & Personal Care', icon: '🧴' },
    { name: 'Household', icon: '🧹' },
    { name: 'Books & Stationery', icon: '📚' },
    { name: 'Pet Care', icon: '🐾' },
    { name: 'Electronics', icon: '🔌' },
    { name: 'Fashion & Accessories', icon: '👕' },
    { name: 'Health & Wellness', icon: '🩹' },
    { name: 'Cleaning Supplies', icon: '🧽' },
    { name: 'Kitchen & Dining', icon: '🍽️' },
    { name: 'Home & Living', icon: '🏠' },
    { name: 'Personal Essentials', icon: '🛍️' },
    { name: 'Automotive', icon: '🚗' },
    { name: 'Toys & Games', icon: '🧸' },
    { name: 'Garden & Outdoor', icon: '🪴' },
    { name: 'Other', icon: '📦' },
]


const quickItems = [
    // Fresh produce
    { name: 'Bananas', category: 'Fresh Produce', quantity: '1 bunch', price: 4.5, icon: '🍌' },
    { name: 'Apples', category: 'Fresh Produce', quantity: '6 pieces', price: 8, icon: '🍎' },
    { name: 'Tomatoes', category: 'Fresh Produce', quantity: '500 g', price: 3.2, icon: '🍅' },
    { name: 'Potatoes', category: 'Fresh Produce', quantity: '1 kg', price: 5, icon: '🥔' },
    { name: 'Spinach', category: 'Fresh Produce', quantity: '1 bunch', price: 3.5, icon: '🥬' },

    // Dairy products
    { name: 'Fresh milk', category: 'Dairy Products', quantity: '1 litre', price: 6.9, icon: '🥛' },
    { name: 'Eggs', category: 'Dairy Products', quantity: '10 pieces', price: 7.5, icon: '🥚' },
    { name: 'Cheese', category: 'Dairy Products', quantity: '1 pack', price: 9, icon: '🧀' },
    { name: 'Yogurt', category: 'Dairy Products', quantity: '1 tub', price: 6, icon: '🥣' },

    // Frozen foods and ice cream
    { name: 'Frozen vegetables', category: 'Frozen Foods', quantity: '1 pack', price: 7, icon: '🧊' },
    { name: 'Frozen nuggets', category: 'Frozen Foods', quantity: '1 pack', price: 12, icon: '🍗' },
    { name: 'Ice cream', category: 'Ice Cream', quantity: '1 tub', price: 15, icon: '🍦' },

    // Food essentials
    { name: 'Rice', category: 'Food Essentials', quantity: '5 kg', price: 25, icon: '🍚' },
    { name: 'Cooking oil', category: 'Food Essentials', quantity: '1 bottle', price: 9, icon: '🫒' },
    { name: 'Sugar', category: 'Food Essentials', quantity: '1 kg', price: 4, icon: '🧂' },
    { name: 'Instant noodles', category: 'Food Essentials', quantity: '5 packs', price: 6, icon: '🍜' },

    // Baked goods
    { name: 'Wholemeal bread', category: 'Baked Goods', quantity: '1 loaf', price: 5.2, icon: '🍞' },
    { name: 'Croissants', category: 'Baked Goods', quantity: '2 pieces', price: 7, icon: '🥐' },

    // Meat and seafood
    { name: 'Chicken breast', category: 'Meat & Seafood', quantity: '500 g', price: 12, icon: '🍗' },
    { name: 'Salmon', category: 'Meat & Seafood', quantity: '2 fillets', price: 22, icon: '🐟' },

    // Beverages
    { name: 'Mineral water', category: 'Beverages', quantity: '1 pack', price: 8, icon: '💧' },
    { name: 'Orange juice', category: 'Beverages', quantity: '1 carton', price: 7, icon: '🧃' },
    { name: 'Coffee', category: 'Beverages', quantity: '1 jar', price: 14, icon: '☕' },

    // Snacks and confectionery
    { name: 'Chocolate', category: 'Snacks & Confectionery', quantity: '1 bar', price: 5, icon: '🍫' },
    { name: 'Biscuits', category: 'Snacks & Confectionery', quantity: '1 pack', price: 4, icon: '🍪' },
    { name: 'Potato chips', category: 'Snacks & Confectionery', quantity: '1 bag', price: 5, icon: '🥔' },

    // Organic products
    { name: 'Organic oats', category: 'Organic Products', quantity: '1 pack', price: 12, icon: '🌿' },
    { name: 'Organic eggs', category: 'Organic Products', quantity: '10 pieces', price: 12, icon: '🥚' },

    // Baby care
    { name: 'Baby diapers', category: 'Baby Care', quantity: '1 pack', price: 35, icon: '🍼' },
    { name: 'Baby wipes', category: 'Baby Care', quantity: '1 pack', price: 8, icon: '🧻' },

    // Beauty and personal care
    { name: 'Shampoo', category: 'Beauty & Personal Care', quantity: '1 bottle', price: 15, icon: '🧴' },
    { name: 'Toothpaste', category: 'Beauty & Personal Care', quantity: '1 tube', price: 7, icon: '🪥' },
    { name: 'Body wash', category: 'Beauty & Personal Care', quantity: '1 bottle', price: 12, icon: '🧼' },

    // Household and cleaning
    { name: 'Dish soap', category: 'Cleaning Supplies', quantity: '1 bottle', price: 5, icon: '🧽' },
    { name: 'Laundry detergent', category: 'Cleaning Supplies', quantity: '1 pack', price: 18, icon: '🧺' },
    { name: 'Tissue paper', category: 'Household', quantity: '1 pack', price: 8, icon: '🧻' },

    // Stationery
    { name: 'Notebook', category: 'Books & Stationery', quantity: '1 piece', price: 5, icon: '📓' },
    { name: 'Pens', category: 'Books & Stationery', quantity: '1 pack', price: 4, icon: '🖊️' },

    // Pet care
    { name: 'Cat food', category: 'Pet Care', quantity: '1 pack', price: 12, icon: '🐱' },
    { name: 'Dog treats', category: 'Pet Care', quantity: '1 pack', price: 10, icon: '🐶' },

    // Electronics
    { name: 'Batteries', category: 'Electronics', quantity: '1 pack', price: 8, icon: '🔋' },
    { name: 'Charging cable', category: 'Electronics', quantity: '1 piece', price: 15, icon: '🔌' },

    // Fashion and accessories
    { name: 'Socks', category: 'Fashion & Accessories', quantity: '1 pair', price: 8, icon: '🧦' },
    { name: 'Umbrella', category: 'Fashion & Accessories', quantity: '1 piece', price: 18, icon: '☂️' },

    // Other
    { name: 'Gift wrap', category: 'Other', quantity: '1 roll', price: 5, icon: '🎁' },
]

const categoryMalay = {
    'Fresh Produce': 'Sayur-sayuran dan Buah-buahan',
    'Dairy Products': 'Produk Tenusu',
    'Frozen Foods': 'Makanan Sejuk Beku',
    'Food Essentials': 'Barang Keperluan Dapur',
    'Baked Goods': 'Produk Bakeri',
    'Meat & Seafood': 'Daging dan Makanan Laut',
    'Beverages': 'Minuman',
    'Snacks & Confectionery': 'Snek dan Manisan',
    'Ice Cream': 'Aiskrim',
    'Organic Products': 'Produk Organik',
    'Baby Care': 'Penjagaan Bayi',
    'Beauty & Personal Care': 'Kecantikan dan Penjagaan Diri',
    'Household': 'Keperluan Rumah',
    'Books & Stationery': 'Buku dan Alat Tulis',
    'Pet Care': 'Penjagaan Haiwan Peliharaan',
    'Electronics': 'Barangan Elektronik',
    'Fashion & Accessories': 'Fesyen dan Aksesori',
    'Health & Wellness': 'Kesihatan dan Kesejahteraan',
    'Cleaning Supplies': 'Bekalan Pembersihan',
    'Kitchen & Dining': 'Dapur dan Ruang Makan',
    'Home & Living': 'Rumah dan Gaya Hidup',
    'Personal Essentials': 'Keperluan Peribadi',
    'Automotive': 'Automotif',
    'Toys & Games': 'Mainan dan Permainan',
    'Garden & Outdoor': 'Taman dan Aktiviti Luar',
    'Other': 'Lain-lain',
};

const productMalay = {
    // Fresh Produce
    'Red chilli': 'Cili merah',
    'Green chilli': 'Cili hijau',
    'Bird’s eye chilli': 'Cili padi',
    'Tomatoes': 'Tomato',
    'Cherry tomatoes': 'Tomato ceri',
    'Lettuce': 'Salad',
    'Spinach': 'Bayam',
    'Kangkung': 'Kangkung',
    'Cabbage': 'Kubis',
    'Broccoli': 'Brokoli',
    'Cauliflower': 'Bunga kubis',
    'Carrots': 'Lobak merah',
    'Potatoes': 'Kentang',
    'Sweet potatoes': 'Ubi keledek',
    'Onions': 'Bawang besar',
    'Red onions': 'Bawang merah',
    'Garlic': 'Bawang putih',
    'Ginger': 'Halia',
    'Cucumber': 'Timun',
    'Eggplant': 'Terung',
    'Capsicum': 'Lada benggala',
    'Pumpkin': 'Labu',
    'Bitter gourd': 'Peria',
    'Lady’s fingers': 'Bendi',
    'Long beans': 'Kacang panjang',
    'Bean sprouts': 'Taugeh',
    'Mushrooms': 'Cendawan',
    'Sweet corn': 'Jagung manis',
    'Apples': 'Epal',
    'Bananas': 'Pisang',
    'Oranges': 'Oren',
    'Mangoes': 'Mangga',
    'Watermelon': 'Tembikai',
    'Papaya': 'Betik',
    'Pineapple': 'Nanas',
    'Dragon fruit': 'Buah naga',
    'Grapes': 'Anggur',
    'Lemons': 'Lemon',
    'Limes': 'Limau nipis',
    'Avocados': 'Avokado',
    'Pears': 'Pir',
    'Strawberries': 'Strawberi',
    'Coriander': 'Daun ketumbar',
    'Spring onions': 'Daun bawang',
    'Lemongrass': 'Serai',
    'Fresh mint': 'Daun pudina',

    // Dairy Products
    'Fresh milk': 'Susu segar',
    'Full cream milk': 'Susu penuh krim',
    'Low-fat milk': 'Susu rendah lemak',
    'Lactose-free milk': 'Susu tanpa laktosa',
    'Soy milk': 'Susu soya',
    'Yogurt': 'Yogurt',
    'Greek yogurt': 'Yogurt Greek',
    'Drinking yogurt': 'Minuman yogurt',
    'Cheddar cheese': 'Keju cheddar',
    'Mozzarella cheese': 'Keju mozzarella',
    'Cream cheese': 'Keju krim',
    'Parmesan cheese': 'Keju parmesan',
    'Butter': 'Mentega',
    'Salted butter': 'Mentega masin',
    'Unsalted butter': 'Mentega tanpa garam',
    'Margarine': 'Marjerin',
    'Whipping cream': 'Krim putar',
    'Cooking cream': 'Krim masakan',
    'Sour cream': 'Krim masam',
    'Eggs': 'Telur',
    'Quail eggs': 'Telur puyuh',
    'Condensed milk': 'Susu pekat',
    'Evaporated milk': 'Susu sejat',
    'Milk powder': 'Susu tepung',
    'Custard': 'Kastard',

    // Frozen Foods
    'Frozen chicken nuggets': 'Nuget ayam beku',
    'Frozen French fries': 'Kentang goreng beku',
    'Frozen mixed vegetables': 'Sayur campur beku',
    'Frozen peas': 'Kacang pis beku',
    'Frozen corn': 'Jagung beku',
    'Frozen dumplings': 'Ladu beku',
    'Frozen gyoza': 'Gyoza beku',
    'Frozen spring rolls': 'Popia beku',
    'Frozen fish fingers': 'Jejari ikan beku',
    'Frozen fish fillets': 'Isi ikan beku',
    'Frozen prawns': 'Udang beku',
    'Frozen squid': 'Sotong beku',
    'Frozen burger patties': 'Patty burger beku',
    'Frozen sausages': 'Sosej beku',
    'Frozen pizza': 'Piza beku',
    'Frozen paratha': 'Paratha beku',
    'Frozen roti canai': 'Roti canai beku',
    'Frozen curry puffs': 'Karipap beku',
    'Frozen mantou': 'Mantou beku',
    'Frozen edamame': 'Edamame beku',
    'Frozen berries': 'Beri beku',
    'Frozen ready meals': 'Hidangan segera beku',
    'Frozen dim sum': 'Dim sum beku',
    'Frozen hash browns': 'Kentang hash brown beku',

    // Food Essentials
    'White rice': 'Beras putih',
    'Jasmine rice': 'Beras wangi',
    'Basmati rice': 'Beras basmati',
    'Brown rice': 'Beras perang',
    'Glutinous rice': 'Beras pulut',
    'Rice noodles': 'Bihun',
    'Instant noodles': 'Mi segera',
    'Egg noodles': 'Mi telur',
    'Pasta': 'Pasta',
    'Spaghetti': 'Spageti',
    'Macaroni': 'Makaron',
    'All-purpose flour': 'Tepung serbaguna',
    'Bread flour': 'Tepung roti',
    'Cornstarch': 'Tepung jagung',
    'White sugar': 'Gula putih',
    'Brown sugar': 'Gula perang',
    'Salt': 'Garam',
    'Black pepper': 'Lada hitam',
    'Cooking oil': 'Minyak masak',
    'Olive oil': 'Minyak zaitun',
    'Sesame oil': 'Minyak bijan',
    'Soy sauce': 'Kicap',
    'Oyster sauce': 'Sos tiram',
    'Fish sauce': 'Sos ikan',
    'Tomato sauce': 'Sos tomato',
    'Chilli sauce': 'Sos cili',
    'Vinegar': 'Cuka',
    'Coconut milk': 'Santan',
    'Curry powder': 'Serbuk kari',
    'Turmeric powder': 'Serbuk kunyit',
    'Chilli powder': 'Serbuk cili',
    'Chicken stock cubes': 'Kiub pati ayam',
    'Canned tuna': 'Tuna dalam tin',
    'Baked beans': 'Kacang panggang',
    'Canned tomatoes': 'Tomato dalam tin',
    'Coconut cream': 'Krim kelapa',
    'Oats': 'Oat',
    'Breakfast cereal': 'Bijirin sarapan',
    'Lentils': 'Kacang dal',
    'Dried beans': 'Kacang kering',
    'Peanut butter': 'Mentega kacang',
    'Jam': 'Jem',
    'Honey': 'Madu',
    'Mayonnaise': 'Mayonis',

    // Baked Goods
    'White bread': 'Roti putih',
    'Wholemeal bread': 'Roti gandum penuh',
    'Multigrain bread': 'Roti bijirin campuran',
    'Sourdough bread': 'Roti sourdough',
    'Baguette': 'Roti baguet',
    'Burger buns': 'Roti burger',
    'Hot dog buns': 'Roti hot dog',
    'Dinner rolls': 'Roti kecil',
    'Croissants': 'Kroisan',
    'Chocolate croissants': 'Kroisan coklat',
    'Muffins': 'Mufin',
    'Blueberry muffins': 'Mufin beri biru',
    'Donuts': 'Donat',
    'Bagels': 'Bagel',
    'Pita bread': 'Roti pita',
    'Tortillas': 'Tortila',
    'Puff pastry': 'Pastri lapis',
    'Swiss rolls': 'Kek gulung',
    'Sponge cake': 'Kek span',
    'Cheese buns': 'Roti keju',
    'Garlic bread': 'Roti bawang putih',
    'Banana cake': 'Kek pisang',
    'Butter cake': 'Kek mentega',
    'Cinnamon rolls': 'Roti gulung kayu manis',
    'Waffles': 'Wafel',
    'Pancakes': 'Lempeng',

    // Meat & Seafood
    'Chicken breast': 'Dada ayam',
    'Chicken thighs': 'Peha ayam',
    'Whole chicken': 'Ayam seekor',
    'Chicken wings': 'Kepak ayam',
    'Ground chicken': 'Ayam kisar',
    'Beef slices': 'Hirisan daging lembu',
    'Beef mince': 'Daging lembu kisar',
    'Beef steak': 'Stik daging lembu',
    'Beef brisket': 'Dada lembu',
    'Lamb chops': 'Potongan daging kambing',
    'Minced lamb': 'Daging kambing kisar',
    'Pork belly': 'Perut babi',
    'Pork ribs': 'Rusuk babi',
    'Pork mince': 'Daging babi kisar',
    'Bacon': 'Bakon',
    'Ham': 'Ham',
    'Beef sausages': 'Sosej daging lembu',
    'Chicken sausages': 'Sosej ayam',
    'Salmon': 'Ikan salmon',
    'Mackerel': 'Ikan kembung',
    'Sardines': 'Ikan sardin',
    'Tilapia': 'Ikan tilapia',
    'Dory fillets': 'Isi ikan dori',
    'Tuna steaks': 'Stik ikan tuna',
    'Prawns': 'Udang',
    'Squid': 'Sotong',
    'Crab': 'Ketam',
    'Clams': 'Kepah',
    'Mussels': 'Kupang',
    'Scallops': 'Kerang kipas',
    'Fish balls': 'Bebola ikan',
    'Fish cakes': 'Kek ikan',
    'Dried anchovies': 'Ikan bilis kering',
    'Salted fish': 'Ikan masin',

    // Beverages
    'Mineral water': 'Air mineral',
    'Sparkling water': 'Air berkarbonat',
    'Drinking water': 'Air minuman',
    'Orange juice': 'Jus oren',
    'Apple juice': 'Jus epal',
    'Mango juice': 'Jus mangga',
    'Coconut water': 'Air kelapa',
    'Soy drink': 'Minuman soya',
    'Chocolate milk': 'Susu coklat',
    'Coffee beans': 'Biji kopi',
    'Ground coffee': 'Kopi kisar',
    'Instant coffee': 'Kopi segera',
    'Tea bags': 'Uncang Teh',
    'Green tea': 'Teh hijau',
    'Black tea': 'Teh hitam',
    'Milk tea': 'Teh susu',
    'Matcha powder': 'Serbuk matcha',
    'Hot chocolate': 'Coklat panas',
    'Cola': 'Kola',
    'Lemon-lime soda': 'Minuman soda lemon dan limau',
    'Root beer': 'Root beer',
    'Sports drinks': 'Minuman sukan',
    'Energy drinks': 'Minuman tenaga',
    'Malted drinks': 'Minuman malt',
    'Syrup cordial': 'Kordial sirap',
    'Lemonade': 'Air limau',
    'Kombucha': 'Kombucha',
    'Oat milk': 'Susu oat',
    'Almond milk': 'Susu badam',
    'Barley drink': 'Air barli',

    // Snacks & Confectionery
    'Potato chips': 'Kerepek kentang',
    'Tortilla chips': 'Kerepek tortila',
    'Popcorn': 'Bertih jagung',
    'Chocolate bars': 'Coklat bar',
    'Chocolate biscuits': 'Biskut coklat',
    'Cookies': 'Kuki',
    'Cream crackers': 'Biskut krim',
    'Wafer biscuits': 'Biskut wafer',
    'Rice crackers': 'Keropok beras',
    'Peanuts': 'Kacang tanah',
    'Cashew nuts': 'Kacang gajus',
    'Almonds': 'Badam',
    'Mixed nuts': 'Kacang campuran',
    'Trail mix': 'Snek campuran kekacang dan buah kering',
    'Dried mango': 'Mangga kering',
    'Raisins': 'Kismis',
    'Gummy sweets': 'Gula-gula kenyal',
    'Hard candy': 'Gula-gula keras',
    'Lollipops': 'Lolipop',
    'Jelly sweets': 'Gula-gula jeli',
    'Marshmallows': 'Marshmallow',
    'Chewing gum': 'Gula-gula getah',
    'Mints': 'Gula-gula pudina',
    'Granola bars': 'Bar granola',
    'Protein bars': 'Bar protein',
    'Pretzels': 'Pretzel',
    'Seaweed snacks': 'Snek rumpai laut',
    'Prawn crackers': 'Keropok udang',
    'Murukku': 'Murukku',
    'Keropok': 'Keropok',
    'Dodol': 'Dodol',
    'Traditional kuih': 'Kuih tradisional',
    'Fruit gummies': 'Gula-gula buah kenyal',

    // Ice Cream
    'Vanilla ice cream': 'Aiskrim vanila',
    'Chocolate ice cream': 'Aiskrim coklat',
    'Strawberry ice cream': 'Aiskrim strawberi',
    'Matcha ice cream': 'Aiskrim matcha',
    'Cookies and cream ice cream': 'Aiskrim biskut dan krim',
    'Mango sorbet': 'Sorbet mangga',
    'Chocolate ice cream bars': 'Aiskrim coklat bertangkai',
    'Ice cream cones': 'Kon aiskrim',
    'Ice cream sandwiches': 'Sandwic aiskrim',
    'Mochi ice cream': 'Aiskrim mochi',
    'Popsicles': 'Aiskrim batang',
    'Fruit ice lollies': 'Aiskrim buah bertangkai',
    'Durian ice cream': 'Aiskrim durian',
    'Coconut ice cream': 'Aiskrim kelapa',
    'Neapolitan ice cream': 'Aiskrim Neapolitan',
    'Gelato': 'Gelato',
    'Frozen yogurt': 'Yogurt beku',
    'Ice cream cake': 'Kek aiskrim',
    'Mini ice cream cups': 'Cawan aiskrim mini',
    'Waffle cones': 'Kon wafel',

    // Organic Products
    'Organic bananas': 'Pisang organik',
    'Organic apples': 'Epal organik',
    'Organic oranges': 'Oren organik',
    'Organic spinach': 'Bayam organik',
    'Organic lettuce': 'Salad organik',
    'Organic carrots': 'Lobak merah organik',
    'Organic tomatoes': 'Tomato organik',
    'Organic cucumbers': 'Timun organik',
    'Organic broccoli': 'Brokoli organik',
    'Organic potatoes': 'Kentang organik',
    'Organic eggs': 'Telur organik',
    'Organic milk': 'Susu organik',
    'Organic yogurt': 'Yogurt organik',
    'Organic tofu': 'Tauhu organik',
    'Organic tempeh': 'Tempe organik',
    'Organic rice': 'Beras organik',
    'Organic oats': 'Oat organik',
    'Organic quinoa': 'Quinoa organik',
    'Organic flour': 'Tepung organik',
    'Organic lentils': 'Kacang dal organik',
    'Organic chickpeas': 'Kacang kuda organik',
    'Organic peanut butter': 'Mentega kacang organik',
    'Organic honey': 'Madu organik',
    'Organic green tea': 'Teh hijau organik',
    'Organic coffee': 'Kopi organik',
    'Organic coconut oil': 'Minyak kelapa organik',

    // Baby Care
    'Newborn diapers': 'Lampin bayi baru lahir',
    'Baby diapers': 'Lampin bayi',
    'Training pants': 'Seluar latihan tandas',
    'Baby wipes': 'Tisu basah bayi',
    'Fragrance-free baby wipes': 'Tisu basah bayi tanpa pewangi',
    'Baby formula': 'Susu formula bayi',
    'Follow-on formula': 'Susu formula susulan',
    'Baby cereal': 'Bijirin bayi',
    'Baby food puree': 'Puri makanan bayi',
    'Baby snacks': 'Snek bayi',
    'Baby biscuits': 'Biskut bayi',
    'Baby shampoo': 'Syampu bayi',
    'Baby body wash': 'Sabun mandian bayi',
    'Baby lotion': 'Losyen bayi',
    'Nappy rash cream': 'Krim ruam lampin',
    'Baby powder': 'Bedak bayi',
    'Baby oil': 'Minyak bayi',
    'Baby laundry detergent': 'Detergen pakaian bayi',
    'Baby bottles': 'Botol susu bayi',
    'Bottle nipples': 'Puting botol susu',
    'Bottle cleaning brush': 'Berus pencuci botol',
    'Pacifiers': 'Puting bayi',
    'Baby bibs': 'Bib bayi',
    'Baby tissues': 'Tisu bayi',
    'Baby cotton buds': 'Putik kapas bayi',
    'Baby sunscreen': 'Pelindung matahari bayi',

    // Beauty & Personal Care
    'Shampoo': 'Syampu',
    'Conditioner': 'Perapi rambut',
    'Hair mask': 'Masker rambut',
    'Hair serum': 'Serum rambut',
    'Hair gel': 'Gel rambut',
    'Body wash': 'Sabun mandian',
    'Bar soap': 'Sabun buku',
    'Face wash': 'Pencuci muka',
    'Facial cleanser': 'Pembersih wajah',
    'Moisturizer': 'Pelembap',
    'Sunscreen': 'Pelindung matahari',
    'Lip balm': 'Balm bibir',
    'Deodorant': 'Deodoran',
    'Perfume': 'Minyak wangi',
    'Body lotion': 'Losyen badan',
    'Toothpaste': 'Ubat gigi',
    'Toothbrush': 'Berus gigi',
    'Dental floss': 'Benang gigi',
    'Mouthwash': 'Cecair kumur mulut',
    'Hand sanitizer': 'Pensanitasi tangan',
    'Facial tissues': 'Tisu muka',
    'Cotton pads': 'Pad kapas',
    'Cotton buds': 'Putik kapas',
    'Razor': 'Alat pencukur',
    'Shaving cream': 'Krim pencukur',
    'Sanitary pads': 'Tuala wanita',
    'Pantyliners': 'Pelapik seluar dalam',
    'Tampons': 'Tampon',
    'Makeup remover': 'Penyingkir solekan',
    'Foundation': 'Bedak asas',
    'Lipstick': 'Gincu',
    'Mascara': 'Maskara',
    'Face masks': 'Topeng muka',
    'Hair dye': 'Pewarna rambut',
    'Nail polish': 'Pengilat kuku',
    'Nail clippers': 'Pemotong kuku',

    // Household
    'Toilet paper': 'Tisu tandas',
    'Paper towels': 'Tisu dapur',
    'Garbage bags': 'Beg sampah',
    'Laundry baskets': 'Bakul pakaian',
    'Storage boxes': 'Kotak penyimpanan',
    'Air freshener': 'Penyegar udara',
    'Scented candles': 'Lilin beraroma',
    'Light bulbs': 'Mentol lampu',
    'Batteries': 'Bateri',
    'Clothes hangers': 'Penyangkut baju',
    'Dustbins': 'Tong sampah',
    'Doormats': 'Keset kaki',
    'Curtains': 'Langsir',
    'Clothes pegs': 'Penyepit baju',
    'Laundry clips': 'Klip pakaian',
    'Mops': 'Mop',
    'Brooms': 'Penyapu',
    'Dustpans': 'Pengaut sampah',
    'Cleaning cloths': 'Kain pembersih',
    'Sponges': 'Span',
    'Rubber gloves': 'Sarung tangan getah',
    'Insect repellent': 'Penghalau serangga',
    'Mosquito coils': 'Ubat nyamuk lingkaran',
    'Extension cords': 'Kabel sambungan',
    'Adhesive hooks': 'Cangkuk pelekat',

    // Books & Stationery
    'Notebooks': 'Buku nota',
    'Exercise books': 'Buku latihan',
    'Pens': 'Pen',
    'Pencils': 'Pensel',
    'Mechanical pencils': 'Pensel mekanikal',
    'Erasers': 'Pemadam',
    'Pencil sharpeners': 'Pengasah pensel',
    'Highlighters': 'Pen penyerlah',
    'Markers': 'Pen penanda',
    'Permanent markers': 'Pen penanda kekal',
    'Rulers': 'Pembaris',
    'Scissors': 'Gunting',
    'Glue sticks': 'Gam batang',
    'Sticky notes': 'Nota pelekat',
    'Paper clips': 'Klip kertas',
    'Staplers': 'Pengokot',
    'Staples': 'Dawai kokot',
    'Correction tape': 'Pita pembetulan',
    'A4 paper': 'Kertas A4',
    'Colour paper': 'Kertas warna',
    'Envelopes': 'Sampul surat',
    'Folders': 'Folder',
    'Ring binders': 'Fail cincin',
    'File dividers': 'Pembahagi fail',
    'Crayons': 'Krayon',
    'Colour pencils': 'Pensel warna',
    'Watercolour paints': 'Cat air',
    'Sketchbooks': 'Buku lakaran',
    'Calendars': 'Kalendar',
    'Planners': 'Buku perancang',
    'Children’s books': 'Buku kanak-kanak',
    'Notepads': 'Pad nota',

    // Pet Care
    'Dry cat food': 'Makanan kucing kering',
    'Wet cat food': 'Makanan kucing basah',
    'Dry dog food': 'Makanan anjing kering',
    'Wet dog food': 'Makanan anjing basah',
    'Kitten food': 'Makanan anak kucing',
    'Puppy food': 'Makanan anak anjing',
    'Cat treats': 'Snek kucing',
    'Dog treats': 'Snek anjing',
    'Pet biscuits': 'Biskut haiwan peliharaan',
    'Cat litter': 'Pasir kucing',
    'Litter liners': 'Pelapik bekas pasir kucing',
    'Litter scoop': 'Penyodok pasir kucing',
    'Pet shampoo': 'Syampu haiwan peliharaan',
    'Pet wipes': 'Tisu basah haiwan peliharaan',
    'Flea comb': 'Sikat kutu',
    'Pet toothbrush': 'Berus gigi haiwan peliharaan',
    'Pet toothpaste': 'Ubat gigi haiwan peliharaan',
    'Food bowls': 'Mangkuk makanan',
    'Water bowls': 'Mangkuk air',
    'Pet toys': 'Mainan haiwan peliharaan',
    'Cat scratching pads': 'Alas cakaran kucing',
    'Poop bags': 'Beg najis haiwan',
    'Pet pee pads': 'Alas kencing haiwan',
    'Pet bedding': 'Tempat tidur haiwan',
    'Aquarium fish food': 'Makanan ikan akuarium',
    'Bird seed': 'Biji makanan burung',
    'Rabbit pellets': 'Pelet makanan arnab',
    'Hamster bedding': 'Alas tidur hamster',
    'Pet carrier': 'Beg pembawa haiwan',
    'Pet grooming brush': 'Berus dandanan haiwan',

    // Electronics
    'USB-C cable': 'Kabel USB-C',
    'Lightning cable': 'Kabel Lightning',
    'Phone charger': 'Pengecas telefon',
    'Wall adapter': 'Penyesuai kuasa',
    'Power bank': 'Bank kuasa',
    'Wireless charger': 'Pengecas tanpa wayar',
    'Earphones': 'Fon telinga',
    'Wireless earbuds': 'Fon telinga tanpa wayar',
    'Headphones': 'Fon kepala',
    'Bluetooth speaker': 'Pembesar suara Bluetooth',
    'Computer mouse': 'Tetikus komputer',
    'Keyboard': 'Papan kekunci',
    'Mouse pad': 'Alas tetikus',
    'USB flash drive': 'Pemacu kilat USB',
    'Memory card': 'Kad memori',
    'HDMI cable': 'Kabel HDMI',
    'Extension socket': 'Soket sambungan',
    'Power strip': 'Soket berbilang',
    'AA batteries': 'Bateri AA',
    'AAA batteries': 'Bateri AAA',
    'Rechargeable batteries': 'Bateri boleh dicas semula',
    'Battery charger': 'Pengecas bateri',
    'Screen protector': 'Pelindung skrin',
    'Phone case': 'Sarung telefon',
    'Webcam': 'Kamera web',
    'Laptop stand': 'Penyangga komputer riba',
    'Ethernet cable': 'Kabel Ethernet',
    'Smart plugs': 'Palam pintar',
    'LED strip lights': 'Lampu jalur LED',

    // Fashion & Accessories
    'T-shirts': 'Baju-T',
    'Polo shirts': 'Baju polo',
    'Socks': 'Stoking',
    'Underwear': 'Pakaian dalam',
    'Sportswear': 'Pakaian sukan',
    'Pajamas': 'Baju tidur',
    'Jeans': 'Seluar jean',
    'Shorts': 'Seluar pendek',
    'Leggings': 'Seluar legging',
    'Raincoat': 'Baju hujan',
    'Umbrella': 'Payung',
    'Slippers': 'Selipar',
    'Sandals': 'Sandal',
    'Shoelaces': 'Tali kasut',
    'Belts': 'Tali pinggang',
    'Caps': 'Topi',
    'Hats': 'Topi',
    'Scarves': 'Skaf',
    'Gloves': 'Sarung tangan',
    'Wallets': 'Dompet',
    'Backpacks': 'Beg galas',
    'Tote bags': 'Beg tote',
    'Handbags': 'Beg tangan',
    'Sunglasses': 'Cermin mata hitam',
    'Hair ties': 'Pengikat rambut',
    'Hair clips': 'Klip rambut',
    'Watches': 'Jam tangan',
    'Jewellery': 'Barang kemas',
    'Reusable shopping bags': 'Beg beli-belah guna semula',

    // Health & Wellness
    'Plasters': 'Plaster luka',
    'Bandages': 'Pembalut luka',
    'Gauze pads': 'Pad kain kasa',
    'Antiseptic wipes': 'Tisu antiseptik',
    'Digital thermometer': 'Termometer digital',
    'Disposable face masks': 'Pelitup muka pakai buang',
    'Vitamin C': 'Vitamin C',
    'Multivitamins': 'Multivitamin',
    'Electrolyte drinks': 'Minuman elektrolit',
    'Oral rehydration salts': 'Garam rehidrasi oral',
    'Hot and cold packs': 'Pek panas dan sejuk',
    'First-aid kit': 'Kit pertolongan cemas',
    'Cotton wool': 'Kapas',
    'Medical tape': 'Pita perubatan',
    'Pill organizer': 'Bekas ubat',
    'Eye drops': 'Titisan mata',
    'Saline solution': 'Larutan garam',
    'Heat patches': 'Tampalan haba',

    // Cleaning Supplies
    'Dishwashing liquid': 'Cecair pencuci pinggan',
    'Dishwasher tablets': 'Tablet mesin basuh pinggan',
    'Laundry detergent': 'Detergen pakaian',
    'Fabric softener': 'Pelembut fabrik',
    'Stain remover': 'Penyingkir kotoran',
    'Bleach': 'Peluntur',
    'Floor cleaner': 'Pencuci lantai',
    'Glass cleaner': 'Pencuci kaca',
    'Bathroom cleaner': 'Pencuci bilik mandi',
    'Toilet bowl cleaner': 'Pencuci mangkuk tandas',
    'Kitchen degreaser': 'Penyingkir minyak dapur',
    'Disinfectant spray': 'Semburan pembasmi kuman',
    'Multipurpose cleaner': 'Pencuci serbaguna',
    'Cleaning sponges': 'Span pembersih',
    'Microfiber cloths': 'Kain mikrofiber',
    'Scrub brushes': 'Berus penyental',
    'Mop refills': 'Kepala mop gantian',
    'Drain cleaner': 'Pencuci saluran air',
    'Cleaning wipes': 'Tisu pembersih',
    'Bin deodorizer': 'Penyahbau tong sampah',

    // Kitchen & Dining
    'Dinner plates': 'Pinggan makan',
    'Bowls': 'Mangkuk',
    'Drinking glasses': 'Gelas minuman',
    'Mugs': 'Cawan besar',
    'Water bottles': 'Botol air',
    'Lunch boxes': 'Bekas makanan',
    'Food containers': 'Bekas makanan',
    'Reusable food bags': 'Beg makanan guna semula',
    'Cutlery sets': 'Set kutleri',
    'Cooking spoons': 'Sudu memasak',
    'Spatulas': 'Sudip',
    'Kitchen knives': 'Pisau dapur',
    'Chopping boards': 'Papan pemotong',
    'Peelers': 'Pengupas',
    'Can openers': 'Pembuka tin',
    'Bottle openers': 'Pembuka botol',
    'Measuring cups': 'Cawan penyukat',
    'Measuring spoons': 'Sudu penyukat',
    'Mixing bowls': 'Mangkuk adunan',
    'Frying pans': 'Kuali leper',
    'Saucepans': 'Periuk kecil',
    'Cooking pots': 'Periuk memasak',
    'Colanders': 'Penapis',
    'Kitchen scales': 'Penimbang dapur',
    'Oven mitts': 'Sarung tangan ketuhar',
    'Aluminium foil': 'Kerajang aluminium',
    'Cling wrap': 'Plastik pembungkus makanan',
    'Baking paper': 'Kertas pembakar',
    'Dish racks': 'Rak pinggan',

    // Home & Living
    'Pillowcases': 'Sarung bantal',
    'Bedsheets': 'Cadar',
    'Pillow inserts': 'Isi bantal',
    'Blankets': 'Selimut',
    'Comforters': 'Selimut tebal',
    'Bath towels': 'Tuala mandi',
    'Hand towels': 'Tuala tangan',
    'Bath mats': 'Alas bilik mandi',
    'Shower curtains': 'Langsir pancuran',
    'Laundry hampers': 'Bakul pakaian kotor',
    'Cushion covers': 'Sarung kusyen',
    'Door stoppers': 'Penahan pintu',
    'Wall hooks': 'Cangkuk dinding',
    'Picture frames': 'Bingkai gambar',
    'Vases': 'Pasu bunga',
    'Decorative plants': 'Pokok hiasan',
    'Storage baskets': 'Bakul penyimpanan',
    'Drawer organizers': 'Penyusun laci',
    'Tablecloths': 'Alas meja',
    'Placemats': 'Alas pinggan',
    'Desk lamps': 'Lampu meja',
    'Night lights': 'Lampu malam',
    'Shoe racks': 'Rak kasut',
    'Clothes racks': 'Rak pakaian',

    // Personal Essentials
    'Travel bottles': 'Botol perjalanan',
    'Travel toiletries bag': 'Beg kelengkapan mandian',
    'Pocket tissues': 'Tisu poket',
    'Wet wipes': 'Tisu basah',
    'Handkerchiefs': 'Sapu tangan',
    'Compact umbrella': 'Payung kecil',
    'Keychains': 'Rantai kunci',
    'Luggage tags': 'Tag bagasi',
    'Travel adapters': 'Penyesuai perjalanan',
    'Eye masks': 'Penutup mata',
    'Earplugs': 'Penyumbat telinga',
    'Reusable straws': 'Penyedut minuman guna semula',
    'Lunch bags': 'Beg bekal makanan',
    'Pocket mirrors': 'Cermin poket',
    'Comb': 'Sikat',
    'Hairbrush': 'Berus rambut',
    'Sewing kit': 'Kit jahitan',
    'Safety pins': 'Pin keselamatan',
    'Shoe insoles': 'Pelapik kasut',

    // Automotive
    'Car shampoo': 'Syampu kereta',
    'Car wax': 'Lilin kereta',
    'Dashboard cleaner': 'Pencuci papan pemuka',
    'Microfiber car cloths': 'Kain mikrofiber kereta',
    'Car air freshener': 'Penyegar udara kereta',
    'Windshield washer fluid': 'Cecair pencuci cermin kereta',
    'Car sponge': 'Span kereta',
    'Tyre pressure gauge': 'Tolok tekanan tayar',
    'Car phone holder': 'Pemegang telefon kereta',
    'Car charger': 'Pengecas kereta',
    'Jumper cables': 'Kabel penghidup bateri',
    'Emergency torch': 'Lampu suluh kecemasan',
    'Car trash bin': 'Tong sampah kereta',
    'Seat organizers': 'Penyusun tempat duduk',
    'Sunshade': 'Pelindung matahari kereta',
    'Ice scraper': 'Pengikis ais',
    'Car vacuum accessories': 'Aksesori vakum kereta',
    'Motor oil': 'Minyak enjin',
    'Funnel': 'Corong',
    'Reflective warning triangle': 'Segi tiga amaran reflektif',

    // Toys & Games
    'Building blocks': 'Blok binaan',
    'Jigsaw puzzles': 'Teka-teki jigsaw',
    'Board games': 'Permainan papan',
    'Playing cards': 'Kad permainan',
    'Colouring books': 'Buku mewarna',
    'Toy cars': 'Kereta mainan',
    'Dolls': 'Anak patung',
    'Stuffed animals': 'Patung haiwan berbulu',
    'Action figures': 'Patung aksi',
    'Toy trains': 'Kereta api mainan',
    'Yo-yos': 'Yo-yo',
    'Jump ropes': 'Tali lompat',
    'Balls': 'Bola',
    'Frisbees': 'Frisbee',
    'Play dough': 'Doh mainan',
    'Water guns': 'Pistol air',
    'Bubble solution': 'Cecair buih',
    'Science kits': 'Kit sains',
    'Craft kits': 'Kit kraf',
    'Chess sets': 'Set catur',
    'Dominoes': 'Domino',
    'Memory games': 'Permainan memori',
    'Outdoor toys': 'Mainan luar',

    // Garden & Outdoor
    'Plant pots': 'Pasu tanaman',
    'Potting soil': 'Tanah tanaman',
    'Compost': 'Kompos',
    'Plant fertilizer': 'Baja tanaman',
    'Seeds': 'Benih',
    'Seedling trays': 'Dulang semaian',
    'Watering cans': 'Penyiram tanaman',
    'Garden gloves': 'Sarung tangan berkebun',
    'Pruning shears': 'Gunting pemangkasan',
    'Garden trowels': 'Sudip berkebun',
    'Garden hoses': 'Hos taman',
    'Spray bottles': 'Botol semburan',
    'Plant saucers': 'Piring pasu',
    'Plant supports': 'Penyokong tanaman',
    'Plant ties': 'Pengikat tanaman',
    'Herb growing kits': 'Kit penanaman herba',
    'Flower bulbs': 'Bebawang bunga',
    'Mulch': 'Sungkupan',
    'Outdoor lanterns': 'Tanglung luar',
    'Solar garden lights': 'Lampu taman solar',
    'Insect netting': 'Jaring serangga',
    'Bird feeders': 'Bekas makanan burung',
    'Outdoor cushions': 'Kusyen luar',

    // Other
    'Gift bags': 'Beg hadiah',
    'Gift wrap': 'Kertas pembalut hadiah',
    'Greeting cards': 'Kad ucapan',
    'Birthday candles': 'Lilin hari jadi',
    'Party plates': 'Pinggan parti',
    'Party cups': 'Cawan parti',
    'Balloons': 'Belon',
    'Decorations': 'Hiasan',
    'Packing tape': 'Pita pembungkus',
    'Shipping boxes': 'Kotak penghantaran',
    'Miscellaneous items': 'Pelbagai barangan',
};

function getMalayCategory(name) {
    return categoryMalay[name] || name;
}

function getMalayProduct(name) {
    return productMalay[name] || name;
}

const categoryProducts = {
    'Fresh Produce': [
        'Red chilli', 'Green chilli', 'Bird’s eye chilli', 'Tomatoes',
        'Cherry tomatoes', 'Lettuce', 'Spinach', 'Kangkung',
        'Cabbage', 'Broccoli', 'Cauliflower', 'Carrots',
        'Potatoes', 'Sweet potatoes', 'Onions', 'Red onions',
        'Garlic', 'Ginger', 'Cucumber', 'Eggplant',
        'Capsicum', 'Pumpkin', 'Bitter gourd', 'Lady’s fingers',
        'Long beans', 'Bean sprouts', 'Mushrooms', 'Sweet corn',
        'Apples', 'Bananas', 'Oranges', 'Mangoes',
        'Watermelon', 'Papaya', 'Pineapple', 'Dragon fruit',
        'Grapes', 'Lemons', 'Limes', 'Avocados',
        'Pears', 'Strawberries', 'Coriander', 'Spring onions',
        'Lemongrass', 'Fresh mint'
    ],

    'Dairy Products': [
        'Fresh milk', 'Full cream milk', 'Low-fat milk',
        'Lactose-free milk', 'Soy milk', 'Yogurt',
        'Greek yogurt', 'Drinking yogurt', 'Cheddar cheese',
        'Mozzarella cheese', 'Cream cheese', 'Parmesan cheese',
        'Butter', 'Salted butter', 'Unsalted butter',
        'Margarine', 'Whipping cream', 'Cooking cream',
        'Sour cream', 'Eggs', 'Quail eggs', 'Condensed milk',
        'Evaporated milk', 'Milk powder', 'Custard'
    ],

    'Frozen Foods': [
        'Frozen chicken nuggets', 'Frozen French fries',
        'Frozen mixed vegetables', 'Frozen peas', 'Frozen corn',
        'Frozen dumplings', 'Frozen gyoza', 'Frozen spring rolls',
        'Frozen fish fingers', 'Frozen fish fillets',
        'Frozen prawns', 'Frozen squid', 'Frozen burger patties',
        'Frozen sausages', 'Frozen pizza', 'Frozen paratha',
        'Frozen roti canai', 'Frozen curry puffs',
        'Frozen mantou', 'Frozen edamame', 'Frozen berries',
        'Frozen ready meals', 'Frozen dim sum', 'Frozen hash browns'
    ],

    'Food Essentials': [
        'White rice', 'Jasmine rice', 'Basmati rice',
        'Brown rice', 'Glutinous rice', 'Rice noodles',
        'Instant noodles', 'Egg noodles', 'Pasta',
        'Spaghetti', 'Macaroni', 'All-purpose flour',
        'Bread flour', 'Cornstarch', 'White sugar',
        'Brown sugar', 'Salt', 'Black pepper',
        'Cooking oil', 'Olive oil', 'Sesame oil',
        'Soy sauce', 'Oyster sauce', 'Fish sauce',
        'Tomato sauce', 'Chilli sauce', 'Vinegar',
        'Coconut milk', 'Curry powder', 'Turmeric powder',
        'Chilli powder', 'Chicken stock cubes', 'Canned tuna',
        'Baked beans', 'Canned tomatoes', 'Coconut cream',
        'Oats', 'Breakfast cereal', 'Lentils', 'Dried beans',
        'Peanut butter', 'Jam', 'Honey', 'Mayonnaise'
    ],

    'Baked Goods': [
        'White bread', 'Wholemeal bread', 'Multigrain bread',
        'Sourdough bread', 'Baguette', 'Burger buns',
        'Hot dog buns', 'Dinner rolls', 'Croissants',
        'Chocolate croissants', 'Muffins', 'Blueberry muffins',
        'Donuts', 'Bagels', 'Pita bread', 'Tortillas',
        'Puff pastry', 'Swiss rolls', 'Sponge cake',
        'Cheese buns', 'Garlic bread', 'Banana cake',
        'Butter cake', 'Cinnamon rolls', 'Waffles',
        'Pancakes'
    ],

    'Meat & Seafood': [
        'Chicken breast', 'Chicken thighs', 'Whole chicken',
        'Chicken wings', 'Ground chicken', 'Beef slices',
        'Beef mince', 'Beef steak', 'Beef brisket',
        'Lamb chops', 'Minced lamb', 'Pork belly',
        'Pork ribs', 'Pork mince', 'Bacon', 'Ham',
        'Beef sausages', 'Chicken sausages', 'Salmon',
        'Mackerel', 'Sardines', 'Tilapia', 'Dory fillets',
        'Tuna steaks', 'Prawns', 'Squid', 'Crab',
        'Clams', 'Mussels', 'Scallops', 'Fish balls',
        'Fish cakes', 'Dried anchovies', 'Salted fish'
    ],

    'Beverages': [
        'Mineral water', 'Sparkling water', 'Drinking water',
        'Orange juice', 'Apple juice', 'Mango juice',
        'Coconut water', 'Soy drink', 'Chocolate milk',
        'Coffee beans', 'Ground coffee', 'Instant coffee',
        'Tea bags', 'Green tea', 'Black tea',
        'Milk tea', 'Matcha powder', 'Hot chocolate',
        'Cola', 'Lemon-lime soda', 'Root beer',
        'Sports drinks', 'Energy drinks', 'Malted drinks',
        'Syrup cordial', 'Lemonade', 'Kombucha',
        'Oat milk', 'Almond milk', 'Barley drink'
    ],

    'Snacks & Confectionery': [
        'Potato chips', 'Tortilla chips', 'Popcorn',
        'Chocolate bars', 'Chocolate biscuits', 'Cookies',
        'Cream crackers', 'Wafer biscuits', 'Rice crackers',
        'Peanuts', 'Cashew nuts', 'Almonds',
        'Mixed nuts', 'Trail mix', 'Dried mango',
        'Raisins', 'Gummy sweets', 'Hard candy',
        'Lollipops', 'Jelly sweets', 'Marshmallows',
        'Chewing gum', 'Mints', 'Granola bars',
        'Protein bars', 'Pretzels', 'Seaweed snacks',
        'Prawn crackers', 'Murukku', 'Keropok',
        'Dodol', 'Traditional kuih', 'Fruit gummies'
    ],

    'Ice Cream': [
        'Vanilla ice cream', 'Chocolate ice cream',
        'Strawberry ice cream', 'Matcha ice cream',
        'Cookies and cream ice cream', 'Mango sorbet',
        'Chocolate ice cream bars', 'Ice cream cones',
        'Ice cream sandwiches', 'Mochi ice cream',
        'Popsicles', 'Fruit ice lollies',
        'Durian ice cream', 'Coconut ice cream',
        'Neapolitan ice cream', 'Gelato',
        'Frozen yogurt', 'Ice cream cake',
        'Mini ice cream cups', 'Waffle cones'
    ],

    'Organic Products': [
        'Organic bananas', 'Organic apples', 'Organic oranges',
        'Organic spinach', 'Organic lettuce', 'Organic carrots',
        'Organic tomatoes', 'Organic cucumbers',
        'Organic broccoli', 'Organic potatoes',
        'Organic eggs', 'Organic milk', 'Organic yogurt',
        'Organic tofu', 'Organic tempeh', 'Organic rice',
        'Organic oats', 'Organic quinoa', 'Organic flour',
        'Organic lentils', 'Organic chickpeas',
        'Organic peanut butter', 'Organic honey',
        'Organic green tea', 'Organic coffee',
        'Organic coconut oil'
    ],

    'Baby Care': [
        'Newborn diapers', 'Baby diapers', 'Training pants',
        'Baby wipes', 'Fragrance-free baby wipes',
        'Baby formula', 'Follow-on formula', 'Baby cereal',
        'Baby food puree', 'Baby snacks', 'Baby biscuits',
        'Baby shampoo', 'Baby body wash', 'Baby lotion',
        'Nappy rash cream', 'Baby powder', 'Baby oil',
        'Baby laundry detergent', 'Baby bottles',
        'Bottle nipples', 'Bottle cleaning brush',
        'Pacifiers', 'Baby bibs', 'Baby tissues',
        'Baby cotton buds', 'Baby sunscreen'
    ],

    'Beauty & Personal Care': [
        'Shampoo', 'Conditioner', 'Hair mask',
        'Hair serum', 'Hair gel', 'Body wash',
        'Bar soap', 'Face wash', 'Facial cleanser',
        'Moisturizer', 'Sunscreen', 'Lip balm',
        'Deodorant', 'Perfume', 'Body lotion',
        'Toothpaste', 'Toothbrush', 'Dental floss',
        'Mouthwash', 'Hand sanitizer', 'Facial tissues',
        'Cotton pads', 'Cotton buds', 'Razor',
        'Shaving cream', 'Sanitary pads', 'Pantyliners',
        'Tampons', 'Makeup remover', 'Foundation',
        'Lipstick', 'Mascara', 'Face masks',
        'Hair dye', 'Nail polish', 'Nail clippers'
    ],

    'Household': [
        'Toilet paper', 'Facial tissues', 'Paper towels',
        'Garbage bags', 'Laundry baskets', 'Storage boxes',
        'Air freshener', 'Scented candles', 'Light bulbs',
        'Batteries', 'Clothes hangers', 'Dustbins',
        'Doormats', 'Curtains', 'Clothes pegs',
        'Laundry clips', 'Mops', 'Brooms',
        'Dustpans', 'Cleaning cloths', 'Sponges',
        'Rubber gloves', 'Insect repellent', 'Mosquito coils',
        'Extension cords', 'Adhesive hooks'
    ],

    'Books & Stationery': [
        'Notebooks', 'Exercise books', 'Pens',
        'Pencils', 'Mechanical pencils', 'Erasers',
        'Pencil sharpeners', 'Highlighters', 'Markers',
        'Permanent markers', 'Rulers', 'Scissors',
        'Glue sticks', 'Sticky notes', 'Paper clips',
        'Staplers', 'Staples', 'Correction tape',
        'A4 paper', 'Colour paper', 'Envelopes',
        'Folders', 'Ring binders', 'File dividers',
        'Crayons', 'Colour pencils', 'Watercolour paints',
        'Sketchbooks', 'Calendars', 'Planners',
        'Children’s books', 'Notepads'
    ],

    'Pet Care': [
        'Dry cat food', 'Wet cat food', 'Dry dog food',
        'Wet dog food', 'Kitten food', 'Puppy food',
        'Cat treats', 'Dog treats', 'Pet biscuits',
        'Cat litter', 'Litter liners', 'Litter scoop',
        'Pet shampoo', 'Pet wipes', 'Flea comb',
        'Pet toothbrush', 'Pet toothpaste', 'Food bowls',
        'Water bowls', 'Pet toys', 'Cat scratching pads',
        'Poop bags', 'Pet pee pads', 'Pet bedding',
        'Aquarium fish food', 'Bird seed', 'Rabbit pellets',
        'Hamster bedding', 'Pet carrier', 'Pet grooming brush'
    ],

    'Electronics': [
        'USB-C cable', 'Lightning cable', 'Phone charger',
        'Wall adapter', 'Power bank', 'Wireless charger',
        'Earphones', 'Wireless earbuds', 'Headphones',
        'Bluetooth speaker', 'Computer mouse', 'Keyboard',
        'Mouse pad', 'USB flash drive', 'Memory card',
        'HDMI cable', 'Extension socket', 'Power strip',
        'AA batteries', 'AAA batteries', 'Rechargeable batteries',
        'Battery charger', 'Screen protector', 'Phone case',
        'Webcam', 'Laptop stand', 'Ethernet cable',
        'Smart plugs', 'LED strip lights'
    ],

    'Fashion & Accessories': [
        'T-shirts', 'Polo shirts', 'Socks',
        'Underwear', 'Sportswear', 'Pajamas',
        'Jeans', 'Shorts', 'Leggings',
        'Raincoat', 'Umbrella', 'Slippers',
        'Sandals', 'Shoelaces', 'Belts',
        'Caps', 'Hats', 'Scarves',
        'Gloves', 'Wallets', 'Backpacks',
        'Tote bags', 'Handbags', 'Sunglasses',
        'Hair ties', 'Hair clips', 'Watches',
        'Jewellery', 'Reusable shopping bags'
    ],

    'Health & Wellness': [
        'Plasters', 'Bandages', 'Gauze pads',
        'Antiseptic wipes', 'Digital thermometer',
        'Disposable face masks', 'Hand sanitizer',
        'Vitamin C', 'Multivitamins', 'Electrolyte drinks',
        'Oral rehydration salts', 'Hot and cold packs',
        'First-aid kit', 'Cotton wool', 'Medical tape',
        'Pill organizer', 'Sunscreen', 'Insect repellent',
        'Eye drops', 'Saline solution', 'Heat patches'
    ],

    'Cleaning Supplies': [
        'Dishwashing liquid', 'Dishwasher tablets',
        'Laundry detergent', 'Fabric softener',
        'Stain remover', 'Bleach', 'Floor cleaner',
        'Glass cleaner', 'Bathroom cleaner',
        'Toilet bowl cleaner', 'Kitchen degreaser',
        'Disinfectant spray', 'Multipurpose cleaner',
        'Cleaning sponges', 'Microfiber cloths',
        'Scrub brushes', 'Rubber gloves', 'Mop refills',
        'Drain cleaner', 'Cleaning wipes', 'Bin deodorizer'
    ],

    'Kitchen & Dining': [
        'Dinner plates', 'Bowls', 'Drinking glasses',
        'Mugs', 'Water bottles', 'Lunch boxes',
        'Food containers', 'Reusable food bags',
        'Cutlery sets', 'Cooking spoons', 'Spatulas',
        'Kitchen knives', 'Chopping boards', 'Peelers',
        'Can openers', 'Bottle openers', 'Measuring cups',
        'Measuring spoons', 'Mixing bowls', 'Frying pans',
        'Saucepans', 'Cooking pots', 'Colanders',
        'Kitchen scales', 'Oven mitts', 'Aluminium foil',
        'Cling wrap', 'Baking paper', 'Dish racks'
    ],

    'Home & Living': [
        'Pillowcases', 'Bedsheets', 'Pillow inserts',
        'Blankets', 'Comforters', 'Bath towels',
        'Hand towels', 'Bath mats', 'Shower curtains',
        'Laundry hampers', 'Cushion covers', 'Door stoppers',
        'Wall hooks', 'Picture frames', 'Vases',
        'Decorative plants', 'Storage baskets',
        'Drawer organizers', 'Tablecloths', 'Placemats',
        'Desk lamps', 'Night lights', 'Doormats',
        'Shoe racks', 'Clothes racks'
    ],

    'Personal Essentials': [
        'Reusable shopping bags', 'Water bottles',
        'Travel bottles', 'Travel toiletries bag',
        'Pocket tissues', 'Wet wipes', 'Handkerchiefs',
        'Compact umbrella', 'Keychains', 'Luggage tags',
        'Travel adapters', 'Eye masks', 'Earplugs',
        'Reusable straws', 'Lunch bags', 'Pocket mirrors',
        'Comb', 'Hairbrush', 'Sewing kit',
        'Safety pins', 'Shoe insoles'
    ],

    'Automotive': [
        'Car shampoo', 'Car wax', 'Dashboard cleaner',
        'Microfiber car cloths', 'Car air freshener',
        'Windshield washer fluid', 'Car sponge',
        'Tyre pressure gauge', 'Car phone holder',
        'Car charger', 'Jumper cables', 'Emergency torch',
        'Car trash bin', 'Seat organizers', 'Sunshade',
        'Ice scraper', 'Car vacuum accessories',
        'Motor oil', 'Funnel', 'Reflective warning triangle'
    ],

    'Toys & Games': [
        'Building blocks', 'Jigsaw puzzles', 'Board games',
        'Playing cards', 'Colouring books', 'Crayons',
        'Toy cars', 'Dolls', 'Stuffed animals',
        'Action figures', 'Toy trains', 'Yo-yos',
        'Jump ropes', 'Balls', 'Frisbees',
        'Play dough', 'Water guns', 'Bubble solution',
        'Science kits', 'Craft kits', 'Chess sets',
        'Dominoes', 'Memory games', 'Outdoor toys'
    ],

    'Garden & Outdoor': [
        'Plant pots', 'Potting soil', 'Compost',
        'Plant fertilizer', 'Seeds', 'Seedling trays',
        'Watering cans', 'Garden gloves', 'Pruning shears',
        'Garden trowels', 'Garden hoses', 'Spray bottles',
        'Plant saucers', 'Plant supports', 'Plant ties',
        'Herb growing kits', 'Flower bulbs', 'Mulch',
        'Outdoor lanterns', 'Solar garden lights',
        'Insect netting', 'Bird feeders', 'Outdoor cushions'
    ],

    'Other': [
        'Gift bags', 'Gift wrap', 'Greeting cards',
        'Birthday candles', 'Party plates', 'Party cups',
        'Balloons', 'Decorations', 'Packing tape',
        'Shipping boxes', 'Batteries', 'Miscellaneous items'
    ],
}

function makeId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function createInitialState() {
    return {
        budget: 100,
        items: [
            // Keep your existing initial grocery items here.
        ],
        history: [],
        savedLists: [],
    }
}

function normalizeCategory(oldCategory, itemName = '') {
    const aliases = {
        'Fruits & Vegetables': 'Fresh Produce',
        'Dairy & Eggs': 'Dairy Products',
        'Bakery': 'Baked Goods',
        'Drinks': 'Beverages',
        'Snacks': 'Snacks & Confectionery',
        'Pantry': 'Food Essentials',
        'Frozen': 'Frozen Foods',
        'Frozen Food': 'Frozen Foods',
        'Fresh Produce': 'Fresh Produce',
        'Dairy Products': 'Dairy Products',
        'Food Essentials': 'Food Essentials',
        'Baked Goods': 'Baked Goods',
        'Beverages': 'Beverages',
        'Ice Cream': 'Ice Cream',
        'Organic': 'Organic Products',
        'Personal Care': 'Beauty & Personal Care',
        'Beauty & Personal Care': 'Beauty & Personal Care',
        'Baby Care': 'Baby Care',
        'Cleaning': 'Cleaning Supplies',
        'Cleaning Supplies': 'Cleaning Supplies',
        'Books & Stationery': 'Books & Stationery',
        'Pet Care': 'Pet Care',
        'Electronics': 'Electronics',
        'Fashion & Accessories': 'Fashion & Accessories',
        'Household': 'Household',
        'Meat & Seafood': 'Meat & Seafood',
        'Organic Products': 'Organic Products',
        'Health & Wellness': 'Health & Wellness',
        'Kitchen & Dining': 'Kitchen & Dining',
        'Home & Living': 'Home & Living',
        'Personal Essentials': 'Personal Essentials',
        'Automotive': 'Automotive',
        'Toys & Games': 'Toys & Games',
        'Garden & Outdoor': 'Garden & Outdoor',
        'Other': 'Other',
    }

    const mapped = aliases[oldCategory]

    if (mapped && categories.some(category => category.name === mapped)) {
        return mapped
    }

    return guessCategory(itemName)
}

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)

        if (!saved) return createInitialState()

        const parsed = JSON.parse(saved)

        if (!Array.isArray(parsed.items)) return createInitialState()

        return {
            budget: Number.isFinite(Number(parsed.budget))
                ? Math.max(0, Number(parsed.budget))
                : 100,
            items: parsed.items
                .filter(item => item && typeof item.name === 'string')
                .map(item => ({
                    id: String(item.id || makeId()),
                    name: item.name,
                    quantity: String(item.quantity || '1 item'),
                    price: Math.max(0, Number(item.price) || 0),
                    category: normalizeCategory(item.category, item.name),
                    icon: typeof item.icon === 'string' ? item.icon : '🛒',
                    checked: Boolean(item.checked),
                })),
            savedLists: Array.isArray(parsed.savedLists)
                ? parsed.savedLists
                : [],
        }
    } catch {
        return createInitialState()
    }
}

const state = loadState()

const ui = {
    page: 'home',
    filter: 'All',
    search: '',
    modal: null,
    editingId: null,
    toast: '',
}

let toastTimer

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
        showToast('Unable to save. Check your browser storage settings.')
    }
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    })[char])
}

function money(value) {
    return Number(value || 0).toLocaleString('en-MY', {
        style: 'currency',
        currency: 'MYR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}

function shortMoney(value) {
    return `RM ${Number(value || 0).toFixed(2)}`
}

function todayLabel() {
    return new Intl.DateTimeFormat('en-MY', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    }).format(new Date())
}

function getStats() {
    const checked = state.items.filter(item => item.checked)
    const remaining = state.items.filter(item => !item.checked)
    const total = state.items.reduce((sum, item) => sum + item.price, 0)
    const spent = checked.reduce((sum, item) => sum + item.price, 0)
    const progress = state.items.length
        ? Math.round((checked.length / state.items.length) * 100)
        : 0

    return {
        checked,
        remaining,
        total,
        spent,
        progress,
        count: state.items.length,
        completed: checked.length,
        remainingCount: remaining.length,
        left: state.budget - total,
    }
}

function getItemIcon(name) {
    const lower = name.toLowerCase()

    if (/banana/.test(lower)) return '🍌'
    if (/apple/.test(lower)) return '🍎'
    if (/orange/.test(lower)) return '🍊'
    if (/mango/.test(lower)) return '🥭'
    if (/grape/.test(lower)) return '🍇'
    if (/tomato/.test(lower)) return '🍅'
    if (/potato/.test(lower)) return '🥔'
    if (/onion/.test(lower)) return '🧅'
    if (/carrot/.test(lower)) return '🥕'
    if (/broccoli|vegetable|spinach|lettuce/.test(lower)) return '🥦'
    if (/milk|yogurt|cheese|butter/.test(lower)) return '🥛'
    if (/egg/.test(lower)) return '🥚'
    if (/bread|bun|bagel/.test(lower)) return '🍞'
    if (/chicken/.test(lower)) return '🍗'
    if (/fish|salmon|prawn|shrimp|seafood/.test(lower)) return '🐟'
    if (/beef|meat|steak/.test(lower)) return '🥩'
    if (/rice/.test(lower)) return '🍚'
    if (/noodle|pasta|spaghetti/.test(lower)) return '🍝'
    if (/water/.test(lower)) return '💧'
    if (/juice|drink|coffee|tea/.test(lower)) return '🥤'
    if (/soap|detergent|cleaner|tissue/.test(lower)) return '🧴'
    if (/chocolate|cookie|biscuit|snack|chip/.test(lower)) return '🍪'
    if (/oil|sauce|sugar|flour|salt/.test(lower)) return '🫙'

    return '🛒'
}

function guessCategory(name) {
    const lower = name.toLowerCase().trim()

    // Specialized categories must be checked before general ones.
    if (/ice cream|gelato|popsicle|ice lolly|frozen dessert/.test(lower)) {
        return 'Ice Cream'
    }

    if (/baby|diaper|nappy|infant formula|baby wipe|baby bottle/.test(lower)) {
        return 'Baby Care'
    }

    if (/cat food|dog food|pet food|pet treat|dog treat|cat litter|pet shampoo/.test(lower)) {
        return 'Pet Care'
    }

    if (/battery|batteries|charger|charging cable|earphones|headphones|usb cable|power bank|electronics/.test(lower)) {
        return 'Electronics'
    }

    if (/notebook|pen|pencil|stationery|highlighter|eraser|marker|school book|textbook/.test(lower)) {
        return 'Books & Stationery'
    }

    if (/sock|socks|shirt|t-shirt|trousers|jeans|belt|cap|hat|umbrella|fashion accessory/.test(lower)) {
        return 'Fashion & Accessories'
    }

    if (/shampoo|conditioner|toothpaste|toothbrush|body wash|face wash|moisturizer|skincare|lip balm|cosmetic|makeup|deodorant|perfume/.test(lower)) {
        return 'Beauty & Personal Care'
    }

    if (/detergent|dish soap|cleaner|bleach|sponge|disinfectant|floor cleaner|laundry liquid/.test(lower)) {
        return 'Cleaning Supplies'
    }

    if (/organic/.test(lower)) {
        return 'Organic Products'
    }

    if (/frozen|nugget|frozen pizza|frozen fries|frozen vegetable|frozen dumpling/.test(lower)) {
        return 'Frozen Foods'
    }

    if (/chicken|beef|pork|lamb|fish|salmon|prawn|shrimp|seafood|steak|minced meat/.test(lower)) {
        return 'Meat & Seafood'
    }

    if (/milk|egg|cheese|yogurt|yoghurt|butter|cream|margarine/.test(lower)) {
        return 'Dairy Products'
    }

    if (/bread|bun|bagel|croissant|pastry|muffin|donut|doughnut|cake|bakery/.test(lower)) {
        return 'Baked Goods'
    }

    if (/banana|apple|orange|mango|grape|tomato|potato|onion|carrot|broccoli|spinach|lettuce|fruit|vegetable|lemon|garlic|cucumber|cabbage|pepper|avocado|watermelon/.test(lower)) {
        return 'Fresh Produce'
    }

    if (/ice|water|juice|drink|coffee|tea|soda|cola|lemonade|beverage|energy drink/.test(lower)) {
        return 'Beverages'
    }

    if (/chocolate|cookie|biscuit|snack|chip|candy|sweet|gummy|popcorn|confectionery/.test(lower)) {
        return 'Snacks & Confectionery'
    }

    if (/rice|noodle|pasta|spaghetti|flour|sugar|salt|oil|sauce|oats|cereal|beans|lentils|seasoning|spice|cooking ingredient/.test(lower)) {
        return 'Food Essentials'
    }

    if (/pan|pot|plate|bowl|cutlery|spoon|fork|knife|mug|cup|container|kitchen towel/.test(lower)) {
        return 'Kitchen & Dining'
    }

    if (/plant|seed|fertilizer|garden|flower pot|gardening|outdoor/.test(lower)) {
        return 'Garden & Outdoor'
    }

    if (/toy|puzzle|board game|doll|lego|building blocks/.test(lower)) {
        return 'Toys & Games'
    }

    if (/vitamin|first aid|bandage|thermometer|wellness|health/.test(lower)) {
        return 'Health & Wellness'
    }

    if (/car wash|motor oil|car accessory|windshield|automotive/.test(lower)) {
        return 'Automotive'
    }

    if (/tissue|toilet paper|trash bag|bin liner|paper towel|air freshener/.test(lower)) {
        return 'Household'
    }

    return 'Food Essentials'
}

function showToast(message) {
    clearTimeout(toastTimer)
    ui.toast = message
    render()

    toastTimer = setTimeout(() => {
        ui.toast = ''
        render()
    }, 2300)
}

function addItem(data) {
    const name = String(data.name || '').trim()

    if (!name) {
        showToast('Please enter a grocery name.')
        return false
    }

    const price = Math.max(0, Number(data.price) || 0)

    const item = {
        id: makeId(),
        name,
        quantity: String(data.quantity || '').trim() || '1 item',
        price,
        category: categories.some(c => c.name === data.category)
            ? data.category
            : guessCategory(name),
        icon: getItemIcon(name),
        checked: false,
    }

    state.items.unshift(item)
    saveState()
    ui.search = ''
    ui.filter = 'All'
    showToast(`${name} added to your list.`)
    return true
}

function toggleItem(id) {
    const item = state.items.find(entry => entry.id === id)
    if (!item) return

    item.checked = !item.checked
    saveState()
    render()

    if (item.checked) {
        const stats = getStats()

        if (stats.count > 0 && stats.completed === stats.count) {
            showToast('Amazing! Your shopping list is complete.')
        } else {
            showToast(`${item.name} completed!`)
        }
    }
}

function removeItem(id) {
    const item = state.items.find(entry => entry.id === id)
    if (!item) return

    state.items = state.items.filter(entry => entry.id !== id)
    saveState()
    showToast(`${item.name} removed.`)
}

function openItemModal(id = null) {
    ui.editingId = id
    ui.modal = id ? 'edit' : 'add'
    render()
}

function openBudgetModal() {
    ui.modal = 'budget'
    ui.editingId = null
    render()
}

function openHistoryModal() {
    ui.modal = 'history'
    ui.editingId = null
    render()
}

function openCategories() {
    ui.page = 'categories'
    ui.modal = null
    render()
}

function openHome() {
    ui.page = 'home'
    ui.modal = null
    render()
}

function openMore() {
    ui.page = 'more'
    ui.modal = null
    render()
}

function renderProgress(stats) {
    return `
    <section class="progress-card">
      <div class="progress-top">
        <div>
          <p class="eyebrow">Your shopping progress</p>
          <p class="progress-number">${stats.completed} <span style="color:#819481;font-weight:500">/ ${stats.count}</span></p>
          <p class="progress-description">
            ${stats.count === 0
        ? 'Your next shopping trip starts here.'
        : stats.remainingCount === 0
            ? 'Everything on your list is done!'
            : `${stats.remainingCount} ${stats.remainingCount === 1 ? 'item' : 'items'} left to pick up`}
          </p>
        </div>
        <div class="progress-ring" style="--progress:${stats.progress}%">
          <div class="progress-ring-inner">${stats.progress}%</div>
        </div>
      </div>
      <div
        class="progress-track"
        role="progressbar"
        aria-label="Shopping progress"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${stats.progress}"
      >
        <div class="progress-fill" style="--progress:${stats.progress}%"></div>
      </div>
    </section>
  `
}

function renderStats(stats) {
    return `
    <section class="stats-grid" aria-label="Shopping summary">
      <div class="stat-card">
        <div class="stat-icon">🛒</div>
        <p class="stat-value">${stats.remainingCount}</p>
        <p class="stat-label">Items remaining</p>
      </div>
      <div class="stat-card">
        <div class="stat-icon">💰</div>
        <p class="stat-value" style="font-size:clamp(15px,4vw,20px)">
          ${shortMoney(stats.total)}
        </p>
        <p class="stat-label">Estimated total</p>
      </div>
    </section>
  `
}

function renderBudget(stats) {
    const percentage = state.budget > 0
        ? Math.min(100, Math.round((stats.total / state.budget) * 100))
        : stats.total > 0 ? 100 : 0

    return `
    <section class="budget-card">
      <div class="budget-top">
        <h4>🪙 Shopping budget</h4>
        <button class="mini-button" data-action="budget" aria-label="Edit shopping budget">✎</button>
      </div>
      <p class="budget-amount">${money(state.budget)}</p>
      <p class="budget-caption">Estimated cost of your current list</p>
      <div class="budget-bar">
        <div style="--progress:${percentage}%;${stats.total > state.budget ? 'background:#d97757' : ''}"></div>
      </div>
      <div class="budget-footer">
        <span>${money(stats.total)} planned</span>
        <span>${money(stats.budgetLeft ?? state.budget - stats.total)} ${stats.total > state.budget ? 'over budget' : 'remaining'}</span>
      </div>
    </section>
  `
}

function getVisibleItems() {
    let items = [...state.items]

    if (ui.filter === 'To buy') {
        items = items.filter(item => !item.checked)
    } else if (ui.filter === 'Completed') {
        items = items.filter(item => item.checked)
    } else if (categories.some(category => category.name === ui.filter)) {
        items = items.filter(item => item.category === ui.filter)
    }

    if (ui.search.trim()) {
        const query = ui.search.toLowerCase().trim()

        items = items.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.quantity.toLowerCase().includes(query)
        )
    }

    return items
}

function renderFilters() {
    const filters = ['All', 'To buy', 'Completed', ...categories.map(c => c.name)]

    return `
    <div class="filter-row" aria-label="Filter groceries">
      ${filters.map(filter => `
        <button
          class="filter-chip ${ui.filter === filter ? 'active' : ''}"
          data-filter="${escapeHTML(filter)}"
          aria-pressed="${ui.filter === filter}"
        >${escapeHTML(filter)}</button>
      `).join('')}
    </div>
  `
}

function renderItem(item) {
    return `
    <article class="grocery-item ${item.checked ? 'item-completed' : ''}">
      <button
        class="check-button ${item.checked ? 'checked' : ''}"
        data-action="toggle"
        data-id="${escapeHTML(item.id)}"
        aria-label="${item.checked ? 'Mark' : 'Complete'} ${escapeHTML(item.name)}"
        aria-pressed="${item.checked}"
      >${item.checked ? '✓' : ''}</button>

      <div class="product-emoji" aria-hidden="true">${escapeHTML(item.icon)}</div>

      <div class="item-details">
        <p class="item-name">${escapeHTML(item.name)}</p>
        <p class="item-subtitle">
          ${escapeHTML(item.quantity)} · ${escapeHTML(item.category)}
        </p>
      </div>

      <div class="item-actions">
        <span class="item-price">${shortMoney(item.price)}</span>
        <button
          class="mini-button"
          data-action="edit"
          data-id="${escapeHTML(item.id)}"
          aria-label="Edit ${escapeHTML(item.name)}"
        >⋮</button>
      </div>
    </article>
  `
}

function renderList() {
    const items = getVisibleItems()

    return `
    <section aria-label="Grocery checklist">
      <div class="section-heading">
        <h3>Shopping list</h3>
        <span class="date-label">${escapeHTML(todayLabel())}</span>
      </div>

      <label class="search-box">
        <span aria-hidden="true">⌕</span>
        <input
          id="search-input"
          type="search"
          placeholder="Search your groceries..."
          value="${escapeHTML(ui.search)}"
          aria-label="Search groceries"
        />
      </label>

      ${renderFilters()}

      <div class="list-meta">
        <span>${items.length} ${items.length === 1 ? 'item' : 'items'} shown</span>
        <span>${getStats().completed} completed</span>
      </div>

      <div class="grocery-list">
        ${items.length
        ? items.map(renderItem).join('')
        : `
            <div class="empty-state">
              <div class="empty-illustration">${ui.search ? '🔎' : '🧺'}</div>
              <h4>${ui.search ? 'No groceries found' : 'Nothing here yet'}</h4>
              <p>${ui.search
            ? 'Try another search or clear your filters.'
            : 'Add something to your list and it will show up here.'}</p>
            </div>
          `}
      </div>
    </section>
  `
}

function renderQuickAdd() {
    return `
    <section class="add-card">
      <form class="add-form" id="add-form">
        <input
          class="add-input"
          name="name"
          type="text"
          placeholder="What do you need to buy?"
          aria-label="Grocery name"
          maxlength="100"
          required
        />

        <div class="form-row">
          <input
            class="form-input"
            name="quantity"
            placeholder="Quantity, e.g. 1 pack"
            maxlength="50"
            aria-label="Quantity"
          />
          <input
            class="form-input"
            name="price"
            type="number"
            min="0"
            max="1000000"
            step="0.01"
            placeholder="Price (RM)"
            aria-label="Estimated price in ringgit"
          />
        </div>

        <select class="form-select" name="category" aria-label="Grocery category">
          ${categories.map(category => `
            <option value="${escapeHTML(category.name)}">${category.icon} ${escapeHTML(category.name)}</option>
          `).join('')}
        </select>

        <button class="primary-button" type="submit">
          <span aria-hidden="true">＋</span> Add grocery item
        </button>
      </form>

      <p class="quick-add-title">QUICK ADD</p>

      <div class="quick-add">
        ${quickItems.map(item => `
          <button
            class="quick-chip"
            data-action="quick-add"
            data-name="${escapeHTML(item.name)}"
          >${item.icon} ${escapeHTML(item.name)}</button>
        `).join('')}
      </div>
    </section>
  `
}

function renderCompleted(stats) {
    if (!stats.completed) return ''

    return `
    <section class="completed-section">
      <div class="completed-heading">
        <h4>✓ Completed (${stats.completed})</h4>
        <button class="text-button" data-action="clear-completed">Clear checked</button>
      </div>

      <div class="grocery-list">
        ${stats.checked.map(renderItem).join('')}
      </div>
    </section>
  `
}


function renderHome(stats) {
    return `
    <header class="welcome">
      <h2>Let's get groceries. <span aria-hidden="true">🛒</span></h2>
      <p>A little list makes every shopping trip easier.</p>
    </header>

    ${renderProgress(stats)}
    ${renderStats(stats)}
    ${renderList()}
    ${renderQuickAdd()}
    ${renderCompleted(stats)}
    ${renderBudget(stats)}

    <section class="trip-actions">
      <button
        type="button"
        class="secondary-button trip-save-button"
        data-action="save-current-list"
      >
        <span aria-hidden="true">💾</span>
        Save Current Grocery List
      </button>

      <button
        type="button"
        class="primary-button trip-complete-button"
        data-action="complete-groceries"
      >
        <span aria-hidden="true">✓</span>
        Complete Groceries
      </button>
    </section>
  `
}


function renderCategories() {
    const query = (ui.categorySearch || '').trim().toLowerCase()

    const visibleCategories = [...categories]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(category => {
            const products = [...(categoryProducts[category.name] || [])]
                .sort((a, b) => a.localeCompare(b))

            const filteredProducts = products.filter(name => {
                const englishName = name.toLowerCase()
                const malayName = getMalayProduct(name).toLowerCase()
                const englishCategory = category.name.toLowerCase()
                const malayCategory = getMalayCategory(category.name).toLowerCase()

                return (
                    englishName.includes(query) ||
                    malayName.includes(query) ||
                    englishCategory.includes(query) ||
                    malayCategory.includes(query)
                )
            })

            const listItems = state.items.filter(
                item => item.category === category.name
            )

            return {
                ...category,
                products: filteredProducts,
                totalProducts: products.length,
                itemCount: listItems.length,
                remaining: listItems.filter(item => !item.checked).length,
            }
        })
        .filter(category =>
            !query ||
            category.name.toLowerCase().includes(query) ||
            getMalayCategory(category.name).toLowerCase().includes(query) ||
            category.products.length > 0
        )

    const totalProducts = categories.reduce(
        (sum, category) =>
            sum + (categoryProducts[category.name] || []).length,
        0
    )

    return `
    <section class="catalog-page">
      <div class="section-heading">
        <h3>Browse Products · Senarai Produk</h3>
        <span class="date-label">
          ${categories.length} categories · kategori
        </span>
      </div>

      <p class="catalog-description">
        Find everyday essentials by category and tap + to add them to your shopping list.
        Cari barangan keperluan mengikut kategori dan tekan + untuk menambahkannya ke senarai beli-belah anda.
      </p>

      <label class="search-box catalog-search">
        <span aria-hidden="true">⌕</span>
        <input
          id="category-search"
          type="search"
          placeholder="Search / Cari: milk, susu, chilli, cili..."
          value="${escapeHTML(ui.categorySearch || '')}"
          aria-label="Search products in English or Malay / Cari produk dalam bahasa Inggeris atau Melayu"
        />
        ${query ? `
          <button
            type="button"
            class="mini-button"
            data-action="clear-category-search"
            aria-label="Clear search / Kosongkan carian"
          >✕</button>
        ` : ''}
      </label>

      <div class="catalog-summary">
        <span>🛍️ ${totalProducts} products · produk</span>
        <span>${state.items.length} on your list · dalam senarai anda</span>
      </div>

      <div class="catalog-categories">
        ${visibleCategories.map(category => {
        const alreadyAdded = state.items
            .filter(item => item.category === category.name)
            .map(item => item.name.toLowerCase())

        // Keep categories collapsed unless the user is searching.
        const isExpanded = Boolean(query)

        return `
            <details class="catalog-category" ${isExpanded ? 'open' : ''}>
              <summary class="catalog-category-header">
                <span class="catalog-category-icon">
                  ${category.icon}
                </span>

                <span class="catalog-category-info">
                  <span class="catalog-category-heading">
                    <strong class="catalog-category-english">
                      ${escapeHTML(category.name)}
                    </strong>
                    <span class="catalog-category-malay">
                      ${escapeHTML(getMalayCategory(category.name))}
                    </span>
                  </span>

                  <small>
                    ${category.totalProducts} products · produk
                    <span aria-hidden="true"> · </span>
                    ${category.remaining} to buy · perlu dibeli
                  </small>
                </span>

                <span class="catalog-chevron" aria-hidden="true">⌄</span>
              </summary>

              <div class="catalog-products">
                ${category.products.length
            ? category.products.map(name => {
                const added = alreadyAdded.includes(
                    name.toLowerCase()
                )

                return `
                      <div class="catalog-product">
                        <div class="catalog-product-info">
                          <span
                            class="catalog-product-emoji"
                            aria-hidden="true"
                          >${escapeHTML(getItemIcon(name))}</span>

                          <span class="catalog-product-names">
                            <span class="catalog-product-english">
                              ${escapeHTML(name)}
                            </span>
                            <span class="catalog-product-malay">
                              ${escapeHTML(getMalayProduct(name))}
                            </span>
                          </span>
                        </div>

                        <button
                          type="button"
                          class="catalog-add-button ${added ? 'already-added' : ''}"
                          data-action="catalog-add"
                          data-name="${escapeHTML(name)}"
                          data-category="${escapeHTML(category.name)}"
                          aria-label="Add ${escapeHTML(name)} (${escapeHTML(getMalayProduct(name))}) to shopping list"
                          title="Add to list · Tambah ke senarai"
                        >＋</button>
                      </div>
                    `
            }).join('')
            : `
                    <p class="catalog-empty">
                      No matching products · Tiada produk yang sepadan.
                    </p>
                  `}
              </div>
            </details>
          `
    }).join('')}
      </div>

      ${visibleCategories.length === 0 ? `
        <div class="empty-state">
          <div class="empty-illustration">🔎</div>
          <h4>No products found · Produk tidak dijumpai</h4>
          <p>
            Try a different product name or search term.
            Cuba nama produk atau kata carian yang lain.
          </p>
          <button
            class="secondary-button"
            data-action="clear-category-search"
          >
            Clear search · Kosongkan carian
          </button>
        </div>
      ` : ''}

      <button
        class="primary-button catalog-view-list"
        data-action="navigate"
        data-page="home"
      >
        View my shopping list · Lihat senarai beli-belah saya →
      </button>
    </section>
  `
}

function renderMore() {
    const stats = getStats()

    return `
    <section>
      <div class="section-heading">
        <h3>More</h3>
        <span class="date-label">FreshCart</span>
      </div>

      <div class="progress-card" style="margin-bottom:20px">
        <p class="eyebrow">Your grocery companion</p>
        <h3 style="margin:0 0 7px;font-size:23px">Shop simply. Live freshly. 🌱</h3>
        <p style="margin:0;color:#66806b;font-size:12px;line-height:1.7">
          Keep your essentials organized, track your spending, and make everyday shopping a little easier.
        </p>
      </div>

      <div class="category-summary">
        <span class="category-summary-icon">🛒</span>
        <span class="category-summary-details">
          <h4>Current shopping list</h4>
          <p>${stats.count} items · ${shortMoney(stats.total)} estimated</p>
        </span>
      </div>

      <button class="category-summary" style="width:100%;text-align:left" data-action="budget">
        <span class="category-summary-icon">💰</span>
        <span class="category-summary-details">
          <h4>Shopping budget</h4>
          <p>Set your preferred spending limit</p>
        </span>
        <span>→</span>
      </button>

      <button class="category-summary" style="width:100%;text-align:left" data-action="history">
        <span class="category-summary-icon">📅</span>
        <span class="category-summary-details">
          <h4>Shopping history</h4>
          <p>Review saved completed trips</p>
        </span>
        <span>→</span>
      </button>

      <button class="category-summary" style="width:100%;text-align:left" data-action="reset-list">
        <span class="category-summary-icon">🔄</span>
        <span class="category-summary-details">
          <h4>Start a fresh list</h4>
          <p>Uncheck all groceries for your next trip</p>
        </span>
        <span>→</span>
      </button>

      <button class="category-summary" style="width:100%;text-align:left" data-action="clear-list">
        <span class="category-summary-icon">🗑️</span>
        <span class="category-summary-details">
          <h4>Clear shopping list</h4>
          <p>Remove all current grocery items</p>
        </span>
        <span>→</span>
      </button>

      <p style="margin-top:22px;color:var(--muted);font-size:11px;text-align:center">
        FreshCart · Your everyday grocery companion
      </p>
    </section>
  `
}

function renderItemModal() {
    const item = state.items.find(entry => entry.id === ui.editingId)
    const editing = ui.modal === 'edit'

    if (editing && !item) {
        ui.modal = null
        ui.editingId = null
        return ''
    }

    const value = item || {
        name: '',
        quantity: '',
        price: '',
        category: 'Fruits & Vegetables',
    }

    return `
    <div class="modal-backdrop" data-action="backdrop">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-header">
          <h3 id="modal-title">${editing ? 'Edit grocery' : 'Add grocery'}</h3>
          <button class="icon-button" data-action="close-modal" aria-label="Close">✕</button>
        </div>

        <form id="modal-item-form" data-editing="${editing ? 'true' : 'false'}">
          <label class="form-label" for="modal-name">Item name *</label>
          <input
            class="form-input"
            id="modal-name"
            name="name"
            maxlength="100"
            value="${escapeHTML(value.name)}"
            placeholder="e.g. Fresh apples"
            required
          />

          <label class="form-label" for="modal-quantity">Quantity</label>
          <input
            class="form-input"
            id="modal-quantity"
            name="quantity"
            maxlength="50"
            value="${escapeHTML(value.quantity)}"
            placeholder="e.g. 6 pieces"
          />

          <label class="form-label" for="modal-price">Estimated price (RM)</label>
          <input
            class="form-input"
            id="modal-price"
            name="price"
            type="number"
            min="0"
            max="1000000"
            step="0.01"
            value="${value.price}"
            placeholder="0.00"
          />

          <label class="form-label" for="modal-category">Category</label>
          <select class="form-select" id="modal-category" name="category">
            ${categories.map(category => `
              <option value="${escapeHTML(category.name)}" ${value.category === category.name ? 'selected' : ''}>
                ${category.icon} ${escapeHTML(category.name)}
              </option>
            `).join('')}
          </select>

          ${editing ? `
            <label style="display:flex;align-items:center;gap:10px;margin-top:18px;font-size:13px">
              <input type="checkbox" name="checked" ${value.checked ? 'checked' : ''} />
              Mark as completed
            </label>
          ` : ''}

          <div class="modal-actions">
            <button type="button" class="secondary-button" data-action="close-modal">Cancel</button>
            <button type="submit" class="primary-button">${editing ? 'Save changes' : 'Add item'}</button>
          </div>

          ${editing ? `
            <button
              type="button"
              class="secondary-button"
              style="width:100%;margin-top:10px;color:#c04e42"
              data-action="delete-item"
              data-id="${escapeHTML(item.id)}"
            >🗑 Delete item</button>
          ` : ''}
        </form>
      </section>
    </div>
  `
}

function renderBudgetModal() {
    return `
    <div class="modal-backdrop" data-action="backdrop">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-header">
          <h3 id="modal-title">Shopping budget</h3>
          <button class="icon-button" data-action="close-modal" aria-label="Close">✕</button>
        </div>

        <p style="color:var(--muted);font-size:12px;line-height:1.7">
          Set your target spending limit. FreshCart will compare it against the estimated total of your grocery list.
        </p>

        <form id="budget-form">
          <label class="form-label" for="budget-input">Your budget (RM)</label>
          <input
            class="form-input"
            id="budget-input"
            name="budget"
            type="number"
            min="0"
            max="10000000"
            step="0.01"
            value="${state.budget}"
            required
          />

          <div class="modal-actions">
            <button type="button" class="secondary-button" data-action="close-modal">Cancel</button>
            <button type="submit" class="primary-button">Save budget</button>
          </div>
        </form>
      </section>
    </div>
  `
}


function renderHistoryModal() {
    const history = [...state.history].reverse()

    return `
    <div class="modal-backdrop" data-action="backdrop">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-header">
          <h3 id="modal-title">Shopping history</h3>
          <button class="icon-button" data-action="close-modal" aria-label="Close">✕</button>
        </div>

        ${history.length ? `
          ${history.map(entry => {
        const items = Array.isArray(entry.items) ? entry.items : []

        return `
                <details class="history-trip">
                  <summary class="history-row">
                    <div>
                      <h4>${escapeHTML(entry.date || 'Previous shopping trip')}</h4>
                      <p>${Number(entry.count) || 0} purchased items</p>
                    </div>
                    <span class="history-total">${shortMoney(entry.total)}</span>
                  </summary>

                  <div class="history-trip-details">
                    <p><strong>Total spent:</strong> ${money(entry.total)}</p>
                    <p><strong>Estimated list total:</strong> ${money(entry.estimatedTotal ?? entry.total)}</p>
                    <p><strong>Budget:</strong> ${money(entry.budget ?? 0)}</p>
                    <p><strong>Budget remaining:</strong> ${money(entry.remainingBudget ?? 0)}</p>

                    <h4>Items in this trip</h4>

                    ${items.length ? `
                      <ul class="history-item-list">
                        ${items.map(item => `
                          <li>
                            <span>
                              ${item.checked ? '✓' : '○'}
                              ${escapeHTML(item.name)}
                              ${item.quantity ? ` — ${escapeHTML(item.quantity)}` : ''}
                            </span>
                            <span>${money(item.price)}</span>
                          </li>
                        `).join('')}
                      </ul>
                    ` : '<p>No item details available for this older trip.</p>'}
                  </div>
                </details>
              `
    }).join('')}

          <button class="secondary-button" style="width:100%;margin-top:18px" data-action="clear-history">
            Clear history
          </button>
        ` : `
          <div class="empty-state">
            <div class="empty-illustration">📅</div>
            <h4>No shopping history yet</h4>
            <p>Finish a shopping list and save your trip to see it here.</p>
          </div>
        `}
      </section>
    </div>
  `
}


function renderModal() {
    if (ui.modal === 'add' || ui.modal === 'edit') return renderItemModal()
    if (ui.modal === 'budget') return renderBudgetModal()
    if (ui.modal === 'history') return renderHistoryModal()
    return ''
}

function renderNav() {
    const nav = [
        { page: 'home', label: 'Home', icon: '⌂' },
        { page: 'categories', label: 'Categories', icon: '▦' },
        { page: 'budget', label: 'Budget', icon: '▣' },
        { page: 'more', label: 'More', icon: '☰' },
    ]

    return `
    <nav class="bottom-nav" aria-label="Main navigation">
      <div class="nav-inner">
        ${nav.map(item => {
        const active = item.page === 'budget'
            ? ui.modal === 'budget'
            : ui.page === item.page

        return `
            <button
              class="nav-button ${active ? 'active' : ''}"
              data-action="navigate"
              data-page="${item.page}"
              aria-current="${active ? 'page' : 'false'}"
            >
              <span class="nav-icon" aria-hidden="true">${item.icon}</span>
              <span>${item.label}</span>
            </button>
          `
    }).join('')}
      </div>
    </nav>
  `
}

function render() {
    const app = document.querySelector('#app')
    if (!app) return

    const stats = getStats()

    const pageContent = ui.page === 'categories'
        ? renderCategories()
        : ui.page === 'more'
            ? renderMore()
            : renderHome(stats)

    app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true">🌱</div>
          <div>
            <h1 class="brand-name">FreshCart</h1>
            <p class="brand-caption">Smarter groceries. Happier you.</p>
          </div>
        </div>
        <button class="icon-button" data-action="history" aria-label="Shopping history">📅</button>
      </header>

      ${pageContent}
    </div>

    ${renderNav()}
    ${renderModal()}
    ${ui.toast ? `<div class="toast" role="status">${escapeHTML(ui.toast)}</div>` : ''}
  `

    // Restore focus for a smooth search experience after re-rendering.
    const searchInput = app.querySelector('#search-input')

    if (searchInput && document.activeElement?.id === 'search-input') {
        searchInput.focus({ preventScroll: true })
        searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length)
    }
}

function handleAddForm(form) {
    const data = new FormData(form)
    const rawPrice = String(data.get('price') || '').trim()
    const price = rawPrice === '' ? 0 : Number(rawPrice)

    if (!Number.isFinite(price) || price < 0) {
        showToast('Enter a valid price.')
        return
    }

    addItem({
        name: data.get('name'),
        quantity: data.get('quantity'),
        price,
        category: data.get('category'),
    })
}

document.addEventListener('click', event => {
    const button = event.target.closest('[data-action], [data-filter]')

    if (!button) return

    if (button.hasAttribute('data-filter')) {
        ui.filter = button.dataset.filter
        render()
        return
    }

    const action = button.dataset.action

    switch (action) {
        case 'save-current-list':
            saveCurrentGroceryList()
            break

        case 'complete-groceries':
            if (confirm(
                'Complete this shopping trip? Your purchased items and spending will be saved to history, and the current list will be cleared.'
            )) {
                completeGroceryTrip()
            }
            break
        case 'catalog-add': {
            const name = button.dataset.name
            const category = button.dataset.category

            if (!name || !category) break

            const exists = state.items.some(
                item =>
                    item.name.toLowerCase() === name.toLowerCase() &&
                    !item.checked
            )

            if (exists) {
                showToast(`${name} is already on your shopping list.`)
            } else {
                addItem({
                    name,
                    category,
                    quantity: '1 item',
                    price: 0,
                })
            }

            break
        }

        case 'clear-category-search':
            ui.categorySearch = ''
            render()
            break

        case 'toggle':
            toggleItem(button.dataset.id)
            break

        case 'edit':
            openItemModal(button.dataset.id)
            break

        case 'quick-add': {
            const suggestion = quickItems.find(item => item.name === button.dataset.name)

            if (suggestion) {
                const exists = state.items.some(
                    item => item.name.toLowerCase() === suggestion.name.toLowerCase() && !item.checked
                )

                if (exists) {
                    showToast(`${suggestion.name} is already on your list.`)
                } else {
                    addItem(suggestion)
                }
            }
            break
        }

        case 'budget':
            openBudgetModal()
            break

        case 'history':
            openHistoryModal()
            break

        case 'close-modal':
            ui.modal = null
            ui.editingId = null
            render()
            break

        case 'backdrop':
            if (event.target === button) {
                ui.modal = null
                ui.editingId = null
                render()
            }
            break

        case 'delete-item':
            if (confirm('Remove this grocery from your list?')) {
                ui.modal = null
                ui.editingId = null
                removeItem(button.dataset.id)
            }
            break

        case 'clear-completed': {
            const count = state.items.filter(item => item.checked).length

            if (count && confirm(`Remove ${count} completed ${count === 1 ? 'item' : 'items'}?`)) {
                state.items = state.items.filter(item => !item.checked)
                saveState()
                showToast('Completed items cleared.')
            }
            break
        }

        case 'category-filter':
            ui.page = 'home'
            ui.filter = button.dataset.category
            ui.search = ''
            render()
            break

        case 'navigate':
            if (button.dataset.page === 'home') {
                ui.page = 'home'
                ui.modal = null
            } else if (button.dataset.page === 'categories') {
                ui.page = 'categories'
                ui.modal = null
            } else if (button.dataset.page === 'budget') {
                openBudgetModal()
                return
            } else if (button.dataset.page === 'more') {
                ui.page = 'more'
                ui.modal = null
            }

            render()
            break

        case 'reset-list':
            if (confirm('Start a fresh shopping trip by unchecking every item?')) {
                const stats = getStats()

                if (stats.completed > 0) {
                    state.history.push({
                        date: new Date().toLocaleDateString('en-MY', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        }),
                        count: stats.completed,
                        total: stats.spent,
                    })
                }

                state.items.forEach(item => {
                    item.checked = false
                })

                ui.page = 'home'
                ui.filter = 'All'
                ui.search = ''
                saveState()
                showToast('Your list is ready for a new shopping trip.')
            }
            break

        case 'clear-list':
            if (state.items.length && confirm('Delete every grocery in your current list? This cannot be undone.')) {
                state.items = []
                ui.page = 'home'
                ui.filter = 'All'
                ui.search = ''
                saveState()
                showToast('Your shopping list has been cleared.')
            }
            break

        case 'clear-history':
            if (confirm('Clear all saved shopping history?')) {
                state.history = []
                saveState()
                showToast('Shopping history cleared.')
            }
            break
    }
})

document.addEventListener('submit', event => {
    const form = event.target

    if (!(form instanceof HTMLFormElement)) return

    if (form.id === 'add-form') {
        event.preventDefault()
        handleAddForm(form)
        return
    }

    if (form.id === 'modal-item-form') {
        event.preventDefault()

        const data = new FormData(form)
        const editing = form.dataset.editing === 'true'
        const name = String(data.get('name') || '').trim()
        const rawPrice = String(data.get('price') || '').trim()
        const price = rawPrice === '' ? 0 : Number(rawPrice)

        if (!name) {
            showToast('Please enter a grocery name.')
            return
        }

        if (!Number.isFinite(price) || price < 0) {
            showToast('Enter a valid price.')
            return
        }

        const details = {
            name,
            quantity: data.get('quantity'),
            price,
            category: data.get('category'),
        }

        if (editing) {
            const item = state.items.find(entry => entry.id === ui.editingId)

            if (!item) return

            Object.assign(item, {
                ...details,
                quantity: String(details.quantity || '').trim() || '1 item',
                icon: getItemIcon(name),
                checked: data.get('checked') === 'on',
            })

            saveState()
            ui.modal = null
            ui.editingId = null
            showToast(`${name} updated.`)
        } else {
            ui.modal = null
            addItem(details)
        }

        return
    }

    if (form.id === 'budget-form') {
        event.preventDefault()

        const data = new FormData(form)
        const budget = Number(data.get('budget'))

        if (!Number.isFinite(budget) || budget < 0) {
            showToast('Enter a valid budget.')
            return
        }

        state.budget = budget
        saveState()
        ui.modal = null
        showToast('Shopping budget updated.')
    }
})

document.addEventListener('input', event => {
    if (event.target.id !== 'search-input') return

    const input = event.target
    const cursor = input.selectionStart

    ui.search = input.value

    const app = document.querySelector('#app')
    const listSection = app?.querySelector('[aria-label="Grocery checklist"]')

    if (!listSection) {
        render()
        return
    }

    document.addEventListener('input', event => {
        if (event.target.id !== 'category-search') return

        const input = event.target
        const cursor = input.selectionStart

        ui.categorySearch = input.value

        const app = document.querySelector('#app')
        const catalog = app?.querySelector('.catalog-page')

        if (!catalog) return

        const replacement = document.createElement('div')
        replacement.innerHTML = renderCategories()

        catalog.replaceWith(replacement.firstElementChild)

        const nextInput = document.querySelector('#category-search')

        if (nextInput) {
            nextInput.focus({ preventScroll: true })
            nextInput.setSelectionRange(cursor, cursor)
        }
    })

    // Update just the checklist, keeping the input focused while typing.
    const replacement = document.createElement('div')
    replacement.innerHTML = renderList()

    const newListSection = replacement.firstElementChild
    listSection.replaceWith(newListSection)

    const nextInput = document.querySelector('#search-input')

    if (nextInput) {
        nextInput.focus({ preventScroll: true })
        nextInput.setSelectionRange(cursor, cursor)
    }
})

function saveCurrentGroceryList() {
    if (!state.items.length) {
        showToast('Your shopping list is empty.')
        return
    }

    const savedList = {
        id: makeId(),
        name: `Saved List — ${new Date().toLocaleDateString('en-MY')}`,
        date: new Date().toLocaleString('en-MY'),
        budget: state.budget,
        items: state.items.map(item => ({ ...item })),
    }

    if (!Array.isArray(state.savedLists)) {
        state.savedLists = []
    }

    state.savedLists.push(savedList)
    saveState()
    showToast('Your grocery list has been saved.')
}

function completeGroceryTrip() {
    if (!state.items.length) {
        showToast('Add groceries before completing your trip.')
        return
    }

    const stats = getStats()

    const purchasedItems = state.items.filter(item => item.checked)

    if (!purchasedItems.length) {
        showToast('Check off your purchased items first.')
        return
    }

    const trip = {
        id: makeId(),
        date: new Date().toLocaleString('en-MY', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        }),

        // Preserve every item, including items not purchased.
        items: state.items.map(item => ({ ...item })),

        count: purchasedItems.length,
        total: purchasedItems.reduce(
            (sum, item) => sum + (Number(item.price) || 0),
            0
        ),

        estimatedTotal: stats.total,
        budget: Number(state.budget) || 0,
        remainingBudget:
            (Number(state.budget) || 0) -
            purchasedItems.reduce(
                (sum, item) => sum + (Number(item.price) || 0),
                0
            ),
    }

    if (!Array.isArray(state.history)) {
        state.history = []
    }

    state.history.push(trip)

    // Start a new shopping list after recording the completed trip.
    state.items = []
    ui.page = 'home'
    ui.filter = 'All'
    ui.search = ''
    ui.modal = null

    saveState()
    showToast('Shopping trip completed and saved to history.')
}


// Keyboard shortcuts: Escape closes a modal.
document.addEventListener('input', (event) => {
    if (event.target && event.target.id === 'category-search') {
        const searchInput = event.target;
        const cursorPosition = searchInput.selectionStart;

        ui.categorySearch = searchInput.value;

        render();

        // Restore focus and cursor after rendering
        const updatedInput = document.querySelector('#category-search');

        if (updatedInput) {
            updatedInput.focus();
            updatedInput.setSelectionRange(cursorPosition, cursorPosition);
        }
    }
});


document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && ui.modal) {
        ui.modal = null
        ui.editingId = null
        render()
    }
})

render()
