import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // Q3
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const inputRef = useRef("");
  const getSearchTerm = () => {
    // console.log(inputRef.current.value);
    // console.log("Props " + props.searchKeyword)
    props.searchKeyword(inputRef.current.value);
  };

  const renderContactList = props.contacts.map((contact, index) => (
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

      <div className="ui search">
        <div className="ui input icon">
          <input
            ref={inputRef}
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
            placeholder="Search Contacts..."
          />
          <i className="search icon"></i>
        </div>
      </div>
      {props.contacts.length > 0 ? (
        renderContactList
      ) : (
        <h5>No Contact address, please add contact first</h5>
      )}
    </div>
  );
};

export default ContactList;
