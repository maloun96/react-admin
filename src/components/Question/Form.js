import React from 'react';
import {render} from 'react-dom';
import AnswerInput from './AnswerInput';



class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            edit: 0,
            answers: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
        this.addAnswer = this.addAnswer.bind(this);
        this.removeAnswer = this.removeAnswer.bind(this);
        this.addAnswerValue = this.addAnswerValue.bind(this);
    }

    /* Create Dom and init state */
    addAnswer(){
        let answers = this.state.answers;
        let name = "answer_" + this.state.answers.length;

        answers.push({name: name, value: '', element: <AnswerInput name={name} key={this.state.answers.length} addAnswerValue={this.addAnswerValue} removeAnswer={this.removeAnswer}/>});
        this.setState({answers});

    }

    /* Update state with the new values of answer inputs */
    addAnswerValue(name, value){
        let find = this.state.answers.findIndex((answer) => {
            return answer['name'] == name
        });
        let answers = this.state.answers;
        answers[find]['value'] = value;
        this.setState({answers});
    }

    removeAnswer(name){
        let answers = this.state.answers.filter((answer) => {
            return answer['name'] != name
        });
        this.setState({answers}, () => {console.log(this.state.answers)});
    }

    submit(event){
        event.preventDefault();
        let answers  = this.state.answers.map((answer) => {
            return answer.value;
        });

        const data = {name: this.refs.name.value, answers : answers};
        axios.post('questions/add', data).then(res => {
            this.props.addQuestion(res.data);
            this.clearState();
		});
    }    

    componentWillReceiveProps(props){
        // if(props.edit != null){
        //     this.setState({
        //         name: props.edit.name,
        //         description: props.edit.description,
        //         edit: props.edit.id
        //     })
        // }
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
                        <input type="name" name="name" ref="name" value={this.state.name} placeholder="Name" onChange={this.handleInputChange} className="form-control"/><br />
                        <div className="answers">{this.state.answers.map((answer) => {return answer.element})}</div>
                        <p className="btn btn-success" onClick={this.addAnswer}>Add answer</p>
                        <button type="submit" className=" btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default Form;