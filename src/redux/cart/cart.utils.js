//utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToAdd.id;
  });

  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, counter: cartItem.counter + 1 }
        : cartItem;
    });
  } else {
    return [...cartItems, { ...cartItemToAdd, counter: 1 }];
  }
};

export const removeFromCart = (cartItems, cartItemToRemove) => {
  const filtered = cartItems.filter((cartItem) => {
    return cartItem.id !== cartItemToRemove.id;
  });

  return filtered;
};