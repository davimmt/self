import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './main/Main';
import NotFound from './NotFound';
import AuthorMain from './authors/AuthorMain.js';

function Index() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/authors" component={AuthorMain}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Router><Index /></Router>, document.getElementById('app'));
}
