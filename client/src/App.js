import React from 'react';
import './App.css';
import SignUp from './components/SignUp'
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Game from './components/Game'
import Quiz from './components/Quiz'
import CheckNavigation from '../src/CheckNavigation'
import GenericNotFound from './components/GenericNotFound'
import PrivateNavigation from './PrivateNavigation'

function App() {
  return (
    
      <div className="App">
        <Router>
          <Switch> 
          <Route path="/game/*" component={Game}/>
            <Route path="/" component={Home} />
            <Route component={Quiz}/>
            
            
            
            <CheckNavigation path="/login"  component={Login}/>
            <CheckNavigation path="/signup"  component={SignUp}/>
            <PrivateNavigation path="/game"  component={Game}/>
            
            
            
            
            
            <Route component={GenericNotFound}/>
            
          </Switch>
        </Router>
      </div>    
   
  );
}

export default App;
