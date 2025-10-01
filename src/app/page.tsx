import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();
  return (
    <div className={`bg-[--background-gradient-main] py-5`}>
      <div className="flex justify-center flex-wrap gap-15">
        {products.map((product: any) => (
          <Link
            href={`/ProductDetail/${product.id}`}
            key={product.id}
            className="flex flex-col justify-center items-center gap-3 shadow-[0_0_10px_var(--color-midnight-purple)] text-[var(--color-pastel-blue)] text-center border-2 border-[var(--color-midnight-purple)] p-4 w-[90%] xl:w-[30%] rounded-2xl cursor-pointer hover:border-4 hover:shadow-[0_0_20px_var(--color-midnight-purple)]  transition-all duration-300"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
            />
            <h3 className="text-lg font-medium">{product.title}</h3>
            <p className="text-lg font-bold underline">{`${product.price}$`}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
