import React from 'react';
import {render} from 'react-dom';

class Company extends React.Component {
	render(){
		return (
			<div className="content-wrapper" >
			    <section className="content-header">
			      <h1>
			        General Company Form Elements
			        <small>Preview</small>
			      </h1>
			      <ol className="breadcrumb">
			        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
			        <li><a href="#">Forms</a></li>
			        <li className="active">General Elements</li>
			      </ol>
			    </section>
			    <section className="content">
			      <div className="row">
			        <div className="col-md-12">
			          <div className="box box-primary">
			            <div className="box-header with-border">
			              <h3 className="box-title">Quick asExample</h3>
			            </div>
			            <form role="form">
			              <div className="box-body">
			                <div className="form-group">
			                  <label name="exampleInputEmail1">Email address</label>
			                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
			                </div>
			                <div className="form-group">
			                  <label name="exampleInputPassword1">Password</label>
			                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			                </div>
			                <div className="form-group">
			                  <label name="exampleInputFile">File input</label>
			                  <input type="file" id="exampleInputFile" />

			                  <p className="help-block">Example block-level help text here.</p>
			                </div>
			                <div className="checkbox">
			                  <label>
			                    <input type="checkbox" /> Check me out
			                  </label>
			                </div>
			              </div>

			              <div className="box-footer">
			                <button type="submit" className="btn btn-primary">Submit</button>
			              </div>
			            </form>
			          </div>
			          
			          <div className="box box-info">
			            <div className="box-header with-border">
			              <h3 className="box-title">Input Addon</h3>
			            </div>
			            <div className="box-body">
			              <div className="input-group">
			                <span className="input-group-addon">@</span>
			                <input type="text" className="form-control" placeholder="Username" />
			              </div>
			              <br />

			              <div className="input-group">
			                <input type="text" className="form-control" />
			                <span className="input-group-addon">.00</span>
			              </div>
			              <br />

			              <div className="input-group">
			                <span className="input-group-addon">$</span>
			                <input type="text" className="form-control" />
			                <span className="input-group-addon">.00</span>
			              </div>

			              <h4>With icons</h4>

			              <div className="input-group">
			                <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
			                <input type="email" className="form-control" placeholder="Email" />
			              </div>
			              <br />

			              <div className="input-group">
			                <input type="text" className="form-control" />
			                <span className="input-group-addon"><i className="fa fa-check"></i></span>
			              </div>
			              <br />

			              <div className="input-group">
			                <span className="input-group-addon"><i className="fa fa-dollar"></i></span>
			                <input type="text" className="form-control" />
			                <span className="input-group-addon"><i className="fa fa-ambulance"></i></span>
			              </div>

			              <h4>With checkbox and radio inputs</h4>

			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="input-group">
			                        <span className="input-group-addon">
			                          <input type="checkbox" />
			                        </span>
			                    <input type="text" className="form-control" />
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="input-group">
			                        <span className="input-group-addon">
			                          <input type="radio" />
			                        </span>
			                    <input type="text" className="form-control" />
			                  </div>
			                </div>
			              </div>

			              <h4>With buttons</h4>

			              <p className="margin">Large: <code>.input-group.input-group-lg</code></p>

			              <div className="input-group input-group-lg">
			                <div className="input-group-btn">
			                  <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown">Action
			                    <span className="fa fa-caret-down"></span></button>
			                  <ul className="dropdown-menu">
			                    <li><a href="#">Action</a></li>
			                    <li><a href="#">Another action</a></li>
			                    <li><a href="#">Something else here</a></li>
			                    <li className="divider"></li>
			                    <li><a href="#">Separated link</a></li>
			                  </ul>
			                </div>
			                <input type="text" className="form-control" />
			              </div>
			              <p className="margin">Normal</p>

			              <div className="input-group">
			                <div className="input-group-btn">
			                  <button type="button" className="btn btn-danger">Action</button>
			                </div>
			                <input type="text" className="form-control" />
			              </div>
			              <p className="margin">Small <code>.input-group.input-group-sm</code></p>

			              <div className="input-group input-group-sm">
			                <input type="text" className="form-control" />
			                    <span className="input-group-btn">
			                      <button type="button" className="btn btn-info btn-flat">Go!</button>
			                    </span>
			              </div>
			            </div>
			          </div>

			        </div>
			      </div>
			    </section>
			  </div>
		);
	}
}
export default Company;