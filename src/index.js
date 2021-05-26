import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import GlobalStyle from './styles/globalStyle';
import './styles/common.scss';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>,
  document.getElementById('root')
);
