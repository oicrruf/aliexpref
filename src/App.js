import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Home, SingUp, Login, Product, Me } from "./components/pages";
import { config } from "./config";

const { appName } = config;

document.querySelector("title").innerText = `Inicio | ${appName}`;

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
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
