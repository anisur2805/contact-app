import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email, address } = props.contact;

  return (
    <div className="item">
      <div className="content">
        <img src={user} className="ui avatar image" alt="User" />
        <div className="header" style={{ marginLeft: "10px" }}>
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}>
            <div className="name">{name}</div>
            <div className="email">{email}</div>
            <div className="email">{address}</div>
          </Link>
        </div>
        <div className="right floated content" style={{ marginLeft: "auto" }}>
          <Link to={{ pathname: "/edit", state: { contact: props.contact } }}>
            <i
            style={{marginRight: "15px", fontSize: "18px"}}
              className="edit alternate outline icon">
              </i>
          </Link>
          <i
          style={{fontSize: "18px"}}
            className="trash alternate outline icon red"
            onClick={() => props.clickHandler(id)}></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
