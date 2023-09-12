import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './mystyles.css';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar bg-light position-sticky top-0">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#ToggleMyNav" aria-controls="ToggleMyNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <span className="navbar-brand">RENTpay</span>
                        <div className="offcanvas offcanvas-start" id="ToggleMyNav" tabIndex="-1">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title">MENU</h5>
                                <button className="btn-close" data-bs-dismiss="offcanvas" type="canvas"></button>
                            </div>
                            <div className="offcanvas-body offcanvas-width-1 ms-3 me-3 pt-5">
                                <ul className="navbar-nav ms-1 fs-5 me-1">
                                    <li data-bs-dismiss="offcanvas" className="nav-item mb-4">
                                        <Link to="/dashboard" className="nav-link"><i className="bi bi-speedometer2 text-success me-2"></i>Dashboard</Link>
                                    </li>
                                    <li className="nav-item mb-4 dropdown">
                                        <button className=" btn nav-link dropdown-toggle" id="monitorPaymentsDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bi bi-wallet2 text-success me-2"></i>Monitor Payments
                                        </button>
                                        <div className="dropdown-menu bg-primary" aria-labelledby="monitorPaymentsDropdown">
                                           <li data-bs-dismiss="offcanvas"><Link to="/arf" className="dropdown-item">Attach Rent Fee</Link></li>
                                            <Link to="/" className="dropdown-item">Another action</Link>
                                            <Link to="/" className="dropdown-item">Something else here</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item mb-4 dropdown">
                                        <button className="btn nav-link dropdown-toggle" id="stallmgt" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bi bi-grid-1x2 text-success me-2"></i>Stall Management
                                        </button>
                                        <ul className="dropdown-menu bg-primary" aria-labelledby="stallmgt">
                                            <li data-bs-dismiss="offcanvas"><Link to="/addstalls" className="dropdown-item">Add Stalls</Link></li>
                                            <li data-bs-dismiss="offcanvas"><Link to="/pricing" className="dropdown-item">Pricing Stalls</Link></li>
                                            <li data-bs-dismiss="offcanvas"><Link to="/" className="dropdown-item">Something else here</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item mb-4 dropdown">
                                        <button className="nav-link dropdown-toggle" id="tenants" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bi bi-person text-success me-2"></i>Tenants
                                        </button>
                                        <div className="dropdown-menu bg-primary" aria-labelledby="tenants">
                                            <li data-bs-dismiss="offcanvas"><Link to="/attachtenant" className="dropdown-item">Attach Tenant</Link></li>
                                            <Link to="/" className="dropdown-item">Another action</Link>
                                            <Link to="/" className="dropdown-item">Something else here</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item mb-4 dropdown">
                                        <button className="nav-link dropdown-toggle" id="remnotes" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bi bi-sticky text-success me-2"></i>Reminder Notes
                                        </button>
                                        <div className="dropdown-menu bg-primary" aria-labelledby="remnotes">
                                            <Link to="/" className="dropdown-item">Action</Link>
                                            <Link to="/" className="dropdown-item">Another action</Link>
                                            <Link to="/" className="dropdown-item">Something else here</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item m-5 fixed-bottom">
                                        <Link to="/" className="nav-link"><i className="bi bi-box-arrow-right text-success me-2"></i>Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;
