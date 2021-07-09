import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  // Q3
  const deleteContactHandler = (id) => {
    getContactId(id);
  };

  const renderContactList = contacts.map((contact, index) => (
    <ContactCard
      contact={contact}
      key={index}
      clickHandler={deleteContactHandler}
    />
  ));
  return (
    <div className="ui celled list">
      <h2>
        Contact List 
        <Link to="add">
          <button className="btn blue right">Add Contact</button>
        </Link>
      </h2>
      {contacts.length > 0 ?  renderContactList : <h5>No Contact address, please add contact first</h5>}
    </div>
  );
};

export default ContactList;
