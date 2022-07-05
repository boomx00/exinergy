import { createStore, configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from './slices/authSlices';

const reducer = combineReducers({
    auth: authSlice,
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