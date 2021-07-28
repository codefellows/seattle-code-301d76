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

  // lifecycle hook (built into react) to run as soon as the component as been
  // loaded onto the page
  // that will make an immediate request to our backend without a button click/form submission
  // and will immediately grab our list of cats and display them
  componentDidMount() {
    axios.get('http://localhost:3001/cats')
      .then(cats => {
        this.setState({ cats: cats.data })
        console.log('__STATE__', this.state.cats)
      })
  }

  // addCat is a product of a POST request
  // this means we need a form to be able to get the name (or other info) about the cat that
  // we want to send to our backend and save in our database
  addBook = (e) => {
    e.preventDefault();
    // this is our post request from client to server

    // notice: this request is a type of POST, therefore the backend route must also capture a post
    // first arg is url to backend
    // second arg is request body
    axios.post('http://localhost:3001/cats', { name: this.state.name }) // the second argument is our data to post
    .then(cat => { // this is the response back from our server
      console.log(cat.data.name);
      this.setState({ cats: [...this.state.cats, {name: cat.data.name}] }) // the rest and spread operators are SUPER WIDELY used in ReactJS dev
    })
  }

  // this just keeps the state.name of our cat in sync with what is in the form
  // as the user updates the name, we update the state
  updateCatName = (e) => {
    console.log(e.target.value);
    this.setState({ name: e.target.value })
  }

  deleteCat = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3001/cats/${id}`)
      .then(result => {
        console.log(result);
        // in order to remove the cat from our list of cats, filter out the cat via it's id
      })
  }

  render() {
    return (
      <>
        <form onSubmit={this.addCat}>
          <input type="text" name="cat" onChange={this.updateCatName} placeholder="cat name" />
          <input type="submit" />
        </form>

        {this.state.cats.map((cat, idx) => {
          <div key={idx}>
            <div>{cat.name}</div>
            {/* <button onClick={this.deleteCat(cat._id)}>Delete Cat</button> */}
          </div>
        })}
      </>
    )
  }
}

export default App;