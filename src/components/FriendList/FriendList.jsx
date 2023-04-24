import PropTypes from 'prop-types'
import {Friends,ItemFriend,Status,Avatar,Name } from './FriendList.styled'

export const FriendList = ({ friends }) => {
	
	return (
		<Friends >
			{friends.map(({ avatar, name, isOnline, id }) => (
				<ItemFriend key={id} 
					id={id}
					avatar={avatar}
					name={name}
					isOnline={isOnline}
				>
				<Status Online={isOnline}>{isOnline}</Status>
        <Avatar src={avatar} alt={name} width="48" />
          <Name>{name}</Name>
				</ItemFriend>
			))}

		</Friends >)
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
		avatar: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
		id: PropTypes.number.isRequired,
	}))
	
}




	


