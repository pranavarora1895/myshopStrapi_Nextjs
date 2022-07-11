import React from "react";
import Link from "next/link";
const Products = (props) => {
  return (
    <div className="container m-auto px-5">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0 py-4 px-2">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Our Products
        </h1>
        <div className="h-1 w-20 bg-yellow-500 rounded"></div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((product) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                  <a className="block relative h-60 rounded overflow-hidden mb-8">
                    <img
                      alt="ecommerce"
                      className="object-center h-full block mx-auto"
                      src={
                        product.attributes.image.data &&
                        product.attributes.image.data.attributes.name
                      }
                    />
                  </a>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.attributes.Category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {product.attributes.title}
                    </h2>
                    <p className="mt-1">₹{product.attributes.Price}</p>

                    <div className="flex mt-2">
                      <div className="hidden bg-red-500 bg-blue-500 bg-green-500 bg-yellow-500 bg-white bg-black"></div>
                      <button
                        className={
                          product.attributes.Color === "white" ||
                          product.attributes.Color === "black"
                            ? `border-2 mx-auto md:mx-0 border-gray-300 rounded-full w-6 h-6 focus:outline-none bg-${product.attributes.Color}`
                            : `border-2 mx-auto md:mx-0 border-gray-300 rounded-full w-6 h-6 focus:outline-none bg-${product.attributes.Color}-500`
                        }
                      ></button>
                    </div>
                    <Link href={`product/${product.attributes.slug}`}>
                      <button className="flex mx-auto md:mx-0 mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded font-semibold">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:1337/api/products?populate=*", {
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer 829d54ba9558d85bffea01d17f87bb43376a55694cfd9929a42ab92ccd42aaed1faa22b490945fd9545f1ede344561f75c02634d2150a034e839d0ac98d42bcbb6ac474ad45c9132bd831d625c2f6363743d093b6254afd8f04b9c83bdb3f21e5aa46dec217a4fd3c8d4a921f90fb09689093cad2095511d1cb957a78dfd7761",
    },
  });
  let products = await data.json();

  return {
    props: { products }, // will be passed to the page component as props
  };
}

export default Products;
