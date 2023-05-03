import Container from 'react-bootstrap/Container';
import Formulario from './components/Formulario';
import { Form } from 'react-bootstrap';
import { CategoriaProvider } from './context/CategoriaProvider';
import { BebidaProvider } from './context/BebidaProvider';
import ListadoBebidas from './components/ListadoBebidas';
import Modal from './components/ModalBebida';
function App() {

  return (
    <>
      <BebidaProvider>
        <CategoriaProvider>
          <header className="py-5">
            <h1>Buscador Bebidas</h1>
          </header>
          <Container className='mt-5'>
            <Formulario />
            <ListadoBebidas />
            <Modal />
          </Container>
        </CategoriaProvider>
      </BebidaProvider>

    </>
  )
}

export default App
