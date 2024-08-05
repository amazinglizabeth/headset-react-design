import React from "react";
import Explorer from "../assets/images/music-man.jpg";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="write-up">
        <h1>ELEVATE YOUR AUDIO EXPERIENCE TODAY</h1>
        <ul>
          <li>Quality sounds produced</li>
          <li>Active noise cancellation</li>
          <li>Seemless connectivity</li>
          <li>Sleek modern designs</li>
          <li>Long battery life</li>
        </ul>
        <button>Learn More</button>
      </div>
      <div className="picture">
        <img src={Explorer} alt="ice-cream pic" />
      </div>
    </div>
  );
}
