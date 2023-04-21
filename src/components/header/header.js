import Icones from '../icones/icone';
import Logo from '../logo/index'
import Menu from '../menu/menu';
import styled from 'styled-components';

const HeaderStyle = styled.header`
background-color: #fff;
display: flex;
justify-content: center;
}
`

function Header() {
  return (
    <HeaderStyle>
      <Logo></Logo>
      <Menu></Menu>
      <Icones></Icones>
    </HeaderStyle>
  )
}

export default Header