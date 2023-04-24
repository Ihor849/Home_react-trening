import PropTypes from 'prop-types'
import {ProfileUser} from './Profile.styled'

import { Description } from 'components/Profile/Description/Description'
import {Stats} from 'components/Profile/Stats/Stats'

export const Profile = ({ users }) => {
  const { username, tag, location, avatar, stats } = users
  return (
    <ProfileUser>
      <Description
        key={username}
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
			/>
			<Stats
				followers={stats.followers}
				views={stats.views}
				likes={stats.likes}
			/>
               
    </ProfileUser>
  );
}

Profile.propTypes = {
  users: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  })
}