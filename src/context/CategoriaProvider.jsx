import { createContext, useEffect, useState } from "react";
import axios from 'axios';
const CategoriaContext = createContext();

const CategoriaProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        try {
            const obtenerCategorias = async () => {
                const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
                const respuesta = await axios(url)
                setCategorias(respuesta.data.drinks);
            }
            obtenerCategorias()
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <CategoriaContext.Provider value={{categorias}}>
            {children}
        </CategoriaContext.Provider>
    )
}

export { CategoriaProvider }

export default CategoriaContext;