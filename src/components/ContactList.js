import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  const deleteContactHandler = (id) => {
    getContactId(id);
  };
  const renderContactList = contacts.map((contact, index) => (
    <ContactCard contact={contact} key={index} clickHandler={deleteContactHandler} />
  ));
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
