import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="container aboutus">
      <div className="row">
        <div className="col-md-6 col-12 my-auto">
          <img
            src={require("../images/lapaz.jpg")}
            alt="about us"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-12 my-auto">
          <h1 className="display-4 text-center my-5">
            Trabajamos para mejorar la selección de Restaurantes en La Paz{" "}
          </h1>
          <p className="lead text-justify text-center">
            Te brindamos una variedad de restaurantes seleccionados y
            categorizados entre los mejores en calidad de servicios de comidas,
            bebidas y atención al cliente. Ofrecerte accesibilidad rápida y
            eficiente al momento de bucar donde pasar tiempo de calidad y
            disfrutar de una deliciosa comida en distintso lugares de La Paz.
          </p>
          <div className="text-center col-md-6 col-12 mx-auto">
            <Link
              to="/contact"
              className="btn btn-outline-dark btn-block btn-lg my-5"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
      <div className="about_company">
        <h1 className="display-4">Sobre nuestra compañia</h1>
        <div className="pt-4">
          <p className="about_info">
            Nos especializamos en el desarrollo ágil utilizando las últimas
            tecnologías y marcos de integración de aplicaciones móviles, en la
            nube, web y empresariales para proporcionar a nuestros clientes
            soluciones rentables, flexibles y escalables. Ayudamos a los ISV,
            Startups y empresas tecnológicas a lograr una ventaja competitiva.
            Las empresas que trabajan con nosotros y experimentan lo que podemos
            lograr, nos confían constantemente proyectos más grandes y críticos.
            Contamos con un excelente, estable y experimentado equipo de
            profesionales con variados antecedentes y calificaciones. Nuestros
            equipos de desarrollo son flexibles y pueden redimensionarse y
            reajustarse en cualquier momento a solicitud del cliente.
          </p>
        </div>
      </div>

      <div className="team">
        <h1 className="display-4">Nuestro Equipo</h1>
      </div>
      <div className="row mb-5">
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/TMgQMXoglsM/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Scrum Master</h5>
              <div className="card-text text-black-50">
                Gabriela Limachi <p className="float-right">5 años</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/sNut2MqSmds/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Miembro del Equipo</h5>
              <div className="card-text text-black-50">
                Jorge Luis Tancara<p className="float-right">5 años</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Miembro del Equipo</h5>
              <div className="card-text text-black-50">
                Alvaro Chambi <p className="float-right">8 años</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src="https://source.unsplash.com/9UVmlIb0wJU/500x350"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Miembro del Equipo</h5>
              <div className="card-text text-black-50">
                Michelle Vargas<p className="float-right">8 años</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
