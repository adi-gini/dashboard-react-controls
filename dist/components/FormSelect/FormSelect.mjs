import { jsxDEV as r, Fragment as ce } from "react/jsx-dev-runtime";
import de, { useState as F, useRef as g, useCallback as u, useMemo as me, useEffect as j } from "react";
import t from "prop-types";
import L from "classnames";
import { useField as ue, Field as fe } from "react-final-form";
import be from "../ConfirmDialog/ConfirmDialog.mjs";
import pe from "../PopUpDialog/PopUpDialog.mjs";
import Ne from "../../elements/SelectOption/SelectOption.mjs";
import W from "../TooltipTemplate/TextTooltipTemplate.mjs";
import H from "../Tooltip/Tooltip.mjs";
import { SELECT_OPTIONS as he, DENSITY as ve } from "../../types.mjs";
import { TERTIARY_BUTTON as Se } from "../../constants.mjs";
import Fe from "../../images/dropdown.svg.mjs";
/* empty css                 */
let _ = ({
  className: M = "",
  density: Y = "normal",
  disabled: x = !1,
  hideSelectedOption: z = !1,
  label: k = "",
  multiple: c = !1,
  name: d,
  onChange: R = null,
  options: f,
  preventWidthOverflow: I = !1,
  required: G = !1,
  scrollToView: h = !0,
  search: p = !1,
  selectedItemAction: n = null,
  tooltip: $ = "",
  withSelectedIcon: J = !0,
  withoutBorder: K = !1
}) => {
  var q;
  const { input: o, meta: i } = ue(d), [Q, X] = F(!1), [P, v] = F(!1), [s, B] = F(!1), [N, D] = F(""), S = g(), Z = g(), b = g(), U = g(), { width: w } = ((q = b == null ? void 0 : b.current) == null ? void 0 : q.getBoundingClientRect()) || {}, A = L(
    "form-field__wrapper",
    `form-field__wrapper-${Y}`,
    x && "form-field__wrapper-disabled",
    s && "form-field__wrapper-active",
    Q && "form-field__wrapper-invalid",
    K && "without-border"
  ), ee = L(
    "form-field__label",
    x && "form-field__label-disabled"
  ), re = L(
    "form-field__select-value",
    !o.value && "form-field__select-placeholder"
  ), C = f.find((e) => e.id === o.value), O = u(
    (e) => e.filter((l) => !p || l.label.toLowerCase().includes(N.toLowerCase())),
    [p, N]
  ), oe = me(() => {
    if (h)
      return O(f);
    const e = [...f], l = e.filter((a, E, ae) => a.id === o.value ? (ae.splice(E, 1), !0) : !1);
    return O([...l, ...e]);
  }, [o.value, O, f, h]), le = () => {
    if (!o.value || !o.value.length)
      return `Select Option${c ? "s" : ""}`;
    const e = c && o.value.includes("all") && o.value.length > 1 ? f.filter((l) => l.id !== "all").filter((l) => o.value.includes(l.id)).map((l) => l.label).join(", ") : f.filter((l) => o.value.includes(l.id)).map((l) => l.label).join(", ");
    return c ? o.value.length <= 2 ? e : `${o.value.length} items selected` : C == null ? void 0 : C.label;
  };
  j(() => {
    X(
      i.invalid && (i.validating || i.modified || i.submitFailed && i.touched)
    );
  }, [i.invalid, i.modified, i.submitFailed, i.touched, i.validating]);
  const te = u(() => {
    s || (B(!0), o.onFocus(new Event("focus")));
  }, [o, s]), m = u(() => {
    s && (B(!1), o.onBlur(new Event("blur")));
  }, [o, s]), T = u(
    (e) => {
      b.current !== e.target.closest(".form-field-select") && m();
    },
    [m]
  ), y = u(
    (e) => {
      e.target.closest(".options-list__body") || m();
    },
    [m]
  );
  j(() => (s && window.addEventListener("scroll", y, !0), window.addEventListener("click", T), () => {
    window.removeEventListener("click", T), window.removeEventListener("scroll", y, !0);
  }), [T, y, s]);
  const V = u(() => {
    const e = S.current.querySelector(
      `[data-custom-id="${o.value}"]`
    );
    e && (N ? S.current.scrollTo({ top: 0, left: 0, behavior: "smooth" }) : setTimeout(() => {
      e.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 0));
  }, [o.value, N]);
  j(() => {
    s && S.current && h && V();
  }, [s, V, h]), j(() => {
    s && p && U.current && U.current.focus();
  }, [s, p]);
  const se = () => {
    s ? m() : !x && te();
  }, ne = u(
    (e) => {
      e.stopPropagation(), !c && !e.target.classList.contains("disabled") && !e.target.closest(".options-list__search") && (m(), D(""));
    },
    [m, c]
  ), ie = (e, l) => {
    e !== o.value && (l.handler && l.handler(), R && R(e), setTimeout(() => {
      o.onChange(e);
    }));
  };
  return /* @__PURE__ */ r(fe, { name: d, validate: (e) => {
    if (G)
      return e ? void 0 : "Required";
  }, children: ({ input: e, meta: l }) => /* @__PURE__ */ r(
    H,
    {
      className: "select-tooltip",
      template: /* @__PURE__ */ r(W, { text: $ }, void 0, !1, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
        lineNumber: 263,
        columnNumber: 21
      }, void 0),
      hidden: !$,
      children: /* @__PURE__ */ r(
        "div",
        {
          "data-testid": d ? `${d}-form-field-select` : "form-field-select",
          ref: b,
          className: `form-field-select ${M}`,
          onClick: se,
          children: [
            k && /* @__PURE__ */ r("div", { className: ee, children: /* @__PURE__ */ r("label", { "data-testid": d ? `${d}-form-select-label` : "form-select-label", children: [
              k,
              l.error && /* @__PURE__ */ r("span", { className: "form-field__label-mandatory", children: " *" }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 276,
                columnNumber: 34
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
              lineNumber: 274,
              columnNumber: 17
            }, void 0) }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
              lineNumber: 273,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ r("div", { "data-testid": "select-header", className: A, children: [
              /* @__PURE__ */ r("div", { className: "form-field__control", children: !z && /* @__PURE__ */ r("div", { "data-testid": "selected-option", className: "form-field__select", children: /* @__PURE__ */ r("span", { className: re, children: le() }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 284,
                columnNumber: 21
              }, void 0) }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 283,
                columnNumber: 19
              }, void 0) }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 281,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ r("div", { className: "form-field__icons", children: [
                e.value && n && /* @__PURE__ */ r(ce, { children: n.handler ? /* @__PURE__ */ r(H, { template: /* @__PURE__ */ r(W, { text: n.tooltip }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                  lineNumber: 292,
                  columnNumber: 42
                }, void 0), children: /* @__PURE__ */ r(
                  "button",
                  {
                    onClick: (a) => {
                      n.confirm ? v(!0) : n.handler(e.value), a.stopPropagation();
                    },
                    children: n.icon
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                    lineNumber: 293,
                    columnNumber: 25
                  },
                  void 0
                ) }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                  lineNumber: 292,
                  columnNumber: 23
                }, void 0) : /* @__PURE__ */ r("span", { children: n.icon }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                  lineNumber: 308,
                  columnNumber: 23
                }, void 0) }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                  lineNumber: 290,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ r("span", { children: /* @__PURE__ */ r(Fe, { className: "form-field__caret" }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                  lineNumber: 313,
                  columnNumber: 19
                }, void 0) }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                  lineNumber: 312,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 288,
                columnNumber: 15
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
              lineNumber: 280,
              columnNumber: 13
            }, void 0),
            P && /* @__PURE__ */ r(
              be,
              {
                cancelButton: {
                  handler: () => {
                    v(!1);
                  },
                  label: "Cancel",
                  variant: Se
                },
                closePopUp: () => {
                  v(!1);
                },
                confirmButton: {
                  handler: () => {
                    n.handler(e.value), v(!1);
                  },
                  label: n.confirm.btnConfirmLabel,
                  variant: n.confirm.btnConfirmType
                },
                header: n.confirm.title,
                isOpen: P,
                message: n.confirm.message
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 318,
                columnNumber: 15
              },
              void 0
            ),
            s && /* @__PURE__ */ r(
              pe,
              {
                className: "form-field form-field-select__options-list",
                headerIsHidden: !0,
                ref: Z,
                customPosition: {
                  element: b,
                  position: "bottom-right",
                  autoHorizontalPosition: !0
                },
                style: {
                  maxWidth: `${w < 500 && !I ? 500 : w}px`,
                  minWidth: `${w}px`
                },
                children: /* @__PURE__ */ r(
                  "div",
                  {
                    "data-testid": "select-body",
                    className: "options-list__body",
                    onClick: ne,
                    children: [
                      p && /* @__PURE__ */ r("div", { className: "options-list__search", children: /* @__PURE__ */ r(
                        "input",
                        {
                          type: "text",
                          placeholder: "Search...",
                          value: N,
                          onChange: (a) => D(a.target.value),
                          ref: U,
                          autoFocus: !0
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                          lineNumber: 364,
                          columnNumber: 23
                        },
                        void 0
                      ) }, void 0, !1, {
                        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                        lineNumber: 363,
                        columnNumber: 21
                      }, void 0),
                      /* @__PURE__ */ r("ul", { className: "options-list", ref: S, children: oe.map((a) => /* @__PURE__ */ r(
                        Ne,
                        {
                          item: a,
                          name: d,
                          onClick: (E) => {
                            ie(E, a);
                          },
                          multiple: c,
                          selectedId: c ? "" : e.value,
                          withSelectedIcon: J
                        },
                        a.id,
                        !1,
                        {
                          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                          lineNumber: 377,
                          columnNumber: 25
                        },
                        void 0
                      )) }, void 0, !1, {
                        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                        lineNumber: 374,
                        columnNumber: 19
                      }, void 0)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                    lineNumber: 357,
                    columnNumber: 17
                  },
                  void 0
                )
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
                lineNumber: 343,
                columnNumber: 15
              },
              void 0
            ),
            /* @__PURE__ */ r("input", { ...e, type: "hidden" }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
              lineNumber: 394,
              columnNumber: 13
            }, void 0)
          ]
        },
        void 0,
        !0,
        {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
          lineNumber: 266,
          columnNumber: 11
        },
        void 0
      )
    },
    void 0,
    !1,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
      lineNumber: 261,
      columnNumber: 9
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormSelect/FormSelect.jsx",
    lineNumber: 259,
    columnNumber: 5
  }, void 0);
};
_.propTypes = {
  className: t.string,
  density: ve,
  disabled: t.bool,
  hideSelectedOption: t.bool,
  label: t.string,
  multiple: t.bool,
  name: t.string.isRequired,
  onChange: t.func,
  options: he.isRequired,
  preventWidthOverflow: t.bool,
  required: t.bool,
  scrollToView: t.bool,
  search: t.bool,
  selectedItemAction: t.object,
  tooltip: t.string,
  withSelectedIcon: t.bool,
  withoutBorder: t.bool
};
_ = de.memo(_);
const Pe = _;
export {
  Pe as default
};
//# sourceMappingURL=FormSelect.mjs.map
