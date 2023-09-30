import React from "react";
import icon from "C:/Users/91875/Desktop/react js movies app/movie App/src/images/tv.png";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="fo">
          <img className="img_icon" src={icon} alt="icon.png" />
          <h2 className="copyright">@Copyright 2023 IndieCine.</h2>
        </div>
        <div className="social_icons">
          <div className="Social">
            <i
              className="fa-brands fa-google fa-shake"
              style={{ color: "#ff0000" }}
            ></i>
          </div>
          <div className="Social">
            <i
              className="fa-brands fa-facebook-f fa-bounce"
              style={{ color: "#27519b" }}
            ></i>
          </div>
          <div className="Social">
            <i
              className="fa-brands fa-twitter fa-beat"
              style={{ color: "#005eff" }}
            ></i>
          </div>
          <div className="Social">
            <i className="fa-brands fa-github fa-spin"></i>
          </div>
          <div className="Social">
            <i
              className="fa-brands fa-linkedin fa-fade"
              style={{ color: " #2f4c7f" }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
