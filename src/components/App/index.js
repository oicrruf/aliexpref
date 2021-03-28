import React from "react";
import { HeaderTop, Home, SearchBar } from "../";
import { config } from "../../config";
import "./styles.css";

const { appName } = config;

document.querySelector("title").innerText = `Inicio | ${appName}`;

const App = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <HeaderTop />
        <SearchBar />
        <Home />
      </div>
    </React.Fragment>
  );
};

export { App };
