import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: []
    }
  }
  // this is not a custom method, this is built into ReactJS - it is called a "lifecycle" hook or method
  componentDidMount = async () => {
    const apiBaseUrl = 'http://localhost:3001';
    const data = await axios.get(`${apiBaseUrl}/pokemon`);
    console.log(data);
    this.setState({ pokemon: data.data })
  }

  render() {
    return (
      <>
        {this.state.pokemon.length && this.state.pokemon.map((pokemon, idx) => {
          return <div key={idx}>
            <h2><a href={pokemon.url}>{pokemon.name}</a></h2>
          </div>
        })}
      </>
    )
  }
}

export default Main;