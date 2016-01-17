var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Routes = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var CreateHistory = require('history/lib/createHashHistory');

var History = new CreateHistory({
   queryKey: false 
});

var Base = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ProductPage = require('./components/ProductPage.jsx');

var Routes = {
    <Router history={History}>
        <Route path="/" component={BasePage}>
            <IndexRoute component={HomePage} />
            <Route path="/product/:productId" component={ProductPage} />
        </Route>  
    </Router>
};

module.exports = Routes;