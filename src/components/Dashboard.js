import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './mystyles.css';
import Doughnut from './doughnut';
import BarChart from './bar';

class Dashboard extends Component{

    render(){
        return(
            <React.Fragment>
                    <div className="container-fluid border border-1 border-primary" id="body-container">
        <div className="container-fluid border border-1 border-rent">
            <div className="row justify-content-between align-items-center text-underlined py-4">
                <span className="fw-bold fs-5"><i className="bi bi-speedometer2 text-ssuuna me-2"></i>Dashboard</span>
            </div>
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-header mb-1">
                            <span className="text-primary fw-bold">Tenants</span>
                          </div>
                        <div className="card-footer">
                          Card footer
                        </div>
                      </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-header mb-1">
                            <span className="text-primary fw-bold">Tenants</span>
                          </div>
                        <div className="card-footer">
                          Card footer
                        </div>
                      </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-header mb-1">
                            <span className="text-primary fw-bold">Total Stalls</span>
                          </div>
                        <div className="card-footer">
                          Card footer
                        </div>
                      </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-header mb-1">
                            <span className="text-primary fw-bold">Assigned stalls</span>
                            <span className="text-ssuuna dashboard-icon"><i className="bi bi-person fs-4 ms-auto"></i></span>
                          </div>
                        <div className="card-footer">
                            <span className="">Footer</span>
                        </div>
                      </div>
                </div>
            </div>
            <div className="row justify-content-between py-5">
                <div className="col-lg-9 col-sm-8">
                    <div className="card">
                        <div className="card-header border-bottom border-2">
                            <span className="card-title text-bold fs-5">Bar</span>
                        </div>
                        <div className="card-body">
                            <div className="chart-area">
                            <BarChart/>
                                {/* <canvas id="chartId" aria-label="chart" height="60" width="200"></canvas> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4">
                    <div className="card">
                        <div className="card-header border-bottom border-2">
                            <span className="text-bold fs-5 card-title">Pie</span>
                        </div>
                        <div className="card-body">
                            <div className="chart-pie">
                                <Doughnut/>
                                {/* <canvas id="pie" aria-label="chart" height="200" width="480"></canvas> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </React.Fragment>
        )
    }
}

export default Dashboard;