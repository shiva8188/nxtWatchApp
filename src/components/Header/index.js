import {withRouter, Link} from 'react-router-dom'
import {IoSunnyOutline} from 'react-icons/io5'
import {IoIosMoon} from 'react-icons/io'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'
import ContextObject from '../../context/CreateContext'

import {Nav, Img, Ul, Button, Li, PopupCon} from './styledComponent'

const Header = props => (
  <ContextObject.Consumer>
    {value => {
      const {isDarkTheme, onChangeTheme} = value
      const bgC = isDarkTheme ? '#313131' : '#ffffff'
      const img = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const contentBg = isDarkTheme ? 'black' : 'white'
      const color = isDarkTheme ? '#e2e8f0' : '#0f0f0f'

      const onClicked = () => {
        onChangeTheme()
      }

      const onDelete = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <Nav bg={bgC}>
          <Link to="/">
            <Img src={img} alt="website logo" width="100px" left="15px" />
          </Link>
          <Ul>
            <Li>
              <Button
                data-testid="theme"
                color={color}
                onClick={onClicked}
                bg="transparent"
                size="25px"
                top="6px"
                right="7px"
              >
                {isDarkTheme ? <IoSunnyOutline /> : <IoIosMoon />}
              </Button>
            </Li>
            <Li>
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                width="25px"
                bg="blue"
              />
            </Li>
            <Li>
              <Popup
                modal
                trigger={
                  <Button
                    bg="transparent"
                    color="#3b82f6"
                    border="1px solid #3b82f6"
                    padding="5px"
                    left="17px"
                  >
                    Logout
                  </Button>
                }
              >
                {close => (
                  <PopupCon
                    bg={contentBg}
                    color={color}
                    width="300px"
                    direction="column"
                    border={`1px solid ${color}`}
                  >
                    <p>Are you sure, you want to logout?</p>
                    <PopupCon width>
                      <Button
                        bg="transparent"
                        color={color}
                        padding="7px"
                        onClick={() => close()}
                        right="15px"
                        border={`1px solid ${color}`}
                      >
                        Cancel
                      </Button>
                      <Button
                        bg="#3b82f6"
                        color="white"
                        onClick={onDelete}
                        padding="7px"
                      >
                        Confirm
                      </Button>
                    </PopupCon>
                  </PopupCon>
                )}
              </Popup>
            </Li>
          </Ul>
        </Nav>
      )
    }}
  </ContextObject.Consumer>
)

export default withRouter(Header)
