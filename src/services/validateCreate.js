export function validateCreate(values) {

    let errors = {};

    //Title errors
    if (!values.title) {
        errors.title = "Title required!"
    } else if (values.title.length < 10) {
        errors.title = "Min 10 characters!"
    }
    //Description errors
    if (!values.description) {
        errors.description = "Question required!"
    } else if (values.description.length < 15) {
        errors.description = "Min 15 characters!"
    }

    return errors;
}