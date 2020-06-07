import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import App from "./App";
import { Provider } from 'react-redux';

const rerenderEntireTree = (store) => {
  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,  
    document.getElementById("root")
  );
};

rerenderEntireTree(store);

store.subscribe(()=>{
  rerenderEntireTree(store);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
