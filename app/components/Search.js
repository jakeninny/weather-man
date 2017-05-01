var React = require('react');

class Search extends React.Component {
  render() {
    return (
      <div className="search-container">
        <input className="form-control" type="text"/>
        <button  
        className="btn btn-success" 
        type="submit" 
        style={{margin: 10}}>
        
        Search</button>
      </div>
    );
  }
}

module.exports = Search;