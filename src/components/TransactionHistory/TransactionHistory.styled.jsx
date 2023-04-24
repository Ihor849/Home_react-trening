import styled from '@emotion/styled'

export const Table = styled.table`
	box-sizing: border-box;
  border-collapse: collapse;
  width: ${props => props.theme.spacing(100)};
	
  margin: 0 auto;
	margin-top: ${props => props.theme.spacing(5)};
	border: 1px solid black;
	background-color: ${props => props.theme.colors.white};
 
  height: ${props => props.theme.spacing(5)};

` 

export const Thead = styled.thead`
  width: 33.3%;
	border: 2px solid black;
	background-color:  ${props => props.theme.colors.green};
  
  Tr {
    height: ${props => props.theme.spacing(14)};
}
`
export const Tbody = styled.tbody`
	margin: 0;	
`
export const Th = styled.th`
  width: 33.3%;
	border: 2px solid ${props => props.theme.colors.black};
	background-color:  ${props => props.theme.colors.payton};
 
  height: ${props => props.theme.spacing(5)};
`
export const Tr = styled.tr`
	margin: 0;
	font-size: ${props => props.theme.spacing(5)};
	border: 2px solid ${props => props.theme.colors.black};
	color: ${props => props.theme.colors.nokiablue};
  

  &:nth-of-type(2n + 1) {
		background-color: ${props => props.theme.colors.aqua};
		color: ${props => props.theme.colors.black};
	
}
`
export const Td = styled.td`
	border: 2px solid ${props => props.theme.colors.black};
   
  font-size: ${props => props.theme.fontSize(5)};
  &:first-of-type {
  text-align: left;
  :first-of-type {
		padding-left: ${props => props.theme.spacing(6)};
  
	}
}
`