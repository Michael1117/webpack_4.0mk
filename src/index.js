import React , {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Home from './home.js'
import List from './list.js'

class App extends Component{
    render() {
        return <BrowserRouter>
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/list" component={List}/>
            </div>
        </BrowserRouter>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))