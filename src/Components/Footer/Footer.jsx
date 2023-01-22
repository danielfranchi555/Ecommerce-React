import React from "react";
import "./Footer.scss";
import twitter from "../../img/twitter.png";
import instagram from '../../img/instagram-react.png'
import facebokk from '../../img/facebook.png'
const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="footer">
        <div className="divLogos  d-flex" style={{justifyContent:'center'}}>
          <div>
            {" "}
            <a href="#">
              <i className="fa fa-facebook px-2">
                {" "}
                <img className="logoRedes" src={twitter} alt="" />{" "}
              </i>
            </a>
          </div>
          <div>
            {" "}
            <a href="#">
              <i className="fa fa-instagram px-2">
                {" "}
                <img className="logoRedes" src={instagram} alt="" />{" "}
              </i>
            </a>
          </div>
          <div>
            {" "}
            <a href="#">
              <i className="fa fa-youtube px-2">
                <img src={facebokk} className='logoRedes' alt="" />
              </i>
            </a>
          </div>
          <div>
            {" "}
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
