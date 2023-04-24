import PropTypes from 'prop-types'
import {TitleText} from './Title.styled'

export const Title = ({title, children}) => {
   // console.log(children);
   return ( 
      <TitleText>{children}</TitleText>
   )
}

Title.propTypes = {
   title: PropTypes.string,
}