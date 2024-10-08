import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => props.bg};
  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 17%;
  align-self: stretch;
  min-height: 100vh;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
`
export const Li = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
  display: flex;
  padding-left: 15px;
`

export const P = styled.p`
  color: ${props => props.color};
  margin: 0px;
  margin-top: 8px;
  margin-right: 13px;
  font-weight: 500;
  font-size: ${props => props.size};
  margin-left: ${props => props.left};
`
export const ContactDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  padding-left: ${props => props.padding};
  margin-bottom: ${props => props.margin};
  padding-left: 10px;
`

export const H1 = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  padding-left: 10px;
  font-weight: bold;
`
export const Img = styled.img`
  width: 30px;
  padding-left: 0px;
  margin-right: 10px;
`
