import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <div className="container m-auto px-5">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="ecommerce_business.webp"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to MyShop
            </h1>
            <p className="mb-8 leading-relaxed">
              A Sample Ecommerce Website built with the NextJS frontend and
              Strapi.io to create backend APIs. Strapi is a headless CMS which
              make life easier as you dont have to write backend code to create
              APIs.
            </p>
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                onClick={() => {
                  router.push("/products");
                }}
              >
                Products
              </button>
              <button
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                onClick={() => {
                  router.push("/contact");
                }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
