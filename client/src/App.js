import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Projects from './components/Projects'
import './css/App.css'
import NewConstruction from './components/NewConstruction'

const App = (props) => {
  
  return (
    <div className='App vignette' style={{position:'relative'}}>

      <Router> 
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/new-projects">
            <NewConstruction/>
          </Route>
        </Switch>
      </Router>
      
      <div align='center' style={{color: '#777'}}>&copy; asquaredroofing.com. All rights reserved. <b>License #CCC1329752</b></div>
    </div>
  )
}

export default App