import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    

  render() {
    const {count, incrementCount} = this.state
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>        
      </div>
    )
  }
}

export default HoverCounterTwo
