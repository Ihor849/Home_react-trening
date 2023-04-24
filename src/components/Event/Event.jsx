import PropTypes from 'prop-types'
import {formatEventStart, formatEventduration } from 'utils'
import { FaMapMarkerAlt, FaUserAlt, FaClock, FaCalendarAlt } from 'react-icons/fa'

import css from './Event.module.css'
import {iconSize} from 'constants'

export const Event = (event) => {
	const { name, location, speaker, type, start, end } = event
	const formatedStart = formatEventStart(start)
	const formatedDuration = formatEventduration(start, end)

	console.log(css);
	console.log(css[type]);
	return  (
		<div className={css.event}>
  		<h2 className={css.title}>{name}</h2>
  		<p className={css.info}>
    		< FaMapMarkerAlt className={css.icon} color="red" size={iconSize.sm}></ FaMapMarkerAlt>
				{location}
  		</p>
  		<p className={css.info}>
    		<FaUserAlt className={css.icon} size={iconSize.sm}></FaUserAlt>
    		{speaker}
  		</p>
  		<p className={css.info}>
    		<FaCalendarAlt className={css.icon} size={iconSize.sm}></FaCalendarAlt>
    		{formatedStart}
  		</p>
  		<p className={css.info}>
    		<FaClock className={css.icon} size={iconSize.sm}></FaClock>
    		{formatedDuration}
  		</p>
  		<span className={`${css.chip} ${css[type]}`}>{type}</span>
		</div>		
	)
}
Event.propTypes =
{
	name: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	speaker: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	start: PropTypes.string.isRequired,
	end: PropTypes.string.isRequired
}
