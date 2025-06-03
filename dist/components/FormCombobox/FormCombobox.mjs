import { jsxDEV as e } from "react/jsx-dev-runtime";
import { useState as t, useRef as I, useEffect as v, useCallback as z } from "react";
import { useField as yo, Field as Vo } from "react-final-form";
import { isEmpty as P } from "lodash";
import n from "prop-types";
import p from "classnames";
import Io from "../../elements/OptionsMenu/OptionsMenu.mjs";
import Eo from "../../elements/ValidationTemplate/ValidationTemplate.mjs";
import K from "../PopUpDialog/PopUpDialog.mjs";
import Oo from "../TooltipTemplate/TextTooltipTemplate.mjs";
import ko from "../Tooltip/Tooltip.mjs";
import { checkPatternsValidity as Ro } from "../../utils/validation.util.mjs";
import "../../hooks/index.mjs";
import { COMBOBOX_SUGGESTION_LIST as To, COMBOBOX_SELECT_OPTIONS as Do, DENSITY as Lo } from "../../types.mjs";
import $o from "../../images/arrow.svg.mjs";
import Ao from "../../images/search.svg.mjs";
import Po from "../../images/warning.svg.mjs";
import Mo from "../../images/exclamation-mark.svg.mjs";
/* empty css                   */
import { useDetectOutsideClick as qo } from "../../hooks/useDetectOutsideClick.hook.mjs";
const Wo = ({
  comboboxClassName: Q = "",
  density: Z = "normal",
  disabled: M = !1,
  hideSearchInput: oo = !1,
  inputDefaultValue: eo = "",
  inputPlaceholder: ro = "",
  invalidText: q = "Invalid",
  label: W = "",
  maxSuggestedMatches: so = 1,
  name: c,
  onBlur: x = null,
  onChange: N = null,
  onFocus: F = null,
  required: E = !1,
  rules: B = [],
  selectDefaultValue: no = {
    label: "",
    id: "",
    className: ""
  },
  selectOptions: io,
  selectPlaceholder: G = "",
  suggestionList: j = [],
  validator: H = null,
  withoutBorder: lo = !1
}) => {
  const { input: m, meta: i } = yo(c), [O, k] = t(eo), [a, mo] = t(no), [ao, R] = t({
    left: "0px"
  }), [d, b] = t(!1), [T, h] = t(!1), [C, J] = t(j), [g, _] = t(!1), [w, to] = t(!1), [S, co] = t(B), [D, U] = t(!1), u = I(), L = I(), f = I(), y = I();
  qo(u, () => U(!1));
  const bo = p("form-field__label", M && "form-field__label-disabled"), uo = p(
    "form-field-combobox__input",
    a.id.length === 0 && "form-field-combobox__input_hidden"
  );
  v(() => {
    co(
      (o) => o.map((r) => ({
        ...r,
        isValid: !i.error || !Array.isArray(i.error) ? !0 : !i.error.some((l) => l.name === r.name)
      }))
    );
  }, [i.error]), v(() => {
    g || JSON.stringify(C) !== JSON.stringify(j) && J(j);
  }, [C, j, g]), v(() => {
    to(
      i.invalid && (i.validating || i.modified || i.submitFailed && i.touched)
    );
  }, [i.invalid, i.modified, i.submitFailed, i.touched, i.validating]);
  const $ = z(
    (o) => {
      u.current && !u.current.contains(o.target) && y.current && !y.current.contains(o.target) && (_(!1), b(!1), h(!1), m.onBlur(new Event("blur")), x && x(m.value));
    },
    [m, x]
  ), X = (o) => {
    u.current && u.current.contains(o.target) || !o.target.closest(".pop-up-dialog") && !o.target.classList.contains("form-field-combobox") && (U(!1), b(!1), h(!1), f.current.blur());
  };
  v(() => (window.addEventListener("click", $), () => {
    window.removeEventListener("click", $);
  }), [$]), v(() => ((D || d || T) && window.addEventListener("scroll", X, !0), () => {
    window.removeEventListener("scroll", X, !0);
  }), [d, T, D]);
  const fo = () => S.map(({ isValid: o = !1, label: r, name: l }) => /* @__PURE__ */ e(Eo, { valid: o, validationMessage: r }, l, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
    lineNumber: 169,
    columnNumber: 14
  }, void 0)), po = (o) => {
    const r = o.target;
    R({
      left: `${r.selectionStart < 30 ? r.selectionStart : 30}ch`
    }), g && _(!1), k(r.value), m.onChange(`${a.id}${r.value}`), N && N(a.id, r.value), C.length > 0 && h(!0);
  }, xo = (o) => {
    o.id !== a.id && (mo(o), m.onChange(o.id), k(""), N && N(o.id), b(!1), f.current.disabled = !1, f.current.focus());
  }, No = (o) => {
    const r = O.split("/"), l = r.length - 1;
    let s = o.customDelimiter ? r[l].replace(new RegExp(`${o.customDelimiter}.*`), "") + o.id : o.id;
    r.length <= so - 1 && (s += "/"), r[l] = s, g && _(!1), r.join("/") !== O && (k(r.join("/")), m.onChange(`${a.id}${r.join("/")}`), N && N(a.id, r.join("/"))), h(!1), f.current.focus(), R({
      left: `${f.current.selectionStart < 30 ? f.current.selectionStart : 30}ch`
    });
  }, ho = () => {
    F && F(), m.onFocus(new Event("focus")), d && b(!1), h(!0);
  }, Co = (o) => {
    o.persist(), J(
      () => j.filter((r) => r.id.startsWith(o.target.value))
    );
  }, Y = z(() => {
    d ? (b(!1), m.onBlur(new Event("blur")), x && x(m.value)) : (h(!1), U(!1), R({
      left: "0px"
    }), b(!0), m.onFocus(new Event("focus")), F && F(m.value));
  }, [m, x, F, d]), go = (o = "", r) => {
    const l = o.startsWith(a.id) ? o.substring(a.id.length) : o ?? "";
    let s = null;
    if (!P(S)) {
      const [A, So] = Ro(B, l), Uo = A.filter((V) => !V.isValid);
      So || (s = Uo.map((V) => ({ name: V.name, label: V.label })));
    }
    return P(s) && (l.startsWith(" ") ? s = { name: "empty", label: q } : E && l.trim().length === 0 && (s = { name: "required", label: "This field is required" })), !s && H && (s = H(o, r)), s;
  }, Fo = () => {
    U((o) => !o), b(!1);
  }, jo = p(
    Q,
    "form-field-combobox",
    "form-field",
    w && "form-field-combobox_invalid"
  ), vo = p(
    d && "form-field-combobox__icon_open",
    "form-field-combobox__icon"
  ), _o = p(a.className), wo = p(
    "form-field__wrapper",
    `form-field__wrapper-${Z}`,
    M && "form-field__wrapper-disabled",
    w && "form-field__wrapper-invalid",
    lo && "without-border"
  );
  return /* @__PURE__ */ e(Vo, { name: c, validate: go, children: ({ input: o, meta: r }) => {
    var l;
    return /* @__PURE__ */ e(
      "div",
      {
        className: jo,
        ref: u,
        "data-testid": c ? `${c}-form-combobox` : "form-combobox",
        children: [
          W && /* @__PURE__ */ e("div", { className: bo, children: /* @__PURE__ */ e("label", { "data-testid": "label", htmlFor: o.name, children: [
            W,
            (E || S.find((s) => s.name === "required")) && /* @__PURE__ */ e("span", { className: "form-field__label-mandatory", children: " *" }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
              lineNumber: 339,
              columnNumber: 19
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
            lineNumber: 336,
            columnNumber: 15
          }, void 0) }, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
            lineNumber: 335,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ e("div", { className: wo, children: [
            /* @__PURE__ */ e("div", { className: "form-field__icons", children: /* @__PURE__ */ e($o, { className: vo, onClick: Y }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
              lineNumber: 346,
              columnNumber: 15
            }, void 0) }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
              lineNumber: 345,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ e("div", { className: "form-field-combobox__select form-field__control", ref: L, children: [
              /* @__PURE__ */ e("div", { className: "form-field-combobox__select-header", onClick: Y, children: [
                /* @__PURE__ */ e("span", { className: _o, children: a.id }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                  lineNumber: 350,
                  columnNumber: 17
                }, void 0),
                a.id.length === 0 && G && /* @__PURE__ */ e("div", { className: "form-field-combobox__placeholder", children: /* @__PURE__ */ e("label", { children: G }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                  lineNumber: 353,
                  columnNumber: 21
                }, void 0) }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                  lineNumber: 352,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                lineNumber: 349,
                columnNumber: 15
              }, void 0),
              d && /* @__PURE__ */ e(
                K,
                {
                  headerIsHidden: !0,
                  customPosition: {
                    element: L,
                    position: "bottom-right"
                  },
                  className: "form-field-combobox__dropdown form-field-combobox__dropdown-select",
                  children: /* @__PURE__ */ e("ul", { className: "form-field-combobox__dropdown-list", ref: y, children: io.map((s) => {
                    if (!s.hidden) {
                      const A = p(
                        "form-field-combobox__dropdown-list-option",
                        s.className
                      );
                      return /* @__PURE__ */ e(
                        "li",
                        {
                          className: A,
                          onClick: () => xo(s),
                          children: s.label
                        },
                        s.id,
                        !1,
                        {
                          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                          lineNumber: 375,
                          columnNumber: 27
                        },
                        void 0
                      );
                    }
                  }) }, void 0, !1, {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                    lineNumber: 366,
                    columnNumber: 19
                  }, void 0)
                },
                void 0,
                !1,
                {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                  lineNumber: 358,
                  columnNumber: 17
                },
                void 0
              )
            ] }, void 0, !0, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
              lineNumber: 348,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ e(
              "input",
              {
                className: uo,
                "data-testid": c ? `${c}-form-combobox-input` : "form-combobox-input",
                id: o.name,
                onChange: po,
                onFocus: ho,
                placeholder: ro,
                ref: f,
                required: E,
                type: "text",
                value: O
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                lineNumber: 389,
                columnNumber: 13
              },
              void 0
            ),
            T && (C.length > 0 || g) && /* @__PURE__ */ e(
              K,
              {
                headerIsHidden: !0,
                customPosition: {
                  element: L,
                  position: "bottom-right"
                },
                className: "form-field-combobox__dropdown form-field-combobox__dropdown-suggestions",
                style: {
                  ...ao
                },
                children: /* @__PURE__ */ e("div", { ref: y, children: [
                  !oo && /* @__PURE__ */ e("div", { className: "form-field-combobox__search-wrapper", children: [
                    /* @__PURE__ */ e(
                      "input",
                      {
                        "data-testid": c ? `${c}-form-combobox-search` : "form-combobox-search",
                        className: "form-field-combobox__search form-field__control",
                        onChange: Co,
                        onFocus: () => _(!0),
                        placeholder: "Type to search",
                        type: "text"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                        lineNumber: 416,
                        columnNumber: 23
                      },
                      void 0
                    ),
                    /* @__PURE__ */ e(Ao, {}, void 0, !1, {
                      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                      lineNumber: 424,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                    lineNumber: 415,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ e("ul", { className: "form-field-combobox__dropdown-list", children: g && C.length === 0 ? /* @__PURE__ */ e("li", { className: "form-field-combobox__dropdown-list-option", children: "No data" }, "no data", !1, {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                    lineNumber: 429,
                    columnNumber: 23
                  }, void 0) : C.map((s) => /* @__PURE__ */ e(
                    "li",
                    {
                      className: "form-field-combobox__dropdown-list-option",
                      onClick: () => No(s),
                      children: s.label
                    },
                    s.id,
                    !1,
                    {
                      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                      lineNumber: 434,
                      columnNumber: 25
                    },
                    void 0
                  )) }, void 0, !1, {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                    lineNumber: 427,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                  lineNumber: 413,
                  columnNumber: 17
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                lineNumber: 402,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ e("div", { className: "form-field__icons", children: [
              w && !Array.isArray(r.error) && /* @__PURE__ */ e(
                ko,
                {
                  className: "form-field__warning",
                  template: /* @__PURE__ */ e(Oo, { text: ((l = r.error) == null ? void 0 : l.label) ?? q, warning: !0 }, void 0, !1, {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                    lineNumber: 451,
                    columnNumber: 29
                  }, void 0),
                  children: /* @__PURE__ */ e(Mo, {}, void 0, !1, {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                    lineNumber: 453,
                    columnNumber: 19
                  }, void 0)
                },
                void 0,
                !1,
                {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                  lineNumber: 449,
                  columnNumber: 17
                },
                void 0
              ),
              w && Array.isArray(r.error) && /* @__PURE__ */ e("button", { className: "form-field__warning", onClick: Fo, children: /* @__PURE__ */ e(Po, {}, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                lineNumber: 458,
                columnNumber: 19
              }, void 0) }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
                lineNumber: 457,
                columnNumber: 17
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
              lineNumber: 447,
              columnNumber: 13
            }, void 0),
            !P(S) && /* @__PURE__ */ e(Io, { show: D, ref: { refInputContainer: u }, children: fo() }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
              lineNumber: 463,
              columnNumber: 15
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
            lineNumber: 344,
            columnNumber: 11
          }, void 0)
        ]
      },
      void 0,
      !0,
      {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
        lineNumber: 329,
        columnNumber: 9
      },
      void 0
    );
  } }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormCombobox/FormCombobox.jsx",
    lineNumber: 327,
    columnNumber: 5
  }, void 0);
};
Wo.propTypes = {
  comboboxClassName: n.string,
  density: Lo,
  disabled: n.bool,
  hideSearchInput: n.bool,
  inputDefaultValue: n.string,
  inputPlaceholder: n.string,
  invalidText: n.string,
  label: n.string,
  maxSuggestedMatches: n.number,
  name: n.string.isRequired,
  onBlur: n.func,
  onChange: n.func,
  onFocus: n.func,
  required: n.bool,
  rules: n.array,
  selectDefaultValue: n.shape({}),
  selectOptions: Do.isRequired,
  selectPlaceholder: n.string,
  suggestionList: To,
  validator: n.func,
  withoutBorder: n.bool
};
export {
  Wo as default
};
//# sourceMappingURL=FormCombobox.mjs.map
