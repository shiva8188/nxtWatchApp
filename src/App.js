import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import ContextObject from './context/CreateContext'
import Login from './components/Login'
import Home from './components/Home'
import VideoDetails from './components/VideoDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Saved from './components/Saved'
import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false, videos: [], savedBtn: false}

  onChangeTheme = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  onAddVideos = video => {
    const {videos} = this.state
    const check = videos.includes(video)

    if (!check) {
      this.setState(prev => ({
        videos: [...prev.videos, video],
        savedBtn: !prev.savedBtn,
      }))
    }
  }

  onDeleteSavedVideo = id => {
    this.setState(prev => ({
      videos: prev.videos.filter(each => each.id !== id),
      savedBtn: false,
    }))
  }

  render() {
    const {isDarkTheme, videos, savedBtn} = this.state
    return (
      <ContextObject.Provider
        value={{
          isDarkTheme,
          videos,
          savedBtn,
          onChangeTheme: this.onChangeTheme,
          onAddVideos: this.onAddVideos,
          onDeleteSavedVideo: this.onDeleteSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={Saved} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ContextObject.Provider>
    )
  }
}

export default App
