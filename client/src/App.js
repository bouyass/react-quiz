import React from 'react';
import './App.css';
import SignUp from './components/SignUp'
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import CheckNavigation from '../src/CheckNavigation'
import GenericNotFound from './components/GenericNotFound'
import PrivateNavigation from './PrivateNavigation'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <CheckNavigation path="/login" exact component={Login}/>
          <CheckNavigation path="/signup" exact component={SignUp}/>
          <Route component={GenericNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
