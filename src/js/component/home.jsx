import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

import "../../styles/index.css";


const Home = () => {
	return (
		<div>
			<Navbar/>
			<div className="p-3">
				<Jumbotron/>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
						<Card/>
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
						<Card/>
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
						<Card/>
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
						<Card/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
