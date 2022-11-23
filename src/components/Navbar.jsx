import React from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import jquery from "jquery";

// for changing navbar  color
jquery(window).scroll(function () {
  jquery("nav").toggleClass("scrolled", jquery(this).scrollTop() > 0);
});

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-2 fixed-top">
        <div className="container-fluid ">
          <span className="navbar-brand font-weight-bolder">Foodie</span>
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;