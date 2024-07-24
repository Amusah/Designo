import React from "react";

import Projects from "./Projects";
import Card from "./Card";
import { home } from "../assets";
import { graphicProjects } from "../constants";

const { appDesign, webDesignsm } = home.desktop;

const routes = ['/appdesign', '/webdesign']

const GraphicDesign = () => {
  return (
    <Projects
      serviceImg1={appDesign}
      serviceImg2={webDesignsm}
      service2={"Web Design"}
      service1={"App Design"}
      routesArray={routes}
    >
      {graphicProjects.map((project) => (
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

export default GraphicDesign;
