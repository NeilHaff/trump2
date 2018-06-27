import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App/App";
import FinalPage from "../App/FinalPage";

const Routes = () => (
    <Router>
        <App />
        <Switch>
            <Route path= '/final' exact component={FinalPage}/>
            <Route path='/' exact componenet={App}/>
        </Switch>
    </Router>
);


export default Routes;