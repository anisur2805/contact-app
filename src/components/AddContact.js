import React, { Component } from "react";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  handleSubmit = (e, addContactHandler) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Please fill the form");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    console.log(this.state);
  };
  render() {
    const { name, email } = this.state;
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
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
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
