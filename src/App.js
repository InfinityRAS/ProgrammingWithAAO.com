import React, { useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import LoadingBar from 'react-top-loading-bar';
import Spinner from "./Pages/Spinner"
import  NotFound  from "./Pages/NotFound";
// import { About } from "./Components/About";
const About = lazy(() => import("./Components/About"))
// import { Footer } from "./Components/Footer";
const Footer = lazy(() => import("./Components/Footer"))
// import { Header } from "./Components/Header";
const Header = lazy(() => import("./Components/Header"))
// import { Home } from "./Pages/Home";
const Home = lazy(() => import("./Pages/Home"))
// import { Contact } from "./Pages/Contact";
const Contact = lazy(() => import("./Pages/Contact"))
// import { Courses } from "./Pages/Courses";
const Courses = lazy(() => import("./Pages/Courses"))
// import { Enroll } from "./Pages/Enroll";
const Enroll = lazy(() => import("./Pages/Enroll"))
// import { Books } from "./Pages/Books";
const Books = lazy(() => import("./Pages/Books"))

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
          height={2.5} />

        <Suspense fallback={<Spinner />}>

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
            <Route exact path="/books">
              <Books loader={loader} />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <About />
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
