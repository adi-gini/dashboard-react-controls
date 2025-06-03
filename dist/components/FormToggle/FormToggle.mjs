import { jsxDEV as o } from "react/jsx-dev-runtime";
import "react";
import t from "classnames";
import r from "prop-types";
import { Field as c } from "react-final-form";
import { DENSITY as g } from "../../types.mjs";
/* empty css                 */
const f = ({ density: l = "", label: s = "", name: e, onChange: m = () => {
}, ...i }) => {
  const d = t(
    "form-field__wrapper",
    l && `form-field__wrapper-${l}`
  );
  return /* @__PURE__ */ o(c, { name: e, value: i.value, type: "checkbox", children: ({ input: a }) => /* @__PURE__ */ o(
    "label",
    {
      className: "form-field-toggle",
      "data-testid": e ? `${e}-form-field-toggle` : "form-field-toggle",
      children: [
        s && /* @__PURE__ */ o("div", { className: "form-field__label", children: s }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormToggle/FormToggle.jsx",
          lineNumber: 40,
          columnNumber: 23
        }, void 0),
        /* @__PURE__ */ o(
          "input",
          {
            "data-testid": e ? `${e}-form-toggle` : "form-toggle",
            id: e,
            ...a,
            ...i,
            onChange: (n) => {
              m && m(n), a.onChange(n);
            },
            type: "checkbox"
          },
          void 0,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormToggle/FormToggle.jsx",
            lineNumber: 41,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ o("div", { className: d, children: /* @__PURE__ */ o("span", { className: "form-field-toggle__switch" }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormToggle/FormToggle.jsx",
          lineNumber: 52,
          columnNumber: 15
        }, void 0) }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormToggle/FormToggle.jsx",
          lineNumber: 51,
          columnNumber: 13
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormToggle/FormToggle.jsx",
      lineNumber: 36,
      columnNumber: 11
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormToggle/FormToggle.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, void 0);
};
f.propTypes = {
  density: g,
  label: r.string,
  name: r.string.isRequired,
  onChange: r.func
};
export {
  f as default
};
//# sourceMappingURL=FormToggle.mjs.map
