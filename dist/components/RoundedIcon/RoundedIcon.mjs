import { jsxDEV as n } from "react/jsx-dev-runtime";
import f, { forwardRef as b } from "react";
import e from "prop-types";
import s from "classnames";
import N from "../Tooltip/Tooltip.mjs";
import R from "../TooltipTemplate/TextTooltipTemplate.mjs";
/* empty css                  */
let o = ({
  children: i,
  className: a = "",
  disabled: r = !1,
  id: d = "",
  isActive: l = !1,
  onClick: t = () => {
  },
  tooltipText: c = ""
}, m) => {
  const u = s("round-icon-cp", a), p = s(
    "round-icon-cp__circle",
    l && "round-icon-cp__circle-active",
    r && "round-icon-cp__circle-disabled"
  );
  return /* @__PURE__ */ n("div", { className: u, ref: m, "data-testid": d, children: /* @__PURE__ */ n(N, { hidden: !c, id: d, template: /* @__PURE__ */ n(R, { text: c }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/RoundedIcon/RoundedIcon.jsx",
    lineNumber: 47,
    columnNumber: 56
  }, void 0), children: /* @__PURE__ */ n("button", { onClick: t, disabled: r, className: p, children: i }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/RoundedIcon/RoundedIcon.jsx",
    lineNumber: 48,
    columnNumber: 9
  }, void 0) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/RoundedIcon/RoundedIcon.jsx",
    lineNumber: 47,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/RoundedIcon/RoundedIcon.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, void 0);
};
o = f.memo(b(o));
o.displayName = "RoundedIcon";
o.propTypes = {
  children: e.node.isRequired,
  className: e.string,
  disabled: e.bool,
  id: e.string,
  isActive: e.bool,
  onClick: e.func,
  tooltipText: e.string
};
const T = o;
export {
  T as default
};
//# sourceMappingURL=RoundedIcon.mjs.map
