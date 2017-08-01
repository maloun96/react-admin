import React from 'react';
import {render} from 'react-dom';
// import axios from 'axios';
// import Form from './Form.js';
// import FinishQuiz from './FinishQuiz.js';
const style = {overflow: 'hidden'};
import Answer from './Answer.js';

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.addQuestion = this.addQuestion.bind(this);
        this.removeQuestion = this.removeQuestion.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    addQuestion(){
        this.props.addQuestion();
    }

    removeQuestion(){
        this.props.removeQuestion(this.props.question.id);
    }

    handleInputChange(e){
        let question = this.props.question;
        question.name = e.target.value;

        if(e.target.value.length == 0) {
            $('#question-' + this.props.question.id).closest('.form-group').addClass('has-error');
        }else{
            $('#question-' + this.props.question.id).closest('.form-group').removeClass('has-error');
            this.props.updateState(question, this.props.question.id);
        }
    }


    render() {

        const data = this.props.question.answers.map((answer, index) => {
            return <Answer
                    removeAnswer={this.props.removeAnswer}
                    addAnswer={this.props.addAnswer}
                    key={index}
                    question_id={this.props.question.id}
                    updateState={this.props.updateState}
                    answer={answer} />
        });

        return (
            <div>
                <div className="padding-15">
                    <div className="form-group" style={style}>
                        <label className="col-sm-2 control-label">
                            Question #1
                        </label>
                        <div className="col-sm-10">
                            <div className="input-group">
                                <input type="text" value={this.props.question.name} className="form-control" id={"question-" + this.props.question.id} onChange={this.handleInputChange} placeholder="Question #1"/>
                                <span className="input-group-addon">
                                    <a onClick={this.addQuestion} className="pull-left"><i className="fa fa-plus" aria-hidden="true"></i></a>
                                </span>


                                {(this.props.question.id != 1) ?
                                    <span className="input-group-addon  ttt">
                                      <a onClick={this.removeQuestion} className="pull-left"><i className="fa fa-minus" aria-hidden="true"></i></a>
                                    </span>
                                    : ''
                                }
                                <div className="clearfix"></div>
                            </div>
                            <span className="help-block">Please choose 1 correct answer.</span>
                        </div>

                    </div>
                </div>
                {data}
            </div>
        );
    }
}
export default Question;