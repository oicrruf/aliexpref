import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Home, SingUp, Login, Product, Me, EditMe } from "./components/pages";
import { config } from "./config";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/me/edit">
            <EditMe />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/singup">
            <SingUp />
          </Route>
          <Route
            path="/product/:id"
            render={(props) => <Product {...props} />}
          />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export { App };
