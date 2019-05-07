import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

//Auth imports
import UnauthedRoute from './UnauthedRoute.js';

import Login from './Login.js';
import Register from './Register.js';
import Classes from './Classes.js';
import Class from './Class.js';
import Groups from './Groups.js';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <UnauthedRoute exact path="/login" component={Login} />
                    <UnauthedRoute exact path="/register" component={Register} />
                    <UnauthedRoute exact path="/classes" component={Classes} />
                    <UnauthedRoute exact path="/class/:class_id" component={Class} />
                    <UnauthedRoute exact path="/project/:project_id/groups" component={Groups} />
                </Switch>
            </Router>
        );
    }
}