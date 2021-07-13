import React from 'react';
import Parent from './Parent.js';
import Child from './Child.js';
import {Button} from 'react-bootstrap';
import './style.css';

// There are 2 things that you need when working with Bootstrap in ReactJS
// 1. npm i react-bootstrap - npm module (this gives you components like carousel and dropdowns)
// 2. npm i bootsrap - this is the core bootstrap CSS files
// Figure out:  how to import the bootstrap CSS file

class App extends React.Component {
  render() {
    return (
      <section>
        <Parent />
        <Child name="sample kid" age="1000" />
      </section>
    )
  }
}

export default App;