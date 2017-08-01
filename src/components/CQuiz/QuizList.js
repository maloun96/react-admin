import ReactDOM from 'react-dom';
import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';

const style = {
    'listStyle': 'none'
};

class QuizList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "quizes": []
        };
    }

    componentDidMount() {
        axios.get('quiz/all').then((res) => {
            this.setState({quizes: res.data}, () => console.log(this.state));
        });
    }

    deleteQuiz(id) {
        axios.get('quiz/delete/' + id).then((res) => {
            let quizes = this.state.quizes.filter((quiz) => {
                return quiz.id != id
            });
            this.setState({quizes});
        });
    }

    render() {

        const data = this.state.quizes.map((quiz) => {
            return (
                <tr className="quiz_list" key={quiz.id}>
                    <td>{quiz.id}.</td>
                    <td>{quiz.name}</td>
                    <td>
                        <li><Link style={{ textDecoration: 'none' }} className="pull-right btn btn-info" to={"/add-quiz/" + quiz.id}>Edit</Link></li>
                        <button className="pull-right btn btn-warning" onClick={this.deleteQuiz.bind(this, quiz.id)}>Delete</button>
                    </td>
                </tr>
            );
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
                                    <table className="table table-bordered">
                                        <tbody>
                                        <tr>
                                            <th>#</th>
                                            <th>Quiz name</th>
                                            <th>Action</th>
                                        </tr>
                                        {data}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default QuizList;