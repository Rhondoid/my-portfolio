import React from 'react';
// import { Form, Field, ErrorMessage } from 'react';
import { useForm } from "react-hook-form";

export default function Contact() {
  return (
    <form >
      <label>
        Name:
        <input type="text"  />
      </label>
      <br></br>
      <label>
        email:
        <input type="text"  />
      </label>
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