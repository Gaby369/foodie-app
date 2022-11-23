import React, { Component } from "react";
import defaultBcg from "../images/room-3.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="container roomerror">
          <div className="row my-5">
            <div className="col-md-6 col-12 mx-auto">
              <div className="card shadow-lg border-0 p-4 error">
                <h1 className="text-center display-4">Lo sentimos</h1>
                <h3>No se encontro el Restaurante...</h3>
                <Link to="/rooms" className="btn btn-warning mt-4 ">
                  Volver a la lista de Restaurantes
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,

      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultBcg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={` Restaurante ${name} `}>
            <Link to="/rooms" className="btn btn-primary">
              Volver a lista de los Restaurantes
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room container">
          <div className="row">
            {defaultBcg.map((item, index) => {
              return (
                <div className="col-md-4 col-12 mx-auto" key={index}>
                  <div className="card border-0 shadow-lg">
                    <img
                      key={index}
                      src={item}
                      alt={name}
                      className="img-fluid"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Acerca de Nosotros</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Reserva desde : Bs{price}</h6>

              <h6>
                Capacidad Máxima :{" "}
                {capacity > 1 ? `${capacity} personas` : `${capacity} personas`}
              </h6>
              <h6>{pets ? "Mascotas permitidas" : "Mascotas no permitidas"}</h6>
              <h6>{breakfast && "Romantico ambiente para Parejas"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h3>Novedades</h3>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <div className="p-4 clearfix">
            <div className="row">
              <div className="col-md-3 col-12 ml-auto">
                <Link
                  to={`/booknow/${this.state.slug}`}
                  className="btn btn-outline-primary btn-block btn-lg float-right "
                >
                  Reserva Ahora
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
