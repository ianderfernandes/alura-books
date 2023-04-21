import perfil from '../../images/perfil.svg' 
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const IconesStyle = styled.ul`
display: flex;
`

const IconeStyle = styled.li`
list-style: none;
display: flex;
justify-content: center;
align-items: center;
padding: 0 1rem;
cursor: pointer;
`

const listIcons = [perfil, sacola]

function Icones () {
    return(
        <IconesStyle>
        {
          listIcons.map( (icone) => (
            <IconeStyle><img src={icone} alt='icone'></img></IconeStyle>
          ))
        }
      </IconesStyle>
    )
}

export default Icones