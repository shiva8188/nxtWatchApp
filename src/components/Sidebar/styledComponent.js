import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => props.bg};
  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  @media (min-width: 768px) {
    min-height: 100vh;
    width: 17%;
  }
`

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  @media (min-width: 768px) {
    flex-direction: column;
  }
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
  margin-right: 8px;
  font-weight: 500;
  font-size: 13px;
  margin-left: ${props => props.left};
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
export const ContactDiv = styled.div`
  display: none;
  flex-direction: ${props => props.direction};
  padding-left: ${props => props.padding};
  margin-bottom: ${props => props.margin};
  padding-left: 10px;

  @media (min-width: 768px) {
    display: flex;
  }
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
