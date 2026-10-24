import { Suspense } from "react";
import OrderForm from "../../components/OrderForm";

export const metadata = { title: "ثبت سفارش | تهران‌گل" };

export default function OrderPage({ searchParams }) {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <h1 className="mb-8 text-3xl font-extrabold">ثبت سفارش</h1>
      <Suspense>
        <OrderForm initialId={searchParams?.product} />
      </Suspense>
    </div>
  );
}
