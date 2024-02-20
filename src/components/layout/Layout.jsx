import React from "react";
import "./Layout.css";
import { BiSolidDashboard } from "react-icons/bi";
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <div className="layout">
        <aside className="sidebar">
          <h2>Name</h2>
          <div className="list-content-container">
            <div className="list-content">
              <BiSolidDashboard className="icon" />
              <Link href="" className="sidebar-title">
                Dashboard
              </Link>
            </div>
          </div>
        </aside>

        <div className="content">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
