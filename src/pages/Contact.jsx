import React from "react";
import firebaseApp from "../config/credentials";

import { getFirestore, doc, setDoc } from "firebase/firestore";

const Contact = () => {
	const firestore = getFirestore(firebaseApp);

	const registerMesage = async (name, email, message,phone) => {
		const  randomString= Math.random().toString(36).substring(2);

		// console.log("infUser", infUser.user.uid);
		const docRef = doc(firestore, `mensajes/${randomString}`);
		setDoc(docRef, {
			email: email,
			message: message,
			name: name,
			phone: phone,
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const message = event.target.message.value;
		const name = event.target.name.value;
		const phone = event.target.phone.value;
		console.log("name", name);
		console.log("email", email);
		console.log("message", message);
		console.log("phone", phone);
		registerMesage(name, email, message,phone);
	};
	return (
		<div className="container contact">
			<div className="row">
				<div className="col-md-8 col-12 mx-auto">
					<div className="card shadow-lg border-0 p-4">
						<h1 className="text-center bg-dark text-white display-4 d-inline-block">
							Contáctenos
						</h1>
						<form onSubmit={submitHandler}>
							<div className="form-group my-5">
							<div className="row">
								<div className="col-md-6 col-12 mx-auto my-2">
									<input
										type="text"
										className="form-control-lg"
										placeholder="Nombres"
										required
										id="name"
									/>
								</div>
							</div>
						</div>
						<div className="form-group mb-5">
							<div className="row">
								<div className="col-md-6 col-12 mx-auto my-2">
									<input
										type="email"
										className="form-control-lg"
										placeholder="Correo Electrónico"
										required
										id="email"
									/>
								</div>
								<div className="col-md-6 col-12 mx-auto my-2">
									<input
										type="tel"
										className="form-control-lg"
										placeholder="Celular"
										required
										id="phone"
									/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-11">
								<textarea
									className="form-control"
									row="20"
									placeholder="Escribe tu mensaje aquí"
									required
									id="message"
								></textarea>
							</div>
						</div>
						<div className="mt-5 col-md-6 col-12 mx-auto">
							<button className="btn btn-outline-dark btn-lg btn-block">
								Enviar Mensaje
							</button>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contact;
