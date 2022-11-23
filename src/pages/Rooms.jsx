import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <div>
        <Hero hero="roomsHero"></Hero>
        <Banner
          title="Nuestros Restaurantes"
          subtitle="Los mejores en su categoría"
        >
          <Link to="/" className="btn btn-warning">
            RETORNAR AL INICIO
          </Link>
        </Banner>
        <RoomsContainer />
      </div>
    </>
  );
};

export default Rooms;
