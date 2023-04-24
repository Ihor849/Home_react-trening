import PropTypes from 'prop-types'
import {Item,Lable,Percentage} from './StatList.styled'

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

export const StatList = ({id,label, percentage }) => {
  return (
    
    <Item style={{backgroundColor: generateColor()}}>
      <Lable>{label}</Lable>
      <Percentage>{percentage} %</Percentage>
    </Item>
      
    
  );
};

StatList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}