
import React, {useState, useEffect, useContext} from 'react'

import VitaminsContext from '../context/vitamins/VitaminsContext'

export default function Vitamins() {

    // 1. USECONTEXT - ESTADO GLOBAL
    const context = useContext(VitaminsContext)

    const { 
        vitamins,  // LISTADO DE PROYECTOS QUE VIENE DE CONTEXT
        darkMode,  
        obtenerVitamins,
        crearVitamins,
        actualizarVitamins,
        eliminarVitamins} = context

    // 2. USESTATE - ESTADO LOCAL

    const [ newVitamins, setNewVitamins ] = useState({
        nombre: ""
    })

    const [ modoEdicion, setModoEdicion ] = useState(false)


    // 3. USEEFFECT

    useEffect(() => {
        
        obtenerVitamins()

    },[])



    const manejarCambios = (event) => {
        
        event.preventDefault()

        setNewVitamins({
            ...newVitamins,
            [event.target.name]: event.target.value
        })


    }


    const enviarFormulario = (event) => {
        event.preventDefault()

        // console.log("Enviando datos...", nuevoProyecto)
        crearVitamins(newVitamins)

        setNewVitamins({
            nombre: ""
        })
    }


    // MODO EDICIÓN

    const activarModoEdicion = (event, element) => {
        
        event.preventDefault()
        setModoEdicion(true)
        setNewVitamins(element)

    }


    const editarVitamins = (event) => { //ESTE ES EL COMPONENTE QUE SE VA COMO DATAFORM
        
        event.preventDefault()
        
        actualizarVitamins(newVitamins)

        setModoEdicion(false)

        setNewVitamins({
            nombre: ""
        })

    }

    // BORRAR PROYECTO


    const borrarVitamins = (event, element) => {
        
        event.preventDefault()
        eliminarVitamins(element)

    }


    // EVENTO EDITAR

    return (
        <div>
            Las vitamins del backend \o/
            
            <p>Dark Mode: {
                darkMode ? "Activado" : "Apagado"
            }</p>

            {/* <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button> */}

        
            <hr />

            <form onSubmit={ modoEdicion ? 
                    (e) => editarVitamins(e) : 
                    (e) => enviarFormulario(e)
                }>
                <input 
                    name="nombre"
                    type="text"
                    value={newVitamins.nombre}
                    onChange={(e) => { manejarCambios(e) }}
                />

                <button>
                    { modoEdicion ? "Editar Vitamins" : "Crear vitamins" }
                </button>


            </form>


            {
                vitamins.length === 0 ?
                "No tengo vitamins"
                :
                vitamins.map((vitamin,i) => {
                    return(
                        <div key={i}>

                            <p>{vitamin.nombre}</p>
                            <p>{vitamin._id}</p>

                           <button onClick={(evento) => {activarModoEdicion(evento, vitamin)}}>Editar</button>
                            <button onClick={(evento) => borrarVitamins(evento, vitamin)}>Borrar</button>

                        </div>
                    )
                })
            }


        </div>
    )
}