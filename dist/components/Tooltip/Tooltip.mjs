import { jsxDEV as c, Fragment as V } from "react/jsx-dev-runtime";
import q, { useState as P, useRef as X, useCallback as k, useEffect as u } from "react";
import { createPortal as A } from "react-dom";
import i from "prop-types";
import { CSSTransition as F } from "react-transition-group";
import G from "classnames";
import { debounce as J } from "lodash";
import { isEveryObjectValueEmpty as K } from "../../utils/common.util.mjs";
/* empty css              */
let b = ({
  children: v = "",
  className: B = "",
  hidden: a = !1,
  id: l = "",
  renderChildAsHtml: M = !1,
  template: $,
  textShow: E = !1
}) => {
  const [s, p] = P(!1), [f, N] = P({}), w = G("data-ellipsis", "tooltip-wrapper", B), z = 200, t = X(), r = X(), o = 10, g = () => {
    p(!1);
  }, n = k(
    (e) => {
      (!r.current || a || r.current && !r.current.contains(e.relatedTarget) && t.current && !t.current.contains(e.relatedTarget)) && p(!1);
    },
    [a]
  ), m = k(
    (e) => {
      var y, j, x, L;
      if (!s) {
        const [d] = t.current.childNodes;
        let _ = !a && (E ? !0 : d ? d.nodeType !== Node.TEXT_NODE && ((j = (y = d.childNodes) == null ? void 0 : y[0]) == null ? void 0 : j.nodeType) !== Node.TEXT_NODE || /*
          If the child node is a text node and the text of the child node inside the container is greater than the width of the container, then show tooltip.
        */
        (d.nodeType === Node.TEXT_NODE || ((L = (x = d.childNodes) == null ? void 0 : x[0]) == null ? void 0 : L.nodeType) === Node.TEXT_NODE) && t.current.scrollWidth > t.current.offsetWidth : !1);
        p(_), setTimeout(() => {
          var C, S;
          if (_) {
            let { height: T, top: O, bottom: I } = ((C = t == null ? void 0 : t.current) == null ? void 0 : C.getBoundingClientRect()) ?? {};
            const { height: R, width: D } = ((S = r.current) == null ? void 0 : S.getBoundingClientRect()) ?? {
              height: 0,
              width: 0
            }, U = e.x - (e.x + D - window.innerWidth + o), W = e.x + D + o > window.innerWidth ? U > o ? U : o : e.x + o;
            if (O + T + o + R >= window.innerHeight) {
              const H = I - T - o - R;
              N({
                top: H > 0 ? H : o,
                left: W
              });
            } else
              N({
                top: O + T + o,
                left: W
              });
          }
        }, 0);
      }
    },
    [a, E, s]
  ), h = J(() => {
    K(f) || N({});
  }, 100);
  return u(() => {
    const e = t.current;
    if (e)
      return e.addEventListener("mouseenter", m), e.addEventListener("mouseleave", n), () => {
        e.removeEventListener("mouseenter", m), e.removeEventListener("mouseleave", n);
      };
  }, [t, m, n]), u(() => {
    const e = r.current;
    if (e && s)
      return e.addEventListener("mouseleave", n), () => {
        e.removeEventListener("mouseleave", n);
      };
  }, [r, m, n, s]), u(() => (s && window.addEventListener("scroll", g, !0), () => window.removeEventListener("scroll", g, !0)), [s]), u(() => (window.addEventListener("resize", h), () => {
    window.removeEventListener("resize", h);
  }), [h, f]), /* @__PURE__ */ c(V, { children: [
    M ? /* @__PURE__ */ c(
      "div",
      {
        "data-testid": l ? `${l}-tooltip-wrapper` : "tooltip-wrapper",
        ref: t,
        className: w,
        dangerouslySetInnerHTML: { __html: v },
        onClick: n
      },
      void 0,
      !1,
      {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Tooltip/Tooltip.jsx",
        lineNumber: 174,
        columnNumber: 9
      },
      void 0
    ) : /* @__PURE__ */ c(
      "div",
      {
        "data-testid": l ? `${l}-tooltip-wrapper` : "tooltip-wrapper",
        ref: t,
        className: w,
        onClick: n,
        children: v
      },
      void 0,
      !1,
      {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Tooltip/Tooltip.jsx",
        lineNumber: 182,
        columnNumber: 9
      },
      void 0
    ),
    !a && A(
      /* @__PURE__ */ c(
        F,
        {
          nodeRef: r,
          classNames: "fade",
          in: s,
          timeout: z,
          unmountOnExit: !0,
          children: /* @__PURE__ */ c(
            "div",
            {
              "data-testid": l ? `${l}-tooltip` : "tooltip",
              ref: r,
              style: {
                ...f
              },
              className: "tooltip",
              children: $
            },
            void 0,
            !1,
            {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Tooltip/Tooltip.jsx",
              lineNumber: 200,
              columnNumber: 13
            },
            void 0
          )
        },
        void 0,
        !1,
        {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Tooltip/Tooltip.jsx",
          lineNumber: 193,
          columnNumber: 11
        },
        void 0
      ),
      document.getElementById("overlay_container")
    )
  ] }, void 0, !0, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Tooltip/Tooltip.jsx",
    lineNumber: 172,
    columnNumber: 5
  }, void 0);
};
b.propTypes = {
  children: i.any,
  className: i.string,
  hidden: i.bool,
  id: i.string,
  renderChildAsHtml: i.bool,
  template: i.element.isRequired,
  textShow: i.bool
};
b = q.memo(b);
export {
  b as default
};
//# sourceMappingURL=Tooltip.mjs.map
