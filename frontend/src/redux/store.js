import { createStore, configureStore, combineReducers } from '@reduxjs/toolkit';
import inventorySlice from './slices/inventorySlices';

const reducer = combineReducers({
    inventory:inventorySlice,
   
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_APP') {
        state = {};
    }

    return reducer(state, action);
};

const store = configureStore({
    reducer: rootReducer
});



export default store;