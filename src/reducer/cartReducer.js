const cartReducer = (state, action) => {
  // Helper function to update product amount
  const updateProductAmount = (id, delta) => {
    return state.cart.map((curElem) => {
      if (curElem.id === id) {
        let newAmount = curElem.amount + delta;

        // Ensure amount is between 1 and max (prevent decrementing below 1)
        newAmount = Math.max(1, newAmount); // Ensure it doesn't go below 1
        newAmount = Math.min(newAmount, curElem.max); // Ensure it doesn't exceed the max stock

        return { ...curElem, amount: newAmount };
      }
      return curElem;
    });
  };

  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, amount, product } = action.payload;
      const uniqueId = id; // Removed color as part of unique ID
      const existingProduct = state.cart.find((item) => item.id === uniqueId);

      if (existingProduct) {
        return {
          ...state,
          cart: updateProductAmount(uniqueId, amount),
        };
      } else {
        const cartProduct = {
          id: uniqueId,
          name: product.name,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    }

    case "SET_DECREMENT":
      return {
        ...state,
        cart: updateProductAmount(action.payload, -1),
      };

    case "SET_INCREMENT":
      return {
        ...state,
        cart: updateProductAmount(action.payload, 1),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "CART_TOTAL_ITEM": {
      const totalItem = state.cart.reduce((total, item) => total + item.amount, 0);
      return {
        ...state,
        total_item: totalItem,
      };
    }

    case "CART_TOTAL_PRICE": {
      const totalPrice = state.cart.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
      return {
        ...state,
        total_price: totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
