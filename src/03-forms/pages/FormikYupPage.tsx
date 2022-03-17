import {  useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css'; 

export default function FormikYupPage() {
   
  const { 
    handleSubmit, 
    errors,
    touched,
    getFieldProps
  } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstname: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
      lastname: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
      email: Yup.string().email('El correo no tiene un formato válido')
    })
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form
        noValidate
        onSubmit={handleSubmit}
      > 
        <label
          htmlFor="firstname"
        >First Name</label>
        <input
          type="text"
          id="firstname" 
          {...getFieldProps('firstname')}
        /> 
        {(errors.firstname && touched.firstname) && <span>{ errors.firstname }</span>}

        <label
          htmlFor="lastname"
        >Last Name</label>
        <input
          type="text"
          id="lastname"
          {...getFieldProps('lastname')}
        />
        {(errors.lastname && touched.lastname) && <span>{ errors.lastname }</span>}

        <label
          htmlFor="email"
        >Email Address</label>
        <input
          type="email"
          id="email"
          {...getFieldProps('email')}
        />
        {(errors.email && touched.email) && <span>{ errors.email }</span>}

        <button
          type="submit"
        >Submit</button>

      </form>
    </div>
  )
}

