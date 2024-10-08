import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import {FaFire, FaGamepad} from 'react-icons/fa'

import ContextObject from '../../context/CreateContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {Div, H1, Img, Button, Ul, Li, P} from './styledComponent'

class Trending extends Component {
  state = {isSaved: false}

  getLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  getNoProducts = isDarkTheme => {
    const url =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
    return (
      <Div direction="column" align="center" self="center">
        <Img src={url} alt="no saved videos" width="25%" />
        <h1>No saved videos found</h1>
        <p>You can save your videos while watching them</p>
      </Div>
    )
  }

  getSuccessData = videos => (
    <ContextObject.Consumer>
      {value => {
        const {videos, isDarkTheme} = value
        const color = isDarkTheme ? '#e2e8f0' : '#0f0f0f'

        return videos.map(each => (
          <Link to={`/videos/${each.id}`} className="link">
            <Li key={each.id} color={color}>
              <Img
                src={each.thumbnail}
                alt="video thumbnail"
                width="360px"
                height="150px"
              />
              <Div paddingL="15px" direction="column">
                <P top="0px" weight="bold" size="21px" color={color}>
                  {each.title}
                </P>
                <P top="5px" color={color}>
                  {each.name}
                </P>
                <Div paddingL="0px" color={color}>
                  <P color={color}>{each.views} views</P>
                  <P left="10px" color={color}>
                    {formatDistanceToNow(new Date(each.published))}
                  </P>
                </Div>
              </Div>
            </Li>
          </Link>
        ))
      }}
    </ContextObject.Consumer>
  )

  render() {
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme, videos} = value
          const bgC = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const color = isDarkTheme ? '#e2e8f0' : '#0f0f0f'
          const topBg = isDarkTheme ? '#231f20' : '#ebebeb'
          const trendingBg = isDarkTheme ? 'black' : '#e2e8f0'

          return (
            <>
              <Header />
              <Div bg={bgC} color={color} height="100vh">
                <Sidebar />
                <Div direction="column" width="100%">
                  <Div height="200px" bg={topBg}>
                    <Div align="center" paddingL="100px" height="180px">
                      <Div
                        color="red"
                        bg={trendingBg}
                        width="70px"
                        justify="center"
                        align="center"
                        size="35px"
                        height="70px"
                        radius="50%"
                      >
                        <FaFire />
                      </Div>
                      <H1 color={color} size="30px">
                        Saved Videos
                      </H1>
                    </Div>
                  </Div>
                  <Ul
                    padding="40px"
                    direction="column"
                    width="100%"
                    scroll="scroll"
                  >
                    {videos.length > 0
                      ? this.getSuccessData()
                      : this.getNoProducts()}
                  </Ul>
                </Div>
              </Div>
            </>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}
export default Trending
