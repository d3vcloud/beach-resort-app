import React from "react";
import Hero from "../components/UI/Header";
import Banner from "../components/UI/Banner";
import { Link } from "react-router-dom";

const error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default error;
