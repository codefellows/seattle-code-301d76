import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeast from './hornedBeast';

class Main extends React.Component {

  render() {
    return(
      <div id="beast-container">
        <CardColumns>
        {this.props.allBeasts.map((beast, idx) => (
          <HornedBeast 
            key={idx}
            index={idx}
            src={beast.image_url}
            title={beast.title}
            description={beast.description}
            displayAsModal={this.props.displayAsModal}
          />
        ))}
        </CardColumns>

      </div>
    )
  }
}

export default Main;