import React from "react";

import Projects from "./Projects";
import Card from "./Card";

import { appProjects } from "../constants";
import { home } from "../assets";

const { webDesignsm, graphicDesign } = home.desktop;

const routes = ["/webdesign", "/graphicdesign"];

const AppDesign = () => {
  return (
    <Projects
      serviceImg1={webDesignsm}
      serviceImg2={graphicDesign}
      service1={"Web Design"}
      service2={"Graphic Design"}
      routesArray={routes}
    >
      {appProjects.map(project => (
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

export default AppDesign;
