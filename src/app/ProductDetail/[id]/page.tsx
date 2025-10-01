import { getProduct } from "@/lib/api";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id); // Добавьте этот вызов

  if (!product) {
    return (
      <div className="mt-10 flex flex-col gap-15 py-5 justify-center items-center h-[90%] text-center px-3.5">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link
          href="/"
          className="mt-5 inline-block font-extrabold opacity-65 cursor-pointer underline hover:opacity-100 transition-all duration-300"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-15 py-5 justify-center items-center h-screen text-center text-[var(--color-pastel-blue)]">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="w-60 h-60 object-contain my-5"
      />
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-semibold mt-3">${product.price}</p>

      <Link
        href="/"
        className="mt-5 inline-block font-extrabold opacity-65 cursor-pointer underline hover:opacity-100 transition-all duration-300"
      >
        ← Back to Products
      </Link>
    </div>
  );
}
