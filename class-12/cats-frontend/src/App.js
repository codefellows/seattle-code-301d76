import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      name: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/cats')
      .then(cats => {
        this.setState({ cats: cats.data })
        console.log('__STATE__', this.state.cats)
      })
  }

  render() {
    return (
      <>
        <form onSubmit={addCat}>
          <input type="text" onChange={updateCatName}/>
        </form>
        {this.state.cats.map((cat, idx) => {
          return <div key={idx}>{cat.name}</div>
        })}
      </>
    )
  }
}

export default App;