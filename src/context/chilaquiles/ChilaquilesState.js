import React, { useReducer } from 'react'
import ChilaquilesContext from './ChilaquilesContext'
import ChilaquilesReducer from './ChilaquilesReducer'

import axios from 'axios'

const ChilaquilesState = (props) => {

    // 1. ESTADO INICIAL
    // SIEMPRE HAGAN UN OBJETO

    const initialState = {
        chilaquiles: [
            { 
                id: 0,
                nombre: "Chilaquiles 0"
            }
        ]
    }


    // 2. DISPATCHING Y REDUCERS
    const [ globalState, dispatch ] = useReducer(ChilaquilesReducer, initialState)


    // 3. FUNCIONES 
    // NOS VAN A AYUDAR A CAPTURAR LOS EVENTOS DE LOS COMPONENTES

    const obtenerChilaquiles = async () => {
        try {

            const res = await axios.get("http://localhost:3005/api/chilaquiles")

            const chilaquilesActualizados = res.data
            console.log(chilaquilesActualizados)


            dispatch({
                type: "OBTENER_CHILAQUILES",
                payload: chilaquilesActualizados
            })




        } catch (error) {

        }
    }


    // 4. RETORNO DE ESTADO GLOBAL
    return (
        <ChilaquilesContext.Provider
            value={{
                chilaquiles: globalState.chilaquiles,
        
              
                obtenerChilaquiles
            }}
        >

            { props.children }            

        </ChilaquilesContext.Provider>
    )

}


export default ChilaquilesState