import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../img/UserLogo.png";
import { useRef } from "react";
import "./HookForm.scss";
import emailjs from "emailjs-com";
import swal from "sweetalert";


export const HookForm = () => {
  const  formData = {
    from_name :'',
    from_username:'',
    email_id:'',
    message:''
  }
  const[dataForm,setDataForm]= useState(formData)

  const form = useRef();

  const handleChange=(e)=>{
   setDataForm({...dataForm,
   [e.target.name] : e.target.value}
  )
  console.log(dataForm)
  }
  const sendEmail = (e) => {
    e.preventDefault();
    
    if(!dataForm.from_name || !dataForm.from_username || !dataForm.email_id|| !dataForm.message){
     alert('Porfavor complete todo los campos ')
    } else {
       emailjs
      .sendForm(
        "service_v65oc1q",
        "template_uqshzcp",
        form.current,
        "PzpG3CtC2nyY_tksV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      swal({
        icon: "success",
        button: "Aceptar!",
      });
     
      setDataForm(formData)
    }
   
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md">
          <div style={{ margin: "0 auto", width: "200px", marginTop:'30px' }}>
            <img src={logo} className="w-100" alt="" />
          </div>
        </div>
        <div className="col-md" style={{margin:'0 auto',width:'500px',marginTop:'30px',marginBottom:'50px'}}>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" className="input-Form" name="from_name" value={dataForm.from_name} onChange={handleChange} />
            <label>Surname</label>
            <input type="text" className="input-Form" name="from_username" value={dataForm.from_username}  onChange={handleChange}  />
            <label>Email</label>
            <input type="email" className="input-Form" name="email_id" value={dataForm.email_id}  onChange={handleChange}  />
            <label>Message</label>
            <textarea name="message" className="message " value={dataForm.message}  onChange={handleChange}  />
            <input
              type="submit"
              className="input-Form btn btn-primary mb-2"
              value="Sumbit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
