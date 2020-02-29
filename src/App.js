import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,  
  Switch
} from "react-router-dom";
import  {useAuth}  from "hooks";
import './App.css';

// components
import { Navbar } from 'components';

// screens
import { Forum, Home, Login, Profile, Register, Questions, Tests }from "screens";
import ItemDetails from 'components/Forum/ItemDetail'


const App = () => {
  const isLoggedIn = useAuth();

  if (isLoggedIn) {
    return (      
      <div>Pobieranie danych...</div>  
    );
  }

  if (!isLoggedIn) {
    return (
      <Router>
        <div>
          <div>
            <Navbar profile={false} logout={false} login={false} />
          </div>
          <Switch>
            <Route exact path="/zaloguj" component={Login} />
            <Route exact path="/zarejestruj" component={Register} />
            <Route strict exact path="/testy" component={Tests}/>
            <Route strict exact path="/pytania" component={Questions}/>
            <Route strict exact path="/forum" component={Forum}/>
            <Route path="/forum/:qid" component={ItemDetails} />
            <Route strict exact path="/profile" component={Profile}/>
            <Route exact path="/" component={Home} />
            <Redirect to="/zaloguj" />
          </Switch>
        </div>
      </Router>
    );
  }

  
  return (
    <Router>
      <Navbar profile={true} logout={true} login={false} />      
        <Switch>
          <Redirect path="/zaloguj" to="/" />
          <Redirect path="/zarejestruj" to="/" /> 
          <Route strict exact path="/testy" component={Tests}/>
          <Route strict exact path="/pytania" component={Questions}/>
          <Route strict exact path="/forum" component={Forum}/>
          <Route strict exact path="/profile" component={Profile}/>
          <Route exact path="/" component={Home} />
          <Route component={() => <h1>Nie ma takiej strony</h1>} />
        </Switch>  
    </Router>
  );  
};

export default App;