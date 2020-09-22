import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin';

const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => {
    const googleAuth = useGoogleLogin({
        clientId: "813572900042-vklh68t9b5pabj5fc9msrmfabloo8gdq.apps.googleusercontent.com", // Your clientID from Google.
    })

    return (
        <GoogleAuthContext.Provider value={googleAuth}>
            {children}
        </GoogleAuthContext.Provider>
    )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)