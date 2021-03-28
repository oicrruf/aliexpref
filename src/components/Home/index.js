import React from "react";
import { AiOutlineCar, AiOutlineTool } from "react-icons/ai";
import { CgGames } from "react-icons/cg";
import { FiMusic, FiShoppingCart } from "react-icons/fi";
import { MdChildCare } from "react-icons/md";
import { RiComputerLine, RiHome3Line } from "react-icons/ri";
import { Header } from "../Header";
import "./styles.css";

export const Categories = () => {
	const popularCategories = [
		{
			name: "Automotive",
			icon: <AiOutlineCar className="category-box__icon" />,
		},
		{
			name: "Computers",
			icon: <RiComputerLine className="category-box__icon" />,
		},
		{ name: "Games", icon: <CgGames className="category-box__icon" /> },
		{
			name: "Grocery",
			icon: <FiShoppingCart className="category-box__icon" />,
		},
		{ name: "Home", icon: <RiHome3Line className="category-box__icon" /> },
		{ name: "Kids", icon: <MdChildCare className="category-box__icon" /> },
		{ name: "Music", icon: <FiMusic className="category-box__icon" /> },

		{
			name: "Tools",
			icon: <AiOutlineTool className="category-box__icon" />,
		},
	];
	const categoriesBox = popularCategories.map((b, i) => {
		return (
			<div className="category-box">
				<a href="#">
					{b.icon}
					<h5>{b.name}</h5>
				</a>
			</div>
		);
	});

	return (
		<React.Fragment>
			<div className="categories__container">
				<div className="container">{categoriesBox}</div>
			</div>
		</React.Fragment>
	);
};

export const Home = props => {
	return (
		<React.Fragment>
			<div className="home__container">
				<Header>
					<div className="container">{props.children}</div>
				</Header>
				<Categories />
			</div>
		</React.Fragment>
	);
};
