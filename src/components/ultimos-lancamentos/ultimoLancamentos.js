import { livros } from './dadosUltimoLancamento'
import { Titulo } from '../titulo/titulo'
import CardRecomenda from '../card-recomenda/cardRecomenda'
import styled from 'styled-components'
import imagemLivro from '../../images/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor={'#EB9B00'}
                tamanhoFonte={'34px'}
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt='' />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda titulo='Talvez você se interesse por'
            subtitulo='Angular 11'
            descricao='Construindo uma aplicação com a plataforma Google'
            img={imagemLivro}/>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos