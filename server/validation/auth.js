import joi from 'joi';

export const ValidateSignUp = (userData) => {

    // creating schema
    const Schema = joi.object({
        fullName: joi.string().required().min(5),
        email: joi.string().email().required(),
        paassword: joi.string(),
        address: joi.array().items(joi.object({ details: joi.string(), for: joi.string() })),
        phoneNumber: joi.number().min(10).max(10),
    });

    return Schema.validateAsync(userData);
};

export const ValidateSignIn = (userData) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        paassword: joi.string().min(5).required(),
    });

    return Schema.validateAsync(userData);
};