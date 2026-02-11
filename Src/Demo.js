const ADD = 'ADD';
const PLUS = 'PLUS';
const MINUS = 'MINUS';


const initialState = {
  cart: [],
};

export const cartReducer = (state=initialState,action)=>{
    if(action.type === ADD){
        let newCart = [];
        let isFound = false;
        for (let i=0; i<state.cart.length; ++i)
        {
            if(state.cart[i].id===item.id)
        }
    }
}