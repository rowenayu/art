import React, { useReducer, useContext } from 'react'
import reducer from './reducer'
import { TOGGLE_SIDEBAR } from './actions'

const initialState = {
    showSidebar: false
}

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const toggleSidebar = () => {
        dispatch({type: TOGGLE_SIDEBAR})
    }

    return (
        <AppContext.Provider value={{ ...state, toggleSidebar }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
  };
  
export { AppProvider, initialState, useAppContext }