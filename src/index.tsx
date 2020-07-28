import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import rootReducer from './reducers';

const store: any = createStore(rootReducer);

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#7159c1",
    }, 
    secondary: {
      main: "#120a8f",
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);