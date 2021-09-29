import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../history";

import Home from "@pages/Home";
import Login from "@pages/Login";
import Register from "@pages/Register";

import PageNotFound from "../pages/PageNotFound";

class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />

                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
