import React from 'react';
import Square from './square.js';

class Board extends React.Component {
  render() {
    return (
      <div id="board">
        <h2>Board:</h2>
        <div className="row">
          <Square value={'first'} />
          <Square value={2} />
          <Square value={3} />
        </div>
        <div className="row">
          <Square value={4} />
          <Square value={5} />
          <Square value={6} /> 
        </div>
        <div className="row">
          <Square value={7} />
          <Square value={8} />
          <Square value={9} />
        </div>
      </div>
    )
  }
}

export default Board;