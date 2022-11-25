import React from "react";
import "../styles/IniciarSesion.css";
import firebaseApp from "../config/credentials";
// import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

const Registrar = () => {
	// const navigate = useNavigate()

	return (
		<div className="container form-login">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card border-0 shadow rounded-3 my-5">
						<div className="card-body p-4 p-sm-5">
							<h5 className="card-title text-center mb-5 fw-light fs-5">
								Iniciar Sesion
							</h5>
							<form>
								<div className="form-floating mb-3">
									<input
										type="Nombre"
										className="form-control"
										id="name"
										placeholder="Nombre Apellido"
									/>
									<label>Correo Electronico</label>
								</div>
								<div className="form-floating mb-3">
									<input
										type="email"
										className="form-control"
										id="email"
										placeholder="nombre@ejemplo.com"
									/>
									<label>Correo Electronico</label>
								</div>

								<div className="form-floating mb-3">
									<input
										type="password"
										className="form-control"
										id="password"
										placeholder="contrase..."
									/>
									<label>Contraseña</label>
								</div>

								<div className="form-check mb-3">
									<input
										className="form-check-input"
										type="checkbox"
										value=""
										id="rememberPasswordCheck"
									/>
									<label className="form-check-label">
										Recordar Contraseña
									</label>
								</div>

								<div className="d-grid">
									<button
										className="btn btn-primary btn-login text-uppercase fw-bold"
										type="submit"
									>
										Iniciar Sesion
									</button>
								</div>
								<hr className="my-4" />
							</form>
							{/* <Link>Regitrarse</Link> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registrar;
