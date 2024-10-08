import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: ${props => props.bg};
`

export const Img = styled.img`
  width: ${props => props.width};
  margin-left: ${props => props.left};
`
export const Ul = styled.ul`
  width: 200px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
`
export const Li = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  width: ${props => props.width};
  border: none;
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};
  margin-bottom: 5px;
  padding: ${props => props.padding};
  padding-top: ${props => props.top};
  font-size: ${props => props.size};
  background-color: ${props => props.bg};
  color: ${props => props.color};
  border-radius: 3px;
  border: ${props => props.border};
`
export const PopupCon = styled.div`
  width: ${props => props.width};
  background-color: ${props => props.bg};
  color: ${props => props.color};
  display: flex;
  align-items: center;
  flex-direction: ${props => props.direction};
  padding: 15px;
  border-radius: 5px;
`
