import React, { useState } from "react";
import classes from "./Input.module.css";
import Select from "react-select";


const Input = () => {
 
  const [error, setError] = useState({});

  const[get,setGet]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    country:"",
    gender:"",
    agree:"",
  })
// this is array distructring
  const {firstName,lastName,email,password,confirmPassword,country,gender,agree}=get


  const InputEevent = (e)=>{
    setGet({...get,[e.target.name]:e.target.value})
  }

  //email validation regular exp.
  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  //passworf validation regular exp.
  let regPassword =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  const btnHandler = () => {
    alert("Submit buttion is click!");
  };

  const FormValidation = () => {
    let error = {};

    if (firstName === "") {
      error.firstName= "Please give correct first Name";
    }

    if (lastName === "") {
      error.lastName = "Please give correct last Name";
    }
    if (password !== confirmPassword) {
      error.match = "password does not match ";
    }

    if (regEmail.test(email) === false) {
      error.email = "Please give correct Email";
    }
    if (agree === "") {
      error.agree = "If agree please click the check box";
    }

    if (regPassword.test(password) === false) {
      error.password = "Give the  Correct Password";
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
          onChange={InputEevent}
          value={get.firstName}
        />
        <p className={classes.error_msg}>{error.firstName}</p>

        <input
          type="text"
          placeholder="Last Name"
          className={classes.input_area}
          name="lastName"
          onChange={InputEevent}
          value={get.lastName}
        />
        <p className={classes.error_msg}>{error.lastName}</p>

        <input
          type="text"
          placeholder="Email"
          className={classes.input_area}
          name="email"

          onChange={InputEevent}
          value={get.email}
        />

        <p className={classes.error_msg}>{error.email}</p>

        <input
          type="Password"
          placeholder="Password"
          className={classes.input_area}
          name="password"
          // onChange={(e) => {
          //   setPassword(e.target.value);
          // }}
          onChange={InputEevent}
          value={get.password}
        />

        <p className={classes.error_msg}>{error.password}</p>
        <input
          type="Password"
          placeholder="Re-Enter Pasword"
          className={classes.input_area}
          name="confirmPassword"
          // onChange={(e) => {
          //   setConfirmPassword(e.target.value);
          // }}
          onChange={InputEevent}
          value={get.confirmPassword}
        />
        <p className={classes.error_msg}>{error.match}</p>

        <Select
         name="country"
          options={options}
          className={classes.input_area_select}
          onChange={(e) => {
            setGet({...get,country:e});
          }}
          // onChange={InputEevent}
          value={get.country}
        />

        <p className={classes.error_msg}>{error.country}</p>

        <div className={classes.input_area_select}>
          <input
            type="radio"
            value="Male"
            name="gender"
            // onChange={(e) => {
            //   setGender(e.target.value);
            // }}
            onChange={InputEevent}
          value={get.gender}
          />
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            // onChange={(e) => {
            //   setGender(e.target.value);
            // }}
            onChange={InputEevent}
            value={get.gender}
          />
          Female
          <input
            type="radio"
            value="Other"
            name="gender"
            // onChange={(e) => {
            //   setGender(e.target.value);
            // }}
            onChange={InputEevent}
            value={get.gender}
          />
          Other
        </div>
        <p className={classes.error_msg}>{error.gender}</p>

        <div>
          <input
            type="checkbox"
            value="agree"
            name="agree"
            // onChange={(e) => {
            //   setAgree(e.target.value);
            // }}
            onChange={InputEevent}
            value={get.agree}
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
