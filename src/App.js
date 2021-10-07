import './App.css';
import SignIn from './components/pages/SignIn/SignIn';
import UserPolicy from './components/pages/Policy/UserPolicy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path ='/' exact component={SignIn} />
          <Route path ='/policy' component={UserPolicy} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
