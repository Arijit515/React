import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Arijit'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Arijit'
            })
        }, 2000)
    }
  render() {
    console.log('*********Parent Component Render*********')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />  
        {/*<RegComp name={this.state.name} />
        <PureComp name={this.state.name} />*/}      
      </div>
    )
  }
}

export default ParentComp
