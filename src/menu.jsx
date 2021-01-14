import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Menu extends React.Component {
  render() {
    return (
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
      >

         <div className="brand"><h2 className="brand">Admin panel for anagram bot</h2></div>
         
        <div className="sidebar-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/" activeClassName="active">
                <i class="fas fa-robot"></i> Main
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rating" activeClassName="active">
                <i className="fas fa-users"></i> Ratings{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/wordsPage"
                activeClassName="active"
              >
                <i className="fas fa-clipboard-list"></i> Words
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/error">
                <i className="fas fa-cogs"></i> Configs
              </Link>
              </li>
              <li className="nav-item">
                <a href="/logout" className="nav-link">
                  <i class="fas fa-sign-out-alt"></i> Logout
                </a>
              
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
