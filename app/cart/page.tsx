"use client";

import { useSelector } from "react-redux";
import { IStore } from "../utils/interfaces";
import { Navbar } from "../components/Navbar";
import { ProductCard } from "../components/ProductCard";

export default function Page() {
  const { cart } = useSelector((state: IStore) => state.app);

  return (
    <div className="global-page pb-10">
      <Navbar withBackButton />

      {cart.length ? (
        <>
          <h3 className="text-lg font-semibold mb-2.5 mt-1">Cart Items</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {cart.map((prod) => {
              return (
                <div key={prod.id}>
                  <ProductCard product={prod} />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <h1>No product in cart</h1>
      )}
    </div>
  );
}
