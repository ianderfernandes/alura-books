import logo from '../../images/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
display:flex;
font-size: 30px;
`

const LogoStyle = styled.img`
margin-right: 10px;
`

function Logo() {
  return (
    <LogoContainer>
      <LogoStyle src={logo} alt='logo'></LogoStyle>
      <p><strong>Alura</strong>Books</p>
    </LogoContainer>
  )
}

export default Logo