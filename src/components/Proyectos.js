import React, {useState, useEffect, useContext} from 'react'

import ProyectoContext from './../context/proyectos/ProyectoContext'

export default function Proyectos() {

    const context = useContext(ProyectoContext)

    const { 
        proyectos,  // LISTADO DE PROYECTOS QUE VIENE DE CONTEXT
        darkMode, 
        usuario, 
        obtenerProyectos } = context
    

    return (
        <div>
            Hola soy todos los proyectos del backend :D

            {
                proyectos.map((e) => {
                    return(
                        <p>{e.nombre}</p>
                    )
                })
            }

            <p>Dark Mode: {
                darkMode ? "Activado" : "Apagado"
            }</p>

            <button onClick={() => { obtenerProyectos() }}>
                Obtener proyectos de base de datos
            </button>

        </div>
    )
}


//ESTO VA ABAJO DE CONST = CONTEXT


   // const [proyectos, setProyectos] = useState([
    //     {
    //         id: 0,
    //         nombre: "arquitectura 0"
    //     }
    // ])


    // // ES UN HOOK QUE ME PERMITE ESTABLECER PROCESOS ASÍNCRONOS Y SE EJECUTA DESPUÉS DEL PRIMER RENDERIZADO
    
    // useEffect(() => {

    //     // DECLARO UNA FUNCIÓN PARA EXTRAER DATOS DE UNA API
    //     const getProjectsFromDB = async () => {
    //             const respuesta = await axios.get("http://localhost:3005/api/proyectos")

    //             const proyectosDeBD = respuesta.data

    //             setProyectos(proyectosDeBD)

            
    //     }

    //     // INVOCAR LA FUNCIÓN
    //     getProjectsFromDB()


    // } , [])    
    


    // // EVENTO
    // const agregarProyecto = (event) => {
    //     event.preventDefault()

    //     setProyectos([
    //         {
    //             id: 1,
    //             nombre: "arquitectura 1"
    //         }
    //     ])

    // }

    // return (
    //     <div>
    //         Hola soy todos los proyectos del backend :D



            {/* <button onClick={(e) => {agregarProyecto(e)}}>
                Agregar proyecto
            </button> */}