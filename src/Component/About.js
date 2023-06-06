import React from "react";
import activitie from "../Images/school logfo.png";
import Same from "./Same";
const About = () => {
  return (
    <>
      <Same
        title="Know more about us"
        text="Success is the offspring of hard work and determination. 
        Without both these parents, success will not be born. 
        In order to be successful in life, an individual has to set up goals and work for them.
        Many people will do the first part — setting the goal right,
         but they forget the main part — working for it.."
        imgsrc={activitie}
        btn="Know More"
      />
    </>
  );
};
export default About;
