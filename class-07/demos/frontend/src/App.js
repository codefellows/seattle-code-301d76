import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingList: []
    }
  }

  getShoppingList = async () => {
    const API = 'http://localhost:3333';
    const shoppingList = await axios.get(`${API}/shoppinglist`);
    this.setState({ shoppingList: shoppingList.data });
  }

  render() {
    return (
      <>
        <button onClick={this.getShoppingList}>Get Shopping List</button>
        {this.state.shoppingList.map((item, idx) => {
          return <div key={idx}>{item}</div>
        })}
      </>
    )
  }
}

export default App;