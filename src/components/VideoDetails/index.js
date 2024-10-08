import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {BsBookmarks} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'

import Header from '../Header'
import SideBar from '../Sidebar'
import ContextObject from '../../context/CreateContext'

import {Div, Img, Button, P, Hr} from './styledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class VideoDetails extends Component {
  state = {
    apiStatus: apiStatusConstant.inProgress,
    videoData: {},
    like: false,
    disLike: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const video = data.video_details
      const updatedText = {
        id: video.id,
        videoUrl: video.video_url,
        channel: video.channel,
        name: video.channel.name,
        profileUrl: video.channel.profile_image_url,
        description: video.description,
        published: video.published_at,
        subscribers: video.channel.subscriber_count,
        title: video.title,
        views: video.view_count,
        thumbnail: video.thumbnail_url,
      }

      this.setState({
        videoData: updatedText,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onLike = () => {
    const {like} = this.state
    if (!like) {
      this.setState({like: true, disLike: false})
    } else {
      this.setState({like: false})
    }
  }

  onDisLike = () => {
    const {disLike} = this.state
    if (!disLike) {
      this.setState({disLike: true, like: false})
    } else {
      this.setState({disLike: false})
    }
  }

  getSuccess = isDarkTheme => (
    <ContextObject.Consumer>
      {value => {
        const {onAddVideos, onDeleteSavedVideo, savedBtn, videos} = value

        const {
          id,
          videoUrl,
          title,
          views,
          subscribers,
          description,
          published,
          name,
          profileUrl,
          thumbnail,
        } = this.state.videoData
        const {like, disLike, videoData} = this.state
        const likeColor = like ? '#2563eb' : '#64748b'
        const disLikeColor = disLike ? '#2563eb' : '#64748b'
        const check = videos.find(each => each.id === videoData.id)
        const saveColor = check !== undefined ? '#2563eb' : '#64748b'
        const viewsColor = isDarkTheme ? '#94a3b8' : '#424242'
        console.log(!check)
        const onClickSave = () => {
          if (!check) {
            onAddVideos(videoData)
          } else {
            onDeleteSavedVideo(id)
          }
        }

        return (
          <Div direction="column" padding="13px" width="100%">
            <Div width="100%">
              <ReactPlayer
                url={videoUrl}
                light={thumbnail}
                width="100%"
                height="500px"
                controls
              />
            </Div>
            <P size="17px" weight="400">
              {title}
            </P>
            <Div
              justify="space-between"
              align="center"
              width="100%"
              padding="3px"
            >
              <Div color={viewsColor}>
                <P right="10px" size="13.5px">
                  {views} views
                </P>
                <P size="13.5px">{formatDistanceToNow(new Date(published))}</P>
              </Div>
              <Div justify="space-between" width="200px">
                <Button
                  bg="transparent"
                  color={likeColor}
                  onClick={this.onLike}
                >
                  <BiLike />
                  Like
                </Button>
                <Button
                  bg="transparent"
                  color={disLikeColor}
                  onClick={this.onDisLike}
                >
                  <BiDislike />
                  Dislike
                </Button>
                <Button
                  bg="transparent"
                  color={saveColor}
                  onClick={onClickSave}
                >
                  <BsBookmarks />
                  {check ? 'Saved' : 'Save'}
                </Button>
              </Div>
            </Div>
            <Hr />
            <Div top="12px">
              <Img
                src={profileUrl}
                alt="channel logo"
                radius="50%"
                width="40px"
                height="40px"
                top="15px"
              />
              <Div direction="column" left="15px">
                <P>{name}</P>
                <P size="12px" top="0px" color={viewsColor}>
                  {subscribers} subscribers
                </P>
                <P size="15px">{description}</P>
              </Div>
            </Div>
          </Div>
        )
      }}
    </ContextObject.Consumer>
  )

  onClicked = () => {
    this.getDetails()
  }

  getFailure = isDarkTheme => {
    const url = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <Div direction="column" align="center">
        <Img src={url} alt="failure view" width="25%" />
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request. <br /> Please try
          again.
        </p>
        <Button
          onClick={this.onClicked}
          color="white"
          bg="#4f46e5"
          border="0px"
        >
          Retry
        </Button>
      </Div>
    )
  }

  getLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="green" height="50" width="50" />
    </div>
  )

  getStatus = (isDarkTheme, onAddVideos) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.getLoader()
      case apiStatusConstant.failure:
        return this.getFailure(isDarkTheme)
      case apiStatusConstant.success:
        return this.getSuccess(isDarkTheme, onAddVideos)
      default:
        return null
    }
  }

  render() {
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme, onAddVideos} = value
          const bgC = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const img = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const color = isDarkTheme ? '#e2e8f0' : '#0f0f0f'

          return (
            <>
              <Header />
              <Div
                data-testid="videoItemDetails"
                direction="row"
                bg={bgC}
                color={color}
                width="100%"
              >
                <SideBar />
                <Div direction="column" padding="13px" width="100%">
                  {this.getStatus(isDarkTheme, onAddVideos)}
                </Div>
              </Div>
            </>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}

export default VideoDetails
