import React from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import defaultBcg from "../images/room-3.jpeg"
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseApp from "../config/credentials";
import "../styles/Booknow.css";

import UserContext from "../context/UserContext";
import { useContext } from "react";

const Booknow = (props) => {
	const firestore = getFirestore(firebaseApp);
	const { user } = useContext(UserContext);
	const context = React.useContext(RoomContext);
	const { getRoom } = context;
	const room = getRoom(props.match.params.slug);
	const [startDate, setStartDate] = React.useState(new Date());
	const [numberPeople, setNumberPeople] = React.useState(1);
	const { name, capacity, price, images } = room;
	const [mainImg, ...defaultBcg] = images;
	const handleNumberPeople = (e) => {
		setNumberPeople(e.target.value);
	};
	const registerReserva = async (
		fecha,
		cantidadPersonas,
		precioTotal,
		nombreRestaurante,
		nombreCliente,
	) => {
		const randomString = Math.random().toString(36).substring(2);

		// console.log("infUser", infUser.user.uid);
		const docRef = doc(firestore, `reservas/${randomString}`);
		setDoc(docRef, {
			fecha: fecha,
			cantidadPersonas: cantidadPersonas,
			precioTotal: precioTotal,
			nombreRestaurante: nombreRestaurante,
			nombreCliente: nombreCliente,
		});
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const precioTotal = price * numberPeople;
		const cantidadPersonas = numberPeople;
		const fecha = moment(startDate).format("DD/MM/YYYY");
		const nombreRestaurante = name;
		const nombreCliente = user?.name;
		registerReserva(
			fecha,
			cantidadPersonas,
			precioTotal,
			nombreRestaurante,
			nombreCliente,
		);
	};

	return (
		<div className="container container-reserbar">
			<div className="row">
				<div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
					<div>
						<h1 className="display-4">Reserva</h1>
					</div>
					<div className="row">
						<div className="col-md-6 col-12 my-auto">
							<img
								src={mainImg || defaultBcg}
								className="img-fluid"
								alt="selected room"
							/>
						</div>
						<div className="col-md-6 col-12 my-auto">
							<h1>Detalles del Restaurante</h1>
							<table className="table">
								<thead className="thead-light">
									<tr>
										<th>Restaurante</th>
										<td>{name}</td>
									</tr>
									<tr>
										<th>Capacidad</th>
										<td>{capacity}</td>
									</tr>
								</thead>
							</table>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-md-6 col-12">
							<div className="form-group">
								<label htmlFor="Todate" className="font-weight-bolder mr-3">
									Reserva para{" "}
								</label>
								<DatePicker
									selected={startDate}
									onChange={(date) => setStartDate(date)}
									className="form-control"
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-12">
							<h6 className="font-weight-bolder">Número de personas :</h6>

							<input
								type="number"
								name="numeropersonas"
								id="numberPeople"
								min="1"
								onChange={handleNumberPeople}
							/>
						</div>
						<div className="col-md-6 col-12">
							<h6 className="font-weight-bold">
								Precio por persona :{" "}
								<span className="badge badge-info">Bs {price}</span>
							</h6>
							<h6 className="font-weight-bold">
								Precio total a pagar :{" "}
								<span className="text-primary" id="precioTotal">
									Bs {numberPeople * price}
								</span>
							</h6>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-md-6 col-12">
							<div className="form-group">
								<label htmlFor="payment" className="font-weight-bolder">
									Opciones de Pago
								</label>
								<select className="form-control">
									<option disabled>Seleccione la opción de pago</option>
									<option value="Credit">Tarjeta de crédito</option>
									<option value="Debit">Tarjeta de débito</option>
								</select>
							</div>
						</div>
						<div className="col-md-6 col-12 my-auto">
							<div className="col-md-6 col-12 float-right">
								<button
									className="btn btn-block btn-outline-primary"
									data-toggle="modal"
									data-target="#thanks"
									onClick={submitHandler}
								>
									Confirme Reserva
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="thanks">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body p-4">
							<h3>Gracias! </h3>
							<p className="lead">Tu reserva a sido exitosa....</p>
						</div>
						<div className="modal-footer">
							<Link to="/" className="btn btn-dark">
								Ir al Inicio
							</Link>
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Booknow;
