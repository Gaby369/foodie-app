import React from "react";
import "../styles/IniciarSesion.css";
import firebaseApp from "../config/credentials";
// import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);

const Registrar = () => {
	const firestore = getFirestore(firebaseApp);
	// const navigate = useNavigate()
	const registerUser = async (email, password, rol, name) => {
		const infUser = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		).then((usuarioFirebase) => {
			return usuarioFirebase;
		});
		// console.log("infUser", infUser.user.uid);
		const docRef = doc(firestore, `users/${infUser.user.uid}`);
		setDoc(docRef, {
			email: email,
			rol: rol,
			password: password,
			name: name,
		});
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		const rol = "comensal";
		const name = event.target.name.value;
		registerUser(email, password, rol, name);
	};

	return (
		<div className="container form-login">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card border-0 shadow rounded-3 my-5">
						<div className="card-body p-4 p-sm-5">
							<h5 className="card-title text-center mb-5 fw-light fs-5">
								Registro
							</h5>
							<form onSubmit={submitHandler}>
								<div className="form-floating mb-3">
									<input
										type="Nombre"
										className="form-control"
										id="name"
										placeholder="Nombre Apellido"
									/>
									<label>Nombre Completo</label>
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
										Registrarse
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
