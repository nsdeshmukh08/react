import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import RenderStartPage from './Component/RenderStartPage';
import { allRoutes } from "./Utility/RoutesUtility";

import { createBrowserHistory } from 'history';
import SearchComponent from './Component/Test Component/SearchComponent';

const history = createBrowserHistory();
class App extends Component {
 
  constructor(props){
    super(props);

    history.listen((location, action) => {
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      );
      console.log(`The last navigation action was ${action}`);
    });
  }
  onRouteChanged() {
    console.log("ROUTE CHANGED");
  }

  render() {
    return (
      <div>
        {/* <Router>
          <div>
            <Switch>
              {
                // Load all routes through map
                allRoutes.map((route)=>{
                  return <Route key ={route.path} path= {route.path} component={route.component}/>
                })
              }
            </Switch>
          </div>
        </Router> */}
        <SearchComponent/>

      </div>
    );
  }
}

export default App;
