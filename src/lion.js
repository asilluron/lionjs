export default function Lion(schema) {
    var _self = this;
    var parentModule;

    if (!schema.form && !schema.model) {
        throw new Error("Schema must contain either a `form` or `model` property at the top level");
    }

    parentModule = angular.module(schema.moduleName, []);

    Object.keys(schema.form).forEach((field) => {
        formBuilder(field, schema.form[field], parentModule);
    });

    return parentModule;
}
