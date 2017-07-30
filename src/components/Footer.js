import React from 'react';
import {render} from 'react-dom';

class Footer extends React.Component {
	render(){
		return (
			<div>
				<footer className="main-footer">
				    <div className="pull-right hidden-xs">
				      <b>Version</b> 2.3.8
				    </div>
				    <strong>Copyright &copy; 2014-2016 <a href="public/http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
				    reserved.
				  </footer>
			</div>	
		);
	}
}

export default Footer;