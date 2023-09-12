import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './mystyles.css';

class Attachtenant extends Component {
    render() {
        return (
            <div className="contaier d-flex justify-content-center">
                <div className="card card1">
                    <div className="card-header">
                        <h3>Attach a Tenant</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-4 col-12 border-end border-4 border-ssuuna">
                                <div className="row">
                                    <div className="col-12">
                                        <label htmlhtmlFor="" className="form-label">Select a Category</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col-12 pt-sm-3">
                                        <label htmlFor="exampleDataList" className="form-label">Select a stall</label>
                                        <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                                        <datalist id="datalistOptions">
                                            <option value="San Francisco" />
                                            <option value="New York" />
                                            <option value="Seattle" />
                                            <option value="Los Angeles" />
                                            <option value="Chicago" />
                                        </datalist>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8 col-12 ps-4">
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="" className="form-label">Surname</label>
                                        <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className="form-label">Given Name</label>
                                        <input type="text" className="form-control" id="" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="" className="form-label">Contact</label>
                                        <input type="tel" className="form-control" id="" placeholder="07....." />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="inputAddress2" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Kla" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputState" className="form-label">State</label>
                                        <select id="inputState" className="form-select">
                                            <option selected>Kenya</option>
                                            <option selected>Tanzania</option>
                                            <option selected>Uganda</option>
                                        </select>
                                    </div>
                                    <div className="col-12 form-floating">
                                        <textarea className="form-control textarea" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                        <label htmlFor="floatingTextarea2">Description</label>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Attach Tenant</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>
        )
    }
}

export default Attachtenant;