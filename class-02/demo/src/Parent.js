import React from 'react';
import Child from './Child.js';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childName: 'billy'
    }
  }

  render() {
    return (
      <>
        <Child name={this.state.childName} age="2" />
        <Child name="Sam" age="10" />
      </>
    )
  }
}

export default Parent;