import styled from "styled-components"
import { useState } from 'react'
import { livros } from "./dadosPesquisa"

const PesquisaContainer = styled.section`
justify-content: center;
text-align: center;
margin-top: 5rem;
`
const Titulo = styled.h2`
color: white;
font-size: 32px;
padding: 0;
margin: 0;
`
const SubTitulo = styled.h3`
color: white;
font-size: 16px;
padding: 0 0 20px 0;
`

const InputPesquisa = styled.input`
width: 20rem;
height: 2rem;
background: transparent;
text-align: center;
border: 1px solid #fff;
border-radius: 30px;
border-color: #fff;
font-size: 16px;
color: #fff;
margin-bottom: 2rem;

&::placeholder{
    font-size: 14px;
    color: #fff
}
`

const Resultado = styled.div`
display: flex;
justify-content: center;
margin: 2.5rem;
cursor: pointer;

p{
    display: flex;
    color: white;
    align-items: center;
    
}

img{
    width: 100px;
    margin: 0 1rem;
}

&:hover{
    border: 1px solid white;
    padding: 0.25rem;
}
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <InputPesquisa placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoPesquisado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoPesquisado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            ></InputPesquisa>
            {livrosPesquisados.map(livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt='imagem de livros'></img>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa