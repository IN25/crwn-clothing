import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";
import { removeFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden, //we do not need a payload here because we simply setting hidden to the opposite value - true/falses
      };

    case CartActionTypes.ADD_ITEM:
      //returns an object with all of the state, and carItems array with older values and a new value
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;