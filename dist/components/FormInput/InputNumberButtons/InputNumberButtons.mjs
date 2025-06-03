import { jsxDEV as t } from "react/jsx-dev-runtime";
import f from "react";
import e from "prop-types";
import { isNil as I } from "lodash";
import { performFloatOperation as d } from "../../../utils/math.util.mjs";
import b from "../../../images/range-arrow-small.svg.mjs";
/* empty css                         */
let a = ({
  disabled: i = !1,
  min: o = null,
  max: u = null,
  onChange: l,
  step: s = 1,
  value: r
}) => {
  const p = (m) => {
    if (m.preventDefault(), u && r >= u) return;
    let n = c() ? s : d(r, s, "+");
    n = u && n > u ? u : n, l(n);
  }, N = (m) => {
    if (m.preventDefault(), o && r <= o) return;
    let n = c() ? -s : d(r, s, "-");
    n = o && n < o ? o : n, l(n);
  }, c = () => I(r) || r === "";
  return /* @__PURE__ */ t("div", { "data-testid": "range-input-container", className: "form-field-range", children: /* @__PURE__ */ t("div", { className: "range__buttons", children: [
    /* @__PURE__ */ t(
      "button",
      {
        "data-testid": "btn-increase",
        className: "range__button range__button-increase",
        disabled: i,
        onClick: p,
        children: /* @__PURE__ */ t(b, { className: "increase" }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/InputNumberButtons/InputNumberButtons.jsx",
          lineNumber: 69,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      !1,
      {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/InputNumberButtons/InputNumberButtons.jsx",
        lineNumber: 63,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ t(
      "button",
      {
        "data-testid": "btn-decrease",
        className: "range__button range__button-decrease",
        disabled: i,
        onClick: N,
        children: /* @__PURE__ */ t(b, { className: "decrease" }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/InputNumberButtons/InputNumberButtons.jsx",
          lineNumber: 77,
          columnNumber: 11
        }, void 0)
      },
      void 0,
      !1,
      {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/InputNumberButtons/InputNumberButtons.jsx",
        lineNumber: 71,
        columnNumber: 9
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/InputNumberButtons/InputNumberButtons.jsx",
    lineNumber: 62,
    columnNumber: 7
  }, void 0) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/InputNumberButtons/InputNumberButtons.jsx",
    lineNumber: 61,
    columnNumber: 5
  }, void 0);
};
a.propTypes = {
  disabled: e.bool,
  min: e.oneOfType([e.string, e.number]),
  max: e.oneOfType([e.string, e.number]),
  onChange: e.func.isRequired,
  step: e.number,
  value: e.oneOfType([e.string, e.number]).isRequired
};
a = f.memo(a);
const y = a;
export {
  y as default
};
//# sourceMappingURL=InputNumberButtons.mjs.map
