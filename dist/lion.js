(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module', 'joi'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module, require('joi'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod, global.Joi);
        global.lion = mod.exports;
    }
})(this, function (exports, module, _joi) {
    'use strict';

    module.exports = Lion;

    function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

    var _Joi = _interopRequire(_joi);

    function Lion(models) {

        //Test JOI Schema
        var schema = _Joi.object().keys({
            username: _Joi.string().alphanum().min(3).max(30).required(),
            password: _Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
            access_token: [_Joi.string(), _Joi.number()],
            birthyear: _Joi.number().integer().min(1900).max(2013),
            email: _Joi.string().email()
        })['with']('username', 'birthyear').without('password', 'access_token');

        return 'test';
    }
});
//# sourceMappingURL=lion.js.map