import React from 'react';
import Parent from './parent.js';

// App can be considered the global application parent
class App extends React.Component {
  render() {
    return (
      <>
        <Parent child="Sam"/>
        <Parent child="Sally"/>
      </>
    )
  }
}

export default App;