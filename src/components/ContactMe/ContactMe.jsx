import React from 'react';
import './ContactMe.css';
import MyResume from '../../images/resume/my-resume.pdf';

function ContactMe() {
    return (
        <div className="contact-me">
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Contact Me</h1>
                    <h2 className="lead">
                        <i class="fas fa-user fa-fw"></i>Armando Rodriguez
                    </h2>
                    <hr className="my-4" />
                    <h2 className="lead">
                        <i class="fas fa-mobile-alt fa-fw"></i>210-999-1191
                    </h2>
                    <h2 className="lead">
                        <i class="fas fa-envelope fa-fw"></i>
                        <a href="mailto:Arod1207@Me.com">Arod1207@Me.com</a>
                    </h2>
                    <div className="row">
                        <div className="col-md-4">
                            <a href="https://www.linkedin.com/in/armandorodriguez7/">
                                <i class="fab fa-linkedin fa-5x"></i>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://github.com/arod1207">
                                <i class="fab fa-github fa-5x"></i>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href={MyResume} download="my-resume">
                                <i class="fas fa-file-download fa-5x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
