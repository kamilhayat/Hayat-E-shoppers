const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      const all_products = action.payload;
      const maxPrice = Math.max(...all_products.map((item) => item.price));
      const minPrice = Math.min(...all_products.map((item) => item.price));

      return {
        ...state,
        all_products,
        filter_products: all_products,
        filters: { ...state.filters, maxPrice, price: maxPrice, minPrice },
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          text: "",
          category: "all",
          company: "all",
          price: state.filters.maxPrice,
        },
      };

    case "FILTER_PRODUCTS":
      let { text, category, company, price } = state.filters;
      let tempProducts = [...state.all_products];

      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      if (category !== "all") {
        tempProducts = tempProducts.filter((product) => product.category === category);
      }

      if (company !== "all") {
        tempProducts = tempProducts.filter((product) => product.company === company);
      }

      tempProducts = tempProducts.filter((product) => product.price <= price);

      return { ...state, filter_products: tempProducts };

    default:
      return state;
  }
};

export default filterReducer;
