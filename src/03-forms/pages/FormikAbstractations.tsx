import { 
  Formik, 
  Form, 
} from 'formik';
import * as Yup from 'yup';

import {
  MyCheckbox,
  MyTextInput,
  MySelect
} from '../components'

import '../styles/styles.css';

export default function FormikAbstractations() {
 

  return (
    <div>
      <h1>Formik Abstractations</h1>

      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          terms: false,
          jobtype: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            firstname: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
            lastname: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
            email: Yup.string().email('El correo no tiene un formato válido').required('Requerido'),
            terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
            jobtype: Yup.string().notOneOf(['it-junior'], 'Esta opción no es permitida').required('Requerido')

          }
          )}
      >
        {(formik) => (
          <Form
            noValidate
          >
            <MyTextInput
              label="First Name"
              name="firstname"
              placeholder="Dario"
            /> 
            
            <MyTextInput
              label="Last Name"
              name="lastname"
              placeholder="Barboza"
            />  

            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="example@email.com"
            />  

            <MySelect
              label="Job Type"
              name="jobtype"
            >
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </MySelect>
            
            <MyCheckbox
              label="Terms and Conditions"
              name="terms"
            />

            <button
              type="submit"
            >Submit</button>

          </Form>
        )
        }
      </Formik>

    </div>
  )
}

