import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    state = {mouse:false}
    handleMouse =(flag)=>{
       return ()=>{
        this.setState({mouse:flag})
       }
    }
    // 勾选后改动对应的done
    handleCheck=(id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }
    // 点击删除后的回调
    handleDelete=(id)=>{
       if(window.confirm('确定删除吗？')){
        return  this.props.deleteTodo(id)
       }
    }
    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <div>
                <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input onChange={this.handleCheck(id)} type="checkbox" checked={done}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{ display:mouse? 'block':'none' }}>删除</button>
                </li>
            </div>
        )
    }
}
