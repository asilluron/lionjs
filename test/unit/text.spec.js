var Lion = require("../../dist/lion");

describe("Text Field Directive", function () {
    describe("basic schema", function () {
        var testSchema, lionModule, $compile, $rootScope, element, form;

        beforeEach(function () {
            testSchema = {
                moduleName: "textForms",
                form: {
                    firstName: {
                        type: "string",
                        validators: ["alphanum", {
                            min: 3
                        }, {
                            max: 10
                        }, "required"]
                    }
                }
            };

            lionModule = Lion(testSchema);

        });

        beforeEach(angular.mock.module('textForms'));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $rootScope.name = "";
            // Compile a piece of HTML containing the directive
            var element = $compile("<form name='form'><input type='text' name='firstName' first-name-validator ng-model='name'></form>")($rootScope);

            $rootScope.$digest();
            form = $rootScope.form;
        }));

        describe("min validator", function () {
            it("will fail if min is too low", function () {
                form.firstName.$setViewValue("AA");

                $rootScope.$digest();

                expect(form.firstName.$error.min).toBe(true);
            });


            it("will succeed if min is high enough", function () {
                form.firstName.$setViewValue("AAA");

                $rootScope.$digest();

                expect(typeof form.firstName.$error.min).toBe("undefined");
            });

        });

        describe("alphanum", function () {
            it("will fail if there are non-alpha characters", function () {
                form.firstName.$setViewValue("AA!");

                $rootScope.$digest();

                expect(form.firstName.$error.alphanum).toBe(true);
            });

            it("will succeed if there are only alphanum characters", function () {
                form.firstName.$setViewValue("AAB234");

                $rootScope.$digest();

                expect(typeof form.firstName.$error.alphanum).toBe("undefined");
            });
        });

        describe("max validator", function () {
            it("will fail if there are too many characters", function () {
                form.firstName.$setViewValue("AAABBBCCCDE");

                $rootScope.$digest();

                expect(form.firstName.$error.max).toBe(true);
            });
        });

        describe("required validator", function () {
            it("will fail if there is no input", function () {
                form.firstName.$setViewValue("");

                $rootScope.$digest();

                expect(form.firstName.$error.required).toBe(true);
            });
        });
    });
});
