"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactFinalForm = require("react-final-form");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/*
Copyright 2019 Iguazio Systems Ltd.

Licensed under the Apache License, Version 2.0 (the "License") with
an addition restriction as set forth herein. You may not use this
file except in compliance with the License. You may obtain a copy of
the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing
permissions and limitations under the License.

In addition, you may not use the software for any purposes that are
illegal under applicable law, and the grant of the foregoing license
under the Apache 2.0 license is conditioned upon your compliance with
such restriction.
*/

const OnChangeState = _ref => {
  let {
    inputValue,
    handler
  } = _ref;
  const [previousValue, setPreviousValue] = (0, _react.useState)(inputValue);
  (0, _react.useEffect)(() => {
    if (inputValue !== previousValue) {
      setPreviousValue(inputValue);
      handler(inputValue, previousValue);
    }
  }, [handler, inputValue, previousValue]);
  return null;
};
const FormOnChange = _ref2 => {
  let {
    handler,
    name
  } = _ref2;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFinalForm.Field, {
    name: name,
    subscription: {
      value: true
    },
    allowNull: true,
    render: props => /*#__PURE__*/(0, _jsxRuntime.jsx)(OnChangeState, {
      inputValue: props.input.value,
      handler: handler
    })
  });
};
FormOnChange.propTypes = {
  handler: _propTypes.default.func.isRequired,
  name: _propTypes.default.string.isRequired
};
var _default = exports.default = FormOnChange;