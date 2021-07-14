import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // this applies styles to bootstrap components
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Child from './child.js';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childsMoney: 0,
      money: 100
    }
  }

  giveMoneyToChild = (dollars) => {
    // this.setState is a ReactJS specific method
    // meant to allow you to update the state WITHOUT
    // directly manipulating it
    this.setState({
      childsMoney: this.state.childsMoney + dollars,
      money: this.state.money - dollars
    })
  }

  render() {
    return (
      <>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Parent Card</Card.Title>
              <Card.Text>Childs money: {this.state.childsMoney} will update each time I click on the Child button - this is happening in the parent.</Card.Text>
            </Card.Body>
          </Card>

          <Child childName={this.props.child} askForMoney={this.giveMoneyToChild} childsMoney={this.state.money} />
          
        </CardGroup>
      </>
    )
  }
}

export default Parent;