import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default class App extends Component {
    state = {
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:true},
            {id:'003',name:'码代码',done:false},
        ]
    }
    // addTodo用于添加一个todo，接受的参数是todo对象
    addTodo = (todoObj) =>{
        // 获取原todos
        const {todos} = this.state
        // 追加一个todo
        const newTodos = [todoObj,...todos]
        this.setState({todos:newTodos})
    }

    // Item中勾选对应修改done
    updateTodo=(id,done)=>{
        // 获取原来的todos
        const {todos} = this.state
        // 匹配处理数据
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id)return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }
    // 删除第一个todo对象
    deleteTodo=(id)=>{
        // 获取原来的todos
        const {todos} = this.state
        // 删除对应id的todo
        const newTodos = todos.filter((todoObj)=>{
           return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }

    // 全选
    checkAllTodo=(done)=>{
        // 获取原来的todos
        const {todos} = this.state
        // 改变所有的todo的done值
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
    }
    // 清除所有已选
    cleanAllDone=()=>{
        // 获取原有的todos
        const {todos} = this.state
        // 清除done值为TRUE的todo对象
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }
    render() {
        const {todos} = this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo}/>
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} cleanAllDone={this.cleanAllDone}/>
                    </div>
                </div>
            </div>
        )
    }
}
