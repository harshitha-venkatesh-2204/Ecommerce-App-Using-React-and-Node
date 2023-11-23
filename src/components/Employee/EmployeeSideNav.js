import React from "react";
import Logout from "../Logout";
import { NavLink } from "react-router-dom";

function EmployeeSideNav() {
  return (
    <div>
      {" "}
      <aside className="main-sidebar sidebar-dark-primary elevation-20">
      <div classname="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition" style={{minHeight: '2000px'}}>
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">A4</span>
        </a>
        {/* Sidebar */}
        <div>
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
                <NavLink to="/" className="nav-item font-weight-bold"><Logout/></NavLink>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
        </div>
      </aside>
    </div>
  );
}
export default EmployeeSideNav;
