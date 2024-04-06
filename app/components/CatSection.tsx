import Link from "next/link";
import React from "react";

type Props = {
  cats: string[];
};

const CatSection = ({ cats }: Props) => {
  return (
    <>
      <h3 className="text-lg font-semibold mb-2.5">Shop by Category</h3>
      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex gap-4">
          {cats.map((cat) => {
            return (
              <li
                className="flex-shrink-0 border p-2 rounded-md text-gray-600"
                key={cat}
              >
                <Link href={`/categories/${cat}`}>{cat.toUpperCase()}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export { CatSection };
