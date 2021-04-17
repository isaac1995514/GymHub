import React from "react";
import ReactDOM from "react-dom";

/* Components */
import App from "./App";
import { BrowserRouter } from "react-router-dom";

/* Utils */
import reportWebVitals from "./reportWebVitals";

/* Style */
import "./index.css";

/* Database */
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

/* Redux Store */
import { Provider } from "react-redux";
import store from "./store";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
