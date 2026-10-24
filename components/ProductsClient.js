"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { products, categories, formatPrice, toFa } from "../data/products";

export default function ProductsClient({ initial }) {
  const [cat, setCat] = useState(initial || "all");
  const [picked, setPicked] = useState([]);
  const shown = products.filter((p) => cat === "all" || p.category === cat);
  const chosen = products.filter((p) => picked.includes(p.id));

  const toggle = (id) =>
    setPicked((s) => (s.includes(id) ? s.filter((x) => x !== id) : s.length >= 3 ? s : [...s, id]));

  const tabs = [{ id: "all", name: "همه" }, ...categories];
  const rows = [
    ["قیمت", (p) => formatPrice(p.price)],
    ["تعداد شاخه", (p) => toFa(p.stems)],
    ["رنگ", (p) => p.color],
    ["قیمت هر شاخه", (p) => formatPrice(Math.round(p.price / p.stems))],
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-3xl font-extrabold">محصولات</h1>
      <div className="mt-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setCat(t.id)} className={`rounded-full px-5 py-2 text-sm ${cat === t.id ? "bg-forest text-paper" : "bg-paper ring-1 ring-sage/50 hover:bg-mist"}`}>{t.name}</button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProductCard key={p.id} p={p} footer={
            <label className="flex cursor-pointer items-center gap-2 text-sm text-leaf">
              <input type="checkbox" checked={picked.includes(p.id)} onChange={() => toggle(p.id)} className="h-4 w-4 accent-[#5E7F63]" />
              مقایسه
            </label>
          } />
        ))}
      </div>

      <section className="mt-16 rounded-3xl bg-paper p-6 ring-1 ring-sage/40">
        <h2 className="text-xl font-extrabold">مقایسه‌ی محصولات</h2>
        {chosen.length < 2 ? (
          <p className="mt-3 text-leaf">دست‌کم دو محصول را با گزینه‌ی «مقایسه» انتخاب کنید (حداکثر سه محصول).</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-right">
              <thead>
                <tr><th className="p-3"></th>{chosen.map((p) => <th key={p.id} className="p-3 font-bold">{p.name}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map(([label, fn]) => (
                  <tr key={label} className="border-t border-sage/40">
                    <td className="p-3 text-leaf">{label}</td>
                    {chosen.map((p) => <td key={p.id} className="p-3">{fn(p)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
