import { jsxDEV as r } from "react/jsx-dev-runtime";
import { forwardRef as f } from "react";
import e from "prop-types";
import b from "classnames";
import N from "../Tooltip/Tooltip.mjs";
import T from "../TooltipTemplate/TextTooltipTemplate.mjs";
import { BUTTON_VARIANTS as B, DENSITY as g } from "../../types.mjs";
import { TERTIARY_BUTTON as h } from "../../constants.mjs";
/* empty css             */
let n = ({
  className: i = "",
  density: a = "normal",
  icon: t = null,
  iconPosition: s = "left",
  id: l = "btn",
  label: o = "Button",
  tooltip: m = "",
  variant: u = h,
  ...d
}, p) => {
  const c = b("btn", `btn-${u}`, `btn-${a}`, i);
  return /* @__PURE__ */ r("button", { ...d, className: c, ref: p, "data-testid": l, children: [
    t && s === "left" && t,
    (m || o) && /* @__PURE__ */ r(N, { template: /* @__PURE__ */ r(T, { text: m || o }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Button/Button.jsx",
      lineNumber: 49,
      columnNumber: 28
    }, void 0), children: o && /* @__PURE__ */ r("span", { children: o }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Button/Button.jsx",
      lineNumber: 50,
      columnNumber: 21
    }, void 0) }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Button/Button.jsx",
      lineNumber: 49,
      columnNumber: 9
    }, void 0),
    t && s === "right" && t
  ] }, void 0, !0, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Button/Button.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, void 0);
};
n = f(n);
n.displayName = "Button";
n.propTypes = {
  className: e.string,
  density: g,
  icon: e.element,
  iconPosition: e.oneOf(["left", "right"]),
  id: e.string,
  label: e.oneOfType([e.string, e.element]),
  tooltip: e.oneOfType([e.string, e.element]),
  variant: B
};
export {
  n as default
};
//# sourceMappingURL=Button.mjs.map
