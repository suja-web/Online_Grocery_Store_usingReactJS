import p1_img from "../asset/daawat.jpeg";
import p2_img from "../asset/biscuit.jpeg";
import p3_img from "../asset/maggi.jpg";
import p4_img from "../asset/chocolate.jpg";

import p8_img from "../asset/kurkure.jpg";

import p12_img from "../asset/kaju.jpg";

import p14_img from "../asset/Chana-dal.jpg";
import p15_img from "../asset/ghee.jpg";
import p16_img from "../asset/Anjeer.jpg";
import p17_img from "../asset/oil.jpg";

import p28_img from "../asset/spices1.jpg";

import p35_img from "../asset/Masoor-Dal.png";
import p36_img from "../asset/bread.jpg";
import p37_img from "../asset/popcorn.jpeg";
import p38_img from "../asset/tomato_sauce.jpeg";
import p39_img from "../asset/shampoo.jpg";
import p40_img from "../asset/detergent.jpg";
import p41_img from "../asset/snack.jpeg";
import p42_img from "../asset/soap.jpg";
import p43_img from "../asset/pedigree.png";


let all_product = [

  {
    id: 1,
    name: "Daawat Basamati Rice ",
    category: "Rice",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    description:"The connoisseur's choice, Daawat Traditional Basmati Rice, with its rich aroma, superb flavor, perfect form and white lustre makes even steamed rice a delicious, aromatic work of art. Each grain is aged to perfection, reviving the splendor of royal, heritage cuisine."
  },
  {
    id: 2,
    name: "GOOD DAY BUTTER",
    category: "Biscuits",
    image: p2_img,
    new_price: 20.00,
    old_price: 24.00,
    description:"India’s original cookie, Britannia Good Day has been a popular favourite since 1986. These crunchy, buttery cookies are abundantly loaded with delectable ingredients - from cashews, almonds and pistachios to chocolatey delights. Make every day special with the wholesome Britannia Good Day cookies!"
  },
  {
    id: 3,
    name: "Maggi 2 Minute Masala Noodles",
    category: "Grocery",
    image: p3_img,
    new_price: 24.0,
    old_price: 30.5,
    description:"Easy to prepare: With simple cooking instructions, Maggi Noodles can be ready to eat in just a few minutes, making them perfect for on-the-go meals or a quick snack."
  },
  {
    id: 4,
    name: "Cadbury Chocolate Combo With Basket",
    category: "Chocolate",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
    description:"Milk Chocolate Bars: Contains 16 milk chocolate bars with almond flavor"
  },
  
    
    
  {
    id: 8,
    name: "Kurkure Combo",
    category: "Snacks",
    image: p8_img,
    new_price: 80.0,
    old_price: 200.0,
    description:"Kurkure is a brand of spiced crunchy puffcorn snacks made up of rice, lentil and corn, owned by Lays. It was launched in 1999 in India. "
  },
  
  
  
  {
    id: 12,
    name: "Nutritional Value Of Kaju",
    category: "DryFruit",
    image: p12_img,
    new_price: 800.0,
    old_price: 900.5,
    description:"This delicious dried fruit is a powerhouse of nutrition. Kaju has lots of nutritional benefits such as has protein, minerals, antioxidants, vitamins, and loads of energy."
  },
  
  {
    id: 14,
    name: "Chana Dal",
    Category:"Dal & Pulses",
    image: p14_img,
    new_price: 60.0,
    old_price: 100.5,
    description:"Chickpeas are a helpful source of zinc, folate and protein"
  },
  {
    id: 15,
    name: "Pure Ghee",
    category:"Oil & Ghee",
    image: p15_img,
    new_price: 1000.0,
    old_price: 1050.5,
    description:" Ghee has rich, delicious buttery flavor, is nutritious, and easily digestible."
  },
  {
    id: 16,
    name: "Anjeer",
    category: "Dry Fruits",
    image: p16_img,
    new_price: 850.0,
    old_price: 900.5,
    description:"Anjeer consists of phenolic compounds that are beneficial to human health due to their antioxidant activity as hydrogen donators, reducing agents, singlet oxygen quenchers, free radical scavengers,"
  },
  {
    id: 17,
    name: "SunFlower Oil",
    category:"Oil & Ghee",
    image: p17_img,
    new_price: 500.0,
    old_price: 550.5,
    description:"Sunflower oil is the non-volatile oil pressed from the seeds of the sunflower (Helianthus annuus). Sunflower oil is commonly used in food as a frying oil, and in cosmetic formulations as an emollient. Sunflower oil is primarily composed of linoleic acid, a polyunsaturated fat, and oleic acid, a monounsaturated fat."
  },
  {
    id: 28,
    name: "Spices Masala",
    category:"Masala",
    image: p28_img,
    new_price: 100.0,
    old_price: 150.0,
    description:"Desi Kitchen Garam Masala Whole Comes With Whole spices of cinnamon, mace, peppercorns, coriander seeds, cumin seeds, and Both Green and Black cardamom pods , Chili Whole, Nutmeg, Cloves, Bay Leaves."
  },
  
  {
    id: 35,
    name: "Masoor Dal",
    category: "Dal & Pulses",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
    description:"Our pure masoor dal has multiple benefits to help you improve your physical health even more than right now. Its high fibre and high protein contents help you lose weight, manage your blood pressure by being a rich source of potassium"
  },
  {
    id: 36,
    name: "Brown Bread",
    category: "Bakery",
    image: p36_img,
    new_price: 25.0,
    old_price: 50.5,
    description:"  Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet."
  },
  
  {
    id: 37,
    name: "Popcorn",
    category: "Snacks",
    image: p37_img,
    new_price: 100.0,
    old_price: 150.5,
    description:"Popcorn is a variety of corn kernel which expands and puffs up when heated; the same names also refer to the foodstuff produced by the expansion. A popcorn kernel's strong hull contains the seed's hard, starchy shell endosperm with 14–20% moisture, which turns to steam as the kernel is heated."
  },
  {
    id: 38,
    name: "Tomato Sauce",
    category: "Snacks",
    image: p38_img,
    new_price: 80.0,
    old_price: 150.5,
    description:"Tomato sauce can refer to many different sauces made primarily from tomatoes, usually to be served as part of a dish, rather than as a condiment. Tomato sauces are common for meat and vegetables, but they are perhaps best known as bases for sauces for Mexican salsas and Italian pasta dishes."
  },
  {
    id: 39,
    name: "Shampoo",
    category: "Toiletries",
    image: p39_img,
    new_price: 300.0,
    old_price: 320.5,
    description:"Shampoo is a hair care product, typically in the form of a viscous liquid, that is used for cleaning hair. Less commonly, shampoo is available in solid bar format. Shampoo is used by applying it to wet hair, massaging the product into the scalp, and then rinsing it out."
  },
  {
    id: 40,
    name: " Panasonic Detergent",
    category: "Toiletries",
    image: p40_img,
    new_price: 250.0,
    old_price: 300.5,
    description:" detergent is a surfactant or a mixture of surfactants with cleansing properties when in dilute solutions."
  },
  {
    id: 41,
    name: "Snack",
    category: "Snacks",
    image: p41_img,
    new_price: 80.0,
    old_price: 150.5,
    description:"a small amount of food that is eaten between meals, or a very small meal: I had a huge lunch, so I'll only need a snack for dinner. Fresh or dried fruit makes an ideal snack."
  },
  {
    id: 42,
    name: " Ghar Soap",
    category: "Toiletries",
    image: p42_img,
    new_price: 100.0,
    old_price: 180.5,
    description:"Luxurious Blend: Elevate your bathing experience with Ghar Soap Sandalwood & Saffron Magic Soap, a handcrafted fusion of Chandan (Sandalwood) and Kesar (Saffron) that rejuvenates and refreshes your skin."
  },
  
  {
    id: 43,
    name: "Pedigree",
    category: "Pet Food",
    image: p43_img,
    new_price: 455.0,
    old_price: 500.5,
    description:"The Pedigree Dog Food Milk, Rice and Vegetables in a 3 kg pack has been specially formulated to maintain general health and the ideal weight of your dog. This comes with a palatable milk and vegetable flavor. It helps to maintain strong bones and teeth"
  },
  
  
];

export default all_product;
