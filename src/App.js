import React from 'react';
import { Provider } from 'react-redux'
import store from './app/store'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
// import City from './pages/City'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/houston' component={Home} exact />
          <Route path='/newyork' component={Home} exact />
          <Route path='/buenosaires' component={Home} exact />
          {/* <Route path='/About' /> */}
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
