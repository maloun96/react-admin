import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

class MailSidebar extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        const link = (this.props.buttonBack == 'compose') ? <Link to='/mail/compose' className="btn btn-primary btn-block margin-bottom">Compose</Link> : <Link to='/mail' className="btn btn-primary btn-block margin-bottom">Back to inbox</Link>

        return (
            <div className="col-md-3">
                {link}
                <div className="box box-solid">
                    <div className="box-header with-border">
                        <h3 className="box-title">Folders</h3>

                        <div className="box-tools">
                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="box-body no-padding">
                        <ul className="nav nav-pills nav-stacked">
                            <li><a href="mailbox.html"><i className="fa fa-inbox"></i> Inbox
                                <span className="label label-primary pull-right">12</span></a></li>
                            <li><a href="#"><i className="fa fa-envelope-o"></i> Sent</a></li>
                            <li><a href="#"><i className="fa fa-file-text-o"></i> Drafts</a></li>
                            <li><a href="#"><i className="fa fa-filter"></i> Junk <span
                                className="label label-warning pull-right">65</span></a>
                            </li>
                            <li><a href="#"><i className="fa fa-trash-o"></i> Trash</a></li>
                        </ul>
                    </div>
                </div>
                <div className="box box-solid">
                    <div className="box-header with-border">
                        <h3 className="box-title">Labels</h3>

                        <div className="box-tools">
                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    <div className="box-body no-padding">
                        <ul className="nav nav-pills nav-stacked">
                            <li><a href="#"><i className="fa fa-circle-o text-red"></i> Important</a></li>
                            <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> Promotions</a>
                            </li>
                            <li><a href="#"><i className="fa fa-circle-o text-light-blue"></i> Social</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default MailSidebar;
