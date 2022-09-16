// import axios from 'axios';
import PubSub from 'pubsub-js'
import React, { Component } from 'react';

export default class Search extends Component {
    async getInputvalue = () => {
        const { inputValue: { value: keyWord } } = this
        // // 发送请求前通知App更新状态
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('atguigu', { isFirst: false, isLoading: true })
        console.log(keyWord);
        //#region 
        // // 发送请求
        // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        //     response => {
        //         // 请求成功后通知App更新状态
        //         // this.props.updateAppState({isLoading:false,users:response.data.items})
        //         PubSub.publish('atguigu', { isLoading: false, users: response.data.items })
        //         console.log(1);
        //     },
        //     error => {
        //         console.log('请求失败了', error);
        //         // 请求失败后通知App更新状态
        //         // this.props.updateAppState({ isLoading: false, err: error.message })
        //         PubSub.publish('atguigu', { isLoading: false, err: error.message })
        //         console.log(2);
        //     }
        // )

        //#endregion
        // fa送网络请求---使用fetch发送
        try {
            const response = await fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`);
            const data = await response.join();
            console.log(data);
        } catch (error) {
            console.log(error);
        }

        // fetch(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
        //     response => {
        //         console.log('联系服务器成功了', response);
        //         return response.json();
        //     },
        //     error => {
        //         console.log('联系服务器失败了', error.messgae);
        //         return new Promise();
        //     }
        // ).then(
        //     response => {
        //         console.log('获取数据成功了', response);
        //     },
        //     error => {
        //         console.log('获取数据失败了', error);
        //     }
        // )
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


