import { jsxDEV as u } from "react/jsx-dev-runtime";
import F, { useLayoutEffect as j, forwardRef as y } from "react";
import e from "prop-types";
import v from "../NewChipForm/NewChipForm.mjs";
import { CHIP_OPTIONS as E } from "../../../types.mjs";
/* empty css               */
let i = ({
  chip: l,
  chipIndex: r,
  chipSizeIsRecalculated: s,
  setChipSizeIsRecalculated: a,
  chipOptions: m = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  editConfig: p,
  handleEditChip: c,
  handleRemoveChip: f,
  handleToEditMode: b,
  isEditable: h = !1,
  keyName: d = "",
  meta: C,
  setChipsSizes: o,
  setEditConfig: R,
  validationRules: q = {},
  valueName: N = ""
}, g) => {
  const t = F.useRef();
  return j(() => {
    t.current && o && s && o((n) => ({
      ...n,
      [r]: t.current.getBoundingClientRect().width
    }));
  }, [r, s, o]), /* @__PURE__ */ u("div", { onClick: (n) => b(n, r, d), ref: t, children: /* @__PURE__ */ u(
    v,
    {
      chip: l,
      chipIndex: r,
      chipOptions: m,
      className: "input-label-key",
      editConfig: p,
      handleRemoveChip: f,
      isEditable: h,
      keyName: d,
      meta: C,
      onChange: c,
      ref: g,
      setChipSizeIsRecalculated: a,
      setEditConfig: R,
      validationRules: q,
      valueName: N
    },
    void 0,
    !1,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChip/FormChip.jsx",
      lineNumber: 66,
      columnNumber: 7
    },
    void 0
  ) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChip/FormChip.jsx",
    lineNumber: 65,
    columnNumber: 5
  }, void 0);
};
i = y(i);
i.displayName = "FormChip";
i.propTypes = {
  chip: e.object.isRequired,
  chipSizeIsRecalculated: e.bool.isRequired,
  setChipSizeIsRecalculated: e.func.isRequired,
  chipIndex: e.number.isRequired,
  chipOptions: E,
  editConfig: e.object.isRequired,
  handleEditChip: e.func.isRequired,
  handleRemoveChip: e.func.isRequired,
  handleToEditMode: e.func.isRequired,
  isEditable: e.bool,
  keyName: e.string,
  meta: e.object.isRequired,
  setChipsSizes: e.func.isRequired,
  setEditConfig: e.func.isRequired,
  validationRules: e.object,
  valueName: e.string
};
const x = i;
export {
  x as default
};
//# sourceMappingURL=FormChip.mjs.map
