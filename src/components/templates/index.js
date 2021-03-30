import React, { useState } from "react";

import { SearchBar, HeaderTop, Footer } from "../organisms";
import { auth } from "../../utils";

export const MainTemplate = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    auth.isAuthenticated()
  );
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
