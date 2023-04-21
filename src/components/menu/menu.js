import styled from 'styled-components'

const MenuStyle = styled.ul`
display: flex;
`

const ItemStyle = styled.li`
list-style: none;
min-width: 120px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
cursor: pointer;
padding: 0 1rem;
`

const listItems = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function Menu () {
    return(
        <MenuStyle>
        {
          listItems.map( (item) => (
            <ItemStyle><p>{item}</p></ItemStyle>
          ))
        }
      </MenuStyle>
    )
}

export default Menu