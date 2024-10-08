import React from 'react'

const ContextObject = React.createContext({
  isDarkTheme: false,
  showPassword: false,
  onAddVideos: () => {},
  videos: [],
  savedBtn: false,
})
export default ContextObject
