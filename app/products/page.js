import ProductsClient from "../../components/ProductsClient";

export const metadata = { title: "محصولات | تهران‌گل" };

export default function ProductsPage({ searchParams }) {
  return <ProductsClient initial={searchParams?.category} />;
}
