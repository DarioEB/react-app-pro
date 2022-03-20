import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Es campo es queredito');
    }
    if (rule.type === 'minlenght') {
      schema = schema.min((rule as any).value || 1, `El campo debe tener al menos ${(rule as any).value || 1} caracteres.`);
    }
    if ((rule as any).email === 'email') {
      schema = schema.email(`Revisa el formato del email`);
    }
    // ..otras reglas
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export default function DynamicFormPage() {


  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {

        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    key={name}
                    type={(type as any)}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                )
              } else if (type === 'select') {
                return (
                  <MySelect
                    key={name}
                    label={label}
                    name={name}
                  >
                    <option value="">Select an option</option>
                    {
                      options?.map(({id, label, value}) => (
                        <option
                          key={id}
                          value={id}
                        >{label}</option>
                      ))
                    }
                  </MySelect>
                )
              }

              throw new Error(`Type: ${type} no es soportado`)
            })}

            <button
              type="submit"
            >Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}