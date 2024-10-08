import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import {FaFire, FaGamepad} from 'react-icons/fa'
import Cookies from 'js-cookie'

import ContextObject from '../../context/CreateContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {Div, H1, Img, Button, Ul, Li, P} from './styledComponent'

const apiStatusConst = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConst.initial, videos: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConst.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.videos)
    if (response.ok) {
      const updated = data.videos.map(each => ({
        id: each.id,
        name: each.channel.name,
        profileUrl: each.channel.profile_image_url,
        published: each.published_at,
        thumbnail: each.thumbnail_url,
        title: each.title,
        views: each.view_count,
      }))
      this.setState({videos: updated, apiStatus: apiStatusConst.success})
    } else {
      this.setState({apiStatus: apiStatusConst.failure})
    }
  }

  getLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  getFailure = isDarkTheme => {
    const url = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <Div direction="column" align="center" self="center">
        <Img src={url} alt="failure view" width="25%" />
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request. <br /> Please try
          again.
        </p>
        <Button
          onClick={this.getData}
          color="white"
          bg="#4f46e5"
          border="0px"
          padding="7px"
          width="70px"
          radius="5px"
        >
          Retry
        </Button>
      </Div>
    )
  }

  getSuccessData = isDarkTheme => {
    const {videos} = this.state
    const color = isDarkTheme ? '#606060' : '#424242'
    const colorP = isDarkTheme ? '#e2e8f0' : '#0f0f0f'

    return videos.map(each => (
      <Link to={`/videos/${each.id}`} className="link">
        <Li key={each.id} color={color}>
          <Img src={each.thumbnail} alt="video thumbnail" width="40%" />
          <Div paddingL="15px" direction="column">
            <P top="0px" weight="bold" size="21px" color={colorP}>
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
  }

  getStaus = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConst.inProgress:
        return this.getLoader()
      case apiStatusConst.failure:
        return this.getFailure(isDarkTheme)
      case apiStatusConst.success:
        return this.getSuccessData(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
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
                        Trending
                      </H1>
                    </Div>
                  </Div>
                  <Ul
                    padding="40px"
                    direction="column"
                    width="100%"
                    scroll="scroll"
                    align="center"
                  >
                    {this.getStaus(isDarkTheme)}
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
