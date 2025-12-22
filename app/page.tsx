import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1>Hello World</h1>
        <Link href="/users">Users</Link>
        <ProductCard />
      </main>
    </div>
  );
}
