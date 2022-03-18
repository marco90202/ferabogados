import React from "react";
import logo from "../../assets/images/logo_web.png";

const Header = () => {
  return (
    <div>
      <nav className="menu">
        <div className="container">
          <div className="icon-hover">
            |||
            <div className="sidebar">
             <ul className="cont_sidebar">
               <li>inicio</li>
               <li>nosotros</li>
               <li>servicios</li>
               <li>eventos</li>
               <li>contactenos</li>
             </ul>
            </div>
          </div>

          <a href="/">
            <img
              className="logo"
              src={logo}
              alt="FERABOGADOS"
              height="70"
            ></img>{" "}
          </a>
        </div>
        <ul className="menu_items">
          <li className="active">
            <a href="/inicio">inicio</a>
          </li>
          <li>
            <a href="/nosotros">nosotros</a>
          </li>
          <li>
            <a href="/servicios">servicios</a>
            <ul className="subitems">
              <li>
                <a href="#">subitem</a>
              </li>
              <li>
                <a href="#">subitem</a>
              </li>
              <li>
                <a href="#">subitem</a>
              </li>
            </ul>
          </li>
          <li>
            <a href=" /eventos">eventos</a>
            <ul className="subitems">
              <li>
                <a href="#">subitem</a>
              </li>
              <li>
                <a href="#">subitem</a>
              </li>
              <li>
                <a href="#">subitem</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/contacto">contactenos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
