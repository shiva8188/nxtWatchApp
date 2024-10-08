import {Component} from 'react'
import Cookies from 'js-cookie'
import ContextObject from '../../context/CreateContext'
import {
  LoginCon,
  Content,
  Logo,
  Form,
  Label,
  Input,
  CheckboxConstainer,
  LoginButton,
  Error,
} from './styledComponent'

class Login extends Component {
  state = {showPassword: false, username: '', password: '', errorMsg: ''}

  componentDidMount() {
    this.onCheckUser()
  }

  onCheckUser = () => {
    const {history} = this.props
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      history.replace('/')
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowError = errorMsg => {
    this.setState({errorMsg})
  }

  onSubmitData = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const jwtToken = data.jwt_token
    console.log(jwtToken)
    if (response.ok) {
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.onShowError(data.error_msg)
    }
  }

  onChangeStatus = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  render() {
    const {showPassword, username, password, errorMsg} = this.state
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgC = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const img = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const contentBg = isDarkTheme ? 'black' : 'white'
          const color = isDarkTheme ? '#e2e8f0' : '#0f0f0f'

          return (
            <LoginCon bg={bgC} color={color}>
              <Content bg={contentBg}>
                <Logo src={img} alt="website logo" />
                <Form onSubmit={this.onSubmitData}>
                  <Label htmlFor="username">USERNAME</Label>
                  <Input
                    type="text"
                    id="username"
                    color={color}
                    value={username}
                    placeholder="Username"
                    margin="10px"
                    onChange={this.onChangeUsername}
                  />
                  <Label htmlFor="password">PASSWORD</Label>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    color={color}
                    placeholder="Password"
                    show="true"
                    id="password"
                    margin="5px"
                    onChange={this.onChangePassword}
                  />
                  <CheckboxConstainer>
                    <Input
                      type="checkbox"
                      id="checkbox"
                      margin="0px"
                      onChange={this.onChangeStatus}
                    />
                    <Label htmlFor="checkbox">Show Password</Label>
                  </CheckboxConstainer>
                  <LoginButton type="submit">Login</LoginButton>
                  <Error>{errorMsg}</Error>
                </Form>
              </Content>
            </LoginCon>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}
export default Login
