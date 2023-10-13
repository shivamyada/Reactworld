import createContext from "react"
import useContext from "react"
export  const ThemeContext=createContext({
    thememode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const Themeprovider= ThemeContext.Provider
export default function usuTheme(){
    return useContext(ThemeContext)
}