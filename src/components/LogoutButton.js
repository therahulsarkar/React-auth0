import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


function LogoutButton() {

    const { logout, isAuthenticated } = useAuth0();

    return (
        //Show logout button if authenticated
        isAuthenticated && (

        <button onClick={()=> logout()} 
        style={{
            backgroundColor: '#ff938b',
            backgroundImage: 'linear-gradient(90deg, #ff938b 0%, #fa5e7f 55%, #ff3b60 100%)',

            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            color: '#fff',
            fontSize: '16px',
            margin: '20px 10px',
            
        }}>
            Logout
        </button>
        )
    )

}

export default LogoutButton


