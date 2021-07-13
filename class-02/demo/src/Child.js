import React from 'react';
import childpic from './kidpic.jpg';

class Child extends React.Component {
  constructor(props) {
    super(props); // for now, just pass in "props" and call super(props) for any component that needs state
    this.state = {
      // internal state / data management for this component
      patsOnChildsHead: 0
    }
  }

  pat = () => {
    // do this:
    this.setState({ patsOnChildsHead: this.state.patsOnChildsHead + 1 })
    // not this:
    // the following is direct state manipulation, which we don't do
    // we use this.setState() to update the state of our component
    // this.state.patsOnChildHead = patsOnChildsHead + 1;
  }

  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <h2>{this.props.age}</h2>
        <img src={childpic} onClick={this.pat} />
        <span>Current pats on head: {this.state.patsOnChildsHead}</span>
      </>
    )
  }
}

export default Child;