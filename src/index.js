import React from 'react';
import { createGlobalStyle } from 'styled-components'
import ReactDOM from 'react-dom/client';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    body, header {
      font-family: 'Poppins';
    }
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

