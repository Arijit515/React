import React from 'react';

const Hello = () => {
    //return(
      //  <div className='dummyClass>
        //    <h1>Hello Arijit</h1>
        //</div>
        //)
        return React.createElement('div', {id:'Hello', className:'DummyClass'}, React.createElement('h1', null, 'Hello Arijit'))
    }
export default Hello;

//class is a keyword in JavaScript therefore cannot be used