import {Link} from 'react-router-dom'
import {Li, Div} from './styledComponent'

const SideItem = props => {
  const {data, isActiveId, onChangeId, color} = props
  const {id, text, icon} = data

  const onClicked = () => {
    onChangeId(id)
  }
  const bgColor = isActiveId ? {color} : ''
  console.log(bgColor)

  return (
    <Link to={`/${text}`}>
      <Li onClick={onClicked}>
        <Div>{icon}</Div>
      </Li>
    </Link>
  )
}

export default SideItem
