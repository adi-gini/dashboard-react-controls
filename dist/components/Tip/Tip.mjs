import { jsxDEV as r } from "react/jsx-dev-runtime";
import { useState as v, useMemo as d, useRef as T, useCallback as S, useEffect as x } from "react";
import i from "prop-types";
import { CSSTransition as I } from "react-transition-group";
import j from "classnames";
import { createPortal as M } from "react-dom";
import { getScssVariableValue as u } from "../../utils/common.util.mjs";
import O from "../../images/question-mark.svg.mjs";
import U from "../../images/exclamation-mark.svg.mjs";
/* empty css          */
const $ = ({ className: w = "", text: f, withExclamationMark: E = !1 }) => {
  const [n, h] = v(!1), [_, L] = v("tip_top tip_left"), t = d(() => parseInt(u("--tipArrowLength")), []), s = d(() => parseInt(u("--tipArrowOffset")), []), l = d(() => parseInt(u("--tipIconLength")), []), y = 40, a = T(), o = T(), C = j(w, "tip-container"), R = j(
    "tip",
    _,
    f.length <= y ? "tip_small" : "tip_big"
  ), p = S(() => {
    h(!0);
  }, []);
  x(() => {
    if (n) {
      const e = a.current.getBoundingClientRect(), c = o.current.getBoundingClientRect(), g = e.left > c.width - s ? "tip_left" : "tip_right", N = e.top > c.height + t ? "tip_top" : "tip_bottom";
      if (L(`${N} ${g}`), g === "tip_left") {
        const m = s + (l + t) / 2;
        o.current.style.left = `${e.left - (c.width - m)}px`;
      } else {
        const m = s - (l - t) / 2;
        o.current.style.left = `${e.left - m}px`;
      }
      o.current.style.top = N === "tip_top" ? `${e.top - c.height - t}px` : `${e.bottom + t}px`;
    }
  }, [t, s, l, n]);
  const b = () => {
    h(!1);
  };
  return x(() => {
    const e = a.current;
    if (a.current)
      return e.addEventListener("mouseenter", p), e.addEventListener("mouseleave", b), () => {
        e.removeEventListener("mouseenter", p), e.removeEventListener("mouseleave", b);
      };
  }, [p, n]), /* @__PURE__ */ r("div", { "data-testid": "tip", className: C, children: [
    /* @__PURE__ */ r("div", { ref: a, className: "tip-wrapper", children: E ? /* @__PURE__ */ r(U, { "data-testid": "tip-icon" }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Tip/Tip.jsx",
      lineNumber: 100,
      columnNumber: 11
    }, void 0) : /* @__PURE__ */ r(O, { "data-testid": "tip-icon" }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Tip/Tip.jsx",
      lineNumber: 102,
      columnNumber: 11
    }, void 0) }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Tip/Tip.jsx",
      lineNumber: 98,
      columnNumber: 7
    }, void 0),
    M(
      /* @__PURE__ */ r(
        I,
        {
          nodeRef: o,
          in: n,
          timeout: 200,
          classNames: "fade",
          unmountOnExit: !0,
          children: /* @__PURE__ */ r("div", { ref: o, "data-testid": "tip-text", className: R, children: f }, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Tip/Tip.jsx",
            lineNumber: 113,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Tip/Tip.jsx",
          lineNumber: 106,
          columnNumber: 9
        },
        void 0
      ),
      document.getElementById("overlay_container")
    )
  ] }, void 0, !0, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Tip/Tip.jsx",
    lineNumber: 97,
    columnNumber: 5
  }, void 0);
};
$.propTypes = {
  className: i.string,
  text: i.oneOfType([i.string, i.element]).isRequired,
  withExclamationMark: i.bool
};
export {
  $ as default
};
//# sourceMappingURL=Tip.mjs.map
