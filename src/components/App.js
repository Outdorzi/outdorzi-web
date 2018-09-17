import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Child Components
import DashboardPage from './DashboardPage'
import LandmarkListPage from './LandmarkListPage'
import LandmarkPage from './LandmarkPage'
import ProfilePage from './ProfilePage'
import TripListPage from './TripListPage'
import TripPage from './TripPage'
import NotFoundPage from './NotFoundPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/outdorzi/" exact component={DashboardPage} />
          <Route
            path="/outdorzi/landmarks"
            exact
            component={LandmarkListPage}
          />
          <Route
            path="/outdorzi/landmark/:id/:title"
            component={LandmarkPage}
          />
          <Route
            path="/outdorzi/user/:username"
            exact
            component={ProfilePage}
          />
          <Route path="/outdorzi/trips" exact component={TripListPage} />
          <Route path="/outdorzi/trip/:id" exact component={TripPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
