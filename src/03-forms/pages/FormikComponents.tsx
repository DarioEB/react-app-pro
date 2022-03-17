import { 
  Formik,
  Field,
  Form,
  ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export default function FormikComponents() {

  // const {
  //   handleSubmit,
  //   errors,
  //   touched,
  //   getFieldProps
  // } = useFormik({
  //   initialValues: {
  //     firstname: '',
  //     lastname: '',
  //     email: '',
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  //   validationSchema: Yup.object({
  //     firstname: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
  //     lastname: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
  //     email: Yup.string().email('El correo no tiene un formato válido')
  //   })
  // });

  return (
    <div>
      <h1>Formik Components</h1>

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
            email: Yup.string().email('El correo no tiene un formato válido'),
            terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
            jobtype: Yup.string().notOneOf(['it-junior'], 'Esta opción no es permitida').required('Requerido')

          }
          )}
      >
        {(formik) => (
          <Form
            noValidate
          >
            <label
              htmlFor="firstname"
            >First Name</label>
            <Field
              type="text"
              name="firstname"
            />
            <ErrorMessage name="firstname" component={"span"} />

            <label
              htmlFor="lastname"
            >Last Name</label>

            <Field
              type="text"
              name="lastname"
            />
            <ErrorMessage name="lastname" component={"span"} />

            <label
              htmlFor="email"
            >Email Address</label>
            <Field
              type="email"
              name="email"
            />
            <ErrorMessage name="email" component={"span"} />

            <label htmlFor="jobtype">Job Type</label>
            <Field
              name="jobtype"
              as="select"
            >
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </Field>
            <ErrorMessage name="jobtype" component={"span"} />

            <label   >
              <Field
                type="checkbox"
                name="terms"
              />
              Terminos and Conditions
            </label>

            <ErrorMessage name="terms" component={"span"} />

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

