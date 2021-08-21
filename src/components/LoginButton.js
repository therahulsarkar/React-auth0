import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0(); 
    return (
        //Show login button if not authenticated
        !isAuthenticated && (

        <button onClick={()=> loginWithRedirect()} 
        style={{
            backgroundColor: '#0093E9',
            backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            color: '#fff',
            fontSize: '16px',
            margin: '20px 10px',
            
        }}>
            Login
        </button>
        )
    )
}

export default LoginButton
