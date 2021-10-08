import './App.css';
import React, { useState } from 'react';
import SignIn from './components/pages/SignIn/SignIn';
import UserPolicy from './components/pages/Policy/UserPolicy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path ='/' exact >
            <SignIn setToken={setToken} />
          </Route>
          <Route path ='/policy'>
            <UserPolicy token={token} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
