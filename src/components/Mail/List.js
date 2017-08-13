import React from 'react';
import {render} from 'react-dom';

class ListControll extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="box-footer no-padding">
                    <div className="mailbox-controls">
                        <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="fa fa-square-o"></i>
                        </button>
                        <div className="btn-group">
                            <button type="button" className="btn btn-default btn-sm"><i className="fa fa-trash-o"></i></button>
                            <button type="button" className="btn btn-default btn-sm"><i className="fa fa-reply"></i></button>
                            <button type="button" className="btn btn-default btn-sm"><i className="fa fa-share"></i></button>
                        </div>
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh"></i></button>
                        <div className="pull-right">
                            1-50/200
                            <div className="btn-group">
                                <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-left"></i></button>
                                <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-body no-padding">
                    <div className="table-responsive mailbox-messages">
                        <table className="table table-hover table-striped">
                            <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                                <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                                </td>
                                <td className="mailbox-attachment"></td>
                                <td className="mailbox-date">5 mins ago</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="box-footer no-padding">
                    <div className="mailbox-controls">
                        <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="fa fa-square-o"></i>
                        </button>
                        <div className="btn-group">
                            <button type="button" className="btn btn-default btn-sm"><i className="fa fa-trash-o"></i></button>
                            <button type="button" className="btn btn-default btn-sm"><i className="fa fa-reply"></i></button>
                            <button type="button" className="btn btn-default btn-sm"><i className="fa fa-share"></i></button>
                        </div>
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh"></i></button>
                        <div className="pull-right">
                            1-50/200
                            <div className="btn-group">
                                <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-left"></i></button>
                                <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default ListControll;
