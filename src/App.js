import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
const NewRoute = () => {
    return <div>Hi</div>;
};

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/new" component={NewRoute} />
                    <Route path="/" component={Home} exact />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
