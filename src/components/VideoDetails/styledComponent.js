import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  background-color: ${props => props.bg};
  color: ${props => props.color};
  padding: ${props => props.padding};
  width: ${props => props.width};
  text-align: ${props => props.align};
  margin-top: ${props => props.top};
  margin-left: ${props => props.left};
`
export const Img = styled.img`
  width: ${props => props.width};
  border-radius: ${props => props.radius};
  margin-top: ${props => props.top};
`
export const Button = styled.button`
  color: ${props => props.color};
  background-color: ${props => props.bg};
  border: none;
  align-self: center;
  padding: 6px;
  width: 70px;
  border-radius: 5px;
`
export const P = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  margin-right: ${props => props.right};
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
`
export const Hr = styled.hr`
  width: 100%;
`
