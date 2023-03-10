import React, {Component} from 'react';

class Welcome extends Component {
    render(){
        const {name, heroName} = this.props
        return <h1>Welcome {name} a.k.a {heroName}</h1>
        //const {state1, state2} = this.state
    }
}
export default Welcome