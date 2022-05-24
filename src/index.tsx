import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: #aaa;
    font-family: 'Poppins', 'Noto Sans KR', sans-serif;
    padding: 12px;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
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
