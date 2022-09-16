import axios from 'axios';
import PubSub from 'pubsub-js'
import React, { Component } from 'react';

export default class Search extends Component {
    getInputvalue = () => {
        const { inputValue: { value: keyWord } } = this
        // // 发送请求前通知App更新状态
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('atguigu', { isFirst: false, isLoading: true })
        console.log(keyWord);
        // // 发送请求
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                // 请求成功后通知App更新状态
                // this.props.updateAppState({isLoading:false,users:response.data.items})
                PubSub.publish('atguigu', { isLoading: false, users: response.data.items })
                console.log(1);
            },
            error => {
                console.log('请求失败了', error);
                // 请求失败后通知App更新状态
                // this.props.updateAppState({ isLoading: false, err: error.message })
                PubSub.publish('atguigu', { isLoading: false, err: error.message })
                console.log(2);
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.inputValue = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.getInputvalue}>Search</button>
                </div>
            </section>
        );
    }
}


