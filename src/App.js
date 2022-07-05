import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Routers from "./router/index";
import Home from './Home';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routers></Routers>
    
    </Provider>
  );
}

export default App;
