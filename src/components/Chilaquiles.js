import React, {useContext} from 'react'

import ChilaquilesContext from './../context/chilaquiles/ChilaquilesContext'

export default function Chilaquiles() {

    const context = useContext(ChilaquilesContext)

    const { 
        chilaquiles,  // LISTADO DE PROYECTOS QUE VIENE DE CONTEXT 
        obtenerChilaquiles } = context
    console.log(chilaquiles)

    return (
        <div>
            Los chilaquiles del backend \o/

            {
                chilaquiles.map((e) => {
                    return(
                        <p>{e.name}</p>
                    )
                })
            }

         
            <button onClick={() => { obtenerChilaquiles() }}>
                Obtener Chilaquiles de BD
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



