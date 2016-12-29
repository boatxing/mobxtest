import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppState from './CurrencyAppState';
import App from './ComputedTestApp';

const appState = new AppState();

render(
  <AppContainer>
    <App currencyApp={appState} />
  </AppContainer>,
  document.getElementById('root')
);
