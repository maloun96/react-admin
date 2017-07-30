import React from 'react';
import {render} from 'react-dom';

class List extends React.Component {
	constructor(props){
		super(props);	
	}

	removeCompany(id){
		axios.get('home/delete/' + id).then(res => {
			this.props.removeCompany(id);
		});
	}

	editCompany(id){
		this.props.onEditCompany(id);
	}

	render(){
        var companies = this.props.companies.map((elem) => {
            return (
				<tr key={elem.id}>
					<td>{elem.id}</td>
					<td>{elem.name}</td>
					<td>{elem.description}</td>
					<td>{elem.created_at}</td>
					<td>
						<button className="btn btn-warning" onClick={this.removeCompany.bind(this, elem.id)}>Delete</button>
						<button className="btn btn-warning" onClick={this.editCompany.bind(this, elem.id)}>Edit</button>
					</td>
				</tr>
            )
        });

		return (
			<div>
				<table className="table table-bordered">
					<tbody>
					<tr>
						<th >#</th>
						<th>Name</th>
						<th>Description</th>
						<th >Date</th>
						<th >Action</th>
					</tr>
					{companies}
					</tbody>
				</table>
			</div>
		);
	}
}
export default List;