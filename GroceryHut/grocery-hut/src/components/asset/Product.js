import p36_img from '../asset/bread.jpg'
import p37_img from "../asset/popcorn.jpeg";
import p38_img from "../asset/tomato_sauce.jpeg";
import p39_img from "../asset/shampoo.jpg";
import p40_img from "../asset/detergent.jpg";
import p41_img from "../asset/snack.jpeg";
import p42_img from "../asset/soap.jpg";
import p43_img from "../asset/pedigree.png";

let Product=[
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

]
export default Product;
