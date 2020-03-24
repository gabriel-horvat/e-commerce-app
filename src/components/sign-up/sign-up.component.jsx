import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password, displayName, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      // displayName is an obj
      // after successful creation of user, reset state to initialState
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
      console.log("new user successfully created");
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = async event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });

    console.log("handleChange", value, name);
  };

  render() {
    const { email, password, displayName, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email account</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            onChange={this.handleChange}
            type="text"
            label="display name"
            value={displayName}
            required
          />

          <FormInput
            name="email"
            onChange={this.handleChange}
            type="email"
            label="email"
            value={email}
            required
          />

          <FormInput
            name="password"
            onChange={this.handleChange}
            type="password"
            label="password"
            value={password}
            required
          />

          <FormInput
            name="confirmPassword"
            onChange={this.handleChange}
            type="password"
            label="confirm password"
            value={confirmPassword}
            required
          />

          <CustomButton type="submit"> Sign up </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
