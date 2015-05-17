(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "module", "joi", "angular"], factory);
    } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
        factory(exports, module, require("joi"), require("angular"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.Joi, global.angular);
        global.lion = mod.exports;
    }
})(this, function (exports, module, _joi, _angular) {
    "use strict";

    module.exports = Lion;

    function _interopRequire(obj) { return obj && obj.__esModule ? obj["default"] : obj; }

    var _Joi = _interopRequire(_joi);

    var _angular2 = _interopRequire(_angular);

    function Lion(schema) {

        //Test JOI Schema
        var schema = _Joi.object().keys({
            username: _Joi.string().alphanum().min(3).max(30).required(),
            password: _Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
            access_token: [_Joi.string(), _Joi.number()],
            birthyear: _Joi.number().integer().min(1900).max(2013),
            email: _Joi.string().email()
        })["with"]("username", "birthyear").without("password", "access_token");

        return _angular2.module(schema.moduleName, []).value("a", 123);
    }
});
//# sourceMappingURL=lion.js.map