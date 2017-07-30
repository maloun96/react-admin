import React from 'react';
import { render } from 'react-dom';
import update from 'react-addons-update';
import axios from 'axios';
import List from './List.js';
import Form from './Form.js';

class Question extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			companies: [],
			edit: null
		};
		this.addQuestion = this.addQuestion.bind(this);
	}


	// Get all data
	componentWillMount() {
		axios.get('questions/all')
		.then(res => {
			const companies = res.data.map(obj => obj);
			this.setState({ companies }, () => {console.log(this.state.companies)});
		});
	}

    addQuestion(data){
		console.log(data);
	}
	
	render() {
		return (
			<div className="content-wrapper" >
				<section className="content-header">
					<h1>
						<small>preview of simple tables</small>
					</h1>
					<ol className="breadcrumb">
						<li><a href="#"><i className="fa fa-dashboard"></i> Questions </a></li>
						<li><a href="#">Tables</a></li>
						<li className="active">Simple</li>
					</ol>
				</section>
				<section className="content">
					<div className="row">
						<div className="col-md-12">
							<div className="box">
								<div className="box-header with-border">
									<h3 className="box-title">Form</h3>
								</div>
								<div className="box-body">
									<Form
										addQuestion={this.addQuestion}
									/>
								</div>
							</div>
							<div className="box">
								<div className="box-header with-border">
									<h3 className="box-title">Bordered Table</h3>
								</div>
								<div className="box-body">
									<List
										companies={this.state.companies}
									/>
								</div>
								<div className="box-footer clearfix">
									<ul className="pagination pagination-sm no-margin pull-right">
										<li><a href="#">&laquo;</a></li>
										<li><a href="#">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">&raquo;</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
export default Question;