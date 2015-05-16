'use strict';

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.lionjs = factory();
    }
})(undefined, function () {
    //`models` is a json file of model configs
    function Lion(models) {}
    return Lion;
});
//# sourceMappingURL=lion.js.map