import React from "react";
import "./App.css";
import SearchPage from "./Containers/SearchPage";
import "./tailwind.output.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import MovieDetail from "./Containers/MovieDetail";

function App() {
  return (
    <div className="flex flex-col items-center h-64 mt-12">
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
