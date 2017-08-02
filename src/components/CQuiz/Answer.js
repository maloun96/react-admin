import ReactDOM from 'react-dom';
import React from 'react';
import {render} from 'react-dom';
// import axios from 'axios';
// import Form from './Form.js';
// import FinishQuiz from './FinishQuiz.js';
const style = {overflow: 'hidden'};


class Answer extends React.Component {

    constructor(props) {
        super(props);
        this.addAnswer = this.addAnswer.bind(this);
        this.removeAnswer = this.removeAnswer.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(e){
        let data = {
            "id" : this.props.answer.id,
            "name" : this.refs.name.value,
            "correct": this.refs.correct.checked
        };

        if(this.refs.name.value.length == 0) {
            $('#answer-' + this.props.answer.id).closest('.form-group').addClass('has-error');
        }else{
            $('#answer-' + this.props.answer.id).closest('.form-group').removeClass('has-error');
        }
        this.props.updateState(data, this.props.question_id, this.props.answer.id);
    }


    addAnswer() {
        this.props.addAnswer(this.props.question_id);
    }

    removeAnswer(){
        this.props.removeAnswer(this.props.answer.id, this.props.question_id);
    }

    render() {
        return (
            <div className="padding-30">
                <div className="form-group" style={style}>
                    <label className="col-sm-2 control-label">Answer #1</label>
                    <div className="col-sm-10">
                        <div className="input-group">
                            <input type="text" value={this.props.answer.name} className="form-control" id={"answer-" + this.props.answer.id} ref="name" name="name" onChange={this.handleInputChange} placeholder="Answer #1"/>
                            <span className="input-group-addon">
                              <input type="checkbox" defaultChecked={this.props.answer.correct} ref="correct" name="correct" onChange={this.handleInputChange}/>
                            </span>
                            <span className="input-group-addon">
                              <a onClick={this.addAnswer} className="pull-left"><i className="fa fa-plus" aria-hidden="true"></i></a>
                            </span>

                            {(this.props.answer.id != 1) ?
                                <span className="input-group-addon">
                                  <a onClick={this.removeAnswer} className="pull-left"><i className="fa fa-minus" aria-hidden="true"></i></a>
                                </span>
                            : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
    );
    }
    }
    export default Answer;