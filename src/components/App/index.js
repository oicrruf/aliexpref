import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Home, SignUp, Login, Product } from "../pages";
import { config } from "../../config";
import "./styles.css";

const { appName } = config;

document.querySelector("title").innerText = `Inicio | ${appName}`;

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
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
