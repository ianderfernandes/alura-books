import Header from './components/header/header';
import Pesquisa from './components/pesquisa/pesquisa';
import UltimosLancamentos from './components/ultimos-lancamentos/ultimoLancamentos'
import styled from 'styled-components';

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header></Header>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
