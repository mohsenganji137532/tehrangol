import Link from "next/link";
import FlowerArt from "../components/FlowerArt";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import { store } from "../data/store";

export default function Home() {
  const best = products.filter((p) => p.bestseller);
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-10 pt-12 md:grid-cols-2 md:pt-20">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.5] sm:text-5xl sm:leading-[1.5]">
            رزهای تازه، <br />با دستِ گلفروش دسته می‌شوند
          </h1>
          <p className="mt-5 max-w-md text-lg leading-8 text-leaf">{store.slogan}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="rounded-full bg-forest px-7 py-3 text-paper hover:bg-leaf">دیدن محصولات</Link>
            <Link href="/order" className="rounded-full border border-forest px-7 py-3 hover:bg-mist">ثبت سفارش</Link>
          </div>
        </div>
        <div className="bloom arch mx-auto aspect-[4/5] w-full max-w-md overflow-hidden shadow-xl shadow-forest/10">
          <FlowerArt colors={["#B3202D", "#C42B38", "#E8A3B5", "#F4EEE2"]} count={7} label="دسته‌گل رز" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-16">
        <h2 className="text-2xl font-extrabold">دسته‌بندی گل‌ها</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {categories.map((c, i) => (
            <Link key={c.id} href={`/products?category=${c.id}`} className="group flex items-center gap-5 rounded-3xl bg-paper p-5 ring-1 ring-sage/40 hover:ring-leaf">
              <div className="arch h-28 w-24 shrink-0 overflow-hidden">
                <FlowerArt colors={i === 0 ? ["#B3202D"] : ["#E8A3B5", "#F2B38F", "#F4EEE2"]} count={3} label={c.name} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-leaf">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-extrabold">پرفروش‌ترین‌ها</h2>
          <Link href="/products" className="text-sm text-leaf hover:underline">همه‌ی محصولات</Link>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {best.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <section id="about" className="mx-auto mt-24 max-w-6xl scroll-mt-20 px-5">
        <div className="rounded-[2rem] bg-mist px-6 py-12 sm:px-14">
          <h2 className="text-2xl font-extrabold">درباره‌ی {store.name}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-9">{store.about}</p>
        </div>
      </section>

      <section id="contact" className="mx-auto mt-16 max-w-6xl scroll-mt-20 px-5">
        <h2 className="text-2xl font-extrabold">ارتباط با ما</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["تلفن", store.phone, `tel:${store.phone}`],
            ["واتساپ", "پیام در واتساپ", `https://wa.me/${store.whatsapp}`],
            ["تلگرام", "@" + store.telegram, `https://t.me/${store.telegram}`],
            ["اینستاگرام", "@" + store.instagram, `https://instagram.com/${store.instagram}`],
          ].map(([t, v, h]) => (
            <a key={t} href={h} className="rounded-2xl bg-paper p-5 ring-1 ring-sage/40 hover:ring-leaf">
              <p className="text-sm text-leaf">{t}</p>
              <p className="mt-1 font-bold" dir="ltr" style={{ textAlign: "right" }}>{v}</p>
            </a>
          ))}
        </div>
        <p className="mt-5 text-leaf">{store.address} · {store.hours}</p>
      </section>
    </>
  );
}
