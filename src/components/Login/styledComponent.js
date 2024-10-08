import styled from 'styled-components'

export const LoginCon = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bg};
  color: ${props => props.color};
`
export const Content = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bg};
  padding: 5px;
`
export const Logo = styled.img`
  align-self: center;
  width: 120px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const Label = styled.label`
  font-size: 13px;
`

export const Input = styled.input`
  background-color: transparent;
  border: 0.1px solid ${props => props.color};
  padding: 6px;
  margin-top: 4px;
  margin-bottom: ${props => props.margin};
  color: ${props => props.color};
`

export const CheckboxConstainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 7px;
  padding: 7px;
  border: none;
  color: #ffffff;
`
export const Error = styled.p`
  color: #ff0b37;
  font-size: 12px;
  margin-top: 5px;
`
