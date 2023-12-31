import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>

 
);






