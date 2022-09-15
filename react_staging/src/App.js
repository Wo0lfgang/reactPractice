import React,{Component} from 'react'
import './setupProxy.js'
import './App.css'
import axios from 'axios'
export default class App extends Component{

    // 获取数据的回调
    getStudentData=()=>{
        axios.get('http://localhost:3000/students').then(
            response => {console.log('成功了',response.data);},
            error => {console.log('失败了',error);}
        )
    }
    getCarData=()=>{
        axios.get('http://localhost:3000/cars').then(
            response => {console.log('成功了',response.data);},
            error => {console.log('失败了',error);}
        )
    }
    render(){
        return(
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                <button onClick={this.getCarData}></button>
            </div>
        )
    }
}