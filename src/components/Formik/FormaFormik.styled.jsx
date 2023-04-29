import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
   
`


export const Title = styled.h2`
    width: 300px;
    text-align: center;
    margin-bottom: 15px;
`
export const Mform = styled.form`
width: 300px;
    display: flex;
    flex-direction:column;
    gap:12px;
    margin: 0 auto;

    >label {
      display: flex;
    	flex-direction:column;
    	gap:4px;

			>input {
				
				font-size: 22px;
				padding: 8;
				border-radius: 10;
			}
    }
`
export const Button = styled.button`
  border: 1px solid ${props => props.theme.colors.black};
  padding: ${props => props.theme.spacing(3)};
  border-radius: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.colorBg};
  &:hover {
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 2px 5px ${props => props.theme.colors.colorShadow};
  }
  &:active {
    background-color: ${props => props.theme.colors.grey};
    fill: ${props => props.theme.colors.white};
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.colorShadow};
  }
`;