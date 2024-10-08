import {Component} from 'react'

import {Link} from 'react-router-dom'

import {IoMdHome} from 'react-icons/io'
import {FaFire, FaGamepad} from 'react-icons/fa'
import {BsBookmarks} from 'react-icons/bs'
import SideItem from '../SideItem'
import ContextObject from '../../context/CreateContext'

import {Ul, Li, ContactDiv, Div, P, H1, Img} from './styledComponent'

const sideList = [
  {id: 'home', text: 'Home', icon: <IoMdHome />},
  {id: 'trending', text: 'Trending', icon: <FaFire />},
  {id: 'gaming', text: 'Gaming', icon: <FaGamepad />},
  {id: '', text: 'Savedvideos', icon: <BsBookmarks />},
]

class SideBar extends Component {
  state = {activeid: sideList[0].id}

  onChangeId = id => {
    this.setState({activeid: id})
  }

  render() {
    const {activeid} = this.state
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgC = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const img = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const contentBg = isDarkTheme ? '#313131' : 'white'
          const color = isDarkTheme ? '#e2e8f0' : '#0f0f0f'
          return (
            <Div bg={contentBg} color={color}>
              <Ul>
                <Link to="/" className="link">
                  <Li>
                    <P color={color}>
                      <IoMdHome />
                    </P>
                    <P color={color}>Home</P>
                  </Li>
                </Link>
                <Link to="/trending" className="link">
                  <Li>
                    <P color={color}>
                      <FaFire />
                    </P>
                    <P color={color}>Trending</P>
                  </Li>
                </Link>
                <Link to="/gaming" className="link">
                  <Li>
                    <P color={color}>
                      <FaGamepad />
                    </P>
                    <P color={color}>Gaming</P>
                  </Li>
                </Link>
                <Link to="/saved-videos" className="link">
                  <Li>
                    <P color={color}>
                      <BsBookmarks />
                    </P>
                    <P color={color}>Saved videos</P>
                  </Li>
                </Link>
              </Ul>
              <ContactDiv direction="column" padding="15px" margin="40px">
                <H1>CONTACT US</H1>
                <ContactDiv direction="row">
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactDiv>
                <P color={color} size="14px" left="10px">
                  Enjoy! Now to see your channels and recommendations!
                </P>
              </ContactDiv>
            </Div>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}
export default SideBar
