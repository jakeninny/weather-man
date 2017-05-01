var React = require('react');
var Search = require('./Search');

class App extends React.Component {
  render() {
    return (
      <div className="container" >
        <div style={{backgroundColor: 'pink'}} >
          <h1> Header Component to go here</h1>
        </div>

        <div className="home-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <h1>Enter City</h1>

          <Search/>
        </div>

      </div>
    );
  }
}

module.exports = App;