import { jsxDEV as c } from "react/jsx-dev-runtime";
import b, { useRef as x } from "react";
import e from "prop-types";
import { Field as k } from "react-final-form";
import m from "classnames";
/* empty css                   */
let l = ({
  children: d = null,
  className: i = "",
  highlightLabel: n = !1,
  label: a = "",
  name: o,
  readOnly: t = !1,
  ...r
}) => {
  const h = m(
    "form-field-checkbox",
    t && "form-field-checkbox_readonly",
    i
  ), u = m(n && "highlighted"), f = x(null);
  return /* @__PURE__ */ c(k, { name: o, value: r.value, type: "checkbox", children: ({ input: s }) => /* @__PURE__ */ c("div", { className: h, "data-testid": "form-field-checkbox", children: [
    /* @__PURE__ */ c(
      "input",
      {
        ref: f,
        className: m(s.checked ? "checked" : "unchecked"),
        type: "checkbox",
        "data-testid": o ? `${o}-form-checkbox` : "form-checkbox",
        id: r.value ?? o,
        ...s,
        ...r,
        value: String(s.checked)
      },
      void 0,
      !1,
      {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCheckBox/FormCheckBox.jsx",
        lineNumber: 46,
        columnNumber: 13
      },
      void 0
    ),
    /* @__PURE__ */ c("label", { htmlFor: r.value ?? o, className: u, children: [
      a || "",
      d
    ] }, void 0, !0, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCheckBox/FormCheckBox.jsx",
      lineNumber: 55,
      columnNumber: 13
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCheckBox/FormCheckBox.jsx",
    lineNumber: 45,
    columnNumber: 11
  }, void 0) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCheckBox/FormCheckBox.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, void 0);
};
l.propTypes = {
  children: e.node,
  className: e.string,
  highlightLabel: e.bool,
  label: e.oneOfType([e.string, e.element]),
  name: e.string.isRequired,
  readOnly: e.bool
};
l = b.memo(l);
const B = l;
export {
  B as default
};
//# sourceMappingURL=FormCheckBox.mjs.map
