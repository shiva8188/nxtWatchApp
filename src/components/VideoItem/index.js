import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {Li, Img, Div, P, Nav} from './styledComponent'

const VideoItem = props => {
  const {data, color, colorP} = props
  const {id, profileUrl, thumbnail, name, title, views, date} = data

  return (
    <Link to={`/videos/${id}`} className="link">
      <Li key={id}>
        <Img src={thumbnail} alt="video thumbnail" width="100%" />
        <Div margin="7px">
          <Img
            src={profileUrl}
            alt="channel logo"
            width="37px"
            radius="50%"
            direction="flex-start"
          />
          <Nav left="7px" direction="column">
            <P margin="1px" size="13px" color={colorP}>
              {title}
            </P>
            <P color={color} margin="1px" size="12px">
              {name}
            </P>
            <Div>
              <P color={color} size="12px" margin="1px">
                {views} views
              </P>
              <P color={color} size="12px" margin="1px" left="7px">
                {formatDistanceToNow(new Date(date))}
              </P>
            </Div>
          </Nav>
        </Div>
      </Li>
    </Link>
  )
}
export default VideoItem
