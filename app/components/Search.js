var React = require('react');

class Search extends React.Component {
  render() {
    return (
      <div className="search-container">
        <input className="form-control" value="City.." type="text"/>
        <button  
        className="btn btn-success" 
        type="submit" 
        style={{margin: 10}}>
        
        Get Weather ⛅️</button>
      </div>
    );
  }
}

module.exports = Search;