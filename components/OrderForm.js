"use client";
import { useState } from "react";
import { products, formatPrice } from "../data/products";
import { store } from "../data/store";

export default function OrderForm({ initialId }) {
  const [id, setId] = useState(products.some((p) => p.id === initialId) ? initialId : products[0].id);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const p = products.find((x) => x.id === id);

  const message =
    `سفارش جدید از سایت ${store.name}\n` +
    `محصول: ${p.name} (${p.stems} شاخه)\nقیمت: ${formatPrice(p.price)}\n` +
    `نام: ${name}\nتلفن: ${phone}\nآدرس: ${address}\n` +
    (note ? `توضیحات: ${note}` : "");
  const ready = name.trim() && phone.trim() && address.trim();
  const enc = encodeURIComponent(message);
  const field = "mt-1 w-full rounded-xl border border-sage/60 bg-paper px-4 py-3 outline-none focus:border-leaf";

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <label className="block">محصول
          <select value={id} onChange={(e) => setId(e.target.value)} className={field}>
            {products.map((x) => <option key={x.id} value={x.id}>{x.name} — {formatPrice(x.price)}</option>)}
          </select>
        </label>
        <label className="block">نام و نام خانوادگی
          <input value={name} onChange={(e) => setName(e.target.value)} className={field} />
        </label>
        <label className="block">شماره‌ی تماس
          <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" className={field} />
        </label>
        <label className="block">آدرس تحویل
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows={3} className={field} />
        </label>
        <label className="block">توضیحات (اختیاری)
          <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2} className={field} />
        </label>
      </div>
      <div className="h-fit rounded-3xl bg-mist p-6">
        <h2 className="text-xl font-extrabold">خلاصه‌ی سفارش</h2>
        <p className="mt-3 font-bold">{p.name}</p>
        <p className="text-leaf">{formatPrice(p.price)}</p>
        <p className="mt-5 text-sm leading-7 text-leaf">پس از تکمیل فرم، سفارش را از یکی از راه‌های زیر برای ما بفرستید. پیام آماده برایتان نوشته می‌شود.</p>
        <div className="mt-5 flex flex-col gap-3">
          <a aria-disabled={!ready} href={ready ? `https://wa.me/${store.whatsapp}?text=${enc}` : undefined} target="_blank" rel="noreferrer"
            className={`rounded-full px-6 py-3 text-center text-paper ${ready ? "bg-forest hover:bg-leaf" : "cursor-not-allowed bg-sage"}`}>ارسال سفارش در واتساپ</a>
          <a aria-disabled={!ready} href={ready ? `https://t.me/share/url?url=${encodeURIComponent("https://t.me/" + store.telegram)}&text=${enc}` : undefined} target="_blank" rel="noreferrer"
            className={`rounded-full border px-6 py-3 text-center ${ready ? "border-forest hover:bg-paper" : "cursor-not-allowed border-sage text-leaf"}`}>ارسال سفارش در تلگرام</a>
          <a href={`tel:${store.phone}`} className="text-center text-sm text-leaf hover:underline">یا تماس تلفنی</a>
        </div>
        {!ready && <p className="mt-4 text-sm text-leaf">برای فعال شدن دکمه‌ها، نام، تلفن و آدرس را پر کنید.</p>}
      </div>
    </div>
  );
}
