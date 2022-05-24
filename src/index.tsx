import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: pink;
    font-family: 'Poppins', 'Noto Sans KR', sans-serif;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  #root {
    min-height: 100vh;
    position: relative;
    padding-top: 48px;
    padding-bottom: 120px;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
