import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './mystyles.css';

class Pricingstalls extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid border border-1 d-flex justify-content-center">
                    <div className="card card1 w-65">
                        <div className="card-header">
                            <h3 className="fw-bold">Pricing Stalls</h3>
                        </div>
                        <div className="card-body">
                            <div className="container-fluid fs-5">
                                <div className="row">
                                    <span className="text-ssuuna pb-2 text-decoration-underline">Select Category</span>
                                </div>
                                <div className="container-fluid">
                                    <div className="row p-2 justify-content-between">
                                        <div className="col-md-2 rounded-pill">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="size" checked />
                                                <label className="form-check-label" htmlFor="size"><h3>Size</h3></label>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="row justify-content-center ">
                                                <div className="col-md-3">
                                                    <input type="text" placeholder="0" className="form-control w-75" />
                                                </div>
                                                <span className="col-md-2 text">by</span>
                                                <div className="col-md-3">
                                                    <input type="text" placeholder="0" className="form-control w-75" />
                                                </div>
                                                <span className="col-md-4 text">meters</span>
                                            </div>
                                        </div>
                                        <button className="btn btn-info col-md-2 col-4 rounded-pill">SAVE</button>
                                    </div>
                                    <div className="row p-2 justify-content-between">
                                        <div className="col-md-2 rounded-pill">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="level" checked />
                                                <label className="form-check-label" htmlFor="level"><h3>Level</h3></label>
                                            </div>
                                        </div>
                                        <div className="col-md-7 justify-content-center">
                                            <select className="form-select w-75 mb-2" id="floatingSelect" aria-label="Floating label select example">
                                                <option value="GL">Ground Level</option>
                                                <option value="L1">Level 1</option>
                                                <option value="L2">Level 2</option>
                                                <option value="L3">Level 3</option>
                                                <option value="L4">Level 4</option>
                                                <option value="L5">Level 5</option>
                                                <option value="L6">Level 6</option>
                                            </select>
                                        </div>
                                        <button className="btn btn-info col-md-2 col-4 rounded-pill">SAVE</button>
                                    </div>
                                    <div className="row p-2 justify-content-between">
                                        <div className="col-md-2 rounded-pill">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="clas" checked />
                                                <label className="form-check-label" htmlFor="clas"><h3>Class</h3></label>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <select className="form-select w-75 mb-2" id="floatingSelect" aria-label="Floating label select example">
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                                <option value="super">Super</option>
                                            </select>
                                        </div>
                                        <button className="btn btn-info col-md-2 col-4 rounded-pill">SAVE</button>
                                    </div>
                                    <div className="row p-2 justify-content-between">
                                        <div className="col-md-2 rounded-pill">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="manual" checked />
                                                <label className="form-check-label" htmlFor="manual"><h3>Manual</h3></label>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <input type="text" placeholder="House 1" className="form-control w-75 mb-2" />
                                        </div>
                                        <button className="btn btn-info col-md-2 col-4 rounded-pill">SAVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Pricingstalls;