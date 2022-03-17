import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
}

export default function FormikBasicPage() {
  
  const validate = ({firstname, lastname, email}: FormValues) => {
    const errors: FormikErrors<FormValues> = {}; 

    if (!firstname) {
      errors.firstname = 'Required';
    } else if (firstname.length >= 15) {
      errors.firstname = 'Must be 15 characters or less';
    }

    if (!lastname) {
      errors.lastname = 'Required';
    } else if (lastname.length >= 10) {
      errors.lastname = 'Must be 15 characters or less';
    }

    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  }

  const {handleChange, values, handleSubmit, handleBlur, errors, touched} = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate
  })

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
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
          name="firstname"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstname}
        /> 
        {(errors.firstname && touched.firstname) && <span>{ errors.firstname }</span>}

        <label
          htmlFor="lastname"
        >Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastname}
        />
        {(errors.lastname && touched.lastname) && <span>{ errors.lastname }</span>}

        <label
          htmlFor="email"
        >Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {(errors.email && touched.email) && <span>{ errors.email }</span>}

        <button
          type="submit"
        >Submit</button>

      </form>
    </div>
  )
}

