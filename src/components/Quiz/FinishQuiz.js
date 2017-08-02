import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';



class FinishQuiz extends React.Component {

    constructor(props) {
        super(props);
    }

    clickAnswer(answer, key){
        let elem = $("#"+key);
        $('.answers div').removeClass('answer_clicked');
        if(elem.hasClass('answer_clicked')){
            elem.removeClass('answer_clicked');
        }else{
            elem.addClass('answer_clicked');
        }
        this.props.addPoint(answer);
    }


    render() {

        return (
            <div>
                <h2>You finished a quiz</h2>
                <h3>You have {this.props.points} points of {this.props.total_points}</h3>
            </div>
        );
    }
}
export default FinishQuiz;