import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Metadata } from "next";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1>Hello World {session && <span>{session.user!.name}</span>}</h1>
        <ProductCard />
      </main>
      <Link href="/users">Users</Link>
    </div>
  );
}

// export const metaData: Metadata = {
//   title: "...",
// };

// export async function generateMetaData(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: product.title,
//     description: "...",
//   };
// }
