import React from 'react';
import {render} from 'react-dom';
// import axios from 'axios';
// import Form from './Form.js';
// import FinishQuiz from './FinishQuiz.js';
const style= {overflow: 'hidden'};
import Question from './Question.js';

let data = {
    "name" : "Quiz name",
    "quiestions": [
        {
            "name" : "5 + 2",
            "answers" : [
                {
                    "name" : "7",
                    "isCorrect" : true,
                },
                {
                    "name" : "8",
                    "isCorrect" : false,
                }
            ]
        },
        {
            "name" : "2 * 5",
            "answers" : [
                {
                    "name" : "7",
                    "isCorrect" : false,
                },
                {
                    "name" : "10",
                    "isCorrect" : true,
                }
            ]
        }
    ]
};


class CQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = data;
    }


    // Get all data
    componentWillMount() {
    }

    render() {
        console.log(this.state.questions);
        const data = this.state.questions.map((question, index) => {
            return <Question key={index} question={question} />
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
                                    <div className="form-group" style={style}>
                                        <label className="col-sm-2 control-label">Quiz name</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail3"
                                                   placeholder="Quiz name" />
                                        </div>
                                    </div>
                                    {data}
                                    <div className="form-group">
                                        <div className="col-sm-offset-2 col-sm-10">
                                            <div className="checkbox">
                                                <button className="btn btn-success">Save</button>
                                            </div>
                                        </div>
                                    </div>
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