export const validate = (data) => {

    let isValid = {
        isValid: true,
        errors: []
    };

    if (!data.email || !data.email.includes('@')) {
        isValid.isValid = false;
        isValid.errors.push('Email is not valid');
    }

    if (!data.name || data.name.length < 3) {
        isValid.isValid = false;
        isValid.errors.push('Name is too short');
    }

    if (!data.message || data.message.length < 10) {
        isValid.isValid = false;
        isValid.errors.push('Message is too short');
    }

    return isValid;
}