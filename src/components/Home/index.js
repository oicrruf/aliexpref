import React from "react";
import "./styles.css";
import { Header } from "../Header";

export const Home = props => {
	return (
		<React.Fragment>
			<div className="home__container">
				<Header>
					<div className="container">{props.children}</div>
				</Header>
			</div>
		</React.Fragment>
	);
};
