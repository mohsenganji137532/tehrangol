import Link from "next/link";
import FlowerArt from "./FlowerArt";
import { formatPrice, toFa } from "../data/products";

export default function ProductCard({ p, footer }) {
  return (
    <article className="flex flex-col">
      <div className="arch aspect-[4/5] overflow-hidden bg-mist">
        <FlowerArt colors={p.art} count={Math.min(p.stems, 7)} label={p.name} />
      </div>
      <div className="mt-4 flex flex-1 flex-col px-1">
        <h3 className="text-lg font-bold">{p.name}</h3>
        <p className="mt-1 text-sm text-leaf">{toFa(p.stems)} شاخه · {p.color}</p>
        <p className="mt-3 text-lg font-extrabold">{formatPrice(p.price)}</p>
        <div className="mt-3 flex items-center gap-3">
          <Link href={`/order?product=${p.id}`} className="rounded-full bg-forest px-5 py-2 text-sm text-paper hover:bg-leaf">سفارش</Link>
          {footer}
        </div>
      </div>
    </article>
  );
}
