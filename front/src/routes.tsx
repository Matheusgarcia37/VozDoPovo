import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import adminAcess from './pages/adminAcess';
import Landing from './pages/Landing';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/adminAcess" component={adminAcess} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;