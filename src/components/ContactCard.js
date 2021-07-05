import React from "react";
import user from "../images/lena.png";

const ContactCard = ({ contact }) => {
  const { id, name, email } = contact;
  return (
    <div className="item">
      <div className="content">
        <img src={user} className="ui avatar image" alt="User" />
        <div className="header" style={{ marginLeft: "10px" }}>
          <div className="name">{name}</div>
          <div className="email">{email}</div>
        </div>
        <div className="right floated content" style={{ marginLeft: "auto" }}>
          <i className="trash alternate outline icon red"></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;