import React from "react";

import Projects from "./Projects";
import Card from "./Card";

import { webProjects } from "../constants";
import { home, shared } from "../assets";

const { appDesign, graphicDesign } = home.desktop;

const routes = ["/appdesign", "/graphicdesign"];

const WebDesign = () => {
  return (
    <Projects
      serviceImg1={appDesign}
      serviceImg2={graphicDesign}
      service1={"App Design"}
      service2={"Graphic Design"}
      routesArray={routes}
    >
      {webProjects.map((project) => (
        <Card
          key={project.id}
          cardImage={project.screenshot}
          cardTitle={project.title}
          cardText={project.text}
        />
      ))}
    </Projects>
  );
};

export default WebDesign;
