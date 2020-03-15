import { useState, useEffect } from 'react'

export const useFormValidation = (initialState, validate, authenticate) => {

    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false);

     useEffect(()=>{
         if(isSubmitting) {
             const noErrors = Object.keys(errors).length===0;
             if(noErrors){
                 authenticate();
                 setValues(initialState)
                 setSubmitting(false)
             } else {
                 setSubmitting(false)
             }
         }
     },[isSubmitting])


    const handleChange = (event) => {
        event.persist();
        setValues(previousValues => ({
            ...previousValues,
            [event.target.name]: event.target.value
        }))
    }
    const handleBlur = () => {
        const validationErrors = validate(values)
        setErrors(validationErrors)
    }
    const handleSubmit = (event) => {
        console.log("CLICKED")
      event.preventDefault();
      const validationErrors = validate(values)
      setErrors(() => validationErrors)
      setSubmitting(true)
    console.log("useFormEror:", errors)

    }
 return { handleChange, handleSubmit, handleBlur, errors, isSubmitting, values }
}