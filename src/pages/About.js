import React from "react";
import MultiplePizzas from "../assets/abtbg.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT CONFERENCE</h1>
        <p>
        International Conference on Communication, Computing and for Industry 6.0 (C2I6) is an international conference that aims to bring together experts from different domains to engineer a connected ecosystem envisioned by the sixth industrial revolution. 

The conference is a prominent convention that provides a platform for leading researchers in academia, industry and business leaders to share and exchange the cutting-edge research ideas under one roof, and discuss relevant future directions. 

C2I6 is committed to promote the industry-academic interaction and bridge the gap between the two by fostering peer-reviewed paper submissions, keynotes, invited talks, panel discussions, project exhibits and a pre-conference workshop. The conference also provides an excellent opportunity for students and researchers to develop their research skills. The conference will recognize one or more papers, demos, posters, and graduate student forum with selective awards.
        </p>
      </div>
    </div>
  );
}

export default About;