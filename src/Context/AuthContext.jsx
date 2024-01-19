import React, { createContext, useState } from 'react'

// context instance
export const AuthContext = createContext()

function AuthProvider(props) {
    const { children } = props
    const [currentUser,setCureentUser] =useState("jhonn")
    const click = () => {

    }
    let data = {
        x: 12,
        y: "this is string",
        click
    }
  return (
    <AuthContext.Provider value={ data }>
        {
            children
        }
    </AuthContext.Provider>
  )
}

export default AuthContext
