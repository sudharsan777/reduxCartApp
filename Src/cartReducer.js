const ADD = 'ADD';
const PLUS = 'PLUS';
const MINUS = 'MINUS';

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {

  if (action.type  === ADD) // its helps to add The new Items to the CART. when we click on the add button using dispatch (ADD)
    {  

    let newCart = []; 
    let isFound = false; 

    for (let i = 0; i < state.cart.length; i++)  //it will loop the cart items and check whether the item that we want to add already exists in the cart or not.   
      {

      console.log(" Cart Item unique:", state.cart[i]);

      if (state.cart[i].id === action.payload.id  ) 
        
       {
        
        

        isFound = true; // set the flag to true if the item is found in the cart. this will help us to know whether we need to add a new item to the cart or not after the loop.

        newCart.push({
          ...state.cart[i],
          quantity: state.cart[i].quantity + 1,
          // we are using the spread operator to copy the existing cart item and then we are updating the quantity by increasing it by 1. this way we are not mutating the existing cart item, we are creating a new object with the updated quantity and pushing it to the new cart array.
        });

      } else {
        console.log("Hii testing")
        newCart.push(state.cart[i]);
         // if the item that we want to add doesn't exist in the cart, we will push the existing cart item to the new cart array as it is. this way we are not losing any existing cart items while adding a new item to the cart.
      }
    }

    console.log(" Is Item Found ?", isFound);

    if (!isFound) {
      // if the item that we want to add doesn't exist in the cart, we will push the new item to the new cart array with quantity 1. this way we are adding a new item to the cart with quantity 1.
      console.log(" New Item Added To Cart");

      newCart.push({
        ...action.payload,
        quantity: 1,
      }); // we are using the spread operator to copy the existing item 
    }

    console.log(" Updated Cart:", newCart);

    return { cart: newCart };
  }

 
  if (action.type === PLUS) {

    console.log("increment will happen", action.payload);
    let newCart = [];

    for (let i = 0; i < state.cart.length; i++) {

      console.log(" checking the cart !:", state.cart[i]);

      if (state.cart[i].id === action.payload) {


        newCart.push({
          ...state.cart[i],
          quantity: state.cart[i].quantity + 1,
        });

      } else {
        newCart.push(state.cart[i]);
      }
    }

    console.log("New Updated Cart:", newCart);

    return { cart: newCart };
  }

  
  if (action.type === MINUS) {

    console.log("decrement will happen :", action.payload);

    let newCart = [];

    for (let i = 0; i < state.cart.length; i++) {

      console.log("getting data :", state.cart[i]);

      if (state.cart[i].id === action.payload) {

        if (state.cart[i].quantity > 1) {

          

          newCart.push({
            ...state.cart[i],
            quantity: state.cart[i].quantity - 1,
          });

        } else {
          
        }

      } else {
        newCart.push(state.cart[i]);
      }
    }

    console.log("Updated Cart itemss:", newCart);

    return { cart: newCart };
  }
  return state;
};


export const addItem = (item) => {
  console.log("if Dispatch press ADD:", item);
  return { type: ADD, payload: item };
};

export const plus = (id) => {
  console.log(" if DIspatch press   PLUS:", id);
  return { type: PLUS, payload: id };
};

export const minus = (id) => {
  console.log(" if Dispatch  press MINUS:", id);
  return { type: MINUS, payload: id };
};
