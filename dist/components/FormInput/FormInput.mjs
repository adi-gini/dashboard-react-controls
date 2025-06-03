import { jsxDEV as n } from "react/jsx-dev-runtime";
import re, { useState as b, useRef as T, useEffect as N, forwardRef as we } from "react";
import r from "prop-types";
import B from "classnames";
import { isNil as X, isEmpty as V } from "lodash";
import { useField as Ue, Field as Re } from "react-final-form";
import Te from "./InputNumberButtons/InputNumberButtons.mjs";
import Ve from "../../elements/OptionsMenu/OptionsMenu.mjs";
import Ee from "../../elements/ValidationTemplate/ValidationTemplate.mjs";
import "../index.mjs";
import { INPUT_VALIDATION_RULES as Ce, INPUT_LINK as Ae, DENSITY as ke } from "../../types.mjs";
import { checkPatternsValidity as Se, checkPatternsValidityAsync as De } from "../../utils/validation.util.mjs";
import "../../hooks/index.mjs";
import { validation as $e } from "../../constants.mjs";
import Oe from "../../images/exclamation-mark.svg.mjs";
import Be from "../../images/popout.svg.mjs";
import Ke from "../../images/warning.svg.mjs";
/* empty css                */
import { useDetectOutsideClick as Me } from "../../hooks/useDetectOutsideClick.hook.mjs";
import { useDebounce as qe } from "../../hooks/useDebounce.hook.mjs";
import Z from "../Tooltip/Tooltip.mjs";
import ee from "../TooltipTemplate/TextTooltipTemplate.mjs";
import Le from "../Tip/Tip.mjs";
const p = {
  iconClick: () => {
  },
  link: { show: "", value: "" },
  onBlur: () => {
  },
  onKeyDown: () => {
  },
  onValidationError: () => {
  },
  validator: () => {
  },
  rules: []
};
let v = ({
  async: K = !1,
  className: ne = "",
  customRequiredLabel: oe = "",
  density: ie = "normal",
  disabled: I = !1,
  focused: M = !1,
  iconClass: te = "",
  iconClick: le = p.iconClick,
  inputIcon: q = null,
  invalidText: E = "This field is invalid",
  label: L = "",
  link: j = p.link,
  name: d,
  onBlur: C = p.onBlur,
  onFocus: W,
  onKeyDown: P = p.onKeyDown,
  pattern: A = null,
  required: x = !1,
  onValidationError: H = p.onValidationError,
  suggestionList: _ = [],
  step: ae = "1",
  tip: Q = "",
  type: y = "text",
  validationRules: c = p.rules,
  validator: Y = p.validator,
  withoutBorder: se = !1,
  ...m
}, w) => {
  const { input: s, meta: l } = Ue(d), [F, me] = b(!1), [ue, k] = b(!1), [U, de] = b(""), [ce] = b(RegExp(A)), [S, fe] = b(c), [g, R] = b(!1), pe = T();
  w ?? (w = pe);
  const h = T(), a = T(), D = T(!1);
  Me(w, () => R(!1));
  const be = qe(), Ne = B("form-field-input", ne), Ie = B(
    "form-field__wrapper",
    `form-field__wrapper-${ie}`,
    I && "form-field__wrapper-disabled",
    F && "form-field__wrapper-invalid",
    se && "without-border"
  ), Fe = B("form-field__label", I && "form-field__label-disabled");
  N(() => {
    de(String(s.value));
  }, [s.value]), N(() => {
    const e = a.current && l.invalid && (l.validating || l.modified || l.submitFailed && l.touched);
    me(e), H(e);
  }, [
    l.invalid,
    l.modified,
    l.submitFailed,
    l.touched,
    l.validating,
    H
  ]), N(() => {
    a.current || l.valid && g && R(!1);
  }, [l.valid, g]), N(() => (g && window.addEventListener("scroll", G, !0), () => {
    window.removeEventListener("scroll", G, !0);
  }), [g]), N(() => {
    M && h.current.focus();
  }, [M]), N(() => {
    fe(() => (D.current = !1, c.map((e) => (e.name === $e.REQUIRED.NAME && (D.current = !0), {
      ...e,
      isValid: !a.current || !Array.isArray(a.current) ? !0 : !a.current.some((t) => t.name === e.name)
    }))));
  }, [c]);
  const ge = () => S.map(({ isValid: e = !1, label: t, name: o }) => /* @__PURE__ */ n(Ee, { valid: e, validationMessage: t }, o, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
    lineNumber: 172,
    columnNumber: 14
  }, void 0)), z = (e) => !e && !x || I, he = (e) => {
    var t;
    s.onBlur && s.onBlur(e), (!e.relatedTarget || !((t = e.relatedTarget) != null && t.closest(".form-field__suggestion-list"))) && (k(!1), C && C(e));
  }, ve = (e) => {
    s.onFocus && s.onFocus(e), W && W(e), k(!0);
  }, je = (e) => {
    s.onKeyDown && s.onKeyDown(e), P && P(e);
  }, G = (e) => {
    h.current && h.current.contains(e.target) || !e.target.closest(".options-menu") && !e.target.classList.contains("form-field-input") && R(!1);
  }, xe = (e) => {
    s.onChange && s.onChange(e), k(!1), C();
  }, _e = () => {
    h.current.focus(), R((e) => !e);
  }, J = (e, t) => {
    let o = X(e) ? "" : String(e);
    if (z(o)) return;
    let i = null;
    if (x && o.trim().length === 0 && !D.current)
      i = {
        name: "required",
        label: oe || "This field is required"
      };
    else if (!V(c) && !K) {
      const [f, $] = Se(c, o), O = f.filter((u) => !u.isValid);
      $ || (i = O.map((u) => ({ name: u.name, label: u.label })));
    }
    return V(i) && (y === "number" && (m.max && +o > +m.max && (i = {
      name: "maxValue",
      label: `The maximum value must be ${m.max}`
    }), m.min && +o < +m.min && (i = {
      name: "minValue",
      label: `The minimum value must be ${m.min}`
    })), A && !ce.test(o) ? i = { name: "pattern", label: E } : o.startsWith(" ") && (i = { name: "empty", label: E })), !i && Y && (i = Y(e, t)), a.current = i, i;
  }, ye = be(async (e, t) => {
    let o = X(e) ? "" : String(e);
    if (z(o)) return;
    let i = J(o, t);
    if (!V(c)) {
      const [f, $] = await De(c, o), O = f.filter((u) => !u.isValid);
      $ || (i = O.map((u) => ({ name: u.name, label: u.label })));
    }
    return a.current = i, i;
  }, 400);
  return /* @__PURE__ */ n(Re, { validate: K ? ye : J, name: d, parse: (e) => y === "number" && e && parseFloat(e) || e, children: ({ input: e }) => {
    var t;
    return /* @__PURE__ */ n(
      "div",
      {
        ref: w,
        className: Ne,
        "data-testid": d ? `${d}-form-field-input` : "form-field-input",
        children: [
          L && /* @__PURE__ */ n("div", { className: Fe, children: [
            /* @__PURE__ */ n(
              "label",
              {
                "data-testid": d ? `${d}-form-label` : "form-label",
                htmlFor: e.name,
                children: [
                  L,
                  (x || S.find((o) => o.name === "required")) && /* @__PURE__ */ n("span", { className: "form-field__label-mandatory", children: " *" }, void 0, !1, {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
                    lineNumber: 317,
                    columnNumber: 21
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
                lineNumber: 311,
                columnNumber: 17
              },
              void 0
            ),
            j && j.show && U.trim() && /* @__PURE__ */ n("div", { className: "form-field__label-icon", children: /* @__PURE__ */ n(Z, { template: /* @__PURE__ */ n(ee, { text: j.url || U }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
              lineNumber: 322,
              columnNumber: 40
            }, void 0), children: /* @__PURE__ */ n(
              "a",
              {
                href: j.url || U,
                onClick: (o) => o.stopPropagation(),
                target: "_blank",
                rel: "noreferrer",
                children: /* @__PURE__ */ n(Be, {}, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
                  lineNumber: 329,
                  columnNumber: 25
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
                lineNumber: 323,
                columnNumber: 23
              },
              void 0
            ) }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
              lineNumber: 322,
              columnNumber: 21
            }, void 0) }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
              lineNumber: 321,
              columnNumber: 19
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
            lineNumber: 310,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ n("div", { className: Ie, children: [
            /* @__PURE__ */ n("div", { className: "form-field__control", children: /* @__PURE__ */ n(
              "input",
              {
                "data-testid": d ? `${d}-form-input` : "form-input",
                id: e.name,
                ref: h,
                required: F || x,
                disabled: I,
                pattern: A,
                type: y,
                ...m,
                ...e,
                autoComplete: m.autocomplete ?? "off",
                onBlur: he,
                onKeyDown: je,
                onFocus: ve
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
                lineNumber: 338,
                columnNumber: 17
              },
              void 0
            ) }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
              lineNumber: 337,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ n("div", { className: "form-field__icons", children: [
              F && !Array.isArray(a.current) && /* @__PURE__ */ n(
                Z,
                {
                  className: "form-field__warning",
                  template: /* @__PURE__ */ n(ee, { text: ((t = a.current) == null ? void 0 : t.label) ?? E, warning: !0 }, void 0, !1, {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
                    lineNumber: 361,
                    columnNumber: 23
                  }, void 0),
                  children: /* @__PURE__ */ n(Oe, {}, void 0, !1, {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
                    lineNumber: 364,
                    columnNumber: 21
                  }, void 0)
                },
                void 0,
                !1,
                {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
                  lineNumber: 358,
                  columnNumber: 19
                },
                void 0
              ),
              F && Array.isArray(a.current) && /* @__PURE__ */ n("button", { className: "form-field__warning", onClick: _e, children: /* @__PURE__ */ n(Ke, {}, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
                lineNumber: 369,
                columnNumber: 21
              }, void 0) }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
                lineNumber: 368,
                columnNumber: 19
              }, void 0),
              Q && /* @__PURE__ */ n(Le, { text: Q, className: "form-field__tip" }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
                lineNumber: 372,
                columnNumber: 25
              }, void 0),
              q && /* @__PURE__ */ n("span", { "data-testid": "input-icon", className: te, onClick: le, children: q }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
                lineNumber: 374,
                columnNumber: 19
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
              lineNumber: 356,
              columnNumber: 15
            }, void 0),
            y === "number" && /* @__PURE__ */ n(Te, { ...m, step: +ae, ...e, disabled: I }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
              lineNumber: 380,
              columnNumber: 17
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
            lineNumber: 336,
            columnNumber: 13
          }, void 0),
          (_ == null ? void 0 : _.length) > 0 && ue && /* @__PURE__ */ n("ul", { className: "form-field__suggestion-list", children: _.map((o, i) => /* @__PURE__ */ n(
            "li",
            {
              className: "suggestion-item",
              onClick: () => {
                xe(o);
              },
              tabIndex: i,
              dangerouslySetInnerHTML: {
                __html: o.replace(
                  new RegExp(U, "gi"),
                  (f) => f && `<b>${f}</b>`
                )
              }
            },
            `${o}${i}`,
            !1,
            {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
              lineNumber: 387,
              columnNumber: 21
            },
            void 0
          )) }, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
            lineNumber: 384,
            columnNumber: 15
          }, void 0),
          !V(S) && F && Array.isArray(a.current) && /* @__PURE__ */ n(Ve, { show: g, ref: { refInputContainer: w }, children: ge() }, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
            lineNumber: 405,
            columnNumber: 15
          }, void 0)
        ]
      },
      void 0,
      !0,
      {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
        lineNumber: 304,
        columnNumber: 11
      },
      void 0
    );
  } }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormInput/FormInput.jsx",
    lineNumber: 301,
    columnNumber: 5
  }, void 0);
};
v = re.memo(we(v));
v.displayName = "FormInput";
v.propTypes = {
  async: r.bool,
  className: r.string,
  customRequiredLabel: r.string,
  density: ke,
  disabled: r.bool,
  focused: r.bool,
  iconClass: r.string,
  iconClick: r.func,
  inputIcon: r.element,
  invalidText: r.string,
  label: r.string,
  link: Ae,
  max: r.oneOfType([r.string, r.number]),
  min: r.oneOfType([r.string, r.number]),
  name: r.string.isRequired,
  onBlur: r.func,
  onFocus: r.func,
  onKeyDown: r.func,
  onValidationError: r.func,
  pattern: r.string,
  placeholder: r.string,
  required: r.bool,
  step: r.oneOfType([r.string, r.number]),
  suggestionList: r.arrayOf(r.string),
  tip: r.oneOfType([r.string, r.element]),
  type: r.string,
  validationRules: Ce,
  validator: r.func,
  value: r.oneOfType([r.string, r.number]),
  withoutBorder: r.bool
};
const pr = re.memo(v);
export {
  pr as default
};
//# sourceMappingURL=FormInput.mjs.map
