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
      <input type="submit" value="Submit" />
    </form>
  );
  
  }