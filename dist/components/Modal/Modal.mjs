import { jsxDEV as e, Fragment as p } from "react/jsx-dev-runtime";
import { useRef as h } from "react";
import o from "prop-types";
import { CSSTransition as M } from "react-transition-group";
import j from "classnames";
import v from "../Backdrop/Backdrop.mjs";
import g from "../RoundedIcon/RoundedIcon.mjs";
import { MODAL_MD as x } from "../../constants.mjs";
import { MODAL_SIZES as _ } from "../../types.mjs";
import U from "../../images/close.svg.mjs";
/* empty css            */
const y = ({
  actions: r = [],
  children: m,
  className: c = "",
  noHeader: t = !1,
  onClose: a,
  previewText: l = "",
  show: d = !1,
  size: s = x,
  subTitle: n = null,
  title: u = ""
}) => {
  const i = h(null), b = j("modal", c, s && `modal-${s}`);
  return /* @__PURE__ */ e(p, { children: [
    /* @__PURE__ */ e(v, { onClose: a, show: d }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ e(
      M,
      {
        nodeRef: i,
        in: d,
        timeout: 300,
        classNames: "modal-transition",
        unmountOnExit: !0,
        children: /* @__PURE__ */ e("div", { className: b, "data-testid": "modal", ref: i, children: [
          /* @__PURE__ */ e("div", { className: "modal__header-button", children: /* @__PURE__ */ e(g, { "data-testid": "pop-up-close-btn", onClick: a, tooltipText: "Close", children: /* @__PURE__ */ e(U, {}, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
            lineNumber: 60,
            columnNumber: 15
          }, void 0) }, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
            lineNumber: 59,
            columnNumber: 13
          }, void 0) }, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
            lineNumber: 58,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ e("div", { className: "modal__content", children: [
            !t && /* @__PURE__ */ e("div", { className: "modal__header", children: [
              l && /* @__PURE__ */ e("div", { className: "modal__header-preview-text", children: l }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
                lineNumber: 66,
                columnNumber: 33
              }, void 0),
              /* @__PURE__ */ e("h5", { className: "modal__header-title", children: u }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
                lineNumber: 67,
                columnNumber: 17
              }, void 0),
              n && /* @__PURE__ */ e("h6", { className: "modal__header-sub-title", children: n }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
                lineNumber: 68,
                columnNumber: 30
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
              lineNumber: 65,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ e("div", { className: "modal__body", children: m }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
              lineNumber: 71,
              columnNumber: 13
            }, void 0),
            r && r.length > 0 && /* @__PURE__ */ e("div", { className: "modal__footer", children: /* @__PURE__ */ e("div", { className: "modal__footer-actions", children: r.map((f, N) => /* @__PURE__ */ e("div", { children: f }, N, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
              lineNumber: 76,
              columnNumber: 21
            }, void 0)) }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
              lineNumber: 74,
              columnNumber: 17
            }, void 0) }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
              lineNumber: 73,
              columnNumber: 15
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
            lineNumber: 63,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
          lineNumber: 57,
          columnNumber: 9
        }, void 0)
      },
      void 0,
      !1,
      {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
        lineNumber: 50,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, !0, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Modal/Modal.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, void 0);
};
y.propTypes = {
  actions: o.array,
  children: o.oneOfType([
    o.element,
    o.object,
    o.node,
    o.string
  ]).isRequired,
  className: o.string,
  noHeader: o.bool,
  onClose: o.func.isRequired,
  previewText: o.string,
  show: o.bool,
  size: _,
  subTitle: o.string,
  title: o.string
};
export {
  y as default
};
//# sourceMappingURL=Modal.mjs.map
