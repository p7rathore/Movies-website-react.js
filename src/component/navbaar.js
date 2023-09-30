import React from "react";
import icon from "C:/Users/91875/Desktop/react js movies app/movie App/src/images/tv.png";

function Navbaar() {
  return (
    <>
      <div className="nav">
        <div className="ico">
          <img className="img_icon" src={icon} alt="icon.png" />
          <h1 className="name-movis">
            IndieCine<span className="red">.</span>
          </h1>
        </div>
        <ul>
          <a href="/home">
            <li>Home</li>
          </a>
          <a href="/Films">
            <li>Films</li>
          </a>
          <a href="/Tv">
            <li>Tv</li>
          </a>
          <a href="/Contact">
            <li>Contact</li>
          </a>
        </ul>
        <i className="fa-solid fa-bars" onClick={()=>alert("next page not found !")}></i>
      </div>
    </>
  );
}
export default Navbaar;
