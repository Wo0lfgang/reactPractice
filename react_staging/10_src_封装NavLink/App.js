import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'
import './App.css'

export default class App extends Component {
    render() {

        return (
            <div>
                <div class="row">
                    <div class="col-xs-offset-2 col-xs-8">
                        <div class="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                    <div class="row">
                        <div class="col-xs-2 col-xs-offset-2">
                            <div class="list-group">
                                {/* <a class="list-group-item" href="./about.html">About</a>
                            <a class="list-group-item active" href="./home.html">Home</a> */}
                                <MyNavLink to="/about" title="about" children="about"/>
                                <MyNavLink to="/home" title="home" children="home"/>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <div class="panel">
                                <div class="panel-body">
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
