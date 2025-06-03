import { jsxDEV as i } from "react/jsx-dev-runtime";
import { useRef as d, forwardRef as a } from "react";
import n from "prop-types";
import { CSSTransition as c } from "react-transition-group";
import p from "../../components/PopUpDialog/PopUpDialog.mjs";
/* empty css                  */
let o = ({ children: t = [], show: r, timeout: m = 300 }, { refInputContainer: e, validationRulesRef: s }) => {
  const { width: l } = e != null && e.current ? e.current.getBoundingClientRect() : {}, u = d(null);
  return s ?? (s = u), /* @__PURE__ */ i(
    c,
    {
      nodeRef: s,
      in: r,
      timeout: m,
      classNames: "options-menu-transition",
      unmountOnExit: !0,
      children: /* @__PURE__ */ i(
        p,
        {
          ref: s,
          headerIsHidden: !0,
          className: "options-menu",
          customPosition: {
            element: e,
            position: "bottom-right",
            autoVerticalPosition: !0,
            autoHorizontalPosition: !0
          },
          style: { minWidth: `${l}px` },
          children: /* @__PURE__ */ i("ul", { className: "options-menu__body", children: t }, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/OptionsMenu/OptionsMenu.jsx",
            lineNumber: 55,
            columnNumber: 9
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/OptionsMenu/OptionsMenu.jsx",
          lineNumber: 43,
          columnNumber: 7
        },
        void 0
      )
    },
    void 0,
    !1,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/OptionsMenu/OptionsMenu.jsx",
      lineNumber: 36,
      columnNumber: 5
    },
    void 0
  );
};
o = a(o);
o.displayName = "OptionsMenu";
o.propTypes = {
  children: n.arrayOf(n.element),
  show: n.bool,
  timeout: n.number
};
const g = o;
export {
  g as default
};
//# sourceMappingURL=OptionsMenu.mjs.map
