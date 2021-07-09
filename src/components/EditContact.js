import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EditContact extends Component {
  constructor(props) {
    super(props);

    const { id, name, email, address } = this.props.location.state.contact;
    // console.log(this.props)
    this.state = {
      id,
      name,
      email,
      address,
    };
  }

  // Handle Form Submit
  updateContact = (e) => {
    e.preventDefault();
    const { name, email, address } = this.state;
    if (name === "" || email === "" || address === "") {
      alert("Please fill the form");
      return;
    }

    this.props.editContactHandler(this.state); // Q2
    this.setState({ name: "", email: "", address: "" });
    this.props.history.push("/");
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, email, address } = this.state;
    return (
      <div className="ui main">
        <h2> Edit Contact</h2>
        <form className="ui form" onSubmit={this.updateContact}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div className="field">
            <label>Address</label>
            <textarea
              name="address"
              placeholder="Address"
              value={address}
              onChange={this.changeHandler}
            />
          </div>
          <button className="ui button blue" type="submit">
            Update Contact
          </button>

          <Link to="/" className="ui button warning" type="submit">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}
