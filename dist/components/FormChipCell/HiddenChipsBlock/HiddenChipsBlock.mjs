import { jsxDEV as i, Fragment as n } from "react/jsx-dev-runtime";
import { useEffect as N, forwardRef as f } from "react";
import { createPortal as k } from "react-dom";
import l from "prop-types";
import c from "classnames";
import B from "../../Tooltip/Tooltip.mjs";
import H from "../../TooltipTemplate/TextTooltipTemplate.mjs";
import { CHIP_OPTIONS as j } from "../../../types.mjs";
import "../../../hooks/index.mjs";
import { useHiddenChipsBlock as v } from "../../../hooks/useHiddenChipsBlock.hook.mjs";
let r = ({ chipClassNames: a, chipOptions: m, chips: o, handleShowElements: t, textOverflowEllipsis: s = !1 }, { hiddenChipsCounterRef: p, hiddenChipsPopUpRef: d }) => {
  const { hiddenChipsBlockClassNames: u } = v(
    p,
    d
  ), h = c("chip__label", s && "data-ellipsis"), C = c(
    "chip__value",
    s && "data-ellipsis",
    m.boldValue && "chip-value_bold"
  ), b = (e) => e.isKeyOnly ? e.key : `${e.key}${e.delimiter ? e.delimiter : ":"} ${e.value}`;
  return N(() => {
    o.length === 0 && t();
  }), k(
    /* @__PURE__ */ i(
      "div",
      {
        ref: d,
        className: u,
        onClick: (e) => e.stopPropagation(),
        children: /* @__PURE__ */ i("div", { className: "chip-block-hidden__scrollable-container", children: o == null ? void 0 : o.map((e) => /* @__PURE__ */ i(
          B,
          {
            template: /* @__PURE__ */ i(
              H,
              {
                text: e.delimiter ? /* @__PURE__ */ i("span", { className: "chip__content", children: [
                  e.key,
                  !e.isKeyOnly && /* @__PURE__ */ i(n, { children: [
                    /* @__PURE__ */ i("span", { className: "chip__delimiter", children: e.delimiter }, void 0, !1, {
                      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                      lineNumber: 75,
                      columnNumber: 29
                    }, void 0),
                    e.value
                  ] }, void 0, !0, {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                    lineNumber: 74,
                    columnNumber: 27
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                  lineNumber: 71,
                  columnNumber: 23
                }, void 0) : b(e)
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                lineNumber: 68,
                columnNumber: 17
              },
              void 0
            ),
            children: /* @__PURE__ */ i("div", { className: a, children: [
              e.key && /* @__PURE__ */ i("div", { className: h, children: e.key }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                lineNumber: 88,
                columnNumber: 33
              }, void 0),
              e.value && /* @__PURE__ */ i(n, { children: [
                /* @__PURE__ */ i("div", { className: "chip__delimiter", children: e.delimiter ?? ":" }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                  lineNumber: 91,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ i("div", { className: C, children: e.value }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                  lineNumber: 92,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
                lineNumber: 90,
                columnNumber: 19
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
              lineNumber: 87,
              columnNumber: 15
            }, void 0)
          },
          e.id,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
            lineNumber: 65,
            columnNumber: 13
          },
          void 0
        )) }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
          lineNumber: 62,
          columnNumber: 7
        }, void 0)
      },
      void 0,
      !1,
      {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/HiddenChipsBlock/HiddenChipsBlock.jsx",
        lineNumber: 57,
        columnNumber: 5
      },
      void 0
    ),
    document.getElementById("overlay_container")
  );
};
r = f(r);
r.displayName = "HiddenChipsBlock";
r.propTypes = {
  chipClassNames: l.string.isRequired,
  chipOptions: j.isRequired,
  chips: l.array.isRequired,
  handleShowElements: l.func.isRequired,
  textOverflowEllipsis: l.bool
};
const P = r;
export {
  P as default
};
//# sourceMappingURL=HiddenChipsBlock.mjs.map
