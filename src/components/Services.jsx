import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaChair, FaHamburger, FaMoneyCheck } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "FRESCURA",
        info: "Encontraras bebidas inigualables, te sentiras en una playa",
      },
      {
        icon: <FaChair />,
        title: "COMODIDAD",
        info: "No sentirás que estas fuera de casa ofrecemos ambiente para todo tipo de evento",
      },
      {
        icon: <FaHamburger />,
        title: "COMIDA EXQUISITA",
        info: "Nuestros menús son amplios en cada uno de los restaurantes encontraras lo que buscas",
      },
      {
        icon: <FaMoneyCheck />,
        title: "RESERVA RÁPIDA Y EFECTIVA",
        info: "Podrás realizar tu reserva en cualquier lugar y realizaras tu pago online",
      },
    ],
  };
  render() {
    return (
      <div className="container-fluid services">
        <Title title="Servicios que ofrecen nuestros restaurantes" />
        <div className="row">
          {this.state.services.map((item, index) => {
            return (
              <div
                className="col-md-4 col-lg-3 col-12 mx-auto my-3"
                key={index}
              >
                <div className="card shadow-lg border-0 p-4">
                  <article className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
