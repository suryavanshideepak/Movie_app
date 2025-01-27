import React, { createContext, useState } from 'react'

export const MyContext = createContext('')
const MoviesContext = ({children}) => {
    const [value, setValue] = useState('')

    return (
        <MyContext.Provider value={{value,setValue}} >
            <div>{children}</div>
        </MyContext.Provider>
    )
}

export default MoviesContext