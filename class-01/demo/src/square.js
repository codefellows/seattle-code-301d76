import React from 'react';

class Square extends React.Component {
  // the word "props" is reserved below and will be used with
  // an attribute style convention on the component
  // <Square value="hello" />
  // <Square value="goodbye" />
  render() {
    return (
      <button>
        {this.props.value}
        {this.props.title}
        {this.props.cool}
      </button>
    )
  }
}

export default Square;