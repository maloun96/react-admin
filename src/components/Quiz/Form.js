import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';



class Form extends React.Component {

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

        let answers = this.props.current.answers.map((answer, index) => {
            return (<div id={index} onClick={this.clickAnswer.bind(this, answer, index)} key={index} className="col-md-12 answer" >{answer.label}</div>)
        });

        return (
            <div>
                <h2>{this.props.current.question}</h2>
                <hr />
                <div className="answers">
                    {answers}
                </div>
            </div>
        );
    }
}
export default Form;