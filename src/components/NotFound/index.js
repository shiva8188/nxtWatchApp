import Header from '../Header'
import Sidebar from '../Sidebar'

import {Div, Content, Img} from './styledComponent'

import ContextObject from '../../context/CreateContext'

const NotFound = () => (
  <ContextObject.Consumer>
    {value => {
      const {isDarkTheme} = value
      const url = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const bgC = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const img = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const contentBg = isDarkTheme ? 'black' : 'white'
      const color = isDarkTheme ? '#e2e8f0' : '#0f0f0f'

      return (
        <>
          <Header />
          <Content bg={bgC} color={color}>
            <Sidebar />
            <Div>
              <Img src={url} alt="not found" />
              <h1>Page Not Found</h1>
              <p>we are sorry, the page you requested could not be found.</p>
            </Div>
          </Content>
        </>
      )
    }}
  </ContextObject.Consumer>
)
export default NotFound
