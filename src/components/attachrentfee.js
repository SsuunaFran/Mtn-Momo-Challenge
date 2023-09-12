import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './mystyles.css';

class Attachrentfee extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="container-fluid d-flex justify-content-center">
        <div className="card w-75">
            <div className="card-header"><h2>Attach Rent Fee</h2></div>
            <div className="card-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 py-1">
                            <h3>4 by 6</h3>
                        </div>
                        <div className="col-xl-6"> 
                            <label for="price1">Shs.</label>
                            <input className="w-100" type="text" name="" id="price1"/>
                        </div>
                        <div className="col-xl-3">
                            <div className="row justify-content-end">
                                <span className="col-xl-6 col-sm-4 py-xl-3 py-1">
                                  <button type="button" className="btn btn-danger w-100">Delete</button>
                                </span>
                                <span className="col-xl-6 col-sm-4 py-xl-3 py-1">
                                    <button type="button" className="btn btn-info w-100">Attach</button>
                                </span>
                            </div>
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

export default Attachrentfee;