import React, { useState } from "react";
import classes from "./Input.module.css";
import Select from "react-select";

const Input = () => {
  //create state :-here we asign all field state
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(""); //for checkbox

  //email validation regular exp.
  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  //passworf validation regular exp.
  let regPassword =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
   
    let regName =/^[A-Z ]{3,15}$/;
 

  const btnHandler = () => {
    alert("Submit buttion is click!");
  };

  const FormValidation = () => {
    let error = {};

    if  (firstName === "") {
      error.firstName = "Please give correct first Name";
    }
  
    if  (lastName === "") {
      error.lastName = "Please give correct first Name";
    }

    if (regEmail.test(email) === false) {
      error.email = "Please give correct Email";
    }
    if (agree === "") {
      error.agree = "If agree please click the check box";
    }

    if (regPassword.test(password) === false) {
      error.password = "Make sure Correct Password";
    }

    if (confirmPassword === "") {
      error.confirmPassword = "Give the Same password";
    }

    if (gender === "") {
      error.gender = "Choose your correct gender ";
    }

    if (country === "") {
      error.country = "Choose your Country Name ";
    }


    setError(error);
  };

  const options = [
    { value: "India", label: "India" },
    { value: "Japan", label: "Japan" },
    { value: "Canada", label: "Canada" },
    { value: "USA", label: "USA" },
    { value: "UAE", label: "UAE" },
  ];

  return (
    <div className={classes.form_field_div}>
      <span className={classes.span_user}> USER FORM</span>
      <div className={classes.form_start}>
        <input
          type="text"
          placeholder="First Name"
          className={classes.input_area}
          name="firstName"
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
        />
        <p className={classes.error_msg}>{error.firstName}</p>

        <input
          type="text"
          placeholder="Last Name"
          className={classes.input_area}
          name="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <p className={classes.error_msg}>{error.lastName}</p>

        <input
          type="text"
          placeholder="Email"
          className={classes.input_area}
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <p className={classes.error_msg}>{error.email}</p>

        <input
          type="text"
          placeholder="Password"
          className={classes.input_area}
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <p className={classes.error_msg}>{error.password}</p>
        <input
          type="text"
          placeholder="Re-Enter Pasword"
          className={classes.input_area}
          name="confirmPassword"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <p className={classes.error_msg}>{error.confirmPassword}</p>

        {/* <select className={classes.input_area_select}>
          <option>Choose Your Country</option>
          <option
            name="country"
            onChange={(e)=>{
                setCountry(e.target.value)
            }}
          >
            India
          </option>
          <option
            name="country"
            value="India"
            onChange={(e)=>{
                setCountry(e.target.value)
            }}
          >
            USA
          </option>
          <option
            name="country"
            value="USA"
            onChange={(e)=>{
                setCountry(e.target.value)
            }}
          >
            Canada
          </option>
          <option
            name="country"
            value="Canada"
            onChange={(e)=>{
                setCountry(e.target.value)
            }}
          >
            Japan
          </option>
          <option
            name="country"
            value="Japan"
            onChange={(e)=>{
                setCountry(e.target.value)
            }}
          >
            UAE
          </option>
        </select> */}

        <Select options={options} className={classes.input_area_select}   onChange={(e)=>{
                setCountry(e.target.value)
            }}/>

        <p className={classes.error_msg}>{error.country}</p>

        <div className={classes.input_area_select}>
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          Female
          <input
            type="radio"
            value="Other"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          Other
        </div>
        <p className={classes.error_msg}>{error.gender}</p>

        <div>
          <input
             type="checkbox"
            value="agree"
            name="agree"
            onChange={(e) => {
              setAgree(e.target.value);
            }}
          />

          <span> I agree all terms and conditions</span>
        </div>
        <p className={classes.error_msg}>{error.agree}</p>
        <button
          className={classes.input_area_submit}
          type="submit"
          onClick={() => {
            FormValidation();
            btnHandler();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Input;
