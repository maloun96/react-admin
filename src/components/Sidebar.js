import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
class Sidebar extends React.Component {
	render(){
		return (
			<div>
				<aside className="main-sidebar">
			    <section className="sidebar">
			      <div className="user-panel">
			        <div className="pull-left image">
			          <img src="public/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
			        </div>
			        <div className="pull-left info">
			          <p>Alexander Pierce</p>
			          <a href="public/#"><i className="fa fa-circle text-success"></i> Online</a>
			        </div>
			      </div>
			      <form action="#" method="get" className="sidebar-form">
			        <div className="input-group">
			          <input type="text" name="q" className="form-control" placeholder="Search..." />
			              <span className="input-group-btn">
			                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
			                </button>
			              </span>
			        </div>
			      </form>
			      <ul className="sidebar-menu">
			        <li className="header">MAIN NAVIGATION</li>
			        <li><Link to='/'>Quiz</Link></li>
				  	<li><Link to='/add-quiz'>Add Quiz</Link></li>
				  	<li><Link to='/list-quiz'>List of quizes</Link></li>
			      </ul>
			    </section>
			  </aside>
			</div>	
		);
	}
}
export default Sidebar;
