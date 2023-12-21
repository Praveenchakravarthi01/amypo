import { useContext, createContext, useState } from "react";


const Context = createContext();

export const States = ({ children }) => {
    const [data, setData] = useState([]);
    const [view,setView] =useState();
    return (
        <Context.Provider
            value={{
                data,
                setData,
                view,
                setView
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStates = () => useContext(Context);