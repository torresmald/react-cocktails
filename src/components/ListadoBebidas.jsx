import { Row } from "react-bootstrap";
import useBebida from "../hooks/useBebida";
import Bebida from "./Bebida";
function ListadoBebidas() {
    const {bebidas} = useBebida();
    return (
        <Row className="mt-5">
            {bebidas.map((bebida, index) => (
                <Bebida key={index} bebida={bebida}/>
            ))}
        </Row>
    );
}

export default ListadoBebidas;