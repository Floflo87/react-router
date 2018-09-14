import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Errror from './components/Error';
import Navigation from './components/Navigation';

const NewRoute = () => {
    return <div>Hi</div>;
};

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/new" component={NewRoute} />
                        <Route path="/" component={Home} exact />
                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route component={Errror} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
