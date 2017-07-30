import React from 'react';
import { render } from 'react-dom';
import update from 'react-addons-update';
import axios from 'axios';
import List from './List.js';
import Form from './Form.js';

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			companies: [],
			edit: null
		};

		this.addCompany = this.addCompany.bind(this);
		this.removeCompany = this.removeCompany.bind(this);
		this.editCompany = this.editCompany.bind(this);
		this.onEditCompany = this.onEditCompany.bind(this);
	}


	// Get all data
	componentWillMount() {
		axios.get('companie/all')
		.then(res => {
			const companies = res.data.map(obj => obj);
			this.setState({ companies });
		});
	}

	// add a new company
	addCompany(data){
		let companies = this.state.companies;
		companies.push(data);
		this.setState({companies});
	}

	// Remove company
	removeCompany(id){
		let companies = this.state.companies.filter((company) => {
			return company.id !== id;
		});
		this.setState({companies});
	}

	editCompany(data){
		let companyIndex = this.state.companies.findIndex((company) => {
			return company.id === data.id;
		});
		
		const companies = update(this.state.companies, {
			[companyIndex]: {$set: data},
		});
		this.setState({companies});
	}

	// Find object and pass
	onEditCompany(id){
		let edit = this.state.companies.filter((company) => {
			return company.id == id
		})[0];
		this.setState({edit});
	}

	
	render() {
		return (
			<div className="content-wrapper" >
				<section className="content-header">
					<h1>
						<small>preview of simple tables</small>
					</h1>
					<ol className="breadcrumb">
						<li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
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
										addCompany={this.addCompany}
										editCompany={this.editCompany}
										edit={this.state.edit}
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
										removeCompany={this.removeCompany}
										onEditCompany={this.onEditCompany}
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
export default Home;