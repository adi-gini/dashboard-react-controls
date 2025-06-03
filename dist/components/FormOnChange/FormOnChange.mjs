import { jsxDEV as s } from "react/jsx-dev-runtime";
import { useState as u, useEffect as t } from "react";
import { Field as m } from "react-final-form";
import o from "prop-types";
const i = ({ inputValue: e, handler: n }) => {
  const [r, a] = u(e);
  return t(() => {
    e !== r && (a(e), n(e, r));
  }, [n, e, r]), null;
};
i.propTypes = {
  inputValue: o.any.isRequired,
  handler: o.func.isRequired
};
const l = ({ handler: e, name: n }) => /* @__PURE__ */ s(
  m,
  {
    name: n,
    subscription: {
      value: !0
    },
    allowNull: !0,
    render: ({ input: r }) => /* @__PURE__ */ s(i, { inputValue: r.value, handler: e }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormOnChange/FormOnChange.jsx",
      lineNumber: 50,
      columnNumber: 30
    }, void 0)
  },
  void 0,
  !1,
  {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormOnChange/FormOnChange.jsx",
    lineNumber: 44,
    columnNumber: 5
  },
  void 0
);
l.propTypes = {
  handler: o.func.isRequired,
  name: o.string.isRequired
};
export {
  l as default
};
//# sourceMappingURL=FormOnChange.mjs.map
