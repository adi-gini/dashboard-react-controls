import { jsxDEV as e, Fragment as u } from "react/jsx-dev-runtime";
import "react";
import r from "prop-types";
import l from "../../components/RoundedIcon/RoundedIcon.mjs";
import { FORM_TABLE_EDITING_ITEM as A } from "../../types.mjs";
import F from "../../images/close.svg.mjs";
import j from "../../images/edit.svg.mjs";
import b from "../../images/delete.svg.mjs";
import h from "../../images/checkmark2.svg.mjs";
const v = ({
  applyChanges: f,
  deleteButtonIsHidden: N = !1,
  deleteRow: p,
  disabled: i = !1,
  discardOrDelete: R,
  editingItem: o = null,
  fieldsPath: c,
  hidden: w = !1,
  index: n
}) => {
  var t, m, d, a;
  return w ? /* @__PURE__ */ e("div", { className: "form-table__cell form-table__actions-cell" }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, void 0) : /* @__PURE__ */ e("div", { className: "form-table__cell form-table__actions-cell", children: [
    ((t = o == null ? void 0 : o.ui) == null ? void 0 : t.index) === n && /* @__PURE__ */ e(u, { children: [
      /* @__PURE__ */ e(
        l,
        {
          id: "apply-btn",
          onClick: (s) => f(s, n),
          tooltipText: "Apply",
          disabled: i,
          children: /* @__PURE__ */ e(h, {}, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
            lineNumber: 55,
            columnNumber: 13
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
          lineNumber: 49,
          columnNumber: 11
        },
        void 0
      ),
      /* @__PURE__ */ e(
        l,
        {
          id: "delete-discard-btn",
          onClick: (s) => R(s, c, n),
          tooltipText: (m = o.ui) != null && m.isNew ? "Delete" : "Discard changes",
          disabled: i,
          children: (d = o.ui) != null && d.isNew ? /* @__PURE__ */ e(b, {}, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
            lineNumber: 63,
            columnNumber: 38
          }, void 0) : /* @__PURE__ */ e(F, {}, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
            lineNumber: 63,
            columnNumber: 51
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
          lineNumber: 57,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, void 0),
    (!o || ((a = o == null ? void 0 : o.ui) == null ? void 0 : a.index) !== n) && /* @__PURE__ */ e(u, { children: [
      /* @__PURE__ */ e(
        l,
        {
          id: "edit-btn",
          onClick: (s) => {
            s.preventDefault();
          },
          tooltipText: "Edit",
          disabled: i,
          children: /* @__PURE__ */ e(j, {}, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
            lineNumber: 77,
            columnNumber: 13
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
          lineNumber: 69,
          columnNumber: 11
        },
        void 0
      ),
      !N && /* @__PURE__ */ e(
        l,
        {
          id: "delete-btn",
          onClick: (s) => {
            p(s, c, n);
          },
          tooltipText: "Delete",
          disabled: i,
          children: /* @__PURE__ */ e(b, {}, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
            lineNumber: 89,
            columnNumber: 15
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
          lineNumber: 81,
          columnNumber: 13
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
      lineNumber: 68,
      columnNumber: 9
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/FormRowActions/FormRowActions.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, void 0);
};
v.propTypes = {
  applyChanges: r.func.isRequired,
  deleteButtonIsHidden: r.bool,
  deleteRow: r.func.isRequired,
  disabled: r.bool,
  discardOrDelete: r.func.isRequired,
  editingItem: A,
  fieldsPath: r.string.isRequired,
  hidden: r.bool,
  index: r.number.isRequired
};
export {
  v as default
};
//# sourceMappingURL=FormRowActions.mjs.map
