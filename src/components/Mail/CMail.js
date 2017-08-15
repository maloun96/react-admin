import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import MailSidebar from './MailSidebar.js';

class CMail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            to: '',
            subject: '',
            text: '',
            isValid: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        $("#compose-textarea").wysihtml5();
    }

    validateEmail(value) {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    }

    handleInput(e){
        const val = e.target.value;
        const name = e.target.name;

        this.setState({[name]: val}, () => console.log(this.state));

    }

    validateForm() {
        let r = true;
        if(this.state.to == '' || !this.validateEmail(this.state.to))
        {
            $('#to').addClass('has-error');
            $('#to').find('.help-block').show();
            r = false;
        }else{
            $('#to').removeClass('has-error');
            $('#to').find('.help-block').hide();
        }
        if(this.state.subject == '')
        {
            $('#subject').addClass('has-error');
            $('#subject').find('.help-block').show();
            r = false;
        }else{
            $('#subject').removeClass('has-error');
            $('#subject').find('.help-block').hide();
        }

        return r;
    }

    handleSubmit(e) {
        e.preventDefault();


        // Validate inputs
        if(!this.validateForm())
            return;


        let data = new FormData();
        let ins = document.querySelector('input[type="file"]').files.length;
        for (let x = 0; x < ins; x++) {
            data.append("fileToUpload[]", document.querySelector('input[type="file"]').files[x]);
        }
        data.append("to", this.refs.to.value);
        data.append("subject", this.refs.subject.value);
        data.append("text", this.refs.text.value);

        axios.post('mail/add', data).then(res => {
            if(res.status == 200){
                this.setState({
                    to: '',
                    subject: '',
                    text: '',
                })
            }
        });
    }

    render() {

        const text = "<h1><u>Heading Of Message</u></h1><h4>Subheading</h4>" +
            "<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain" +
            "was born and I will give you a complete account of the system, and expound the actual teachings" +
            "of the great explorer of the truth, the master-builder of human happiness. No one rejects," +
            "dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know" +
            "how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again" +
            "is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain," +
            "but because occasionally circumstances occur in which toil and pain can procure him some great" +
            "pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise," +
            "except to obtain some advantage from it? But who has any right to find fault with a man who" +
            "chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that" +
            "produces no resultant pleasure? On the other hand, we denounce with righteous indignation and" +
            "dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so" +
            "blinded by desire, that they cannot foresee</p>" +
            "<ul>" +
            "<li>List item one</li>" +
            "<li>List item two</li>" +
            "<li>List item three</li>" +
            "<li>List item four</li>" +
            "</ul>" +
            "<p>Thank you,</p>" +
            "<p>John Doe</p>";

        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Mailbox
                        <small>13 new messages</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">Mailbox</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <MailSidebar buttonBack="inbox"/>
                        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                            <div className="col-md-9">
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Compose New Message</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="form-group" id="to">
                                            <input ref="to" name="to" value={this.state.to} onChange={this.handleInput} className="form-control" placeholder="To:"/>
                                            <span className="help-block">Insert email</span>
                                        </div>
                                        <div className="form-group" id="subject">
                                            <input ref="subject" name="subject" value={this.state.subject} onChange={this.handleInput} className="form-control" placeholder="Subject:"/>
                                            <span className="help-block">Insert subject</span>
                                        </div>
                                        <div className="form-group">
                                        <textarea ref="text" name="text" onChange={this.handleInput}  id="compose-textarea" value={this.state.text} className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <div className="btn btn-default btn-file">
                                                <i className="fa fa-paperclip"></i> Attachment
                                                <input type="file" ref="file" multiple="multiple" name="attachment"/>
                                            </div>
                                            <p className="help-block">Max. 32MB</p>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <div className="pull-right">
                                            <button type="button" className="btn btn-default"><i
                                                className="fa fa-pencil"></i> Draft
                                            </button>
                                            <button type="submit" className="btn btn-primary"><i
                                                className="fa fa-envelope-o"></i>
                                                Send
                                            </button>
                                        </div>
                                        <button type="reset" className="btn btn-default"><i className="fa fa-times"></i>
                                            Discard
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}
export default CMail;
