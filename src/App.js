import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,  
  Switch
} from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

// components
import Navbar from "./components/Navbar";

// screens
import View1 from "./screens/View1";
import View2 from "./screens/View2";
import View3 from "./screens/View3";
import View4 from "./screens/View4";
import Home from "./screens/Home"


const App = () => {
  const isLoggedIn = useAuth();

  if (isLoggedIn === null) {
    return (      
      <div>Pobieranie danych...</div>  
    );
  }

  if (!isLoggedIn) {
    return (
      <Router>
        <div>
          <div>
            <Link to={"/zaloguj"}>
              Zaloguj sie
            </Link>
            <Link to={"/zarejestruj"}>
              Zarejestruj się
            </Link>
          </div>
          <Switch>
            <Route exact path="/zaloguj" component={View1} />
            <Route exact path="/zarejestruj" component={View2} />
            <Redirect to="/zaloguj" />
          </Switch>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <Navbar/>
      
        <Switch>
          <Redirect exact path="/zaloguj" to="/" />
          <Redirect exact path="/zarejestruj" to="/" />
          <Route strict exact path="/view3" component={View3}/>
          <Route strict exact path="/view4" component={View4}/>
          <Route exact path="/" component={Home} />
          <Route component={() => <h1>Nie ma takiej strony</h1>} />
        </Switch>
  
    </Router>
  );
};

export default App;