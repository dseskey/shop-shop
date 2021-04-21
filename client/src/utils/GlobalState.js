import { reducer } from './reducers';

/*--Redux imports--*/
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: reducer, preloadedState: {
    products: [],
    cart:[],
    cartOpen: false,
    categories: [],
    currentCategory: '',
} 
});

export default store;
