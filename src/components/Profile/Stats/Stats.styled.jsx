import styled from '@emotion/styled'

export const StatsUser = styled.ul`
    display: flex;
  padding: ${props=>props.theme.spacing(2)};
  justify-content: space-between;
  background-color: ${props=>props.theme.colors.aqua};
`
export const Labels = styled.span`
    display: flex;
  justify-content: center;
  font-size: ${props=>props.theme.fontSize(4)};
  line-height: ${props=>props.theme.spacing(6)};
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.black};
`
export const Quantity = styled.span`
    font-size: ${props=>props.theme.fontSize(5)};
  line-height: ${props=>props.theme.spacing(6)};
  font-weight: 700;
  letter-spacing: 0.5px;
`
export const Item = styled.li`
    width: 33.3%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${props => props.theme.colors.black};
  &:last-child {
    border-right: 0px;
  }
`