import styled from 'styled-components'

export const Li = styled.li`
  width: 320px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  margin-top: 13px;
`

export const Img = styled.img`
  width: ${props => props.width};
  border-radius: ${props => props.radius};
  margin-bottom: 5px;
  align-self: ${props => props.direction};
`
export const Div = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  margin-top: ${props => props.margin};
  margin-left: ${props => props.left};
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: ${props => props.direction};
  margin-top: ${props => props.margin};
  margin-left: ${props => props.left};
`

export const P = styled.p`
  font-size: ${props => props.size};
  color: ${props => props.color};
  margin-top: ${props => props.margin};
  margin-left: ${props => props.left};
`
