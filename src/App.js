import React from 'react'
import Home from './components/Home'
import Blog from './components/Blog'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import './App.css'
class App extends React.Component{

    render(){
      return(
      <div className = "is-preload">
        <div id="wrapper">
          <Home />
          <Blog />
          <Gallery />
          <Contact />
          <div className="copyright">&copy; All rights reserved. Design: >Wanjiku Wanjiru.</div>

          </div>
        </div>
        )
    }
}

export default App;