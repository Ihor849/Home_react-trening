import styled from '@emotion/styled'

export const StatisticsList = styled.section`
   
  width: ${props => props.theme.spacing(100)};
  margin: 0 auto;
  margin-bottom: ${props => props.theme.spacing(4)};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
`
export const StatItem = styled.ul`
    width: ${props => props.theme.spacing(100)};
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;
  list-style: none;
`
