import { jsxDEV as o } from "react/jsx-dev-runtime";
import { useRef as i } from "react";
import e from "prop-types";
import n from "classnames";
/* empty css                          */
const p = ({ text: t = "", warning: r = !1 }) => {
  const l = i(), s = n(
    "tooltip-template",
    "tooltip__text",
    r && "tooltip__warning"
  );
  return /* @__PURE__ */ o("div", { className: s, children: /* @__PURE__ */ o("span", { ref: l, children: t }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/TooltipTemplate/TextTooltipTemplate.jsx",
    lineNumber: 34,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/TooltipTemplate/TextTooltipTemplate.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, void 0);
};
p.propTypes = {
  text: e.oneOfType([e.string, e.element, e.number]),
  warning: e.bool
};
export {
  p as default
};
//# sourceMappingURL=TextTooltipTemplate.mjs.map
