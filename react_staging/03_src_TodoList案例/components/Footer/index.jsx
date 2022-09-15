import React, { Component } from 'react'
import './index.css'
export default class index extends Component {

    //  全选
    handleAllCheck = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    // 清楚已选择
    handleCleanDone=()=>{
        if(window.confirm('您确定要删除所有选择吗？')){
            this.props.cleanAllDone()
        }
    }
    render() {
        const { todos } = this.props
        // 已完成的个数
        const doneNum = todos.reduce((pre, current) => { return pre + (current.done ? 1 : 0) }, 0)
        // 总数
        const allNum = todos.length
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" onChange={this.handleAllCheck} checked={allNum === doneNum && doneNum !== 0 ? true : false} />
                    </label>
                    <span>
                        <span>已完成{doneNum}</span> / 全部{allNum}
                    </span>
                    <button onClick={this.handleCleanDone} className="btn btn-danger">清除已完成任务</button>
                </div>
            </div>
        )
    }
}
