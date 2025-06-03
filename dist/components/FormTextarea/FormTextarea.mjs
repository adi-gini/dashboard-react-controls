import { jsxDEV as e } from "react/jsx-dev-runtime";
import D, { useState as j, useRef as M, useLayoutEffect as P, useEffect as _, forwardRef as W } from "react";
import f from "classnames";
import r from "prop-types";
import { useField as z, Field as G } from "react-final-form";
import H from "../TooltipTemplate/TextTooltipTemplate.mjs";
import J from "../Tip/Tip.mjs";
import K from "../Tooltip/Tooltip.mjs";
import O from "../../images/exclamation-mark.svg.mjs";
/* empty css                   */
let l = ({
  className: U = "",
  disabled: d = !1,
  focused: b = !1,
  iconClass: w = "",
  invalidText: p = "This field is invalid",
  label: x = "",
  maxLength: n = null,
  name: N,
  onBlur: h = () => {
  },
  onChange: F = () => {
  },
  required: i = !1,
  rows: C = 3,
  textAreaIcon: T = null,
  tip: v = "",
  withoutBorder: y = !1,
  ...I
}, E) => {
  const { input: t, meta: o } = z(N), [c, R] = j(!1), [g, A] = j(t.value.length), u = M(), B = f("form-field-textarea", U), $ = f("form-field__label", d && "form-field__label-disabled"), q = f(
    "form-field__wrapper",
    d && "form-field__wrapper-disabled",
    c && "form-field__wrapper-invalid",
    y && "without-border"
  );
  P(() => {
    A(t.value.length);
  }, [t.value.length]), _(() => {
    b && u.current.focus();
  }, [b, u]), _(() => {
    R(
      o.invalid && (o.validating || o.modified || o.submitFailed && o.touched)
    );
  }, [o.invalid, o.modified, o.submitFailed, o.touched, o.validating]);
  const S = (a) => {
    t.onBlur(a), h && h(a);
  }, V = (a) => {
    t.onChange(a), F && F(a.target.value);
  }, k = (a) => {
    t.onFocus(a);
  };
  return /* @__PURE__ */ e(G, { validate: (a) => {
    const m = a ?? "";
    let s = null;
    return m.startsWith(" ") ? s = { name: "empty", label: p } : i && m.trim().length === 0 && (s = { name: "required", label: "This field is required" }), s;
  }, name: N, children: ({ input: a, meta: m }) => {
    var s;
    return /* @__PURE__ */ e("div", { ref: E, className: B, children: [
      /* @__PURE__ */ e("div", { className: $, children: x && /* @__PURE__ */ e("label", { "data-testid": "label", htmlFor: a.name, children: [
        x,
        i && /* @__PURE__ */ e("span", { className: "form-field__label-mandatory", children: " *" }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
          lineNumber: 116,
          columnNumber: 30
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
        lineNumber: 114,
        columnNumber: 15
      }, void 0) }, void 0, !1, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
        lineNumber: 112,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ e("div", { className: q, children: [
        /* @__PURE__ */ e("div", { className: "form-field__control", children: /* @__PURE__ */ e(
          "textarea",
          {
            "data-testid": "textarea",
            id: a.name,
            maxLength: n,
            ref: u,
            required: c || i,
            disabled: d,
            rows: C,
            ...I,
            ...a,
            onBlur: S,
            onChange: V,
            onFocus: k
          },
          void 0,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
            lineNumber: 122,
            columnNumber: 15
          },
          void 0
        ) }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
          lineNumber: 121,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ e("div", { className: "form-field__icons", children: [
          c && /* @__PURE__ */ e(
            K,
            {
              className: "form-field__warning",
              template: /* @__PURE__ */ e(H, { text: ((s = m.error) == null ? void 0 : s.label) ?? p, warning: !0 }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
                lineNumber: 143,
                columnNumber: 29
              }, void 0),
              children: /* @__PURE__ */ e(O, {}, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
                lineNumber: 145,
                columnNumber: 19
              }, void 0)
            },
            void 0,
            !1,
            {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
              lineNumber: 141,
              columnNumber: 17
            },
            void 0
          ),
          v && !i && /* @__PURE__ */ e(J, { text: v, className: "form-field__tip" }, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
            lineNumber: 148,
            columnNumber: 36
          }, void 0),
          T && /* @__PURE__ */ e("span", { "data-testid": "textarea__icon", className: w, children: T }, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
            lineNumber: 150,
            columnNumber: 17
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
          lineNumber: 139,
          columnNumber: 13
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
        lineNumber: 120,
        columnNumber: 11
      }, void 0),
      n && /* @__PURE__ */ e("div", { className: "form-field__counter", children: `${n - g} ${n - g !== 1 ? "characters" : "character"} left` }, void 0, !1, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
        lineNumber: 157,
        columnNumber: 13
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
      lineNumber: 111,
      columnNumber: 9
    }, void 0);
  } }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormTextarea/FormTextarea.jsx",
    lineNumber: 109,
    columnNumber: 5
  }, void 0);
};
l = D.memo(W(l));
l.displayName = "FormTextarea";
l.propTypes = {
  className: r.string,
  disabled: r.bool,
  focused: r.bool,
  iconClass: r.string,
  invalidText: r.string,
  label: r.string,
  maxLength: r.number,
  name: r.string.isRequired,
  onBlur: r.func,
  onChange: r.func,
  required: r.bool,
  rows: r.number,
  textAreaIcon: r.element,
  tip: r.string,
  withoutBorder: r.bool
};
const le = l;
export {
  le as default
};
//# sourceMappingURL=FormTextarea.mjs.map
