import { createStore } from 'redux';
import { cartReducer } from '../src/cartReducer';


export const store = createStore(cartReducer);
