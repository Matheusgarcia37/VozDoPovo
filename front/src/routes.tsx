import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import adminAcess from './pages/adminAcess';
import denunciations from './pages/denunciations';
import Landing from './pages/Landing';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/adminAcess" component={adminAcess} />
                <Route path="/denunciations" component= { denunciations } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;