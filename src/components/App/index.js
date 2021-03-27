import React from "react";
import { config } from "../../config";
import "./styles.css";

const { appName } = config;

document.querySelector("title").innerText = `Inicio | ${appName}`;

const App = () => {
  return (
    <div>
      <h1>-- {`${appName}`} --</h1>
    </div>
  );
};

export { App };
