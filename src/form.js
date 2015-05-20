function formBuilder(fieldName, fieldSchema, angularModule) {
    //TODO Move this to an external JSON file

    /** make this dynamic
    var script = document.createElement('script');
    script.type = "text/ng-template";
   // script1.id = "error-messages";
    script.innerHTML = '<div ng-message="required">This field is required</div><div ng-message="min">This field is too short</div>';

    document.getElementsByTagName('head')[0].appendChild(script1);

    **/

    angularModule.directive(fieldName + "Validator", ($q) => {

        var directiveDefinitionObject = {
            priority: 0,
            transclude: false,
            restrict: 'A',
            templateNamespace: 'html',
            scope: false,
            require: 'ngModel',
            controller: function ($scope, $element, $attrs, $transclude) {},
            controllerAs: 'stringIdentifier',
            bindToController: false,
            link: function postLink(scope, elem, attrs, NgModelCtrl) {
                var schema = Joi[fieldSchema.type]();
                fieldSchema.validators.forEach((validator) => {

                    var validatorArg = null;

                    if (typeof validator === "object") {
                        validatorArg = validator[Object.keys(validator)[0]];
                        validator = Object.keys(validator)[0];
                    }

                    if (typeof schema[validator] === "function") {
                        NgModelCtrl.$asyncValidators[validator] = (modelValue, viewValue) => {
                            var microSchema;
                            if (validatorArg) {
                                microSchema = schema[validator](validatorArg);
                            } else {
                                microSchema = schema[validator]();
                            }

                            var value = modelValue || viewValue;
                            var validationDeferal = $q.defer();

                            Joi.validate(value, microSchema, (err, val) => {
                                if (err) {
                                    validationDeferal.reject(err);
                                } else {
                                    validationDeferal.resolve(true);
                                }
                            });

                            return validationDeferal.promise;
                        }
                    } else {

                    }
                });
            }
        };
        return directiveDefinitionObject;
    });
}
