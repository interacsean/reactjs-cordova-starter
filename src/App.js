import React, { Component } from 'react';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import renderPage from './components/infrastructure/renderPage';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Ons.Navigator renderPage={renderPage} initialRoute={routes.home} />
    );
  }
}

export default App;
