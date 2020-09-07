import React from 'react';
import { BrowserRouter as Router, Switch, Route, link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
    return (
        <Router>
            <NavBar />
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/projects" exact>
                <Projects />
            </Route>
            <Route path="/contact" exact>
                <ContactMe />
            </Route>
        </Router>
    );
}

export default App;
