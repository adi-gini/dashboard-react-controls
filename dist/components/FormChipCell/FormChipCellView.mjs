import { jsxDEV as o, Fragment as D } from "react/jsx-dev-runtime";
import { forwardRef as B } from "react";
import r from "prop-types";
import p from "classnames";
import { FieldArray as K } from "react-final-form-arrays";
import { isEmpty as M } from "lodash";
import G from "./FormChip/FormChip.mjs";
import J from "./HiddenChipsBlock/HiddenChipsBlock.mjs";
import L from "../TooltipTemplate/TextTooltipTemplate.mjs";
import Q from "../Tooltip/Tooltip.mjs";
import { CHIP_OPTIONS as W } from "../../types.mjs";
import { isEveryObjectValueEmpty as X } from "../../utils/common.util.mjs";
import { uniquenessError as w } from "./formChipCell.util.mjs";
import Y from "../../images/add.svg.mjs";
let m = ({
  chipOptions: e = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  chipSizeIsRecalculated: b,
  setChipSizeIsRecalculated: _,
  chips: n,
  editConfig: h,
  handleAddNewChip: y,
  handleEditChip: V,
  handleRemoveChip: x,
  handleShowElements: C,
  handleToEditMode: R,
  isEditable: l = !1,
  name: f,
  setChipsSizes: k,
  setEditConfig: q,
  shortChips: U = !1,
  showChips: $,
  showHiddenChips: T,
  validateFields: E,
  validationRules: a = {}
}, { chipsCellRef: N, chipsWrapperRef: S, hiddenChipsCounterRef: F, hiddenChipsPopUpRef: A }) => {
  const H = p(
    "button-add",
    e.background && `button-add-background_${e.background}`,
    e.borderColor && `button-add-border_${e.borderColor}`,
    e.font && `button-add-font_${e.font}`,
    e.density && `button-add-density_${e.density}`
  ), I = p(
    "chips-wrapper",
    l && "fixed-max-width",
    !b && "chip_invisible"
  ), j = p(
    "chip",
    "chip__content",
    l && "data-ellipsis",
    U && "chip_short",
    n.hiddenChips && "chip_hidden",
    e.density && `chip-density_${e.density}`,
    e.borderRadius && `chip-border_${e.borderRadius}`,
    e.background && `chip-background_${e.background}`,
    e.borderColor && `chip-border_${e.borderColor}`,
    e.font && `chip-font_${e.font}`,
    l && "editable",
    ($ || l) && "chip_visible"
  );
  return /* @__PURE__ */ o(K, { name: f, validate: E, children: ({ fields: d, meta: P }) => {
    let v = { ...a };
    return !M(a) && a.key.every((s) => s.name !== w.name) && (v = {
      ...a,
      key: [...a.key, w]
    }), (l || !X(d)) && /* @__PURE__ */ o("div", { className: "chips-cell", ref: N, children: /* @__PURE__ */ o("div", { className: I, ref: S, children: [
      d.map((s, c) => {
        var g;
        const i = d.value[c];
        return c < ((g = n.visibleChips) == null ? void 0 : g.length) && /* @__PURE__ */ o("div", { className: "chip-block", children: /* @__PURE__ */ o(
          Q,
          {
            hidden: h.isEdit && !i.tooltip,
            template: /* @__PURE__ */ o(
              L,
              {
                text: i.tooltip || /* @__PURE__ */ o("span", { className: "chip__content", children: [
                  /* @__PURE__ */ o("span", { className: "chip__content-item", children: i.key }, void 0, !1, {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                    lineNumber: 125,
                    columnNumber: 37
                  }, void 0),
                  !i.isKeyOnly && /* @__PURE__ */ o(D, { children: [
                    /* @__PURE__ */ o("span", { className: "chip__delimiter", children: i.delimiter ? i.delimiter : ":" }, void 0, !1, {
                      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                      lineNumber: 128,
                      columnNumber: 41
                    }, void 0),
                    /* @__PURE__ */ o("span", { className: "chip__content-item", children: i.value }, void 0, !1, {
                      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                      lineNumber: 131,
                      columnNumber: 41
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                    lineNumber: 127,
                    columnNumber: 39
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                  lineNumber: 124,
                  columnNumber: 35
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                lineNumber: 121,
                columnNumber: 29
              },
              void 0
            ),
            children: /* @__PURE__ */ o(
              G,
              {
                chip: i,
                chipSizeIsRecalculated: b,
                setChipSizeIsRecalculated: _,
                chipIndex: c,
                chipOptions: e,
                editConfig: h,
                handleEditChip: (t, u, z) => V(t, d, u, z),
                handleRemoveChip: (t, u) => x(t, d, u),
                handleToEditMode: R,
                isEditable: l,
                keyName: `${s}.key`,
                meta: P,
                ref: N,
                setChipsSizes: k,
                setEditConfig: q,
                validationRules: v,
                valueName: `${s}.value`
              },
              void 0,
              !1,
              {
                fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
                lineNumber: 140,
                columnNumber: 27
              },
              void 0
            )
          },
          i.id,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
            lineNumber: 117,
            columnNumber: 25
          },
          void 0
        ) }, i.id, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
          lineNumber: 116,
          columnNumber: 23
        }, void 0);
      }),
      /* @__PURE__ */ o("div", { className: "chip-block", children: [
        n.hiddenChips.length > 0 && T && /* @__PURE__ */ o(
          J,
          {
            chipClassNames: j,
            chipOptions: e,
            chips: n.hiddenChips,
            handleShowElements: C,
            ref: { hiddenChipsCounterRef: F, hiddenChipsPopUpRef: A },
            textOverflowEllipsis: !0
          },
          void 0,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
            lineNumber: 171,
            columnNumber: 21
          },
          void 0
        ),
        n.hiddenChipsNumber && /* @__PURE__ */ o(
          "span",
          {
            ref: F,
            className: `${j} chips_button`,
            onClick: C,
            children: n.hiddenChipsNumber
          },
          void 0,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
            lineNumber: 181,
            columnNumber: 21
          },
          void 0
        )
      ] }, void 0, !0, {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
        lineNumber: 169,
        columnNumber: 17
      }, void 0),
      l && /* @__PURE__ */ o(
        "button",
        {
          "data-testid": `${f}-add-chip`,
          className: H,
          onClick: (s) => y(s, d),
          children: /* @__PURE__ */ o(Y, {}, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
            lineNumber: 197,
            columnNumber: 21
          }, void 0)
        },
        void 0,
        !1,
        {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
          lineNumber: 192,
          columnNumber: 19
        },
        void 0
      )
    ] }, void 0, !0, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
      lineNumber: 110,
      columnNumber: 15
    }, void 0) }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
      lineNumber: 109,
      columnNumber: 13
    }, void 0);
  } }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCellView.jsx",
    lineNumber: 93,
    columnNumber: 5
  }, void 0);
};
m = B(m);
m.displayName = "FormChipCellView";
m.propTypes = {
  chipOptions: W,
  chipSizeIsRecalculated: r.bool.isRequired,
  setChipSizeIsRecalculated: r.func.isRequired,
  chips: r.object.isRequired,
  editConfig: r.object.isRequired,
  formState: r.object.isRequired,
  handleAddNewChip: r.func.isRequired,
  handleEditChip: r.func.isRequired,
  handleRemoveChip: r.func.isRequired,
  handleShowElements: r.func.isRequired,
  handleToEditMode: r.func.isRequired,
  isEditable: r.bool,
  name: r.string.isRequired,
  setChipsSizes: r.func.isRequired,
  setEditConfig: r.func.isRequired,
  shortChips: r.bool,
  showChips: r.bool.isRequired,
  showHiddenChips: r.bool.isRequired,
  validateFields: r.func.isRequired,
  validationRules: r.object
};
const ue = m;
export {
  ue as default
};
//# sourceMappingURL=FormChipCellView.mjs.map
