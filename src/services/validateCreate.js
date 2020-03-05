export function validateCreate(values) {
    let errors = {}
    //Description errors
    if(!values.description) {
        errors.description = "Question required!"
    } else if(values.description.length < 5) {
        errors.question = "At leeast 5 chars"
    }
    //Title errors
    if(!values.title) {
        errors.title = "title required"
    } else if(values.title.length < 5) {
        errors.title = "Za krótki tytuø "
    }
    return errors;
}