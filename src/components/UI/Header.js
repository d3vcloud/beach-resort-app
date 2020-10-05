import React from "react";

const hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

export default hero;

hero.defaultProps = {
  hero: "defaultHero",
};
