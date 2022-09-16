import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class List extends Component {
    
    state={
        users:[],
        isFirst:true,
        isLoading:false,
        err:'',
    }

    componentDidMount(){
        this.token = PubSub.subscribe('atguigu',(_,stateObj)=>{
            this.setState(stateObj)
            console.log('数据已收到',stateObj);
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const { users,isFirst,isLoading,err } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，请输入关键字，随后点击搜索</h2> :
                        isLoading ? <h2>Loading......</h2> :
                            err ? <h2>{err}</h2> :
                                users.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a href={userObj.subscriptions_url} target="_blank" rel="noopener noreferrer">
                                                <img alt="es-lint want to get" src={userObj.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }

            </div>
        )
    }
}
