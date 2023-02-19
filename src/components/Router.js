import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './MainPage.js';

const Router = () => (
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={MainPage}/>
        </Switch>
    </BrowserRouter>
)

export default Router;