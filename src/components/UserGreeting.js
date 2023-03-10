import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
            isLoggedIn: false
      }
    }
    
  render() {
    
    /* Short circuit operator approach */
    return this.state.isLoggedIn && <div>Welcome Arijit</div>

    /* Ternary conditional operator approach */
    //return(
      //  this.state.isLoggedIn ? 
        //<div>Welcome Arijit</div> : 
        //<div>Welcome Guest</div>
      //)

    /* Element variables approach */
    //let message 
    //if(this.state.isLoggedIn){
      //  message = <div>Welcome Arijit</div>
    //} else {
      //  message = <div>Welcome Guest</div>
    //}

    //return <div>{message}</div>

    /* if else approach */
    //if(this.state.isLoggedIn){
      //  return <div>Welcome Arijit</div>
    //} else {
      //  return <div>Welcome Guest</div>
    //}


    //return (
      //<div>
      //<div>Welcome Arijit</div>
      //<div>Welcome guest</div>  
      //</div>
    //)
  }
}

export default UserGreeting
