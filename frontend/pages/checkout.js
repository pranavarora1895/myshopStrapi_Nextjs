import React, { useEffect, useState } from "react";

const Checkout = (props) => {
  const { cart } = props;
  const [subTotal, setSubTotal] = useState(0);
  const [form, setForm] = useState({});
  useEffect(() => {
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      total = total + element[1];
    }
    setSubTotal(total);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container m-auto px-5">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Your Cart
            </h1>
            <div className="leading-relaxed mt-4">
              <h2 className="text-2xl font-bold mb-2">Cart Details:</h2>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500 font-semibold">Product Name</span>
                <span class="ml-auto text-gray-900 font-semibold">Price</span>
              </div>
              {cart.map((item) => {
                return (
                  <div
                    className="flex border-t border-gray-200 py-2"
                    key={item[0]}
                  >
                    <span className="text-gray-500">{item[0]}</span>
                    <span className="ml-auto text-gray-900">₹{item[1]}</span>
                  </div>
                );
              })}
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500 font-bold">SubTotal</span>
                <span className="ml-auto text-gray-900 font-bold">
                  ₹{subTotal}
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Checkout
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                onChange={handleChange}
                value={form.name}
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="address"
                className="leading-7 text-sm text-gray-600"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={handleChange}
                value={form.address}
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={form.phone}
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="hidden" name="subTotal" value={subTotal}>
              {subTotal}
            </div>
            <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Pay Now
            </button>
            <p className="text-xs text-gray-500 mt-3">100% Secured Payment</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
