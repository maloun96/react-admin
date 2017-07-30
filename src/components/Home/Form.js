import React from 'react';
import {render} from 'react-dom';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            edit: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit(event){
        event.preventDefault();
        let data = {
            name: this.refs.name.value,
            description: this.refs.description.value
        };

        let url = (this.refs.edit.value > 0) ? 'home/edit/' + this.refs.edit.value : 'home/add';

        axios.post(url, data).then(res => {
            if(this.refs.edit.value > 0)  
                this.props.editCompany(res.data); 
            else 
                this.props.addCompany(res.data);
            this.clearState();
		});
    }    

    componentWillReceiveProps(props){
        if(props.edit != null){
            this.setState({
                name: props.edit.name,
                description: props.edit.description,
                edit: props.edit.id
            })
        }
    }

    clearState(){
        this.setState({
            name: '',
            description: '',
            edit: 0
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <input type="hidden" name="edit" ref="edit" value={this.state.edit} onChange={this.handleInputChange}/>
                        <input type="name" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} className="form-control"/><br />
                        <input type="description" ref="description" name="description" value={this.state.description} onChange={this.handleInputChange} className="form-control"/><br />
                        <button type="submit" className=" btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Form;