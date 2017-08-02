import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import Form from './Form.js';
import FinishQuiz from './FinishQuiz.js';

let data = {
    "selected_quiz": 0,
    "title": "Elementary Math Quiz",
    "current": 0,
    "total": 2,
    "temp_points": 0,
    "points": 0,
    "total_points" : 0,
    "questions": [
        {
            "question": "5 * 4 =",
            "answers": [
                {
                    "point": 1,
                    "label": "20"
                },
                {
                    "point": 0,
                    "label": "10"
                },
                {
                    "point": 0,
                    "label": "30"
                },
                {
                    "point": 0,
                    "label": "25"
                },
            ]
        },
        {
            "question": "2 + 5 =",
            "answers": [
                {
                    "point": 0,
                    "label": "8"
                },
                {
                    "point": 1,
                    "label": "7"
                },
                {
                    "point": 0,
                    "label": "6"
                },
                {
                    "point": 0,
                    "label": "4"
                },
            ]
        }
    ]
};

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = data;
        this.addPoint = this.addPoint.bind(this);
    }


    // Get all data
    componentWillMount() {
        axios.get('quiz/get/' + this.props.match.params.quiz).then((res) => {
            let data = res.data;
            let questions = [];
            let total_points = 0;
            res.data.questions.map((question) => {
                let answers = [];
                question.answers.map((answer) => {
                    total_points += parseInt(answer.correct);
                    answers.push({
                        point: answer.correct,
                        label: answer.name
                    });
                });
                questions.push({
                    question: question.name,
                    answers: answers
                });
            });
            this.setState({
                title: data.name,
                current: 0,
                total: data.questions.length,
                temp_points: 0,
                points: 0,
                total_points : total_points,
                questions: questions
            });
        });
    }

    nextQuestion() {
        this.setState({
            current: this.state.current + 1,
            points: parseInt(this.state.points) + parseInt(this.state.temp_points),
            temp_points: 0
        });
        $('.answers div').removeClass('answer_clicked');
    }

    addPoint(answer) {
        this.setState({temp_points: answer.point});
    }

    render() {
        const current = this.state.questions[this.state.current];
        let button = 'Next';
        if (this.state.total - 1 == this.state.current)
            button = 'Finish';

        let page = <Form current={this.state.questions[this.state.current]} addPoint={this.addPoint}/>;
        if (typeof this.state.questions[this.state.current] === 'undefined') {
            page = <FinishQuiz total_points={this.state.total_points} points={this.state.points}/>;
        }


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
                                    {page}
                                    <button className="btn btn-success"
                                            onClick={this.nextQuestion.bind(this)}>{button}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Quiz;