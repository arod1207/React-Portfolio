import React from 'react';
import './Projects.css';
import Project1 from '../../images/Project-images/Project1.png';
import GoodBurger from '../../images/Project-images/GoodBurgerApp.png';
import Moodifi from '../../images/Project-images/Moodifi.png';
import MyTeam from '../../images/Project-images/MyTeam.png';
import WeatherDash from '../../images/Project-images/weatherDashboard.png';
import WorkDay from '../../images/Project-images/workDayScheduler.png';

function Projects() {
    return (
        <div className="projects">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={{ width: '35rem' }}>
                            <img
                                src={Project1}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h4 className="card-title">
                                    I'll Take A Corona, Hold The Corona
                                </h4>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a
                                            href="https://github.com/arod1207/Project1"
                                            target="_blank"
                                        >
                                            <i class="fab fa-github fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a
                                            href="https://arod1207.github.io/Project1/"
                                            target="_blank"
                                        >
                                            <i class="fas fa-link fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: '35rem' }}>
                            <img
                                src={GoodBurger}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h4 className="card-title">
                                    Welcome to Good Burger
                                </h4>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a
                                            href="https://github.com/arod1207/Burger"
                                            target="_blank"
                                        >
                                            <i class="fab fa-github fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a
                                            href="https://guarded-scrubland-78137.herokuapp.com/"
                                            target="_blank"
                                        >
                                            <i class="fas fa-link fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: '35rem' }}>
                            <img
                                src={MyTeam}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h4 className="card-title">
                                    Node.js Team Generator
                                </h4>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a
                                            href="https://github.com/arod1207/HW-10-Template-Engine-Employee"
                                            target="_blank"
                                        >
                                            <i class="fab fa-github fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a
                                            href="https://github.com/arod1207/HW-10-Template-Engine-Employee"
                                            target="_blank"
                                        >
                                            <i class="fas fa-link fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 row-display">
                        <div className="card" style={{ width: '35rem' }}>
                            <img
                                src={WorkDay}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h4 className="card-title">
                                    Work Day Scheduler
                                </h4>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a
                                            href="https://github.com/arod1207/HW-5-Work-Day-Scheduler"
                                            target="_blank"
                                        >
                                            <i class="fab fa-github fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a
                                            href="https://arod1207.github.io/HW-5-Work-Day-Scheduler/"
                                            target="_blank"
                                        >
                                            <i class="fas fa-link fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: '35rem' }}>
                            <img
                                src={Moodifi}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h4 className="card-title">Moodifi</h4>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a
                                            href="https://github.com/arod1207/Moodifi"
                                            target="_blank"
                                        >
                                            <i class="fab fa-github fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a
                                            href="https://radiant-falls-09995.herokuapp.com/"
                                            target="_blank"
                                        >
                                            <i class="fas fa-link fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: '35rem' }}>
                            <img
                                src={WeatherDash}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h4 className="card-title">
                                    Weather Dashboard
                                </h4>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a
                                            href="https://github.com/arod1207/HW-6-Weather-Dashboard"
                                            target="_blank"
                                        >
                                            <i class="fab fa-github fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a
                                            href="https://arod1207.github.io/HW-6-Weather-Dashboard/"
                                            target="_blank"
                                        >
                                            <i class="fas fa-link fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
