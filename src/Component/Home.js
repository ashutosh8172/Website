import React from "react";
import homeimg from "../Images/bgg2.jpg";
import "../Css/HomeAbout.css";
import Same from "./Same";
const Home = () => {
  return (
    <>
      <Same
        title="Learning Made Easy"
        text="Success is the offspring of hard work and determination. Without both these parents,
         success will not be born. In order to be successful in life, 
         an individual has to set up goals and work for them.
         Many people will do the first part — setting the goal right, but they forget the
          main part — working for it."
        imgsrc={homeimg}
        btn="Read More"
      />
    </>
  );
};
export default Home;
