import React from "react";
import { Switch, Route } from 'react-router-dom'

import Welcome from "./welcome";
import Rating from "./rating";
import Error from "./error";
import WordsPage from "./wordsPage"
export default class App extends React.Component {
  render() {
    return (
      
        
          <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route path='/rating' component={Rating}/>
            <Route path='/error' component={Error}/>
            <Route path='/WordsPage' component={WordsPage}/>
            
          </Switch>
        
    )
  }
}