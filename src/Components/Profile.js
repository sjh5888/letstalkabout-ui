import React from "react";
import CategoryCardContainer from './Cards/CategoryCardContainer'
import ThreadCardContainer from './Cards/ThreadCardContainer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Profile() {
  return (
    <div className="row">
      <div className="column left"></div>
      <div className="column middle">
        <Router>
          <Switch>
        <Route path={`/profile/threads/:category`}>
          <ThreadCardContainer />
        </Route>
        <Route path="/profile">
          <CategoryCardContainer />
        </Route>
        </Switch>
        </Router>
      </div>
      <div className="column right"></div>
    </div>
  );
}
export default Profile;
