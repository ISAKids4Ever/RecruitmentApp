import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './components/Navbar'
import View1 from "./screens/View1";
import View2 from "./screens/View2";
import View3 from "./screens/View3";
import View4 from "./screens/View4";


const App = () => {
  return (
    <Router>
      <Navbar/>
      
        <Switch>
          <Route strict exact path="/view1" component={View1}/>
          <Route strict exact path="/view2" component={View2}/>
          <Route strict exact path="/view3" component={View3}/>
          <Route strict exact path="/view4" component={View4}/>
          <Route strict exact path="/" component={View1}/>
          <Route component={() => <h1>Nie ma takiej strony</h1>} />
        </Switch>
  
    </Router>
  );
};

export default App;