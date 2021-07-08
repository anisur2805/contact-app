import React, { Component } from "react";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    address: "",
  };

  // Handle Form Submit
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, address } = this.state;
    if (name === "" || email === "" || address === "") {
      alert("Please fill the form");
      return;
    }

    this.props.addContactHandler(this.state); // Q2
    this.setState({ name: "", email: "", address: "" });
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
        <h3> Add Contact</h3>
        <form className="ui form" onSubmit={this.handleSubmit}>
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
            Submit
          </button>
        </form>
      </div>
    );
  }
}
