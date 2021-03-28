import React, { useEffect, useState } from "react";
import { config } from "../../config";
import { HeaderTop } from "../HeaderTop";
import { SearchBar } from "../SearchBar";
import "./styles.css";

const { appName, products } = config;

document.querySelector("title").innerText = `Inicio | ${appName}`;

const App = () => {
	return (
		<React.Fragment>
			<HeaderTop />
			<SearchBar />
		</React.Fragment>
	);
};

export { App };
