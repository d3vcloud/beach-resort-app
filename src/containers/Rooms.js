import React from "react";
import Hero from "../components/UI/Header";
import Banner from "../components/UI/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer/RoomsContainer";

const room = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default room;
