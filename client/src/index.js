import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme/theme"
import { ColorModeScript } from "@chakra-ui/react"


import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './redux/reducers/root'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
  <ChakraProvider>
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />  
    </React.StrictMode>
  </ChakraProvider> 
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
