var React = require('react');
var PropTypes = require('prop-types');
var ReactRouter = require('react-router-dom');

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
    }

    this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
    this.handleUpdateLocation = this.handleUpdateLocation.bind(this);
  };

  handleSubmitLocation() {

    this.props.onSubmitLocation(this.state.location)

    this.setState( function() {
      return {
        location: ''
      }
    })
  }

  handleUpdateLocation(e) {
    var loc = e.target.value;
    this.setState(function(){
      return {
        location: loc,
      }
    });
  }

  render() {
    return (
      <div className="search-container">
        <input 
          className="form-control" 
          onChange={this.handleUpdateLocation}
          value={this.state.location} 
          placeholder="City.."
          type="text"/>

        <button  
        className="btn btn-success" 
        type="submit" 
        onClick={this.handleSubmitLocation}
        style={{margin: 10}}>
        
        Get Weather ⛅️</button>
      </div>
    );
  }
}

module.exports = Search;