import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {IoIosSearch} from 'react-icons/io'
import Header from '../Header'
import SideBar from '../Sidebar'
import VideoItem from '../VideoItem'

import ContextObject from '../../context/CreateContext'
import {
  Div,
  HomeContainer,
  BannerCon,
  Img,
  Details,
  P,
  Button,
  DetailsContainer,
  InputCon,
  Input,
  InputBtn,
  Ul,
} from './styledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    apiStatus: apiStatusConstant.initial,
    videosData: [],
  }

  onChangeSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updated = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        name: each.channel.name,
        profileUrl: each.channel.profile_image_url,
        views: each.view_count,
        date: each.published_at,
        thumbnail: each.thumbnail_url,
      }))
      this.setState({videosData: updated, apiStatus: apiStatusConstant.success})
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onDeleteBanner = () => {
    this.setState({showBanner: false})
  }

  onClickSearch = () => {
    this.getData()
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
      <DetailsContainer direction="column" content="center">
        <Img src={url} alt="failure view" width="25%" />
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request. <br /> Please try
          again.
        </p>
        <Button
          onClick={this.onClickSearch}
          color="white"
          bg="#4f46e5"
          border="0px"
        >
          Retry
        </Button>
      </DetailsContainer>
    )
  }

  getNoProducts = () => (
    <DetailsContainer direction="column" content="center">
      <Img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        width="30%"
        alt="no videos"
      />
      <h1>No Search results found</h1>
      <p>Try different key words or remove search filter</p>
      <Button
        onClick={this.onClickSearch}
        color="white"
        bg="#4f46e5"
        border="0px"
      >
        Retry
      </Button>
    </DetailsContainer>
  )

  getSuccessData = isDarkTheme => {
    const {videosData} = this.state
    const color = isDarkTheme ? '#606060' : '#424242'
    const colorP = isDarkTheme ? '#e2e8f0' : '#0f0f0f'
    return (
      <Ul wrap="wrap">
        {videosData.map(each => (
          <VideoItem key={each.id} data={each} color={color} colorP={colorP} />
        ))}
      </Ul>
    )
  }

  getSuccess = isDarkTheme => {
    const {videosData} = this.state
    const length = videosData.length > 0
    return length ? this.getSuccessData(isDarkTheme) : this.getNoProducts()
  }

  getStatus = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.getLoader()
      case apiStatusConstant.failure:
        return this.getFailure(isDarkTheme)
      case apiStatusConstant.success:
        return this.getSuccess(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    const {showBanner, videosData} = this.state

    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgC = isDarkTheme ? '#181818' : '#f9f9f9'
          const color = isDarkTheme ? '#e2e8f0' : '#0f0f0f'
          const inputBg = isDarkTheme ? 'transparent' : 'white'
          const btnBg = isDarkTheme ? '#383838' : '#e2e8f0'
          return (
            <>
              <Header />
              <Div color={color}>
                <SideBar />
                <HomeContainer data-testid="home" bg={bgC} color={color}>
                  {showBanner && (
                    <BannerCon data-testid="banner">
                      <Details>
                        <Img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                          width="120px"
                        />
                        <P>
                          Buy Nxt Watch Premium prepaid plans with <br /> UPI
                        </P>
                        <Button
                          data-testid="searchButton"
                          border="0px"
                          onClick={this.onClickSearch}
                        >
                          GET IT NOW
                        </Button>
                      </Details>
                      <Button
                        data-testid="close"
                        self="flex-start"
                        bg="transparent"
                        border="2px"
                        onClick={this.onDeleteBanner}
                      >
                        Close
                      </Button>
                    </BannerCon>
                  )}
                  <DetailsContainer bg={bgC} direction="column" padding="15px">
                    <InputCon inputBg={inputBg}>
                      <Input
                        type="search"
                        placeholder="Search"
                        inputBg={inputBg}
                        color={color}
                        onChange={this.onChangeSearchValue}
                      />
                      <Button
                        data-testid="searchButton"
                        type="button"
                        bg={btnBg}
                        color={color}
                        border="0px"
                        padding="5px"
                        onClick={this.onClickSearch}
                      >
                        <IoIosSearch />
                      </Button>
                    </InputCon>
                    <DetailsContainer direction="row" wrap="wrap">
                      {this.getStatus(isDarkTheme)}
                    </DetailsContainer>
                  </DetailsContainer>
                </HomeContainer>
              </Div>
            </>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}
export default Home
