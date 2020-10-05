import React from "react";
import Hero from "../components/UI/Header";
import Banner from "../components/UI/Banner";
import { Link } from "react-router-dom";
import Service from "../components/Service/Service";
import FeaturedRooms from '../components/FeaturedRooms/FeaturedRooms';


const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/room" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRooms/>
    </>
  );
};

export default home;
