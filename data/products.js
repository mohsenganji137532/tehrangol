// محصولات: قیمت (به تومان)، تعداد شاخه و ... را اینجا تغییر دهید.
// category: "red" برای رز قرمز، "colored" برای رزهای رنگی
export const categories = [
  { id: "red", name: "رز قرمز", desc: "کلاسیک و ماندگار" },
  { id: "colored", name: "رزهای رنگی", desc: "صورتی، سفید، زرد و هلویی" },
];

export const products = [
  { id: "r1", name: "دسته‌گل رز قرمز کلاسیک", category: "red", stems: 12, price: 1850000, color: "قرمز", bestseller: true, art: ["#B3202D", "#C42B38", "#9E1A27"], desc: "دوازده شاخه رز قرمز هلندی با سبزینه و کاغذ کرافت." },
  { id: "r2", name: "دسته‌گل رز قرمز بزرگ", category: "red", stems: 30, price: 4200000, color: "قرمز", bestseller: true, art: ["#A81C2A", "#C42B38", "#8E1622", "#B3202D"], desc: "سی شاخه رز قرمز ممتاز، مناسب سالگرد و خواستگاری." },
  { id: "r3", name: "رز قرمز تک‌شاخه", category: "red", stems: 1, price: 180000, color: "قرمز", bestseller: false, art: ["#B3202D"], desc: "یک شاخه رز قرمز با پوشش شفاف و روبان." },
  { id: "c1", name: "دسته‌گل رز صورتی ملایم", category: "colored", stems: 15, price: 2100000, color: "صورتی", bestseller: true, art: ["#E8A3B5", "#F0B9C7", "#DE8CA1"], desc: "پانزده شاخه رز صورتی پاستلی با گل‌های مکمل." },
  { id: "c2", name: "دسته‌گل رز سفید", category: "colored", stems: 12, price: 1950000, color: "سفید", bestseller: false, art: ["#F4EEE2", "#EDE4D2", "#FAF6EC"], desc: "دوازده شاخه رز سفید، ساده و باشکوه." },
  { id: "c3", name: "دسته‌گل رز هلویی", category: "colored", stems: 20, price: 3000000, color: "هلویی", bestseller: true, art: ["#F2B38F", "#F6C6A8", "#E89F78"], desc: "بیست شاخه رز هلویی با رنگ گرم و نرم." },
  { id: "c4", name: "دسته‌گل رز زرد", category: "colored", stems: 10, price: 1500000, color: "زرد", bestseller: false, art: ["#F0C94D", "#F5D872", "#E5B92F"], desc: "ده شاخه رز زرد، شاد و پرانرژی." },
];

export const formatPrice = (n) => n.toLocaleString("fa-IR") + " تومان";
export const toFa = (n) => Number(n).toLocaleString("fa-IR");
