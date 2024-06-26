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
        <h1> ABOUT ME</h1>
        <p>
        Welcome to my corner of the internet! Team Techusiastics, and I'm thrilled to have you here.

I'm a student based in KEC.

Ever since I was young, I've been fascinated by Blogs. Over the years, that curiosity has led me on a journey of exploration, learning, and growth.

On this blog, I aim to Describe the purpose or theme of my blog. Whether it's sharing tips, insights, or personal anecdotes, my goal is to What you hope to achieve with my blog.

When I'm not Your Occupation or Passion, you can find me What you enjoy doing outside of my main focus. I believe in Personal philosophy or belief, and I strive to How you live out your beliefs in your daily life.

I'm excited to connect with you and share our experiences. Feel free to explore my blog, leave comments, or reach out to me directly. Let's embark on this journey together!

Warm regards,
Team Techusiastics

Feel free to personalize it further to better reflect your personality and interests!
        </p>
      </div>
    </div>
  );
}

export default About;