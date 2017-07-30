import React from 'react';
import {render} from 'react-dom';
// import axios from 'axios';
// import Form from './Form.js';
// import FinishQuiz from './FinishQuiz.js';
const style= {overflow: 'hidden'};
import Answer from './Answer.js';

class Question extends React.Component {

    constructor(props) {
        super(props);
    }


    // Get all data
    componentWillMount() {
    }

    render() {

        const data = this.props.question.answers.map((answers, index) => {
            return <Answer key={index} answer={answer} />
        });

        return (
            <div>
                <div className="padding-15">
                    <div className="form-group" style={style}>
                        <label className="col-sm-2 control-label">Question #1</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3"
                                   placeholder="Question #1" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Question;