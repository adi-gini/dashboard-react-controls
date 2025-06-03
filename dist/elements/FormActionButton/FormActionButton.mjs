import { jsxDEV as o, Fragment as c } from "react/jsx-dev-runtime";
import { forwardRef as b } from "react";
import e from "prop-types";
import f from "../../images/plus.svg.mjs";
let r = ({
  disabled: i = !1,
  fields: s,
  fieldsPath: t,
  hidden: l = !1,
  id: n = "",
  label: m = "Add new item",
  onClick: d
}, a) => /* @__PURE__ */ o(c, { children: [
  !l && /* @__PURE__ */ o("div", { className: "form-table__row form-table__action-row no-hover", children: /* @__PURE__ */ o(
    "button",
    {
      "data-testid": n || `${t}-add-btn`,
      onClick: (u) => d(u, s, t),
      disabled: i,
      children: [
        /* @__PURE__ */ o(f, {}, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormActionButton/FormActionButton.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, void 0),
        m
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormActionButton/FormActionButton.jsx",
      lineNumber: 41,
      columnNumber: 11
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormActionButton/FormActionButton.jsx",
    lineNumber: 40,
    columnNumber: 9
  }, void 0),
  /* @__PURE__ */ o("span", { ref: a }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormActionButton/FormActionButton.jsx",
    lineNumber: 52,
    columnNumber: 7
  }, void 0)
] }, void 0, !0, {
  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormActionButton/FormActionButton.jsx",
  lineNumber: 38,
  columnNumber: 5
}, void 0);
r = b(r);
r.displayName = "FormActionButton";
r.propTypes = {
  disabled: e.bool,
  fields: e.shape({}).isRequired,
  fieldsPath: e.string.isRequired,
  hidden: e.bool,
  id: e.string,
  label: e.string,
  onClick: e.func.isRequired
};
const B = r;
export {
  B as default
};
//# sourceMappingURL=FormActionButton.mjs.map
