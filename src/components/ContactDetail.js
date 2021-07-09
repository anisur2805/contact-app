import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDetail = (props) => {
  const { name, email, address } = props.location.state.contact;
  // console.log(props);
  return (
    <div className="main">
      <div className="ui card centered single-contact">
        <div className="image">
          <img src={user} className="ui avatar image" alt="User" />
        </div>
        <div className="content">
          <h1>{name}</h1>
          <p>
            <strong>{email}</strong>{" "}
          </p>
          <p>{address}</p>
        </div>
      </div>

      <div className="ui card centered">
        <Link to="/" className="ui button blue center text-white">
          Back to Contact List
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
