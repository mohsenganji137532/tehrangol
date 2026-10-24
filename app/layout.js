import "@fontsource-variable/vazirmatn";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { store } from "../data/store";

export const metadata = {
  title: `${store.name} | ${store.slogan}`,
  description: store.about,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
