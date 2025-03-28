import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name,Phno, Passion, Address, image }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-img" />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-email">{Phno}</p>
        <p className="profile-address">{Passion}</p>
        <p className="profile-address">{Address}</p>
        <h3 className="achievements-heading">Address</h3>
        <ul className="achievements-list">
          {Address.map((item, index) => (
            <li key={index} className="achievement-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
