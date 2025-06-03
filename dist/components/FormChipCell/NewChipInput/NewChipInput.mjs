import { jsxDEV as t } from "react/jsx-dev-runtime";
import { forwardRef as c } from "react";
import o from "prop-types";
import { useField as m, Field as h } from "react-final-form";
let n = ({ name: i, onChange: p, onFocus: u, ...s }, a) => {
  const { input: r } = m(i), d = (e) => {
    r.onChange(e), p(e);
  }, l = (e) => {
    r.onFocus(e), u(e);
  };
  return /* @__PURE__ */ t(h, { name: i, children: ({ input: e }) => /* @__PURE__ */ t(
    "input",
    {
      autoComplete: "off",
      "data-testid": "input",
      ref: a,
      type: "text",
      ...s,
      ...e,
      onChange: d,
      onFocus: l
    },
    void 0,
    !1,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/NewChipInput/NewChipInput.jsx",
      lineNumber: 37,
      columnNumber: 9
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/NewChipInput/NewChipInput.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, void 0);
};
n = c(n);
n.displayName = "NewChipInput";
n.propTypes = {
  name: o.string.isRequired,
  onChange: o.func.isRequired,
  onFocus: o.func.isRequired
};
const b = n;
export {
  b as default
};
//# sourceMappingURL=NewChipInput.mjs.map
