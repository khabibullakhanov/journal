import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Store} from "./Redux/Store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <SnackbarProvider
          maxSnack={3}
          autoHideDuration={4500}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <App />
        </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
