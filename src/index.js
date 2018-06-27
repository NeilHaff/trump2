import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import FinalPage from "./components/App/FinalPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render((
        <Router>
         <div>
            <Switch>
                <Route path= '/final' exact component={FinalPage}/>
                <Route path='' exact component={App}/>
            </Switch>
         </div>
         </Router>), document.getElementById('root'));
registerServiceWorker();
