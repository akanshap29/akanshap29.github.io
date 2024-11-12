import React from 'react';
import ProfileImageGenerator from './ProfileImage';
import './css/Card.css';

const Card = ({ id, title, tag, userId, status, priority, user }) => {
    return (
        <div className="card" key={id}>
            <div className="profile-container">
                {user && <ProfileImageGenerator user={user} />}
            </div>
            <div className="card-id">{id}</div>
            <div className="card-title">{title}</div>
            <div>
                {tag && tag.length > 0 && tag.map((t, index) => (
                    <span key={index} className="tag">
                        <span className="tag-item">
                            <span className="tag-dot"></span>
                            {t}
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Card;

