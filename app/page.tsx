import { CatSection } from "./components/CatSection";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { Welcome } from "./components/Welcome";
import { categoriesApi } from "./utils/api/categories";
import { ProductsApi } from "./utils/api/products";

export const revalidate = 60 * 60 * 12; // revalidate this page every 12 hrs

export default async function Home() {
  const [cats, products] = await Promise.all([
    categoriesApi.list(),
    ProductsApi.list({}),
  ]);

  // NOTE: api do not have feature to fetch latest product so we hare finding top rated products
  let topRatedProducts = products
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 6);

  return (
    <div className="global-page pb-10">
      <Navbar />
      <Welcome />
      <CatSection cats={cats} />
      <h3 className="text-lg font-semibold mb-2.5 mt-10">Top Rated Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {topRatedProducts.map((prod) => {
          return (
            <div key={prod.id}>
              <ProductCard product={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
