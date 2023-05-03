import { Modal, Image } from "react-bootstrap";
import useBebida from "../hooks/useBebida";
function ModalBebida() {
    const { modal, handleModalClick, receta, loading } = useBebida();
    const mostrarReceta = () => {
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }
    return (
        !loading && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image src={receta.strDrinkThumb} />
                <Modal.Header>
                    <Modal.Title>
                        {modal.strDrink}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <h2>Instrucciones</h2>
                        {receta.strInstructions}
                        <h2>Ingredientes y Cantidad</h2>
                        {mostrarReceta()}
                    </div>
                </Modal.Body>
            </Modal>)
    );
}

export default ModalBebida;