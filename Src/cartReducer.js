const ADD = 'ADD';
const PLUS = 'PLUS';
const MINUS = 'MINUS';

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {

  if (action.type === ADD) {
    const item = action.payload;
    let newCart = [];
    let isFound = false;

    for (let i = 0; i < state.cart.length; i++) {

      if (state.cart[i].id === item.id) {
        isFound = true;

        newCart.push({
          ...state.cart[i],
          quantity: state.cart[i].quantity + 1,
        });

      } else {
        newCart.push(state.cart[i]);
      }
    }

    if (!isFound) {
      newCart.push({
        ...item,
        quantity: 1,
      });
    }

    return { cart: newCart };
  }

  if (action.type === PLUS) {
    let newCart = [];

    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].id === action.payload) {
        newCart.push({
          ...state.cart[i],
          quantity: state.cart[i].quantity + 1,
        });
      } else {
        newCart.push(state.cart[i]);
      }
    }

    return { cart: newCart };
  }

  if (action.type === MINUS) {
    let newCart = [];

    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].id === action.payload) {
        if (state.cart[i].quantity > 1) {
          newCart.push({
            ...state.cart[i],
            quantity: state.cart[i].quantity - 1,
          });
        }
      } else {
        newCart.push(state.cart[i]);
      }
    }

    return { cart: newCart };
  }

  return state;
};

export const addItem = (item) => {
  return { type: ADD, payload: item };
};

export const plus = (id) => {
  return { type: PLUS, payload: id };
};

export const minus = (id) => {
  return { type: MINUS, payload: id };
};

