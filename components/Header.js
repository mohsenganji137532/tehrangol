import Link from "next/link";
import { store } from "../data/store";

const links = [
  { href: "/products", label: "محصولات" },
  { href: "/#about", label: "درباره‌ی ما" },
  { href: "/#contact", label: "تماس" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-sage/40 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-forest">{store.name}</Link>
        <nav className="flex items-center gap-4 text-sm sm:gap-7">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-leaf">{l.label}</Link>
          ))}
          <Link href="/order" className="rounded-full bg-forest px-4 py-2 text-paper hover:bg-leaf">ثبت سفارش</Link>
        </nav>
      </div>
    </header>
  );
}
