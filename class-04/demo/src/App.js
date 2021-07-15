import React from 'react';
// these are your bootstrap components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// this applies the CSS styles to your bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Step 1 - define the state property that we care about updating - ie: username
    this.state = {
      username: 'user',
    }
  }

  // Step 2 - create a function that will setState (update the state of your app)
  // once the form is submitted -> common convention uses the naming convention of handleEvent
  handleFormSubmitted = e => {
    // call setState here and update the state of our
    // username in this component to whatever is in the
    // associated form field when the form is submitted
    e.preventDefault(); // this will stop the page from reloading
    console.log('submitted', this.state.username);
  }

  // Step 3 - create a function that will set theState of your app while you are filling out
  // the form that is meant to hold your username -> this will keep your UI and state in constant sync
  handleUsernameChange = e => {
    // update the state of the application based on what is
    // in the username form field AS THE USER TYPES
    if (e.target.value.length > 0) {
      this.setState({
        username: e.target.value
      })
    } else {
      this.setState({
        username: 'user'
      })
    }
  }

  // Step 4 and 5 - call your handler functions on specific events - this happens
  // in the markup directly - ie: onSubmit={this.handleFormSubmitted}
  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmitted}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="username" onInput={this.handleUsernameChange} />
          <input type="submit" />
        </form>
        
        <p>Current username is: {this.state.username}</p>

        <Form>
          <Form.Group controlId="formController">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="username" onInput={this.handleUsernameChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default App;