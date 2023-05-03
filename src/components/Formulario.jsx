import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import useCategoria from '../hooks/useCategoria';
import useBebida from '../hooks/useBebida';
import { useState } from 'react';
function Formulario() {
    const { categorias } = useCategoria();
    const {obtenerBebidas} = useBebida();
    const [bebida, setBebida] = useState({
        nombre: '',
        categoria: ''
    });
    const [alerta, setAlerta] = useState('');
    const handleBebida = (event) => {
        setBebida({ ...bebida, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(bebida).includes('')) {
            setAlerta('Todos los campos son Obligatorios');
            return;
        }
        setAlerta('');
        obtenerBebidas(bebida);
    }
    return (
        <Form onSubmit={handleSubmit}>
            {alerta && <Alert variant='danger' className='text-center text-uppercase fw-bold'>{alerta}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor='nombre'> Nombre Bebida</Form.Label>
                        <Form.Control type='text' placeholder='Nombre Bebida' id='nombre' name='nombre' onChange={handleBebida} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor='categoria'> Categoría Bebida</Form.Label>
                        <Form.Select id='categoria' name='categoria' onChange={handleBebida}>
                            <option value="">-- Selecciona Categoría --</option>
                            {categorias.map((categoria) => (
                                <option value={categoria.strCategory} key={categoria.strCategory}>{categoria.strCategory}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='mt-3 justify-content-center'>
                <Col md={3}>
                    <Button className='text-uppercase w-100' type='submit'>
                        Buscar Bebidas
                    </Button>
                </Col>

            </Row>
        </Form>
    );
}

export default Formulario;