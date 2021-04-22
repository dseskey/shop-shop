import { reducer } from './reducers';

/*--Redux imports--*/
import { createStore } from 'redux';

const store = createStore(reducer, {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
});


export default store;
