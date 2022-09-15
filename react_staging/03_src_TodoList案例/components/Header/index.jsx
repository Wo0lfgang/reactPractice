import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'
export default class index extends Component {
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        // 解构赋值
        const { keyCode, target } = event
        // 判断是否为enter键
        if (keyCode !== 13) return;
        // 添加的todo名字不能为空
        if(target.value.trim() === ''){
            alert('不能为空')
            return;
        }
        // 新建一个todoObje
        const todoObj = { id: nanoid(), name: target.value.trim(), done: false }
        this.props.addTodo(todoObj)
        target.value = ''
    }

    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
                </div>
            </div>
        )
    }
}
