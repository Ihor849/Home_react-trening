import PropTypes from 'prop-types'
import { Title } from 'components/Statistics/Title/Title'
import { StatList } from 'components/Statistics/StatList/StatList'
import {StatisticsList,StatItem} from './Statistics.styled'

export const Statistics = ({ statistics, title, children}) => {
    const { id} = statistics;
    
    return (
        <StatisticsList key={id}>
             
            {title && <Title>{ title }</Title>}
            <StatItem >
                {statistics.map(({ id, label, percentage }) => (
                <StatList
                key={id}
                label={label}
                percentage={percentage}
            />
            ))}
            </StatItem>
            
        </StatisticsList>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    statistics: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,

    })) 
}