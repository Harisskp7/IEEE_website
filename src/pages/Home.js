import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/creationbg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> 4th International Conference on</h1>
        <p> On Communication, Computing & Industry 6.0 - 2023
C2I6-2023</p>
        <Link to="/menu">
          <button> Register Now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;