import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,  
  Switch
} from "react-router-dom";
import  { useAuth }  from "hooks";
import './App.css';

// components
import { Navbar, ItemDetails } from 'components';

// screens
import { Forum, Home, Login, Profile, Register, Flashcards, Tests } from "screens";


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
            <Navbar login/>
          </div>
          <Switch>
            <Route exact path="/zaloguj" component={Login} />
            <Route exact path="/zarejestruj" component={Register} />
            <Route strict exact path="/testy" component={Tests}/>
            <Route strict exact path="/pytania" component={Flashcards}/>
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
      <Navbar logout/>      
        <Switch>
          <Redirect path="/zaloguj" to="/" />
          <Redirect path="/zarejestruj" to="/" /> 
          <Route strict exact path="/testy" component={Tests}/>
          <Route strict exact path="/pytania" component={Flashcards}/>
          <Route strict exact path="/forum" component={Forum}/>
          <Route strict exact path="/profile" component={Profile}/>
          <Route path="/forum/:qid" component={ItemDetails} />
          <Route exact path="/" component={Home} />
          <Route component={() => <h1>Nie ma takiej strony</h1>} />
        </Switch>  
    </Router>
  );  
};

export default App;