import { useState } from "react";

export default function useForm(initialForm = {}) {
  const [formState, setFormState] = useState(initialForm);
  //console.log(formState);

  function onInputChange({ target }){
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    formState,
    onInputChange,
  };
}
