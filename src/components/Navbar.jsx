import React from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import jquery from "jquery";
import Logo from "../images/logo.png";
import Salir from "../images/angle-right.png";
import "../styles/navbar.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import firebaseApp from "../config/credentials";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

// for changing navbar  color
jquery(window).scroll(function () {
	jquery("nav").toggleClass("scrolled", jquery(this).scrollTop() > 0);
});

const Navbar = () => {
	let { active } = useContext(UserContext);

	return (
		<>
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark py-2 fixed-top">
				<div className="container-fluid ">
					<div className="container-logo">
						<img src={Logo} alt="logo" />
					</div>
					<span className="navbar-brand ">Foodie</span>
					<a
						href="void(0)"
						className="navbar-toggler border-0"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span>
							<FaAlignRight className="nav-icon" />
						</span>
					</a>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<NavLink
									className="nav-link"
									activeClassName="active_class"
									exact
									to="/"
								>
									Inicio
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									activeClassName="active_class"
									exact
									to="/rooms"
								>
									Restaurantes
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									activeClassName="active_class"
									exact
									to="/about"
								>
									Acerca de Nosotros
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									activeClassName="active_class"
									exact
									to="/contact"
								>
									Contáctenos
								</NavLink>
							</li>

							{!active ? (
								<>
									<li className="nav-item">
										<NavLink
											className="nav-link"
											activeClassName="active_class"
											exact
											to="/iniciarSesion"
										>
											Iniciar Sesión
										</NavLink>
									</li>

									<li className="nav-item">
										<NavLink
											className="nav-link"
											activeClassName="active_class"
											exact
											to="/iniciarSesion"
										>
											Registrarse
										</NavLink>
									</li>
								</>
							) : (
								<li className="nav-item">
									<NavLink className="header-nav-link-tag" to="/">
										<figure className="figure-tag">
											<img
												onClick={
													active
														? () => {
																signOut(auth);
														  }
														: null
												}
												className="image-tag"
												src={Salir}
												alt="Login"
											/>
										</figure>
									</NavLink>
								</li>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
