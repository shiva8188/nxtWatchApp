import styled from 'styled-components'

export const Div = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  background-color: ${props => props.bg};
  color: ${props => props.color};
  font-size: ${props => props.size};
  padding-left: ${props => props.paddingL};
  border-radius: ${props => props.radius};
  padding: ${props => props.padding};
  align-self: ${props => props.self};
  overflow-y: ${props => props.scroll};
`
export const H1 = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin-left: 10px;
`
export const Button = styled.button`
  color: ${props => props.color};
  background-color: ${props => props.bg};
  border: 0px;
  padding: ${props => props.padding};
  width: ${props => props.width};
  border-radius: ${props => props.radius};
`
export const Img = styled.img`
  width: ${props => props.width};
`
export const Ul = styled.ul`
  height: ${props => props.height};
  width: ${props => props.width};
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  background-color: ${props => props.bg};
  color: ${props => props.color};
  font-size: ${props => props.size};
  padding-left: ${props => props.paddingL};
  border-radius: ${props => props.radius};
  padding: ${props => props.padding};
  align-self: ${props => props.self};
  overflow-y: ${props => props.scroll};
`

export const Li = styled.li`
    list-style-type: none;
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    padding: ${props => props.padding};
    align-self: ${props => props.self};
    margin-left: ${props => props.left};
    color: ${props => props.color}
    margin-top: 10px;
    margin-bottom: 20px;
`
export const P = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin-top: ${props => props.top};
  font-weight: ${props => props.weight};
  margin-left: ${props => props.left};
`
