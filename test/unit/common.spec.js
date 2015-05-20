var Lion = require("../../dist/lion");

describe("Common Behavior", function () {
    describe("well formed schema", function () {
        var testSchema = {
            moduleName: "moduleName",
            form: {
                person: {
                    name: ["string", "alphanum", {
                        min: 3
                    }, {
                        max: 30
                    }, "required"]
                }
            },
            model: {
                person: {
                    name: ["string", "alphanum", {
                        min: 3
                    }, {
                        max: 30
                    }, "required"]
                },
                car: {
                    name: ["string", "alphanum", {
                        min: 3
                    }, {
                        max: 30
                    }, "required"]
                }
            }
        };

        describe("Angular Modules", function () {
            var lionModule;

            beforeEach(function () {
                lionModule = Lion(testSchema);
            });

            it("will return an angular module", function () {
                var testModule = angular.module('a', []).value('a', 123);

                expect(Object.keys(lionModule)).toEqual(Object.keys(testModule));
            });

            it("names the angular module using moduleName", function () {
                expect(lionModule.name).toEqual(testSchema.moduleName);
            });
        });

    });

    describe("badly formed schema", function () {
        var testSchema, lionModule;
        describe("missing form and model field", function () {
            beforeEach(function () {
                testSchema = {
                    moduleName: "textForms"
                };

            });

            it("will throw an error if form and schema are non-existent", function () {
                var errorProneFunc = function () {
                    Lion(testSchema);
                }

                expect(errorProneFunc).toThrow(new Error("Schema must contain either a `form` or `model` property at the top level"));

            });

        });
    });


});
