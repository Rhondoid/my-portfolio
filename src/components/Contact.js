
import React, { useState } from "react";
import validator from 'validator'

export default function Contact() {
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  const [nameError, setNameError] = useState('')
  const validateName = (e) => {
    var name = e.target.value
  
    if (!validator.isEmpty(name)) {
      setNameError('Valid Name :)')
    } else {
      setNameError('Enter valid name!')
    }
  }
  return (
    <form >
      <label>
        Name:
        <input type="text" onBlur={(e) => validateName(e)} />
      </label>
      <br></br>
      <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{nameError}</span>
        <br></br>
      <label>
        Email:
        <input type="text" onChange={(e) => validateEmail(e)}></input> 

      </label>
      <br></br>

      <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
        <br></br>
      <label>
        message:
        <input type="text"  />
      </label>
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
  
  }