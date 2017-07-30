import React from 'react';
import {render} from 'react-dom';
// import axios from 'axios';
// import Form from './Form.js';
// import FinishQuiz from './FinishQuiz.js';
const style= {overflow: 'hidden'};


class Answer extends React.Component {

    constructor(props) {
        super(props);
    }


    // Get all data
    componentWillMount() {
    }

    render() {
        return (
            <div className="padding-30">
                <div className="form-group" style={style}>
                    <label className="col-sm-2 control-label">Answer #1</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3"
                               placeholder="Answer #1" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Answer;