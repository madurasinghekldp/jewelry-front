import { ProductType } from "@/types/product-type";

export const products:ProductType[] = [
  {
    id: 1,
    name: "Silver Earring with Blue Sapphire",
    description: "Crafted with precision, these elegant silver earrings feature a stunning blue sapphire at the center. Perfect for evening wear, they add a subtle touch of luxury to any outfit. The high-quality silver ensures durability and long-lasting shine. Ideal for those who appreciate timeless beauty with a modern twist.",
    quantity: 12,
    material: "silver",
    gender: "ladies",
    price: 25000,
    image: "/images/Sapphire_Elegance_with_Diamond_Sparkle.png",
    orderedCount: 3,
    viewCount: 10,
  },
  {
    id: 2,
    name: "18K Gold Pendant with Ruby Gemstone",
    description: "This luxurious pendant is made from 18K pure gold and is adorned with a natural ruby gemstone. The deep red hues of the ruby symbolize passion and vitality, making it a perfect gift for loved ones. Designed with intricate detailing, this pendant is both classy and captivating. Wear it to elevate your everyday look or for special occasions.",
    quantity: 5,
    material: "gold",
    gender: "ladies",
    price: 75500,
    image: "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
    orderedCount: 2,
    viewCount: 25,
  },
  {
    id: 3,
    name: "Men's Titanium Wedding Band",
    description: "This solid titanium wedding band is designed for the modern man who values strength and style. With its sleek matte finish and comfortable fit, it's perfect for daily wear. Titanium is known for its scratch-resistant and hypoallergenic properties. A great symbol of lasting commitment and durability.",
    quantity: 20,
    material: "titanium",
    gender: "gents",
    price: 19500,
    image: "/images/Sapphire_Elegance_with_Diamond_Sparkle.png",
    orderedCount: 5,
    viewCount: 30,
  },
  {
    id: 4,
    name: "Ladies Rose Gold Chain Necklace",
    description: "Chic and feminine, this rose gold chain necklace adds a soft glow to any ensemble. Crafted with a delicate touch, it's ideal for layering or wearing solo. The warm tone of rose gold flatters all skin tones and exudes sophistication. A versatile piece suitable for both casual and formal occasions.",
    quantity: 10,
    material: "rose gold",
    gender: "ladies",
    price: 28900,
    image: "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
    orderedCount: 4,
    viewCount: 40,
  },
  {
    id: 5,
    name: "Silver Cufflinks with Onyx Stone",
    description: "A bold choice for any formal event, these silver cufflinks feature a polished onyx stone in the center. Designed for gentlemen with a taste for elegance, they add a refined touch to shirts and suits. The contrast between the dark onyx and bright silver is striking. A great gift idea for professionals or grooms.",
    quantity: 15,
    material: "silver",
    gender: "gents",
    price: 14500,
    image: "/images/Sapphire_Elegance_with_Diamond_Sparkle.png",
    orderedCount: 6,
    viewCount: 28,
  },
  {
    id: 6,
    name: "Pearl Bracelet with Gold Accents",
    description: "Combining natural freshwater pearls with subtle gold accents, this bracelet radiates grace and beauty. Each pearl is hand-selected for its luster and shape. The gold elements add a touch of sophistication without overpowering the design. Ideal for weddings, parties, or elegant dinners.",
    quantity: 8,
    material: "pearl and gold",
    gender: "ladies",
    price: 35000,
    image: "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
    orderedCount: 3,
    viewCount: 18,
  },
  {
    id: 7,
    name: "Stainless Steel Men's Chain",
    description: "Durable and stylish, this men's chain is crafted from high-grade stainless steel. It offers a rugged yet modern look that suits everyday outfits or biker style. Its heavy-duty design ensures longevity while remaining comfortable. A great addition to any contemporary man’s collection.",
    quantity: 25,
    material: "stainless steel",
    gender: "gents",
    price: 9500,
    image: "/images/Sapphire_Elegance_with_Diamond_Sparkle.png",
    orderedCount: 7,
    viewCount: 50,
  },
  {
    id: 8,
    name: "Diamond Stud Earrings",
    description: "These classic diamond studs feature brilliant-cut diamonds set in solid white gold. Designed to catch light from every angle, they bring sparkle and elegance to any look. Perfect for birthdays, anniversaries, or daily luxury. Crafted for those who appreciate minimalism with a hint of glamour.",
    quantity: 6,
    material: "white gold and diamond",
    gender: "ladies",
    price: 98000,
    image: "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
    orderedCount: 2,
    viewCount: 32,
  },
  {
    id: 9,
    name: "Beaded Chakra Bracelet for Men",
    description: "This handcrafted bracelet features natural gemstone beads aligned with the seven chakras. Made with durable elastic and lava stones for essential oil use, it promotes balance and energy. Ideal for wellness lovers and spiritual individuals. Stylish enough to be worn as a fashion accessory, too.",
    quantity: 30,
    material: "gemstones and lava stone",
    gender: "gents",
    price: 4200,
    image: "/images/Sapphire_Elegance_with_Diamond_Sparkle.png",
    orderedCount: 9,
    viewCount: 45,
  },
  {
    id: 10,
    name: "White Gold Engagement Ring with Emerald",
    description: "This stunning engagement ring is crafted in white gold and features a brilliant green emerald centerpiece. Surrounded by delicate diamond accents, it symbolizes renewal and everlasting love. A modern take on a timeless design, perfect for proposing to someone truly special. Elegance and emotion in one perfect package.",
    quantity: 4,
    material: "white gold and emerald",
    gender: "ladies",
    price: 112000,
    image: "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
    orderedCount: 1,
    viewCount: 12,
  }
];

// Sort by viewCount descending and take top 6
export const popularItems = products
  .sort((a, b) => b.viewCount - a.viewCount)
  .slice(0, 6)
  .map((item) => ({
    id: item.id,
    name: item.name,
    viewCount: item.viewCount,
    price: item.price,
    image: item.image,
  }));

// Sort by id descending and take top 6
export const newItems = products
  .sort((a, b) => b.id - a.id)
  .slice(0, 6)
  .map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
    material: item.material,
  }));

export const relatedItems = products
  .slice(0, 6)
  .map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
    material: item.material,
  }));

  export const productById = (id:number) => {
    return products.find((item)=>item.id===Number(id));
  }