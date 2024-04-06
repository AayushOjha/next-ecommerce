import { Navbar } from "@/app/components/Navbar";
import { ProductCard } from "@/app/components/ProductCard";
import { categoriesApi } from "@/app/utils/api/categories";

export const revalidate = 60 * 60 * 12; // revalidate this page every 12 hrs

export default async function Page({ params }: { params: { slug: string } }) {
  const products = await categoriesApi.getCatProducts(params.slug);

  if (products.length) {
    return (
      <div className="global-page pb-10">
        <Navbar withBackButton />
        <h3 className="text-lg font-semibold mb-2.5 mt-1">
          {decodeURIComponent(params.slug.toUpperCase())}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {products.map((prod) => {
            return (
              <div key={prod.id}>
                <ProductCard product={prod} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <h1>No products found</h1>;
  }
}
