import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../App.css";
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
					<p className="lead  texto-justificado">
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
					<p className="about_info texto-justificado">
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
							src="https://media-exp1.licdn.com/dms/image/C5603AQGb4BKSTGtJQg/profile-displayphoto-shrink_200_200/0/1663028256700?e=1675296000&v=beta&t=SyauGtM70-xNj5q2U1JxWHd3n3OyQemkcc4OcI041pQ"
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
							src="https://media-exp1.licdn.com/dms/image/C5603AQF3BEr66ECNmg/profile-displayphoto-shrink_100_100/0/1631226901067?e=1675296000&v=beta&t=nyrOt5JBdP-mPSNYsRZaGO-jbe12raINc_h1aIAxFuo"
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
							src="https://scontent.flpb1-1.fna.fbcdn.net/v/t1.6435-9/68717658_1301894393299847_4999543113107111936_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JG210V4fwrAAX8wWNzl&_nc_ht=scontent.flpb1-1.fna&oh=00_AfDJvnCCWpSYHVZYugqP4wrjRC68caCpfFw6CDDkNE23yA&oe=63AEBB60"
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
							src="https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/292190226_3452882908274101_8205786948743613394_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=d3j79AhU2QcAX_Km8OO&_nc_ht=scontent.flpb1-1.fna&oh=00_AfCgvB5GYLXDFk38b6oVkUPaaxEtqrTe9uW0TAL9rPeXoA&oe=638BAA3B"
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
