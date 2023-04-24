import styled from '@emotion/styled'

export const Friends = styled.ul`
    display: flex;
  flex-direction: column;
  align-items: center;
`
export const ItemFriend =styled.li`
    width: ${props => props.theme.spacing(100)};
  padding: ${props => props.theme.fontSize(4)};
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.purple};
  margin-bottom: ${props => props.theme.spacing(5)};
  border-radius: ${props => props.theme.spacing(3)};
  &:last-child {
  margin-bottom: 0;
}
`
export const Status = styled.span`
  width: ${props => props.theme.spacing(5)};
  height: ${props => props.theme.spacing(5)};
  border-radius: 50%;
  background-color: ${({ Online, theme }) => {
        if (Online) {
            return props => props.theme.colors.brightgreen
        } else {
            return props => props.theme.colors.red
        }
    }
} 
`


export const Avatar = styled.img`
    width: ${props => props.theme.spacing(18)};
  margin-left: ${props => props.theme.spacing(5)};
  border-radius: ${props => props.theme.spacing(1)};
`
export const Name = styled.p`
    margin-left: ${props => props.theme.spacing(10)};
  font-size: ${props => props.theme.spacing(5)};
  font-weight: 700;
`
