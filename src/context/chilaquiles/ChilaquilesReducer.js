// REDUCER - ES UNA FUNCIÓN AUTORIZADA QUE ALTERA EL ESTADO GLOBAL

export default (globalState, action) => {

    switch(action.type) {
        // cases
        case "OBTENER_CHILAQUILES":
            return {
                ...globalState,
                chilaquiles: action.payload
            }


        // default
        default:
            return globalState

    }
}