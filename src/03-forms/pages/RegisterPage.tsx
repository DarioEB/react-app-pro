import { ChangeEvent, FormEvent, useState } from 'react';
import useForm from '../hooks/useForm';
import '../styles/styles.css';

export default function RegisterPage() {

  const {
    formdata, onChange, resetForm, isValidEmail,
    name, email, password1, password2
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  }); 

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form 
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && (<span>Este campo es necesario</span>)}
        
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && (<span>Este no es válido</span>)}
        
        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && (<span>Este campo es necesario</span>)}
        {(password1.trim().length < 6 && password1.trim().length > 0) && (<span>La contraseña debe tener al menos 6 caracteres</span>)}

        <input
          type="password"
          placeholder="Repeat password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && (<span>Este campo es necesario</span>)}
        {(password2.trim().length > 0 && password1 !== password2) && (<span>Las contraseñas deben de ser iguales</span>)}

        <button
          type="submit"
        >Create</button>
        <button
          type="button"
          onClick={resetForm}
        >Reset Form</button>
      </form>
    </div>
  );
}