import PropTypes from 'prop-types'
import {DescriptionUser,Avatar,Name,Tag,Location} from './Description.styled'


export const Description = ({ username, tag, location, avatar, stats }) => {
	// console.log( users );
	// const { username, tag, location, avatar } = users
	return (
		<DescriptionUser
			key={username}
			username={username}
      tag={tag}
      location={location}
      avatar={avatar}>
			<Avatar
				src={avatar}
				alt={username}
				className='avatar'
			/>
			<Name>{username}</Name>
			<Tag>{tag}</Tag>
			<Location>{location}</Location>
		</DescriptionUser>
	);
}
Description.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired
}
