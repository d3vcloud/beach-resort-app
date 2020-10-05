import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../UI/Title/Title";

class Service extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime obcaecati enim molestias. Non odit rem ipsam et. Minus harum eligendi dolorum impedit accusamus architecto, soluta dolorem, voluptas odio quam voluptate.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime obcaecati enim molestias. Non odit rem ipsam et. Minus harum eligendi dolorum impedit accusamus architecto, soluta dolorem, voluptas odio quam voluptate.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime obcaecati enim molestias. Non odit rem ipsam et. Minus harum eligendi dolorum impedit accusamus architecto, soluta dolorem, voluptas odio quam voluptate.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime obcaecati enim molestias. Non odit rem ipsam et. Minus harum eligendi dolorum impedit accusamus architecto, soluta dolorem, voluptas odio quam voluptate.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Service;
