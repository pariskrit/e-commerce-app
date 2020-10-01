import React, { Component } from "react";
import "./form.css";
import Input from "../UI/Input";
import { connect } from "react-redux";

import * as actionMethods from "../store/actions/authCreater";

class Form extends Component {
  state = {
    signupForm: {
      firstName: {
        elementtype: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },

      lastName: {
        elementtype: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },

      email: {
        elementtype: "input",
        elementConfig: {
          type: "email",
          placeholder: "email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },

      password: {
        elementtype: "input",
        elementConfig: {
          type: "password",
          placeholder: "password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          maxLength: 12,
        },
        valid: false,
        touched: false,
      },
      rePassword: {
        elementtype: "input",
        elementConfig: {
          type: "password",
          placeholder: "reType-password",
        },
        value: "",
        validation: {
          required: true,
          isPasswordEqual: true,
          minLength: 6,
          maxLength: 12,
        },
        valid: false,
        touched: false,
      },
    },
    signInForm: {
      email: {
        elementtype: "input",
        elementConfig: {
          type: "email",
          placeholder: "email",
        },
        value: "",
      },

      password: {
        elementtype: "input",
        elementConfig: {
          type: "password",
          placeholder: "password",
        },
        value: "",
      },
    },
    formIsValid: false,
    showSignIn: true,
  };

  checkValidity = (value, rules) => {
    let isValid = false;

    if (rules.required) {
      isValid = value.trim("") !== "";
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.isEmail) {
      isValid =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value
        ) && isValid;
    }

    if (rules.isPasswordEqual) {
      isValid = this.state.signupForm.password.value === value && isValid;
    }

    return isValid;
  };

  onSignUpFormChange = (event, elementName) => {
    event.preventDefault();
    const newForm = { ...this.state.signupForm };
    const updateForm = { ...newForm[elementName] };
    updateForm.value = event.target.value;
    updateForm.valid = this.checkValidity(
      updateForm.value,
      updateForm.validation
    );
    updateForm.touched = true;
    newForm[elementName] = updateForm;

    let formValid = true;
    for (let formData in newForm) {
      formValid = newForm[formData].valid && formValid;
    }

    this.setState({ signupForm: newForm, formIsValid: formValid });
  };

  onSignInFormChange = (event, elementName) => {
    event.preventDefault();
    const newForm = { ...this.state.signInForm };
    const updateForm = { ...newForm[elementName] };
    updateForm.value = event.target.value;

    newForm[elementName] = updateForm;

    this.setState({ signInForm: newForm });
  };

  signUpData = (event) => {
    event.preventDefault();

    const formData = {};

    for (let key in this.state.signupForm) {
      formData[key] = this.state.signupForm[key].value;
    }

    if (this.state.formIsValid) {
      const email = formData.email;
      const password = formData.password;

      this.props.signUp(email, password);
      console.log("SuccessFully registered!!");
    } else {
      alert("PLease Fil up the form!!");
    }
  };

  signInData = (event) => {
    event.preventDefault();

    const formData = {};

    for (let key in this.state.signInForm) {
      formData[key] = this.state.signInForm[key].value;
    }
    this.props.signIn(formData, this.props.wasInCheckOut);
  };

  switchButton = () => {
    this.setState((prevState) => ({ showSignIn: !prevState.showSignIn }));
  };

  render() {
    let inputSignUpFormElements = [];
    let inputSignInFormElements = [];

    for (let key in this.state.signupForm) {
      inputSignUpFormElements.push({
        id: key,
        config: this.state.signupForm[key],
      });
    }

    for (let key in this.state.signInForm) {
      inputSignInFormElements.push({
        id: key,
        config: this.state.signInForm[key],
      });
    }

    return !this.state.showSignIn ? (
      <div className="form">
        <h2>Register</h2>

        <form onSubmit={this.signUpData}>
          {inputSignUpFormElements.map((element) => {
            return (
              <Input
                key={element.id}
                elementType={element.config.elementtype}
                elementConfig={element.config.elementConfig}
                value={element.config.value}
                valueChange={(event) =>
                  this.onSignUpFormChange(event, element.id)
                }
                inValid={!element.config.valid}
                touched={element.config.touched}
              />
            );
          })}
          <button type="submit" className="form__button">
            Register
          </button>
          <button
            type="button"
            className="switchButton"
            onClick={this.switchButton}
          >
            Switch To SignIn
          </button>
        </form>
      </div>
    ) : (
      <div className="form">
        <h2>Sign In</h2>

        <form>
          {inputSignInFormElements.map((element) => {
            return (
              <Input
                key={element.id}
                elementType={element.config.elementtype}
                elementConfig={element.config.elementConfig}
                value={element.config.value}
                valueChange={(event) =>
                  this.onSignInFormChange(event, element.id)
                }
              />
            );
          })}
          <p style={{ color: "red" }}>{this.props.errorMessage}</p>
          <button
            type="submit"
            className="form__button"
            onClick={this.signInData}
          >
            Sign In
          </button>
        </form>
        <button
          type="button"
          className="switchButton"
          onClick={this.switchButton}
        >
          Switch To Register
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.user.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (email, password) =>
      dispatch(actionMethods.signUserUp(email, password)),
    signIn: (user, wasInCheckOut) =>
      dispatch(actionMethods.signUser(user, wasInCheckOut)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
