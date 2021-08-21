import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Profile.css';

function Profile() {
    const { user, isAuthenticated } = useAuth0();
    
    return (
        isAuthenticated && (
        <>
         <div className="card-container">
			<header>
				<img src={user.picture} alt={''} />
			</header>
			<h1 className="bold-text">
				 <span className="normal-text">{user.nickname}</span>
			</h1>
			<h2 className="normal-text">{user.email}</h2>
			<div className="social-container">
				<div className="followers">
					<h1 className="bold-text">{user.email_verified}</h1>
				</div>
				<div className="likes">
					<h1 className="bold-text">{user.updated_at}</h1>
				</div>
				<div className="photos">
					<h1 className="bold-text">{user.sub}</h1>
				</div>
			</div>
		</div>  
        </>
        )
    )
}

export default Profile
