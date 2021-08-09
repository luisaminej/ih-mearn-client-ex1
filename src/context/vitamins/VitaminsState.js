import React, { useReducer } from 'react'
import VitaminsContext from './VitaminsContext'
import VitaminsReducer from './VitaminsReducer'

import axios from 'axios'

const VitaminsState = (props) => {


    // 1. ESTADO INICIAL
    // SIEMPRE HAGAN UN OBJETO

    const initialState = {
        vitamins: [
            { 
                id: 0,
                nombre: "Arquitectura DESDE GLOBAL"
            }
        ]
    }


    // 2. DISPATCHING Y REDUCERS
    const [ globalState, dispatch ] = useReducer(VitaminsReducer, initialState)


    // 3. FUNCIONES 
    // NOS VAN A AYUDAR A CAPTURAR LOS EVENTOS DE LOS COMPONENTES


    const crearVitamins = async (dataForm) => {
        try {
            
             await axios.post("http://localhost:3005/api/vitamins/crear", dataForm)

            obtenerVitamins()

        } catch (error) {
            
        }


    }


    const obtenerVitamins = async () => {

        try {

            const respuesta = await axios.get("http://localhost:3005/api/vitamins")

            const vitaminsActualizadas = respuesta.data
            console.log(vitaminsActualizadas)


            dispatch({
                type: "OBTENER_VITAMINS",
                payload: vitaminsActualizadas
            })

        } catch (error) {

        }
    }

    const actualizarVitamins = async (dataForm) => {  //dataform viene del componente en vitamins.js (le doy el nombre que quiera)

        const form = {
            vitaminsId: dataForm._id,
            nombre: dataForm.nombre
        }

         await axios.post("http://localhost:3005/api/vitamins/actualizar", form)

        obtenerVitamins()
        
    }


    const eliminarVitamins = async (dataForm) => {

        const form = {
            vitaminsId: dataForm._id
        }

        const res = await axios.post("http://localhost:3005/api/vitamins/eliminar", form)

        console.log(res)
        
        obtenerVitamins()

    } 


    // 4. RETORNO DE ESTADO GLOBAL
    return (
        <VitaminsContext.Provider
            value={{
                vitamins: globalState.vitamins,
                darkMode: true,
                usuario: {
                    nombre: "Luisi",
                    email: "lui@luisi.com"
                },
                obtenerVitamins,
                crearVitamins,
                actualizarVitamins,
                eliminarVitamins
            }}
        >

            { props.children }            

        </VitaminsContext.Provider>
    )

}


export default VitaminsState