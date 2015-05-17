import Joi from "joi";
import angular from "angular";

export default function Lion(schema) {

    //Test JOI Schema
    var schema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
        access_token: [Joi.string(), Joi.number()],
        birthyear: Joi.number().integer().min(1900).max(2013),
        email: Joi.string().email()
    }).with('username', 'birthyear').without('password', 'access_token');

    return angular.module(schema.moduleName, []).value('a', 123)
}
