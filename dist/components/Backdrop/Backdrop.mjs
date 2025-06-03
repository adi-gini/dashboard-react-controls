import { jsxDEV as e } from "react/jsx-dev-runtime";
import { useRef as a } from "react";
import o from "prop-types";
import { CSSTransition as i } from "react-transition-group";
/* empty css               */
const c = ({ duration: n = 300, show: s = !1, onClose: t = null }) => {
  const r = a(null);
  return /* @__PURE__ */ e(
    i,
    {
      nodeRef: r,
      in: s,
      timeout: n,
      classNames: "backdrop-transition",
      mountOnEnter: !0,
      unmountOnExit: !0,
      children: /* @__PURE__ */ e("div", { className: "backdrop", onClick: t, ref: r }, void 0, !1, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Backdrop/Backdrop.jsx",
        lineNumber: 35,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    !1,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Backdrop/Backdrop.jsx",
      lineNumber: 27,
      columnNumber: 5
    },
    void 0
  );
};
c.propTypes = {
  duration: o.number,
  onClose: o.func,
  show: o.bool
};
export {
  c as default
};
//# sourceMappingURL=Backdrop.mjs.map
