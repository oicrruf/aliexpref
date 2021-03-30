import React, { useState } from "react";
import { config } from "../../config";
import { auth } from "../../utils";
import { Footer, HeaderTop, SearchBar } from "../organisms";

export const MainTemplate = (props) => {
  const { appName } = config;

  const [isAuthenticated, setIsAuthenticated] = useState(
    auth.isAuthenticated()
  );
  document.querySelector("title").innerText = `${props.title} | ${appName}`;
  return (
    <React.Fragment>
      <div className="home__container">
        <HeaderTop isAuthenticated={isAuthenticated} />
        <SearchBar isAuthenticated={isAuthenticated} />
        {props.children}
        <Footer />
      </div>
    </React.Fragment>
  );
};
