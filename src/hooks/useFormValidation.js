import { useState, useEffect } from 'react'
import firebase from '../firebase'

export const useFormValidation = (initialState, validate, authenticate) => {

    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false);

     useEffect(()=>{
         if(isSubmitting) {
             const user = {
                 name:firebase.auth().currentUser.displayName,
                 id: firebase.auth().currentUser.uid
             }
             console.log("USER", user)
             setValues(prevVal => ({...prevVal, user}))
             const noErrors = Object.keys(errors).length===0;
             if(noErrors){
                 authenticate(values, errors);
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
      event.preventDefault();
      const validationErrors = validate(values)
      setErrors(() => validationErrors)
      setSubmitting(true)

    }
 return { handleChange, handleSubmit, handleBlur, errors, isSubmitting, values }
}