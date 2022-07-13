// path: ./src/api/restaurant/routes/custom-restaurant.js

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/order/pretransaction",
      handler: "custom.exampleAction",
    },
  ],
};
