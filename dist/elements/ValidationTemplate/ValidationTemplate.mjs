import { jsxDEV as e } from "react/jsx-dev-runtime";
import "react";
import i from "prop-types";
import n from "classnames";
import r from "../../images/success_done.svg.mjs";
import t from "../../images/close.svg.mjs";
/* empty css                         */
const s = ({ valid: a, validationMessage: o }) => {
  const l = n("validation-option", a && "text-muted");
  return /* @__PURE__ */ e("li", { className: l, children: [
    /* @__PURE__ */ e("i", { className: "validation-option__icon", children: a ? /* @__PURE__ */ e(r, { className: "validation-option__icon_valid" }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/ValidationTemplate/ValidationTemplate.jsx",
      lineNumber: 33,
      columnNumber: 11
    }, void 0) : /* @__PURE__ */ e(t, { className: "validation-option__icon_invalid" }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/ValidationTemplate/ValidationTemplate.jsx",
      lineNumber: 35,
      columnNumber: 11
    }, void 0) }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/ValidationTemplate/ValidationTemplate.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ e("span", { children: o }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/ValidationTemplate/ValidationTemplate.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/ValidationTemplate/ValidationTemplate.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, void 0);
};
s.propTypes = {
  valid: i.bool.isRequired,
  validationMessage: i.string.isRequired
};
export {
  s as default
};
//# sourceMappingURL=ValidationTemplate.mjs.map
