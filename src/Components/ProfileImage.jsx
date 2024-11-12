import React from 'react';
import './css/ProfileImage.css';

const ProfileImageGenerator = ({user}) => {
    return (
        <img 
            src={`https://ui-avatars.com/api/?name=${user?.name?.split(' ').map(n => n[0]).join('')}&background=random`} 
            alt="Profile" 
            className="profile-image"
        />
    )
}

export default ProfileImageGenerator;

