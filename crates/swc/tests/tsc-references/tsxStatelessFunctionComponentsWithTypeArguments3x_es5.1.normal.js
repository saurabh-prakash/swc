function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// @filename: file.tsx
// @jsx: preserve
// @module: amd
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
var React = require('react');
// OK
function Baz(arg1, arg2) {
    var a0 = /*#__PURE__*/ React.createElement(OverloadComponent, _extends({}, arg1, {
        a: "hello",
        "ignore-prop": true
    }));
    var a1 = /*#__PURE__*/ React.createElement(OverloadComponent, _extends({}, arg2, {
        "ignore-pro": "hello world"
    }));
    var a2 = /*#__PURE__*/ React.createElement(OverloadComponent, _extends({}, arg2));
    var a3 = /*#__PURE__*/ React.createElement(OverloadComponent, _extends({}, arg1, {
        "ignore-prop": true
    }));
    var a4 = /*#__PURE__*/ React.createElement(OverloadComponent, null);
    var a5 = /*#__PURE__*/ React.createElement(OverloadComponent, _extends({}, arg2, {
        "ignore-prop": "hello"
    }, arg1));
    var a6 = /*#__PURE__*/ React.createElement(OverloadComponent, _extends({}, arg2, {
        "ignore-prop": true
    }, arg1));
}
function createLink(func) {
    var o = /*#__PURE__*/ React.createElement(Link, {
        func: func
    });
    var o1 = /*#__PURE__*/ React.createElement(Link, {
        func: function(a, b) {}
    });
}
export { };
