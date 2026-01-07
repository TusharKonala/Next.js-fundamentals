import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1>Hello World {session && <span>{session.user!.name}</span>}</h1>
        <Link href="/users">Users</Link>
        <ProductCard />
      </main>
    </div>
  );
}
