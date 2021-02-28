import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { People } from "./People";
import { Title } from "./components/Title/Title";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Nav } from "./components/NewNav/index";
import { NewsPage } from "./components/NewsPage/NewsPage";
import { Visa } from "./components/Visa/Visa";

export const Home = () => {
	return (
		<Router>
			<div>
				<Title />
				<div className="mainNav">
					<Nav />
				</div>
				<div className="container-fluid">
					<Route path="/" exact component={HomePage} />
					<Route path="/people/:ct" exact component={People} />
					<Route path="/ProsStud/visa" exact component={Visa} />
					<Route path="/outreach/news" exact component={NewsPage} />
				</div>
				<Footer />
			</div>
		</Router>
	);
};
