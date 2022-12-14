import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Booknow from "./pages/Booknow";
import IniciaraSesion from "./pages/IniciaraSesion";
import Registrar from "./pages/Registrar";
import PoliCondi from "./components/PoliCondi";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/rooms/iniciarSesion" component={IniciaraSesion} />
					<Route exact path="/rooms" component={Rooms} />
					<Route exact path="/rooms/:slug" component={SingleRoom} />
					<Route exact path="/booknow/:slug" component={Booknow} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/iniciarSesion" component={IniciaraSesion} />
					<Route exact path="/politicas-usos" component={PoliCondi} />
					<Route exact path="/registrarse" component={Registrar} />

					<Route component={Error} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
