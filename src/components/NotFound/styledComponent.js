import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  background-color: ${props => props.bg};
  color: ${props => props.color};
`
export const Img = styled.img`
  width: 60%;
`

export const Div = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
