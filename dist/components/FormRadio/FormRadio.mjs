import { jsxDEV as r } from "react/jsx-dev-runtime";
import u from "react";
import a from "prop-types";
import { Field as f } from "react-final-form";
import s from "classnames";
import b from "../Tooltip/Tooltip.mjs";
import N from "../TooltipTemplate/TextTooltipTemplate.mjs";
/* empty css                */
let d = ({
  className: c = "",
  name: e,
  label: l,
  readOnly: t = !1,
  tooltip: m = "",
  ...o
}) => {
  const n = s(
    "form-field-radio",
    t && "form-field-radio_readonly",
    c
  );
  return /* @__PURE__ */ r(f, { name: e, value: o.value, type: "radio", children: ({ input: i }) => /* @__PURE__ */ r(
    "div",
    {
      className: n,
      "data-testid": e ? `${e}-${o.value}-form-radio` : "form-field-radio",
      children: [
        /* @__PURE__ */ r(
          "input",
          {
            className: s(i.checked ? "checked" : "unchecked"),
            type: "radio",
            "data-testid": e ? `${e}-${o.value}-radio` : "form-radio",
            ...i,
            ...o,
            checked: i.checked,
            id: e + o.value
          },
          void 0,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
            lineNumber: 48,
            columnNumber: 11
          },
          void 0
        ),
        m ? /* @__PURE__ */ r(b, { className: "label", template: /* @__PURE__ */ r(N, { text: m }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
          lineNumber: 60,
          columnNumber: 50
        }, void 0), children: /* @__PURE__ */ r("label", { htmlFor: e + o.value, children: l }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
          lineNumber: 61,
          columnNumber: 15
        }, void 0) }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
          lineNumber: 60,
          columnNumber: 13
        }, void 0) : /* @__PURE__ */ r("label", { htmlFor: e + o.value, children: l }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
          lineNumber: 64,
          columnNumber: 13
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
      lineNumber: 44,
      columnNumber: 9
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormRadio/FormRadio.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, void 0);
};
d.propTypes = {
  className: a.string,
  label: a.string.isRequired,
  name: a.string.isRequired,
  readOnly: a.bool,
  tooltip: a.string
};
d = u.memo(d);
const U = d;
export {
  U as default
};
//# sourceMappingURL=FormRadio.mjs.map
