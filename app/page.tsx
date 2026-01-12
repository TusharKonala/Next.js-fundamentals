"use client";
// import { useState } from "react";
// import _ from "lodash";
// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });
// import HeavyComponent from "./components/HeavyComponent";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Metadata } from "next";

export default function Home() {
  // const session = await getServerSession(authOptions);
  // const [isVisible, setVisible] = useState(false);
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main>
        {/* <h1>Hello World {session && <span>{session.user!.name}</span>}</h1> */}
        <h1>Hello World</h1>
        <button
          onClick={async () => {
            const _ = (await import("lodash")).default;
            const users = [{ name: "a" }, { name: "b" }, { name: "c" }];
            const sorted = _.orderBy(users, ["name"]);
            console.log(sorted);
          }}
        ></button>
        {/* <button onClick={() => setVisible(true)}>Show</button> */}
        <ProductCard />
        {/* {isVisible && <HeavyComponent />} */}
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
