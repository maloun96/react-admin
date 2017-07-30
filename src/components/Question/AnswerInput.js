import React from 'react';
import {render} from 'react-dom';

class AnswerInput extends React.Component {
	constructor(props){
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.props.addAnswerValue(name, value);
    }

	render(){
		return (
			<div className="input-group">
                <input type="text" name={this.props.name} ref={this.props.name}  onChange={this.handleInputChange} className="form-control" placeholder={'Answer #' + this.props.name} />
                <span className="input-group-btn">
                    <button className="btn btn-warning" type="button" onClick={this.props.removeAnswer.bind(this, this.props.name)}>Remove!</button>
                </span>
                <br />
            </div>
		);
	}
}
export default AnswerInput;