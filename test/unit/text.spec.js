var Lion = require("../../dist/lion");

describe("Text Field Directive", function () {
    describe("min schema", function () {
        var testSchema, lionModule, $compile, $rootScope;

        beforeEach(function () {
            testSchema = {
                moduleName: "textForms",
                form: {
                    firstName: {
                        type: "string",
                        validators: ["alphanum", {
                            min: 3
                        }, {
                            max: 30
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
        }));

        it('Replaces the element with the appropriate content', function () {
            $rootScope.name = "test";
            // Compile a piece of HTML containing the directive
            var element = $compile("<field-first-name ng-model='name'></field-first-name>")($rootScope);

            $rootScope.$digest();

           // expect(element.html()).toContain("Name");
        });

        it("will return a directive for each key under 'form' in the schema", function () {



        });

        it("Directive will float a min length error, if input is less than specified", function () {

        });
    });
});
