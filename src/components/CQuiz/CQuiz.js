import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
// import Form from './Form.js';
// import FinishQuiz from './FinishQuiz.js';
const style = {overflow: 'hidden'};
import Question from './Question.js';
let data = {
    "id": "",
    "name": "",
    "submit": false,
    "questions": [{
        "id": 1,
        "name": "",
        "answers": [{
            "id": 1,
            "name": "",
            "correct": false
        }]
    }]
};

class CQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = data;
        this.addQuestion = this.addQuestion.bind(this);
        this.removeQuestion = this.removeQuestion.bind(this);
        this.addAnswer = this.addAnswer.bind(this);
        this.removeAnswer = this.removeAnswer.bind(this);


        this.updateState = this.updateState.bind(this);
        this.submit = this.submit.bind(this);
        this.formIsValid = this.formIsValid.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {console.log('componentWillMount')}
    componentWillReceiveProps(){
        this.setState({
            "id": "",
            "name": "",
            "submit": false,
            "questions": [{
                "id": 1,
                "name": "",
                "answers": [{
                    "id": 1,
                    "name": "",
                    "correct": false
                }]
            }]
        });
    }

    componentDidMount() {
        if( typeof this.props.match.params.quiz !== 'undefined'){
            axios.get('quiz/get/' + this.props.match.params.quiz).then((res) => {
                this.setState({id: res.data.id, name: res.data.name, questions: res.data.questions}, () => {console.log(this.state)});
            });
        }
    }

    handleInputChange(e) {
        e.preventDefault();
        let name = e.target.value;
        this.setState({name}, () => {
        });
    }

    addQuestion() {
        let questions = this.state.questions;
        questions.push({
            "id": questions.length + 1,
            "name": "",
            "answers": [{
                "id": 1,
                "name": "",
                "correct": false
            }]
        });

        this.setState({questions});
    }

    removeQuestion(id) {
        let questions = this.state.questions.filter((question) => {
            return question.id != id
        });

        this.setState({questions});
    }

    addAnswer(question_id) {
        let questions = this.state.questions;
        let index = this.findQuestionById(question_id);

        let id = questions[index].answers.length;

        questions[index].answers.push({
            "id": parseInt(id + 1),
            "name": "",
            "correct": false
        });
        this.setState({questions});

    }

    submit(e) {
        e.preventDefault();
        if (!this.formIsValid())
            return;

        let url = (this.state.id > 0) ? 'quiz/edit/' + this.state.id : 'quiz/add';
        axios.post(url, this.state).then(res => {
            this.setState({
                "name": "",
                "submit": true,
                "questions": [{
                    "id": 1,
                    "name": "",
                    "answers": [{
                        "id": 1,
                        "name": "",
                        "correct": false
                    }]
                }]
            });
        });
    }


    formIsValid() {
        let questions = this.state.questions;
        let response = true;
        for (let i = 0; i < questions.length; i++) {
            let questionDOM = $('#question-' + questions[i].id).closest('.form-group');
            if (questions[i].name.length == 0) {
                questionDOM.addClass('has-error');
                response = false;
            } else {
                questionDOM.removeClass('has-error');
            }


            let answers = questions[i].answers;
            let correct = false;
            for (let j = 0; j < answers.length; j++) {
                let answerDOM = $('#answer-' + answers[j].id).closest('.form-group');
                if (answers[j].correct)
                    correct = true;


                if (answers[j].name.length == 0) {
                    answerDOM.addClass('has-error');
                    response = false;
                } else {
                    answerDOM.removeClass('has-error');
                }
            }

            if (!correct) {
                questionDOM.addClass('has-error');
                questionDOM.find('.help-block').show();
                response = false;
            } else {
                questionDOM.find('.help-block').hide();
            }
        }
        return response;
    }


    removeAnswer(answer_id, question_id) {
        let questions = this.state.questions;
        let index = this.findQuestionById(question_id);
        let answers = questions[index].answers.filter((answer) => {
            return answer_id != answer.id
        });

        questions[index].answers = answers;
        this.setState({questions});
    }

    findQuestionById(question_id) {
        return this.state.questions.findIndex((question) => {
            return question.id == question_id
        });
    }

    findAnswerById(question_index, answer_id) {
        return this.state.questions[question_index].answers.findIndex((answer) => {
            return answer.id == answer_id
        });
    }

    updateState(data, question_id, answer_id) {
        let questions = this.state.questions;
        let question_index = this.findQuestionById(question_id);


        // Update answer
        if (typeof answer_id !== 'undefined') {
            let index = this.findAnswerById(question_index, answer_id);
            questions[question_index].answers[index] = data;
        } else
            questions[question_index] = data;

        this.setState({questions});
    }

    render() {
        const data = this.state.questions.map((question, index) => {
            return <Question
                addQuestion={this.addQuestion}
                removeQuestion={this.removeQuestion}
                addAnswer={this.addAnswer}
                removeAnswer={this.removeAnswer}
                key={index}
                updateState={this.updateState}
                question={question}/>
        });

        return (
            <div className="content-wrapper">
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
                                    <h3 className="box-title">Bordered Table</h3>
                                </div>
                                <div className="box-body">
                                    {(this.state.submit) ?
                                        <div className="alert alert-success alert-dismissible">
                                            <button type="button" className="close" data-dismiss="alert"
                                                    aria-hidden="true">×
                                            </button>
                                            <h4><i className="icon fa fa-check"></i> Alert!</h4>
                                            The form has successfuly submited
                                        </div>
                                        : ''}
                                    <div className="form-group" style={style}>
                                        <label className="col-sm-2 control-label">Quiz name</label>
                                        <div className="col-sm-10">
                                            <input type="email"
                                                   value={this.state.name}
                                                   onChange={this.handleInputChange}
                                                   className="form-control"
                                                   id="inputEmail3"
                                                   placeholder="Quiz name"
                                            />
                                        </div>
                                    </div>
                                    <form onSubmit={this.submit}>
                                        {data}
                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-10">
                                                <div className="checkbox">
                                                    <button type="submit" className=" btn btn-success">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}
export default CQuiz;