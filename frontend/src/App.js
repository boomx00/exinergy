import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Routers from "./router/index";
import Home from './Home';
import axios from 'axios'

import './App.css';
axios.defaults.baseURL = "http://localhost:8000/api/v1/"


axios.interceptors.request.use(async (request) => {
  const token = localStorage.getItem('access_token')
  request.headers = {
    ...request.headers,
    'x-access-token': token  }

  return request
}, (error) => {
  return Promise.reject(error)
})
function App() {
  return (
    <Provider store={store}>
      <Routers></Routers>
    
    </Provider>
  );
}

export default App;
