import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  const renderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });
  return (
    <div className="ui celled list">
      {/* <h3> Contact List</h3> */}
      {renderContactList}
    </div>
  );
};

export default ContactList;
