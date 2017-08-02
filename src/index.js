import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom'
import {createHashHistory} from 'history'

import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer.js';
// import Home from './components/Home/Home.js';
// import Company from './components/Company/Company.js';
// import Question from './components/Question/Question.js';
import Quiz from './components/Quiz/Quiz.js';
import CQuiz from './components/CQuiz/CQuiz.js';
import QuizList from './components/CQuiz/QuizList.js';

const hashHistory = createHashHistory()

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <Switch>
                    <Route exact path='/quiz/:quiz' component={Quiz}/>
                    <Route exact path='/add-quiz' component={CQuiz}/>
                    <Route path='/list-quiz' component={QuizList}/>
                    <Route path='/add-quiz/:quiz' component={CQuiz}/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

render(
    <Router history={hashHistory}>
        <App />
    </Router>
    , document.getElementById('root')
);