var React = require('react');
var Search = require('./Search');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom')
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container" >
          <Route render={function(props) {
            return (
              <div className="navbar" >
                <h1> Weather Man ☃️</h1>
                <Search 
                  onSubmitLocation={function(city){
                    props.history.push({
                      pathname: 'forecast',
                      search: '?city=' + city
                    });
                  }}
                />
              </div>
            )
          }} />

          <Route exact path='/' render={function(props) {
              return (
                <div className="home-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                  <h1>Enter City</h1>

                  <Search
                    onSubmitLocation={function(city){
                      props.history.push({
                        pathname: 'forecast',
                        search: '?city=' + city
                      });
                    }}
                  />
                </div>
              )
          }}/>
          <Route path='/forecast' component={Forecast} />

        </div>
      </BrowserRouter>
    );
  }
}

module.exports = App;