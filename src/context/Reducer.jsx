export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingCartItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qtn: item.qtn + 1 } : item
        );
        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qtn: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
      
    case "CLEAR_FROM_CART":
      return {
        cart: [],
      };

    case "INCREMENT_ITEM":
      const updatedCartIncremented = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qtn: item.qtn + 1 } : item
      );
      return { ...state, cart: updatedCartIncremented };

    case "DECREMENT_ITEM":
      const updatedCartDecrement = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          const newQuantity = Math.max(1, item.qtn - 1);
          return { ...item, qtn: newQuantity };
        } else {
          return item;
        }
      });
      return { ...state, cart: updatedCartDecrement };

    default:
      state;
  }
};
