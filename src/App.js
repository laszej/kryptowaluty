import './index.css';

import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home';
import Coins from './Coins';
import NotFound from './NotFound';
import Coin from './Coin.js'


function App() {
  return (
    
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/coins" component={Coins}/>
            <Route path="/coin/:id">
              <Coin />
              </Route>
            <Route path="*"component={NotFound}/>
            
  
          </Switch>
      </Router>
    );
  }


export default App;
