import React, { useState } from "react";
import "./Contacts.scss";
import logo from "../../img/logo-2.png";
import { HookForm } from "../HookForm/HookForm";

const Contacts = () => {
  return (
    <div className="container">
      <h1 className="text-center" style={{marginTop:'100px'}}>Contact</h1>
        <HookForm ></HookForm>
    </div>
  );
};

export default Contacts;
