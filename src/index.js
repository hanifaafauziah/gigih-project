import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from '../src/store/store';
// import reportWebVitals from './reportWebVitals.js';
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
<StrictMode> 
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);

// reportWebVitals(); 
