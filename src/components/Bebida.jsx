import { Col, Card, Button } from "react-bootstrap";
import useBebida from "../hooks/useBebida";
function Bebida({ bebida }) {
    const { strDrink, strDrinkThumb, idDrink } = bebida;
    const {handleModalClick, handleBebidasIdClick} = useBebida();
    return (

        <Col md={6} lg={3}>
            <Card className="mb-4">
                <Card.Img src={strDrinkThumb} variant="top" alt={`Bebida de ${strDrink}`} />
                <Card.Body>
                    <Card.Title>{strDrink} </Card.Title>
                    <Button className="text-uppercase w-100 justify-content-center mt-2" onClick={() => {handleModalClick(); handleBebidasIdClick(idDrink)}}>Ver Receta</Button>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default Bebida;