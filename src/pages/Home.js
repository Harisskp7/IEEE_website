import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/creationbg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Spotify</h1>
        <p> Team TechWarriros</p>
        <Link to="/menu">
          {/* <button> Register Now </button> */}
        </Link>
      </div>
    </div>
  );
}

export default Home;