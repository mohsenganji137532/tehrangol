import { store } from "../data/store";

export default function Footer() {
  return (
    <footer className="mt-24 bg-forest text-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm sm:flex-row sm:justify-between">
        <p className="font-bold text-paper">{store.name}</p>
        <p>{store.address}</p>
        <p>{store.hours}</p>
      </div>
    </footer>
  );
}
