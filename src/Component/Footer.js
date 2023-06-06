import React from "react";
import "../Css/FooterStyle.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container container-flex ">
          <div className="icon">
            <button className="icons">
              <ion-icon name="logo-twitter"></ion-icon>
            </button>
            <button className="icons">
              <ion-icon name="logo-facebook"></ion-icon>
            </button>
            <button className="icons">
              <ion-icon name="logo-instagram"></ion-icon>
            </button>
            <button className="icons">
              <ion-icon name="logo-linkedin"></ion-icon>
            </button>
          </div>
          <div className="line">
            <hr />
            <hr />
          </div>
          <div className="copyright">
            <p>All rights reserved &copy;</p>
            <p>Made with Love by Ashutosh </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
