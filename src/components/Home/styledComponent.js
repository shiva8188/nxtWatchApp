import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
`
export const HomeContainer = styled.div`
  height: 100vh;
  width: 83%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bg};
  color: ${props => props.color};
`
export const BannerCon = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`
export const Details = styled.div`
  padding-left: 15px;
`
export const Img = styled.img`
  width: ${props => props.width};
`
export const P = styled.p`
  font-size: 18px;
  color: black;
`
export const Button = styled.button`
  width: ${props => props.width};
  border: ${props => props.border} solid black;
  padding: ${props => props.padding};
  font-weight: 500;
  align-self: ${props => props.self};
  background-color: ${props => props.bg};
  color: ${props => props.color};
  border-radius: ${props => props.radius};
`
export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.content};
  flex-wrap: ${props => props.wrap};
  background-color: ${props => props.bg};
  color: ${props => props.color};
  padding: ${props => props.padding};
`

export const InputCon = styled.div`
  width: 200px;
  background-color: ${props => props.inputBg};
  border: 1px solid ${props => props.color};
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  background-color: ${props => props.inputBg};
  color: ${props => props.color};
  border: none;
  outline: none;
  padding: 5px;
  width: 100%;
`
export const InputBtn = styled.button`
  background-color: ${props => props.bg};
  color: ${props => props.color};
  border: none;
  padding: 4px;
  width: 40px;
`
export const Ul = styled(DetailsContainer)``
