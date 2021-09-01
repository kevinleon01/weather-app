import React from 'react';
import { Provider } from 'react-redux'
import store from './app/store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
