import PropTypes from 'prop-types'
import {StatsUser,Labels,Quantity,Item} from './Stats.styled'

export const Stats = ({followers,views,likes}) => {
  return (
	<StatsUser
		followers={followers}
		views={views}
		likes={likes}>
    	<Item>
      	<Labels>Followers</Labels>
      	<Quantity>{followers}</Quantity>
    	</Item>
    	<Item>
      	<Labels>Views</Labels>
      	<Quantity>{views}</Quantity>
    	</Item>
    	<Item>
      	<Labels>Likes</Labels>
      	<Quantity>{likes}</Quantity>
    	</Item>
  	</StatsUser>
  )
}

Stats.propTypes = {
	followers: PropTypes.number.isRequired,
	views: PropTypes.number.isRequired,
	likes: PropTypes.number.isRequired
}
