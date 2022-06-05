import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./app/App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/redux/store";

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
)