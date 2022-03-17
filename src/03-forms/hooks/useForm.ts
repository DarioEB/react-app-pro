import { ChangeEvent, useState } from "react";


const useForm = <T>(initState: T) => {
  
  const [formdata, setFormData] = useState(initState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const { target:} = e;
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const resetForm = () => {
    setFormData({ ...initState });
  }

  const isValidEmail = ( email: string ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

  return {
    // propertis
    ...formdata,
    formdata,
    // Methods
    onChange,
    resetForm,
    isValidEmail
  }
}

export default useForm;