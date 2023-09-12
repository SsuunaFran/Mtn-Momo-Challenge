import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './mystyles.css';

class Addstalls extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="container-fluid border border-1 border-primary" id="body-container">
                 <div className="container-fluid d-flex justify-content-center">
        <div className="card card1">
            <div className="card-header"><h3>Add Stalls</h3></div>
            <div className="card-body">
                <div className="row justify-content-center">
                    <div className="col-xxl-3 col-md-4">
                        <div className="form-group">
                            <label for="stallId" className="col-12 text- control-label">Stall Name :</label>
                            <div className="col-12 w-75">
                                <input type="text" name="" id="stallId" className="form-control" value="" required="required" pattern="" title=""/>
                            </div>
                        </div>   
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="input" className="col-12 control-label">Attach Category :</label>
                            <div className="col-12 col-5 w-75">
                                <select name="" id="input" className="form-control">
                                    <option value="">4 by 4</option>
                                    <option value="">House 1</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 d-flex justify-content-start align-items-end mt-md-0 mt-2">
                        <button type="button" className="btn btn-info">Add Stall</button>
                    </div>
                </div>
            </div>
            <div className="footer"></div>
        </div>
    </div>
    </div>
            </React.Fragment>
        )
    }
}

export default Addstalls;