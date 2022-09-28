import React, { Component } from 'react'
import './App.css'
const fn = require('../dist/cjs')
import {add as esmAdd}  from '../dist/esm'
class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: 1
        }
       
    }   
    add1 = ()=>{
        console.log('执行cjs-add方法')
        this.setState({
            data:fn.add(this.state.data,4)
        })
    }
    add2 = ()=>{
        console.log('执行esm-add方法')
        this.setState({
            data:esmAdd(this.state.data,2)
        })
    }
    render() {
        return (
            <div className="App">
                data:{this.state.data}
                <br></br>
                <button onClick={this.add2}>esm-add方法修改data</button>
                <button onClick={this.add1}>cjs-add方法修改data</button>
            </div>
        )
    }
}

export default App