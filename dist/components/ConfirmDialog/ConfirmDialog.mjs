import { jsxDEV as o } from "react/jsx-dev-runtime";
import "react";
import e from "prop-types";
import D from "classnames";
import d from "../Button/Button.mjs";
import h from "../PopUpDialog/PopUpDialog.mjs";
import { CONFIRM_DIALOG_MESSAGE as _, CONFIRM_DIALOG_SUBMIT_BUTTON as j, CONFIRM_DIALOG_CANCEL_BUTTON as U } from "../../types.mjs";
/* empty css                    */
const v = ({
  cancelButton: r = null,
  children: n = null,
  className: c = "",
  closePopUp: s = null,
  confirmButton: i = null,
  customPosition: f = {},
  header: t = "",
  isOpen: b = !1,
  message: m = "",
  messageOnly: u = !1,
  onResolve: a = null
}) => {
  const g = D(
    "confirm-dialog__message",
    u && "confirm-dialog__message-only"
  ), p = (l) => {
    a && a(), r.handler && r.handler(l);
  }, N = (l) => {
    a && a(), s && s(l);
  }, C = (l) => {
    a && a(), i.handler && i.handler(l);
  };
  return b && /* @__PURE__ */ o(
    h,
    {
      className: c,
      closePopUp: N,
      customPosition: f,
      headerText: t,
      children: /* @__PURE__ */ o("div", { className: "confirm-dialog", children: [
        m && /* @__PURE__ */ o("div", { className: g, children: m }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
          lineNumber: 74,
          columnNumber: 23
        }, void 0),
        n && /* @__PURE__ */ o("div", { className: "confirm-dialog__body", children: n }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
          lineNumber: 75,
          columnNumber: 24
        }, void 0),
        /* @__PURE__ */ o("div", { className: "confirm-dialog__btn-container", children: [
          r && /* @__PURE__ */ o(
            d,
            {
              className: "pop-up-dialog__btn_cancel",
              label: r.label,
              onClick: p,
              variant: r.variant,
              disabled: r.disabled
            },
            void 0,
            !1,
            {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
              lineNumber: 78,
              columnNumber: 15
            },
            void 0
          ),
          i && /* @__PURE__ */ o(
            d,
            {
              label: i.label,
              onClick: C,
              variant: i.variant,
              disabled: i.disabled
            },
            void 0,
            !1,
            {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
              lineNumber: 87,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, !0, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
          lineNumber: 76,
          columnNumber: 11
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, void 0)
    },
    void 0,
    !1,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/ConfirmDialog/ConfirmDialog.jsx",
      lineNumber: 67,
      columnNumber: 7
    },
    void 0
  );
};
v.propTypes = {
  cancelButton: U,
  children: e.node,
  className: e.string,
  closePopUp: e.func,
  confirmButton: j,
  customPosition: e.object,
  header: e.string,
  isOpen: e.bool,
  message: _,
  messageOnly: e.bool,
  onResolve: e.func
};
export {
  v as default
};
//# sourceMappingURL=ConfirmDialog.mjs.map
