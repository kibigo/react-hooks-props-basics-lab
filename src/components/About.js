import React from "react";
import Links from "./Links";

function About(props) {
  const displayP = () =>{
    if(props.bio){
      return <p>{props.bio}</p>;
    }else {
      return null;
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {displayP()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {"https://github.com/liza"} linkedin = {"https://www.linkedin.com/in/liza/"}/>
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
