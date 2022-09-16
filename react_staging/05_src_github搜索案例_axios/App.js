import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'
import './App.css'

export default class App extends Component {

    state={
        users:[],
        isFirst:true,
        isLoading:false,
        err:'',
    }

    // 获取搜索得到的用户数据返回
    updateAppState=(stateObj)=>{
        this.setState(stateObj)
    }


    render() {
        const {users} = this.state
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
