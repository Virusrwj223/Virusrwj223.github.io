import React from "react";
import Logo from "../assets/HM_logo.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="" width={100} height={100} />
          </a>
          <button className="btn btn-sm">
            <Link to="contact" smooth={true}>
              Work With Me
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
