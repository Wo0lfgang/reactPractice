import React, { Component } from 'react'
import { NavLink,Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
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
                                <NavLink activeClassName='newCss' className='list-group-item' to="/about">About</NavLink>
                                <NavLink activeClassName='newCss' className='list-group-item' to="/home">Home</NavLink>
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
