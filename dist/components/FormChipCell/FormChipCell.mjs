import { jsxDEV as b } from "react/jsx-dev-runtime";
import ue, { useState as K, useMemo as pe, useCallback as I } from "react";
import ce, { get as N, set as U, isEmpty as k, isNil as ae } from "lodash";
import de from "classnames";
import o from "prop-types";
import he from "./FormChipCellView.mjs";
import { CHIP_OPTIONS as fe } from "../../types.mjs";
import { CLICK as me, TAB as D, TAB_SHIFT as O } from "../../constants.mjs";
import { areArraysEqual as Ce } from "../../utils/common.util.mjs";
import { checkPatternsValidity as ge } from "../../utils/validation.util.mjs";
import { generateChipsList as Fe } from "../../utils/generateChipsList.util.mjs";
import { uniquenessError as H } from "./formChipCell.util.mjs";
import "../../hooks/index.mjs";
/* empty css                   */
import { useChipCell as Ie } from "../../hooks/useChipCell.hook.mjs";
let v = ({
  chipOptions: z = {
    background: "purple",
    boldValue: !1,
    borderRadius: "primary",
    borderColor: "transparent",
    density: "dense",
    font: "purple"
  },
  className: B = "",
  delimiter: P = null,
  formState: u,
  initialValues: x,
  isEditable: m = !1,
  label: V = null,
  name: n,
  onClick: R = () => {
  },
  shortChips: $ = !1,
  validationRules: w = {},
  validator: T = null,
  onExitEditModeCallback: h = null,
  visibleChipsMaxLength: g = null
}) => {
  const W = de("chips", B), [X, Y] = K(!1), {
    chipsCellRef: A,
    chipsWrapperRef: G,
    handleShowElements: J,
    hiddenChipsCounterRef: L,
    hiddenChipsPopUpRef: Q,
    setChipsSizes: Z,
    setShowHiddenChips: _,
    showChips: S,
    showHiddenChips: j,
    visibleChipsCount: q
  } = Ie(m, g), [p, C] = K({
    chipIndex: null,
    isEdit: !1,
    isKeyFocused: !1,
    isValueFocused: !1,
    isNewChip: !1
  });
  let E = pe(() => m || g === "all" ? {
    visibleChips: N(u.values, n),
    hiddenChips: []
  } : Fe(
    N(u.values, n),
    g || q
  ), [g, m, q, u.values, n]);
  const y = I(
    (e) => {
      Ce(N(x, n), e, ["id"]) && U(u.initialValues, n, e), u.form.mutators.setFieldState(n, { modified: !0 }), u.form.mutators.setFieldState(n, { touched: !0 });
    },
    [x, n, u]
  ), M = I(
    (e, i) => {
      var r;
      const t = ((r = i.value) == null ? void 0 : r.length) || 0;
      !p.isEdit && !p.chipIndex && u.form.mutators.push(n, {
        id: t + /* @__PURE__ */ new Date(),
        key: "",
        value: "",
        delimiter: P
      }), j && _(!1), C({
        chipIndex: t,
        isEdit: !0,
        isKeyFocused: !0,
        isValueFocused: !1,
        isNewChip: !0
      }), e && e.preventDefault();
    },
    [
      p.isEdit,
      p.chipIndex,
      j,
      u.form.mutators,
      n,
      P,
      _
    ]
  ), F = I(
    (e, i, t, r = !1) => {
      y(
        ce.chain(u).get(["values", n]).filter((s, l) => l !== t).value()
      ), i.remove(t), h && h(), e && !r && e.stopPropagation();
    },
    [y, u, n, h]
  ), ee = I(
    (e, i, t, r) => {
      const { key: s, value: l } = i.value[p.chipIndex], a = !!(s != null && s.trim() && (l != null && l.trim()));
      t === me ? (a || F(e, i, p.chipIndex, r), C({
        chipIndex: null,
        isEdit: !1,
        isKeyFocused: !1,
        isValueFocused: !1,
        isNewChip: !1
      }), a && h && h()) : t === D ? (a || F(e, i, p.chipIndex), C((d) => {
        const c = d.chipIndex + 1 > i.value.length - 1;
        return a && c && h && h(), {
          chipIndex: c ? null : d.chipIndex + 1,
          isEdit: !c,
          isKeyFocused: !c,
          isValueFocused: !1,
          isNewChip: !1
        };
      })) : t === O && (a || F(e, i, p.chipIndex), C((d) => {
        const c = d.chipIndex === 0;
        return a && c && h && h(), {
          chipIndex: c ? null : d.chipIndex - 1,
          isEdit: !c,
          isKeyFocused: !1,
          isValueFocused: !c,
          isNewChip: !1
        };
      })), y(N(u.values, n)), (p.chipIndex > 0 && p.chipIndex < i.value.length - 1 || i.value.length > 1 && p.chipIndex === 0 && t !== O || i.value.length > 1 && p.chipIndex === i.value.length - 1 && t !== D) && e && e.preventDefault();
    },
    [
      p.chipIndex,
      y,
      u.values,
      n,
      h,
      F
    ]
  ), ie = I(
    (e, i, t) => {
      if (m) {
        const { clientX: r, clientY: s } = e;
        let l = !1;
        const a = (d, c, f) => {
          if (f) {
            const {
              top: re,
              left: te,
              right: oe,
              bottom: ne
            } = f.getBoundingClientRect();
            return !(d > oe || d < te || c > ne || c < re);
          }
        };
        e.stopPropagation(), e.target.nodeName !== "INPUT" ? e.target.firstElementChild && (l = a(
          r,
          s,
          e.target.firstElementChild
        )) : l = e.target.name === t, C((d) => ({
          ...d,
          chipIndex: i,
          isEdit: !0,
          isKeyFocused: l,
          isValueFocused: !l
        }));
      }
      R && R();
    },
    [m, R]
  ), se = (e) => {
    if (!e) return null;
    let i = [];
    const t = (r, s) => !e.some(({ key: l }, a) => r === l && a !== s);
    return k(w) || (i = e.map((r) => {
      const [s, l] = le(r);
      return s && l ? { key: s, value: l } : s ? { key: s } : l ? { value: l } : null;
    })), e.forEach((r, s) => {
      t(r.key, s) || (N(i, [s, "key"], !1) ? i.at(s).key.push(H) : U(i, [s, "key"], [H]));
    }), k(i) && T && (i = T(e)), i.every((r) => ae(r)) ? null : i;
  }, le = ({ key: e, value: i, disabled: t }) => {
    const r = (s, l) => {
      const [a, d] = ge(
        w[l].filter((f) => f.pattern),
        s
      );
      return d ? null : a.filter((f) => !f.isValid).map((f) => ({ name: f.name, label: f.label }));
    };
    return t ? [null, null] : [r(e, "key"), r(i, "value")];
  };
  return /* @__PURE__ */ b("div", { className: W, "data-testid": `${n}-chips`, children: [
    V && /* @__PURE__ */ b("div", { className: "chips__label", children: V }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCell.jsx",
      lineNumber: 360,
      columnNumber: 17
    }, void 0),
    /* @__PURE__ */ b("div", { className: V ? "chips__wrapper" : "", children: /* @__PURE__ */ b(
      he,
      {
        chipOptions: z,
        chipSizeIsRecalculated: X,
        chips: E,
        editConfig: p,
        formState: u,
        handleAddNewChip: M,
        handleEditChip: ee,
        handleRemoveChip: F,
        handleShowElements: J,
        handleToEditMode: ie,
        isEditable: m,
        name: n,
        ref: { chipsCellRef: A, chipsWrapperRef: G, hiddenChipsCounterRef: L, hiddenChipsPopUpRef: Q },
        setChipSizeIsRecalculated: Y,
        setChipsSizes: Z,
        setEditConfig: C,
        shortChips: $,
        showChips: S,
        showHiddenChips: j,
        validateFields: se,
        validationRules: w
      },
      void 0,
      !1,
      {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCell.jsx",
        lineNumber: 362,
        columnNumber: 9
      },
      void 0
    ) }, void 0, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCell.jsx",
      lineNumber: 361,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/FormChipCell.jsx",
    lineNumber: 359,
    columnNumber: 5
  }, void 0);
};
v.propTypes = {
  chipOptions: fe,
  className: o.string,
  delimiter: o.oneOfType([o.string, o.element]),
  formState: o.object.isRequired,
  initialValues: o.object.isRequired,
  isEditable: o.bool,
  label: o.string,
  name: o.string.isRequired,
  onClick: o.func,
  onExitEditModeCallback: o.func,
  shortChips: o.bool,
  validationRules: o.object,
  validator: o.func,
  visibleChipsMaxLength: o.oneOfType([o.string, o.number])
};
v = ue.memo(v);
const ke = v;
export {
  ke as default
};
//# sourceMappingURL=FormChipCell.mjs.map
