import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export default function RegisterFormikPage() {



  return (
    <div>



      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            name: Yup.string().min(2, 'El nombre de tener al menos 3 caracteres').max(15, 'El nombre no debe más de 15 caracteres').required('Requerido'),
            email: Yup.string().email('Revise el formato del correo').required('Requerido'),
            password1: Yup.string().required('Requerido').min(6, 'El password debe tener al menos 6 caracteres'),
            password2: Yup.string().oneOf([Yup.ref('password1'), 'La cotraseña no son iguales']).required('Requerido')
          })
        }
      >
        {({handleReset}) => (
          <Form>

            <MyTextInput
              label="Nombre"
              name="name"
              placeholder='Ej: Dario Eliseo'
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder='Ej: darioeliseo@gmail.com'
            />

            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder='********'
            />

            <MyTextInput
              label="Repeat Password"
              name="password2"
              type="password"
              placeholder='********'
            />

            <button
              type="submit"
            >Create</button>
            <button
              type="button"
            onClick={ handleReset }
            >Reset Form</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}