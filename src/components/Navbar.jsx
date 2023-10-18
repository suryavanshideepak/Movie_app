import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = (props) => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
      color: isActive ? "white" : "black",
    };
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 ">
        <h2 className="logo">GetFlix</h2>
        <button
          className="navbar-toggler bg-danger"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 mx-auto nav">
            <li className="nav-item pl-5 py-2">
              <NavLink style={navLinkStyle} to={"/"}>
                HOME
              </NavLink>
            </li>
            <li className="nav-item pl-5 py-2">
              <NavLink style={navLinkStyle} to={"/about"}>
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item pl-5 py-2">
              <NavLink style={navLinkStyle} to={"/blog"}>
                BLOG
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 mr-5">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search..."
              value={props.firstValue}
              onChange={(e) => props.setFirstValue(e.target.value)}
              aria-label="Search"
            />
            <button
              className="btn btn-danger my-2 my-sm-0"
              onClick={props.clickToSubmit}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
