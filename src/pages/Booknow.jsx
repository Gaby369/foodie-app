import React, { Component } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import defaultBcg from "../images/room-3.jpeg";
export default class Booknow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
      startDate: new Date(),
      endDate: new Date(),
    };
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
  }
  handleChangeStart(date) {
    this.setState({
      startDate: date,
    });
  }
  handleChangeEnd(date) {
    this.setState({
      endDate: date,
    });
  }
  calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);
    return endDate.diff(startDate, "days");
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    const { startDate, endDate } = this.state;
    const daysLeft = this.calculateDaysLeft(startDate, endDate);
    if (!room) {
      return (
        <div className="container roomerror">
          <div className="row my-5">
            <div className="col-md-6 col-12 mx-auto">
              <div className="card shadow-lg border-0 p-4 error">
                <h1 className="text-center display-4">SORRY</h1>
                <h3>No such room could be found...</h3>
                <Link to="/rooms" className="btn btn-warning mt-4 ">
                  Back to Rooms
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const { name, capacity, price, images } = room;
    const [mainImg, ...defaultBcg] = images;
    return (
      <div className="container my-5">
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
                  <label htmlFor="Fromdate" className="font-weight-bolder mr-3">
                    Fecha de la Reserva{" "}
                  </label>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChangeStart}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="Todate" className="font-weight-bolder mr-3">
                    Reserva para{" "}
                  </label>
                  <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <h6 className="font-weight-bolder">
                  Número de personas : {daysLeft}
                </h6>
                <mark>Revise la fecha</mark>
              </div>
              <div className="col-md-6 col-12">
                <h6 className="font-weight-bold">
                  Precio por persona :{" "}
                  <span className="badge badge-info">Bs {price}</span>
                </h6>
                <h6 className="font-weight-bold">
                  Precio total a pagar :{" "}
                  <span className="text-primary">Bs {daysLeft * price}</span>
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
  }
}
