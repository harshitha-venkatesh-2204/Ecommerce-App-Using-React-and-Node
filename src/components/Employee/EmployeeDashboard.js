import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import EmployeeSideNav from "./EmployeeSideNav";

function EmployeeDashboard() {
  return (
    <div>
      <Header />
      <EmployeeSideNav />
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0"></h1>
              </div>
              {/* /.col */}
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>

        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Info boxes */}
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i className="fas fa-cog" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Customer Traffic</span>
                    <span className="info-box-number">
                      10
                      <small>%</small>
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-danger elevation-1">
                    <i className="fas fa-tag" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Inventory</span>
                    <span className="info-box-number">41,410</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              {/* fix for small devices only */}
              <div className="clearfix hidden-md-up" />
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-success elevation-1">
                    <i className="fas fa-shopping-cart" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Sales</span>
                    <span className="info-box-number">760</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-warning elevation-1">
                    <i className="fas fa-users" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">New Members</span>
                    <span className="info-box-number">2,000</span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Monthly Recap Report</h5>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-tool dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="fas fa-wrench" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          role="menu"
                        >
                          <a href="#" className="dropdown-item">
                            Action
                          </a>
                          <a href="#" className="dropdown-item">
                            Another action
                          </a>
                          <a href="#" className="dropdown-item">
                            Something else here
                          </a>
                          <a className="dropdown-divider" />
                          <a href="#" className="dropdown-item">
                            Separated link
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <p className="text-center">
                          <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                        </p>
                        <div className="chart">
                          {/* Sales Chart Canvas */}
                          <canvas
                            id="salesChart"
                            height={180}
                            style={{ height: 180 }}
                          />
                        </div>
                        {/* /.chart-responsive */}
                      </div>
                      {/* /.col */}
                      <div className="col-md-4">
                        <p className="text-center">
                          <strong>Goal Completion</strong>
                        </p>
                        <div className="progress-group">
                          Add Products to Cart
                          <span className="float-right">
                            <b>160</b>/200
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                        <div className="progress-group">
                          Complete Purchase
                          <span className="float-right">
                            <b>310</b>/400
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-danger"
                              style={{ width: "75%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                        <div className="progress-group">
                          <span className="progress-text">
                            Visit Premium Page
                          </span>
                          <span className="float-right">
                            <b>480</b>/800
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                        <div className="progress-group">
                          Send Inquiries
                          <span className="float-right">
                            <b>250</b>/500
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </div>
                        {/* /.progress-group */}
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* ./card-body */}
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-sm-3 col-6">
                        <div className="description-block border-right">
                          <span className="description-percentage text-success">
                            <i className="fas fa-caret-up" /> 17%
                          </span>
                          <h5 className="description-header">$35,210.43</h5>
                          <span className="description-text">
                            TOTAL REVENUE
                          </span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-3 col-6">
                        <div className="description-block border-right">
                          <span className="description-percentage text-warning">
                            <i className="fas fa-caret-left" /> 0%
                          </span>
                          <h5 className="description-header">$10,390.90</h5>
                          <span className="description-text">TOTAL COST</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-3 col-6">
                        <div className="description-block border-right">
                          <span className="description-percentage text-success">
                            <i className="fas fa-caret-up" /> 20%
                          </span>
                          <h5 className="description-header">$24,813.53</h5>
                          <span className="description-text">TOTAL PROFIT</span>
                        </div>
                        {/* /.description-block */}
                      </div>
                      {/* /.col */}
                      <div className="col-sm-3 col-6">
                        <div className="description-block">
                          <span className="description-percentage text-danger">
                            <i className="fas fa-caret-down" /> 18%
                          </span>
                          <h5 className="description-header">1200</h5>
                          <span className="description-text">
                            GOAL COMPLETIONS
                          </span>
                        </div>
                        {/* /.description-block */}
                      </div>
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>

            {/* Main row */}
            <div className="row">
              {/* Left col */}
              <div className="col-md-8">
                {/* TABLE: LATEST ORDERS */}
                <div className="card">
                  <div className="card-header border-transparent">
                    <h3 className="card-title">Latest Orders</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table m-0">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Item</th>
                            <th>Status</th>
                            <th>Popularity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR9842</a>
                            </td>
                            <td>Call of Duty IV</td>
                            <td>
                              <span className="badge badge-success">
                                Shipped
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#00a65a"
                                data-height={20}
                              >
                                90,80,90,-70,61,-83,63
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR1848</a>
                            </td>
                            <td>Samsung Smart TV</td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#f39c12"
                                data-height={20}
                              >
                                90,80,-90,70,61,-83,68
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR7429</a>
                            </td>
                            <td>iPhone 6 Plus</td>
                            <td>
                              <span className="badge badge-danger">
                                Delivered
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#f56954"
                                data-height={20}
                              >
                                90,-80,90,70,-61,83,63
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR7429</a>
                            </td>
                            <td>Samsung Smart TV</td>
                            <td>
                              <span className="badge badge-info">
                                Processing
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#00c0ef"
                                data-height={20}
                              >
                                90,80,-90,70,-61,83,63
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR1848</a>
                            </td>
                            <td>Samsung Smart TV</td>
                            <td>
                              <span className="badge badge-warning">
                                Pending
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#f39c12"
                                data-height={20}
                              >
                                90,80,-90,70,61,-83,68
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR7429</a>
                            </td>
                            <td>iPhone 6 Plus</td>
                            <td>
                              <span className="badge badge-danger">
                                Delivered
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#f56954"
                                data-height={20}
                              >
                                90,-80,90,70,-61,83,63
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="pages/examples/invoice.html">OR9842</a>
                            </td>
                            <td>Call of Duty IV</td>
                            <td>
                              <span className="badge badge-success">
                                Shipped
                              </span>
                            </td>
                            <td>
                              <div
                                className="sparkbar"
                                data-color="#00a65a"
                                data-height={20}
                              >
                                90,80,90,-70,61,-83,63
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.table-responsive */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer clearfix">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-sm btn-info float-left"
                    >
                      Place New Order
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-sm btn-secondary float-right"
                    >
                      View All Orders
                    </a>
                  </div>
                  {/* /.card-footer */}
                </div>
                <div className="card">
                  <div className="card-header border-0">
                    <h3 className="card-title">Products</h3>
                    <div className="card-tools">
                      <a href="#" className="btn btn-tool btn-sm">
                        <i className="fas fa-download" />
                      </a>
                      <a href="#" className="btn btn-tool btn-sm">
                        <i className="fas fa-bars" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body table-responsive p-0">
                    <table className="table table-striped table-valign-middle">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Sales</th>
                          <th>More</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="dist/img/default-150x150.png"
                              alt="Product 1"
                              className="img-circle img-size-32 mr-2"
                            />
                            Some Product
                          </td>
                          <td>$13 USD</td>
                          <td>
                            <small className="text-success mr-1">
                              <i className="fas fa-arrow-up" />
                              12%
                            </small>
                            12,000 Sold
                          </td>
                          <td>
                            <a href="#" className="text-muted">
                              <i className="fas fa-search" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="dist/img/default-150x150.png"
                              alt="Product 1"
                              className="img-circle img-size-32 mr-2"
                            />
                            Another Product
                          </td>
                          <td>$29 USD</td>
                          <td>
                            <small className="text-warning mr-1">
                              <i className="fas fa-arrow-down" />
                              0.5%
                            </small>
                            123,234 Sold
                          </td>
                          <td>
                            <a href="#" className="text-muted">
                              <i className="fas fa-search" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="dist/img/default-150x150.png"
                              alt="Product 1"
                              className="img-circle img-size-32 mr-2"
                            />
                            Amazing Product
                          </td>
                          <td>$1,230 USD</td>
                          <td>
                            <small className="text-danger mr-1">
                              <i className="fas fa-arrow-down" />
                              3%
                            </small>
                            198 Sold
                          </td>
                          <td>
                            <a href="#" className="text-muted">
                              <i className="fas fa-search" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="dist/img/default-150x150.png"
                              alt="Product 1"
                              className="img-circle img-size-32 mr-2"
                            />
                            Perfect Item
                            <span className="badge bg-danger">NEW</span>
                          </td>
                          <td>$199 USD</td>
                          <td>
                            <small className="text-success mr-1">
                              <i className="fas fa-arrow-up" />
                              63%
                            </small>
                            87 Sold
                          </td>
                          <td>
                            <a href="#" className="text-muted">
                              <i className="fas fa-search" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-16">
                  <div className="card">
                    <div className="card-header border-0">
                      <div className="d-flex justify-content-between">
                        <h3 className="card-title">Sales</h3>
                        <a href="javascript:void(0);">View Report</a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex">
                        <p className="d-flex flex-column">
                          <span className="text-bold text-lg">$18,230.00</span>
                          <span>Sales Over Time</span>
                        </p>
                        <p className="ml-auto d-flex flex-column text-right">
                          <span className="text-success">
                            <i className="fas fa-arrow-up" /> 33.1%
                          </span>
                          <span className="text-muted">Since last month</span>
                        </p>
                      </div>
                      <div className="position-relative mb-4">
                        <canvas id="sales-chart" height={200} />
                      </div>
                      <div className="d-flex flex-row justify-content-end">
                        <span className="mr-2">
                          <i className="fas fa-square text-primary" /> This year
                        </span>
                        <span>
                          <i className="fas fa-square text-gray" /> Last year
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card */}
              </div>

              {/* /.col */}
              <div className="col-md-4">
                {/* Info Boxes Style 2 */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Browser Usage</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="chart-responsive">
                          <canvas id="pieChart" height={150} />
                        </div>
                        {/* ./chart-responsive */}
                      </div>
                      {/* /.col */}
                      <div className="col-md-4">
                        <ul className="chart-legend clearfix">
                          <li>
                            <i className="far fa-circle text-danger" /> Chrome
                          </li>
                          <li>
                            <i className="far fa-circle text-success" /> IE
                          </li>
                          <li>
                            <i className="far fa-circle text-warning" /> FireFox
                          </li>
                          <li>
                            <i className="far fa-circle text-info" /> Safari
                          </li>
                          <li>
                            <i className="far fa-circle text-primary" /> Opera
                          </li>
                          <li>
                            <i className="far fa-circle text-secondary" />{" "}
                            Navigator
                          </li>
                        </ul>
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer p-0">
                    <ul className="nav nav-pills flex-column">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          United States of America
                          <span className="float-right text-danger">
                            <i className="fas fa-arrow-down text-sm" />
                            12%
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          India
                          <span className="float-right text-success">
                            <i className="fas fa-arrow-up text-sm" /> 4%
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          China
                          <span className="float-right text-warning">
                            <i className="fas fa-arrow-left text-sm" /> 0%
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.footer */}
                </div>
                {/* /.card */}
                <div className="card direct-chat direct-chat-primary">
                  <div className="card-header">
                    <h3 className="card-title">Direct Chat</h3>
                    <div className="card-tools">
                      <span
                        title="3 New Messages"
                        className="badge badge-primary"
                      >
                        3
                      </span>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        title="Contacts"
                        data-widget="chat-pane-toggle"
                      >
                        <i className="fas fa-comments" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="direct-chat-messages">
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            Alexander Pierce
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            23 Jan 2:00 pm
                          </span>
                        </div>
                        <img
                          className="direct-chat-img"
                          src="dist/img/user1-128x128.jpg"
                          alt="message user image"
                        />
                        <div className="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                      </div>
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">
                            Sarah Bullock
                          </span>
                          <span className="direct-chat-timestamp float-left">
                            23 Jan 2:05 pm
                          </span>
                        </div>
                        <img
                          className="direct-chat-img"
                          src="dist/img/user3-128x128.jpg"
                          alt="message user image"
                        />
                        <div className="direct-chat-text">
                          You better believe it!
                        </div>
                      </div>
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">
                            Alexander Pierce
                          </span>
                          <span className="direct-chat-timestamp float-right">
                            23 Jan 5:37 pm
                          </span>
                        </div>
                        <img
                          className="direct-chat-img"
                          src="dist/img/user1-128x128.jpg"
                          alt="message user image"
                        />
                        <div className="direct-chat-text">
                          Working with AdminLTE on a great new app! Wanna join?
                        </div>
                      </div>
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">
                            Sarah Bullock
                          </span>
                          <span className="direct-chat-timestamp float-left">
                            23 Jan 6:10 pm
                          </span>
                        </div>
                        <img
                          className="direct-chat-img"
                          src="dist/img/user3-128x128.jpg"
                          alt="message user image"
                        />
                        <div className="direct-chat-text">I would love to.</div>
                      </div>
                    </div>
                    <div className="direct-chat-contacts">
                      <ul className="contacts-list">
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="dist/img/user1-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Count Dracula
                                <small className="contacts-list-date float-right">
                                  2/28/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                How have you been? I was...
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="dist/img/user7-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Sarah Doe
                                <small className="contacts-list-date float-right">
                                  2/23/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                I will be waiting for...
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="dist/img/user3-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Nadia Jolie
                                <small className="contacts-list-date float-right">
                                  2/20/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                I'll call you back at...
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="dist/img/user5-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Nora S. Vans
                                <small className="contacts-list-date float-right">
                                  2/10/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                Where is your new...
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="dist/img/user6-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                John K.
                                <small className="contacts-list-date float-right">
                                  1/27/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                Can I take a look at...
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              className="contacts-list-img"
                              src="dist/img/user8-128x128.jpg"
                              alt="User Avatar"
                            />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Kenneth M.
                                <small className="contacts-list-date float-right">
                                  1/4/2015
                                </small>
                              </span>
                              <span className="contacts-list-msg">
                                Never mind I found...
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          className="form-control"
                        />
                        <span className="input-group-append">
                          <button type="button" className="btn btn-primary">
                            Send
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>

                {/* PRODUCT LIST */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Recently Added Products</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <ul className="products-list product-list-in-card pl-2 pr-2">
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            Samsung TV
                            <span className="badge badge-warning float-right">
                              $1800
                            </span>
                          </a>
                          <span className="product-description">
                            Samsung 32" 1080p 60Hz LED Smart HDTV.
                          </span>
                        </div>
                      </li>
                      {/* /.item */}
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            Bicycle
                            <span className="badge badge-info float-right">
                              $700
                            </span>
                          </a>
                          <span className="product-description">
                            26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                          </span>
                        </div>
                      </li>
                      {/* /.item */}
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            Xbox One{" "}
                            <span className="badge badge-danger float-right">
                              $350
                            </span>
                          </a>
                          <span className="product-description">
                            Xbox One Console Bundle with Halo Master Chief
                            Collection.
                          </span>
                        </div>
                      </li>
                      {/* /.item */}
                      <li className="item">
                        <div className="product-img">
                          <img
                            src="dist/img/default-150x150.png"
                            alt="Product Image"
                            className="img-size-50"
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="javascript:void(0)"
                            className="product-title"
                          >
                            PlayStation 4
                            <span className="badge badge-success float-right">
                              $399
                            </span>
                          </a>
                          <span className="product-description">
                            PlayStation 4 500GB Console (PS4)
                          </span>
                        </div>
                      </li>
                      {/* /.item */}
                    </ul>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer text-center">
                    <a href="javascript:void(0)" className="uppercase">
                      View All Products
                    </a>
                  </div>
                  {/* /.card-footer */}
                </div>

                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/*/. container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      <Footer />
    </div>
  );
}
export default EmployeeDashboard;
