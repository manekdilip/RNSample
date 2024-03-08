import React from 'react';
import Navigation from './src/navigations';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  // Initial entry point for the App
  // Also provided the the store to get all the screens and components
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
