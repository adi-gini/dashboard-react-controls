import { jsxDEV as l } from "react/jsx-dev-runtime";
import "react";
import s from "prop-types";
import u from "classnames";
import b from "../../components/FormCheckBox/FormCheckBox.mjs";
import o from "../../components/Tooltip/Tooltip.mjs";
import i from "../../components/TooltipTemplate/TextTooltipTemplate.mjs";
import { SELECT_OPTION as p } from "../../types.mjs";
import N from "../../images/checkmark.svg.mjs";
/* empty css                   */
const f = ({
  item: e,
  name: a,
  onClick: c = () => {
  },
  multiple: t = !1,
  selectedId: d,
  withSelectedIcon: m = !0
}) => {
  var n;
  const r = u(
    "select__item",
    t && "multiple",
    e.hidden && "hidden",
    e.disabled && "disabled"
  );
  return t ? /* @__PURE__ */ l("div", { "data-testid": "select-checkbox", className: r, children: /* @__PURE__ */ l(
    b,
    {
      name: a,
      value: e.id,
      label: e.label,
      disabled: e.disabled || !1,
      children: e.status && /* @__PURE__ */ l("span", { className: `state-${e.status}-job status` }, void 0, !1, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
        lineNumber: 55,
        columnNumber: 27
      }, void 0)
    },
    void 0,
    !1,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
      lineNumber: 49,
      columnNumber: 9
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
    lineNumber: 48,
    columnNumber: 7
  }, void 0) : /* @__PURE__ */ l(
    "li",
    {
      "data-testid": "select-option",
      className: r,
      onClick: () => {
        !e.disabled && c(e.id);
      },
      "data-custom-id": e.id,
      children: /* @__PURE__ */ l("div", { className: "label-row", children: [
        /* @__PURE__ */ l("div", { className: "data-ellipsis select__item-label", children: [
          /* @__PURE__ */ l("div", { className: "select__item-main-label", children: [
            e.icon && /* @__PURE__ */ l("span", { "data-testid": "select-icon", className: "select__item-icon", children: e.icon }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
              lineNumber: 74,
              columnNumber: 15
            }, void 0),
            e.status && /* @__PURE__ */ l("span", { className: `state-${e.status}-job status` }, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
              lineNumber: 78,
              columnNumber: 29
            }, void 0),
            /* @__PURE__ */ l(
              o,
              {
                renderChildAsHtml: ((n = e.labelHtml) == null ? void 0 : n.length) > 0,
                template: /* @__PURE__ */ l(i, { text: e.label }, void 0, !1, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
                  lineNumber: 81,
                  columnNumber: 25
                }, void 0),
                children: e.labelHtml ? e.labelHtml : e.label
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
                lineNumber: 79,
                columnNumber: 13
              },
              void 0
            )
          ] }, void 0, !0, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
            lineNumber: 72,
            columnNumber: 11
          }, void 0),
          e.subLabel && /* @__PURE__ */ l(
            o,
            {
              className: "select__item-sub-label",
              template: /* @__PURE__ */ l(i, { text: e.subLabel }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
                lineNumber: 89,
                columnNumber: 25
              }, void 0),
              children: /* @__PURE__ */ l("span", { children: e.subLabel }, void 0, !1, {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
                lineNumber: 91,
                columnNumber: 15
              }, void 0)
            },
            void 0,
            !1,
            {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
              lineNumber: 87,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, !0, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
          lineNumber: 71,
          columnNumber: 9
        }, void 0),
        m && e.id === d && /* @__PURE__ */ l(N, { className: "checkmark" }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
          lineNumber: 95,
          columnNumber: 56
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
        lineNumber: 70,
        columnNumber: 7
      }, void 0)
    },
    void 0,
    !1,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/elements/SelectOption/SelectOption.jsx",
      lineNumber: 62,
      columnNumber: 5
    },
    void 0
  );
};
f.propTypes = {
  name: s.string.isRequired,
  item: p.isRequired,
  onClick: s.func,
  multiple: s.bool,
  selectedId: s.string,
  withSelectedIcon: s.bool
};
export {
  f as default
};
//# sourceMappingURL=SelectOption.mjs.map
