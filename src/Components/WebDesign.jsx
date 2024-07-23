import React from "react";

import Projects from "./Projects";
import Card from './Card';

import styles from "./WebDesign.module.scss";
import { webProjects } from '../constants';
import { home, shared } from "../assets";

const { appDesign, graphicDesign, } = home.desktop



const WebDesign = () => {
  return (
    <>
      <Projects serviceImg1={appDesign} serviceImg2={graphicDesign} service1={'App Design'} service2={'Graphic Design'}>
        {webProjects.map((project) => (
          <Card key={project.id} cardImage={project.screenshot} cardTitle={project.title} cardText={project.text} />
        ))}
      </Projects>
    </>
  );
};

export default WebDesign;
