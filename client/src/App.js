import React from 'react';
import './App.css';
import SignUp from './components/SignUp'
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={SignUp}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
