import { createContext, useState, useEffect } from "react";
import axios from 'axios';
const BebidaContext = createContext();

const BebidaProvider = ({ children }) => {
    const [bebidas, setBebidas] = useState([]);
    const [bebidasId, setBebidasId] = useState(null);
    const [receta, setReceta] = useState({});
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const obtenerBebidas = async (datos) => {
        setLoading(true);
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            const { data } = await axios(url);
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    const handleModalClick = () => {
        setModal(!modal);
    }
    const handleBebidasIdClick = (id) => {
        setBebidasId(id);
    }
    useEffect(() => {
        if (!bebidasId) return;
        const obtenerReceta = async () => {
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidasId}`;
                const { data } = await axios(url);
                setReceta(data.drinks[0]);
            } catch (error) {
                console.log(error);
            }
        }
        obtenerReceta()
    }, [bebidasId])
    return (
        <BebidaContext.Provider value={{ obtenerBebidas, bebidas, handleModalClick, modal, handleBebidasIdClick, receta, loading}}>
            {children}
        </BebidaContext.Provider>
    )
}

export { BebidaProvider }

export default BebidaContext;