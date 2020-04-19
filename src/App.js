import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useUser, useAuth } from 'hooks';
import './App.css';
import { FirebaseContext } from 'contexts';

// components
import { Navbar, ItemDetails } from 'components';

// screen
import {
    Forum,
    Home,
    Login,
    Profile,
    Register,
    Flashcards,
    Tests,
    LoadingPage,
} from 'screens';

//routes
import * as ROUTES from './constants/routes';

const App = () => {
    const user = useUser();

    if (user === null) {
        return <LoadingPage />;
    }

    return (
        <Router>
            <div>
                {!user ? <Navbar login /> : <Navbar profile logout />}
                <Switch>
                    <Route exact path={ROUTES.HOME} component={Home} />
                    <Route strict exact path={ROUTES.TESTS} component={Tests} />
                    <Route strict exact path={ROUTES.FLASHCARDS} component={Flashcards} />
                    <Route strict exact path={ROUTES.FORUM} component={Forum} />
                    <Route path={ROUTES.ITEMDETAILS} component={ItemDetails} />

                    {!user ? (
                        <>
                            <Route exact path={ROUTES.LOGIN} component={Login} />
                            <Route exact path={ROUTES.REGISTER} component={Register} />
                            <Redirect to={ROUTES.LOGIN} />
                        </>
                    ) : (
                        <>
                            <Redirect path={ROUTES.LOGIN} to={ROUTES.HOME} />
                            <Redirect path={ROUTES.REGISTER} to={ROUTES.HOME} />
                            <Route exact path={ROUTES.PROFILE} component={Profile} />
                            <Route component={() => <h1>Nie ma takiej strony</h1>} />
                        </>
                    )}
                </Switch>
            </div>
        </Router>
    );
};

const Root = () => {
    const user = useAuth();
    return (
        <FirebaseContext.Provider value={{ user }}>
            <App />
        </FirebaseContext.Provider>
    );
};

export default Root;
