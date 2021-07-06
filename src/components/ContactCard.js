import React from "react";
import user from "../images/lena.png";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email, address} = contact;
  return (
    <div className="item">
      <div className="content">
        <img src={user} className="ui avatar image" alt="User" />
        <div className="header" style={{ marginLeft: "10px" }}>
          <div className="name">{name}</div>
          <div className="email">{email}</div>
          <div className="email">{address}</div>
        </div>
        <div className="right floated content" style={{ marginLeft: "auto" }}>
          <i
            className="trash alternate outline icon red"
            onClick={() => clickHandler(id)}></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
