import styled from '@emotion/styled'

export const Item = styled.li`
    display: flex;
  flex-wrap: wrap;
  width: ${props => props.theme.spacing(20)};
  height: ${props => props.theme.spacing(15)};
  background-color: ${props => props.theme.colors.aqua};
`
export const Lable = styled.span`
  font-size: ${props => props.theme.fontSize(4.5)};
  line-height: ${props => props.theme.spacing(10)};
  display: block;
  flex-basis: 100%;
  margin: 0;
  padding: 0;
  height: ${props => props.theme.spacing(8)};
  color: ${props => props.theme.colors.white};
`
export const Percentage = styled.span`
	display: block;
	font-size: ${props => props.theme.fontSize(5)};
  flex-basis: 100%;
  margin: 0;
  padding: 0;
  height: 30px;
  color: ${props => props.theme.colors.white};
`