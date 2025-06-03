import { jsxDEV as l } from "react/jsx-dev-runtime";
import { useRef as S, useCallback as j, useLayoutEffect as z, useEffect as O, forwardRef as H } from "react";
import r from "prop-types";
import I from "classnames";
import { createPortal as $ } from "react-dom";
import { throttle as B } from "lodash";
import F from "../RoundedIcon/RoundedIcon.mjs";
import L from "../Tooltip/Tooltip.mjs";
import M from "../TooltipTemplate/TextTooltipTemplate.mjs";
import { POP_UP_CUSTOM_POSITION as k } from "../../types.mjs";
import V from "../../images/close.svg.mjs";
/* empty css                  */
let u = ({
  children: w,
  className: x = "",
  closePopUp: h = null,
  customPosition: i = {},
  headerIsHidden: _ = !1,
  headerText: b = "",
  isOpen: U = !0,
  onResolve: N = null,
  style: m = {},
  tooltipText: C = ""
}, t) => {
  const E = S(null);
  t ?? (t = E);
  const R = I(
    x,
    "pop-up-dialog__overlay",
    i.element && "custom-position"
  ), T = j(() => {
    h && h(), N && N();
  }, [h, N]), g = j(() => {
    var p;
    if ((p = i == null ? void 0 : i.element) != null && p.current && (t != null && t.current)) {
      const e = i.element.current.getBoundingClientRect(), o = t.current.getBoundingClientRect(), [P, y] = i.position.split("-"), n = 15, a = 5, f = e.right >= o.width + n, d = window.innerWidth - e.left >= o.width + n, v = e.top > o.height + n + a, D = e.bottom + o.height + n + a <= window.innerHeight;
      let s = y === "left" ? e.right - o.width : e.left, c;
      P === "top" ? c = v ? e.top - o.height - a : n : c = D ? e.bottom + a : window.innerHeight - o.height - n, i.autoVerticalPosition && (P === "top" ? !v && D && (c = e.bottom + a) : v && !D && (c = e.top - o.height - a)), i.autoHorizontalPosition && (P === "left" ? !f && d ? s = e.left : !f && !d && (s = n) : f && !d ? s = e.right - o.width : !f && !d && (s = window.innerWidth - o.width - n)), t.current.style.top = `${c}px`, m.left && !(i.autoHorizontalPosition && d) ? t.current.style.left = `calc(${s}px + ${m.left})` : t.current.style.left = `${s}px`;
    }
  }, [i, m.left, t]);
  return z(() => {
    g();
  }, [g]), O(() => {
    if (U) {
      const p = B(g, 100, {
        trailing: !0,
        leading: !0
      }), e = new ResizeObserver(p), o = t.current;
      return e.observe(o), window.addEventListener("resize", p), () => {
        e.unobserve(o), window.removeEventListener("resize", p);
      };
    }
  }, [g, t, U]), U ? $(
    /* @__PURE__ */ l("div", { ref: t, className: R, style: m, children: /* @__PURE__ */ l("div", { "data-testid": "pop-up-dialog", className: "pop-up-dialog", children: [
      !_ && /* @__PURE__ */ l("div", { className: "pop-up-dialog__header", children: [
        b && /* @__PURE__ */ l("div", { "data-testid": "pop-up-dialog-header", className: "pop-up-dialog__header-text", children: /* @__PURE__ */ l(L, { template: /* @__PURE__ */ l(M, { text: C || b }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
          lineNumber: 157,
          columnNumber: 40
        }, void 0), children: /* @__PURE__ */ l("span", { children: b }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
          lineNumber: 158,
          columnNumber: 23
        }, void 0) }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
          lineNumber: 157,
          columnNumber: 21
        }, void 0) }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
          lineNumber: 156,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ l(
          F,
          {
            className: "pop-up-dialog__btn_close",
            onClick: T,
            tooltipText: "Close",
            "data-testid": "pop-up-close-btn",
            children: /* @__PURE__ */ l(V, {}, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
              lineNumber: 168,
              columnNumber: 19
            }, void 0)
          },
          void 0,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
            lineNumber: 162,
            columnNumber: 17
          },
          void 0
        )
      ] }, void 0, !0, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
        lineNumber: 154,
        columnNumber: 15
      }, void 0),
      w
    ] }, void 0, !0, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
      lineNumber: 152,
      columnNumber: 11
    }, void 0) }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/PopUpDialog/PopUpDialog.jsx",
      lineNumber: 151,
      columnNumber: 9
    }, void 0),
    document.getElementById("overlay_container")
  ) : null;
};
u = H(u);
u.displayName = "PopUpDialog";
u.propTypes = {
  children: r.node.isRequired,
  className: r.string,
  closePopUp: r.func,
  customPosition: k,
  isOpen: r.bool,
  headerIsHidden: r.bool,
  headerText: r.string,
  onResolve: r.func,
  showPopUpDialog: r.bool,
  style: r.object,
  tooltipText: r.string
};
const te = u;
export {
  te as default
};
//# sourceMappingURL=PopUpDialog.mjs.map
