import { Navbar } from "@/app/components/Navbar";
import { ProductsApi } from "@/app/utils/api/products";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import { CartButton } from "@/app/components/CartButton";
import Head from "next/head";

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await ProductsApi.index(params.slug);

  return (
    <>
      <Head>
        <title>{product.title} - Buy Online | ABC</title>
        <meta
          name="description"
          content={product.description.substring(0, 150)}
        />
      </Head>
      <div className="global-page pb-10">
        <Navbar withBackButton />
        <div className="flex flex-col gap-10">
          <div className="w-fit mx-auto">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              layout="contain"
            />
          </div>

          <div>
            <div className="flex justify-end mb-1.5 pr-2.5">
              <CartButton product={product} />
            </div>
            <div className="flex flex-col gap-2.5">
              <h2 className="text-gray-800 font-semibold">{product.title}</h2>
              <div className="text-gray-600 font-medium flex justify-between items-center">
                <p>₹{product.price}</p>
                <div className="font-medium text-gray-600">
                  <StarIcon fontSize="inherit" /> {product.rating.rate}
                  {`(${product.rating.count})`}
                </div>
              </div>
              <div>
                <p className="text-xs underline mb-1">product description:</p>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
