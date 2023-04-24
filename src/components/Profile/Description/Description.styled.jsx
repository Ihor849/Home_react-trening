import styled from '@emotion/styled'

export const DescriptionUser = styled.div`
  width: ${props => props.theme.spacing(100)};
  padding-top: ${props => props.theme.spacing(5)};
  margin: 0 auto;
  background-color: ${props=>props.theme.colors.white}; 
  
`
export const Avatar = styled.img`
    padding: ${props => props.theme.spacing(5)};
  width: ${props => props.theme.spacing(50)};
  background-color: ${props=>props.theme.colors.brightgreen}; 
  border-radius: 50%;
`
export const Name = styled.p`
    margin-top: ${props => props.theme.spacing(6)};
  font-size: ${props => props.theme.spacing(6)};
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${props=>props.theme.colors.grey};
`
export const Tag = styled.p`
    margin-top:  ${props => props.theme.spacing(3)};
  font-size:  ${props => props.theme.fontSize(6)};
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${props=>props.theme.colors.grey};
`
export const Location = styled.p`
     margin-top: ${props => props.theme.spacing(3)};
  font-size: ${props => props.theme.fontSize(6)};

  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${props=>props.theme.colors.grey};
`