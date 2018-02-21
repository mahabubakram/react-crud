import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from "./components/App";

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();
// store.dispatch(loadUsers());


render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
, document.getElementById('root'));