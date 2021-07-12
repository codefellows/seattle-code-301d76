import React from 'react'; // the "import" keyword will import a file or a package
import Board from './board.js';

// the code in the return statement is called jsx -> javascript extension
// this is used as a way for us to combine HTML/JS syntax together
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Cool title!</h1>
        <Board />
        <Board />
        <Board />
        <Board />
      </div>
    )
  }
}

export default App;