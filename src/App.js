import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useAuth } from 'hooks';
import './App.css';

// components
import { Navbar, ItemDetails } from 'components';

// screens
import { Forum, Home, Login, Profile, Register, Flashcards, Tests } from 'screens';

//routes
import * as ROUTES from './constants/routes';

const App = () => {
    const isLoggedIn = useAuth();

    if (isLoggedIn === null) {
        return <div>Pobieranie danych...</div>;
    }

    return (
        <Router>
            <div>
                {!isLoggedIn ? <Navbar login /> : <Navbar profile logout />}
                <Switch>
                    <Route exact path={ROUTES.HOME} component={Home} />
                    <Route strict exact path={ROUTES.TESTS} component={Tests} />
                    <Route strict exact path={ROUTES.FLASHCARDS} component={Flashcards} />
                    <Route strict exact path={ROUTES.FORUM} component={Forum} />
                    <Route path={ROUTES.ITEMDETAILS} component={ItemDetails} />

                    {!isLoggedIn ? (
                        <>
                            <Route exact path={ROUTES.LOGIN} component={Login} />
                            <Route exact path={ROUTES.REGISTER} component={Register} />
                            <Redirect to={ROUTES.LOGIN} />
                        </>
                    ) : (
                        <>
                            <Redirect path={ROUTES.LOGIN} to={ROUTES.HOME} />
                            <Redirect path={ROUTES.REGISTER} to={ROUTES.HOME} />
                            <Route
                                strict
                                exact
                                path={ROUTES.PROFILE}
                                component={Profile}
                            />
                            <Route component={() => <h1>Nie ma takiej strony</h1>} />
                        </>
                    )}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
