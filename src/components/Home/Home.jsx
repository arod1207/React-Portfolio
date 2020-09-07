import React from 'react';
import './Home.css';
import myImage from '../../images/mypic-noBG.png';

function Home() {
    return (
        <div className="homepage">
            <div className="container">
                <h1>Armando Rodriguez Jr.</h1>
                <h2>Full Stack Web Developer</h2>
                <div className="row home">
                    <div className="col-md ">
                        <img
                            src={myImage}
                            className="myImage"
                            alt="Armando Rodriguez"
                        />
                    </div>
                    <div className="col-md ">
                        <p className="About-Me">
                            Super dad of three daughters by day, computer
                            efficianado by night. Growing up in Corpus Christi,
                            Texas did not quite set me on the the path for this
                            specific destination, but it did create a drive in
                            me to want more. Which led me on an unorthodox path
                            of first becoming a wireline equipment operator in
                            the oil field, then on to a field specialist.
                            However, through the strenuous work in the field,
                            and the minimal time off, I learned where my true
                            passion resides, coding. I take pride in accepting
                            the challenge of creating functional websites. In
                            this world, creations are limitless.{' '}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
