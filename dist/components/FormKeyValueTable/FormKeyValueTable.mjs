import { jsxDEV as e, Fragment as z } from "react/jsx-dev-runtime";
import "react";
import r from "prop-types";
import y from "classnames";
import { FieldArray as G } from "react-final-form-arrays";
import J from "../FormSelect/FormSelect.mjs";
import T from "../FormInput/FormInput.mjs";
import F from "../Tooltip/Tooltip.mjs";
import V from "../TooltipTemplate/TextTooltipTemplate.mjs";
import Q from "../../elements/FormActionButton/FormActionButton.mjs";
import K from "../../elements/FormRowActions/FormRowActions.mjs";
import "../../hooks/index.mjs";
import { INPUT_VALIDATION_RULES as v } from "../../types.mjs";
import { useFormTable as W } from "../../hooks/useFormTable.hook.mjs";
const X = ({
  actionButtonId: _ = "",
  addNewItemLabel: j = "Add new item",
  className: g = "",
  defaultKey: h = "",
  disabled: m = !1,
  exitEditModeTriggerItem: x = null,
  fieldsPath: n,
  formState: U,
  isKeyEditable: R = !0,
  isKeyRequired: w = !0,
  isValueRequired: k = !0,
  keyHeader: q = "Key",
  keyLabel: E = "Key",
  keyOptions: c = null,
  keyValidationRules: C = [],
  onExitEditModeCallback: A = () => {
  },
  valueHeader: I = "Value",
  valueLabel: L = "Value",
  valueType: t = "text",
  valueValidationRules: S = []
}) => {
  const D = y(
    "form-table form-key-value-table",
    m && "form-table_disabled",
    g
  ), {
    addNewRow: M,
    applyChanges: d,
    bottomScrollRef: O,
    deleteRow: b,
    discardOrDelete: f,
    editingItem: o,
    enterEditMode: $,
    isCurrentRowEditing: B
  } = W(U, x, A), H = (a, i) => !a.value.some(({ data: { key: s } }, l) => i.trim() === s.trim() && l !== o.ui.index), N = (a) => /* @__PURE__ */ e(F, { template: /* @__PURE__ */ e(V, { text: a }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
    lineNumber: 77,
    columnNumber: 31
  }, void 0), children: a }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
    lineNumber: 77,
    columnNumber: 12
  }, void 0);
  return /* @__PURE__ */ e("div", { className: D, "data-testid": n, children: [
    /* @__PURE__ */ e("div", { className: "form-table__row form-table__header-row no-hover", children: [
      /* @__PURE__ */ e("div", { className: "form-table__cell form-table__cell_1", children: q }, void 0, !1, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ e("div", { className: "form-table__cell form-table__cell_1", children: I }, void 0, !1, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
        lineNumber: 84,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ e("div", { className: "form-table__cell form-table__actions-cell" }, void 0, !1, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ e(G, { name: n, children: ({ fields: a }) => {
      var i;
      return /* @__PURE__ */ e(z, { children: [
        a.map((s, l) => {
          const p = y(
            "form-table__row",
            B(s) && "form-table__row_active"
          );
          return o && l === o.ui.index && !m ? /* @__PURE__ */ e("div", { className: p, children: [
            /* @__PURE__ */ e("div", { className: "form-table__cell form-table__cell_1", children: c ? /* @__PURE__ */ e(
              J,
              {
                name: `${s}.data.key`,
                density: "normal",
                options: c
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                lineNumber: 100,
                columnNumber: 23
              },
              void 0
            ) : R || o.ui.isNew ? /* @__PURE__ */ e(
              T,
              {
                className: "input_edit",
                placeholder: E,
                density: "normal",
                name: `${s}.data.key`,
                required: w,
                validationRules: [
                  ...C,
                  {
                    name: "uniqueness",
                    label: "Name must be unique",
                    pattern: (u) => H(a, u)
                  }
                ]
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                lineNumber: 106,
                columnNumber: 23
              },
              void 0
            ) : N(a.value[l].data.key) }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
              lineNumber: 98,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ e("div", { className: "form-table__cell form-table__cell_1", children: /* @__PURE__ */ e(
              T,
              {
                className: "input_edit",
                placeholder: L,
                density: "normal",
                name: `${s}.data.value`,
                type: t,
                required: k,
                validationRules: S
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                lineNumber: 126,
                columnNumber: 21
              },
              void 0
            ) }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
              lineNumber: 125,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ e(
              K,
              {
                applyChanges: d,
                deleteRow: b,
                discardOrDelete: f,
                editingItem: o,
                fieldsPath: n,
                index: l
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                lineNumber: 136,
                columnNumber: 19
              },
              void 0
            )
          ] }, l, !0, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
            lineNumber: 97,
            columnNumber: 17
          }, void 0) : /* @__PURE__ */ e(
            "div",
            {
              className: p,
              onClick: (u) => !m && $(u, a, n, l),
              children: [
                /* @__PURE__ */ e("div", { className: "form-table__cell form-table__cell_1", children: N(a.value[l].data.key) }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                  lineNumber: 151,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ e("div", { className: "form-table__cell form-table__cell_1", children: /* @__PURE__ */ e(
                  F,
                  {
                    template: /* @__PURE__ */ e(
                      V,
                      {
                        text: t === "password" ? null : a.value[l].data.value
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                        lineNumber: 157,
                        columnNumber: 25
                      },
                      void 0
                    ),
                    children: t === "password" ? "*****" : a.value[l].data.value
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                    lineNumber: 155,
                    columnNumber: 21
                  },
                  void 0
                ) }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                  lineNumber: 154,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ e(
                  K,
                  {
                    applyChanges: d,
                    deleteRow: b,
                    discardOrDelete: f,
                    editingItem: o,
                    fieldsPath: n,
                    index: l
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
                    lineNumber: 165,
                    columnNumber: 19
                  },
                  void 0
                )
              ]
            },
            l,
            !0,
            {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
              lineNumber: 146,
              columnNumber: 17
            },
            void 0
          );
        }),
        /* @__PURE__ */ e(
          Q,
          {
            ref: O,
            disabled: m,
            hidden: (i = o == null ? void 0 : o.ui) == null ? void 0 : i.isNew,
            fields: a,
            id: _,
            label: j,
            onClick: (...s) => M(...s, {
              data: {
                key: h || "",
                value: ""
              }
            }),
            fieldsPath: n
          },
          void 0,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
            lineNumber: 177,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, !0, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
        lineNumber: 89,
        columnNumber: 11
      }, void 0);
    } }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormKeyValueTable/FormKeyValueTable.jsx",
    lineNumber: 81,
    columnNumber: 5
  }, void 0);
};
X.propTypes = {
  actionButtonId: r.string,
  addNewItemLabel: r.string,
  className: r.string,
  defaultKey: r.string,
  disabled: r.bool,
  exitEditModeTriggerItem: r.any,
  fieldsPath: r.string.isRequired,
  formState: r.shape({}).isRequired,
  isKeyEditable: r.bool,
  isKeyRequired: r.bool,
  isValueRequired: r.bool,
  keyHeader: r.string,
  keyLabel: r.string,
  keyOptions: r.arrayOf(
    r.shape({
      label: r.string.isRequired,
      id: r.string.isRequired
    })
  ),
  keyValidationRules: v,
  onExitEditModeCallback: r.func,
  valueHeader: r.string,
  valueLabel: r.string,
  valueType: r.string,
  valueValidationRules: v
};
export {
  X as default
};
//# sourceMappingURL=FormKeyValueTable.mjs.map
