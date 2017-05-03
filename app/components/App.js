var React = require('react');
var Search = require('./Search');

class App extends React.Component {
  render() {
    return (
      <div className="container" >
        <div className="navbar" >
          <h1> Weather Man ☃️</h1>
          <Search 
            onSubmitLocation={function(){}}
          />
        </div>

        <div className="home-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <h1>Enter City</h1>

          <Search
            onSubmitLocation={function(){}}
          />
        </div>

      </div>
    );
  }
}

module.exports = App;