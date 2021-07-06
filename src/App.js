import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import LoadingBar from 'react-top-loading-bar';
import { Courses } from "./Pages/Courses";
import { Enroll } from "./Pages/Enroll";

function App() {
  const [progress, setProgress] = useState(0)
  function loader() {
    // e.preventDefault();
    setProgress(100)
  }

  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <Header loader={loader} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Home loader={loader} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/courses">
            <Courses loader={loader} />
          </Route>
          <Route exact path="/enroll">
            <Enroll loader={loader} />
          </Route>
          <Route exact path="/contact">
            <Contact loader={loader} />
          </Route>
        </Switch>
        <About />
        <Footer />
      </Router>
    </>
  );
}

export default App;
