import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Child extends React.Component {
  askParentFor100Bucks = () => {
    this.props.askForMoney(100);
  }

  askParentFor10Bucks = () => {
    this.props.askForMoney(10);
  }

  // these lifecycle methods are built into React and may
  // be useful when debugging where the state is at in the process
  // of things:
  
  // componentWillUpdate() {
  //   console.log('prior state', this.state);
  // }

  // componentDidUpdate() {
  //   console.log('post state', this.state);
  // }

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.childName}</Card.Title>
          <Card.Text>I am the {this.props.childName} card.</Card.Text>

          <Button onClick={this.askParentFor10Bucks}>Ask for 10 bucks!</Button>
          <Button onClick={this.askParentFor100Bucks}>Ask for 100 bucks!</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default Child;