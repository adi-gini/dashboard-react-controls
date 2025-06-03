import { jsxDEV as N } from "react/jsx-dev-runtime";
import S, { useState as O, useMemo as B, useCallback as k, useEffect as y, useLayoutEffect as fe, forwardRef as be } from "react";
import c from "prop-types";
import T from "classnames";
import { isEmpty as h, get as U, throttle as Ne, isNil as M } from "lodash";
import se from "../NewChipInput/NewChipInput.mjs";
import ye from "../../../elements/OptionsMenu/OptionsMenu.mjs";
import we from "../../../elements/ValidationTemplate/ValidationTemplate.mjs";
import { CHIP_OPTIONS as ve } from "../../../types.mjs";
import { CLICK as Re, TAB as H, TAB_SHIFT as ke } from "../../../constants.mjs";
import { getTextWidth as $ } from "../formChipCell.util.mjs";
import { getTransitionEndEventName as We } from "../../../utils/common.util.mjs";
import Ie from "../../../images/close.svg.mjs";
/* empty css                  */
const Ke = {
  rules: {}
};
let E = ({
  chip: a,
  chipIndex: n,
  chipOptions: ie,
  className: te = "",
  editConfig: r,
  handleRemoveChip: ne,
  isEditable: d,
  keyName: K,
  meta: m,
  onChange: j,
  setChipSizeIsRecalculated: G,
  setEditConfig: C,
  validationRules: oe = Ke.rules,
  valueName: le
}, q) => {
  const [o, D] = O({
    isKeyOnly: a.isKeyOnly,
    key: a.key,
    value: a.value,
    keyFieldWidth: 0,
    valueFieldWidth: 0
  }), [F, ue] = O("key"), [J, ce] = O(oe), [p, z] = O(!1), { background: Q, borderColor: X, borderRadius: Y, density: Z, font: g } = ie, f = B(() => d ? 25 : 20, [d]), b = B(() => d ? 35 : 20, [d]), A = B(() => We(), []), l = S.useRef({}), u = S.useRef({}), L = S.useRef(), V = S.useRef(), ae = T(
    te,
    !r.isKeyFocused && "item_edited",
    !h(U(m, ["error", n, "key"], [])) && !h(o.key) && !a.disabled && "item_edited_invalid"
  ), de = T(
    "edit-chip-container",
    Q && `edit-chip-container-background_${Q}`,
    X && `edit-chip-container-border_${X}`,
    g && `edit-chip-container-font_${g}`,
    Z && `edit-chip-container-density_${Z}`,
    Y && `edit-chip-container-border_${Y}`,
    (r.isEdit || r.isNewChip) && "edit-chip-container_edited",
    a.disabled && "edit-chip-container_disabled edit-chip-container-font_disabled"
  ), me = T(
    "input-label-value",
    !r.isValueFocused && "item_edited",
    !h(U(m, ["error", n, "value"], [])) && !h(o.value) && "item_edited_invalid"
  ), pe = T(
    "item-icon-close",
    !a.disabled && r.chipIndex === n && d && "item-icon-close_invisible",
    !d && "item-icon-close_hidden"
  ), P = k(() => {
    var e;
    if (l.current) {
      const s = $(l.current) + 1, i = $(u.current) + 1, t = ((e = q.current) == null ? void 0 : e.clientWidth) - 50, I = s >= t / 2, x = i >= t / 2;
      let w = null, v = null;
      if (I && x)
        w = v = t / 2;
      else if (I) {
        v = o.value ? i : b;
        const R = t - v;
        w = R > s ? s : R;
      } else if (x) {
        w = o.key ? s : f;
        const R = t - w;
        v = R > i ? i : R;
      } else
        w = !o.key || s <= f ? f : s, v = !o.value || i <= b ? b : i;
      l.current.style.width = `${w}px`, h(u.current) || (u.current.style.width = `${v}px`), D((R) => ({
        ...R,
        keyFieldWidth: w,
        valueFieldWidth: v
      })), G(!0);
    }
  }, [
    o.key,
    o.value,
    f,
    b,
    q,
    G
  ]);
  y(() => {
    const e = Ne(P, 500);
    if (d)
      return window.addEventListener("resize", e), window.addEventListener(A, e), () => {
        window.removeEventListener("resize", e), window.removeEventListener(A, e);
      };
  }, [d, P, A]), y(() => {
    !o.keyFieldWidth && !o.valueFieldWidth && P();
  }, [o.keyFieldWidth, o.valueFieldWidth, P]);
  const _ = k(
    (e, s) => {
      var i;
      r.chipIndex === n && (!(e.path ?? ((i = e.composedPath) == null ? void 0 : i.call(e))).includes(L.current) || s ? (j(e, Re, !0), window.getSelection().removeAllRanges(), document.activeElement.blur()) : e.stopPropagation());
    },
    [j, L, n, r.chipIndex]
  ), W = k(
    (e) => {
      V != null && V.current && !V.current.contains(e.target) && (z(!1), _(e, !0));
    },
    [_]
  );
  y(() => (p && window.addEventListener("scroll", W, !0), () => {
    window.removeEventListener("scroll", W, !0);
  }), [W, p]), y(() => {
    r.chipIndex === n && (r.isKeyFocused ? l.current.focus() : r.isValueFocused && u.current.focus());
  }, [
    r.isKeyFocused,
    r.isValueFocused,
    l,
    u,
    n,
    r.chipIndex
  ]), y(() => (p && window.addEventListener("scroll", W, !0), () => {
    window.removeEventListener("scroll", W, !0);
  }), [W, p]), y(() => {
    if (r.isEdit)
      return document.addEventListener("click", _, !0), () => {
        document.removeEventListener("click", _, !0);
      };
  }, [_, r.isEdit]);
  const he = k(
    (e) => {
      if (r.chipIndex === n && d) {
        if (!e.shiftKey && e.key === H && r.isValueFocused)
          return j(e, H);
        if (e.shiftKey && e.key === H && r.isKeyFocused)
          return j(e, ke);
      }
      e.stopPropagation();
    },
    [r, j, n, d]
  ), ee = k(
    (e) => {
      const s = e.target.name === K;
      r.chipIndex === n ? (s ? (l.current.selectionStart = l.current.selectionEnd, C((i) => ({
        ...i,
        isKeyFocused: !0,
        isValueFocused: !1
      }))) : (u.current.selectionStart = u.current.selectionEnd, C((i) => ({
        ...i,
        isKeyFocused: !1,
        isValueFocused: !0
      }))), e && e.stopPropagation()) : M(r.chipIndex) && (s ? l.current.selectionStart = l.current.selectionEnd : u.current.selectionStart = u.current.selectionEnd, C({
        chipIndex: n,
        isEdit: !0,
        isKeyFocused: s,
        isValueFocused: !s
      }));
    },
    [K, l, u, C, r.chipIndex, n]
  ), re = k(
    (e) => {
      var i;
      const s = ((i = q.current) == null ? void 0 : i.clientWidth) - 50;
      if (e.preventDefault(), e.target.name === K) {
        const t = $(l.current);
        D((I) => ({
          ...I,
          key: l.current.value,
          keyFieldWidth: l.current.value.length <= 1 ? f : t >= s ? s : t > f ? t + 2 : f
        }));
      } else {
        const t = $(u.current);
        D((I) => {
          var x;
          return {
            ...I,
            value: u.current.value,
            valueFieldWidth: ((x = u.current.value) == null ? void 0 : x.length) <= 1 ? b : t >= s ? s : t > b ? t + 2 : b
          };
        });
      }
    },
    [K, f, q, b]
  );
  fe(() => {
    r.chipIndex === n && ue(r.isKeyFocused ? "key" : r.isValueFocused ? "value" : null);
  }, [r.isKeyFocused, r.isValueFocused, r.chipIndex, n]), y(() => {
    m.valid && p && z(!1);
  }, [m.valid, p]), y(() => {
    m.error && (ce((e) => {
      var s;
      return {
        ...e,
        [F]: (s = e[F]) == null ? void 0 : s.map((i) => ({
          ...i,
          isValid: h(U(m, ["error", r.chipIndex, F], [])) ? !0 : !m.error[r.chipIndex][F].some(
            (t) => t && t.name === i.name
          )
        }))
      };
    }), !p && z(!0));
  }, [m, p, F, r.chipIndex]);
  const Fe = k(() => {
    var e;
    return (e = J[F]) == null ? void 0 : e.map(({ isValid: s = !1, label: i, name: t }) => /* @__PURE__ */ N(we, { valid: s, validationMessage: i }, t, !1, {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
      lineNumber: 408,
      columnNumber: 14
    }, void 0));
  }, [F, J]);
  return /* @__PURE__ */ N(
    "div",
    {
      className: de,
      onKeyDown: (e) => !a.disabled && r.isEdit && he(e),
      ref: L,
      children: [
        /* @__PURE__ */ N(
          se,
          {
            className: ae,
            disabled: a.disabled || !d || !M(r.chipIndex) && r.chipIndex !== n,
            name: K,
            onChange: re,
            onFocus: ee,
            placeholder: "key",
            ref: l,
            style: { width: o.keyFieldWidth }
          },
          void 0,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
            lineNumber: 418,
            columnNumber: 7
          },
          void 0
        ),
        !o.isKeyOnly && /* @__PURE__ */ N("div", { className: "edit-chip-separator", children: ":" }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
          lineNumber: 432,
          columnNumber: 31
        }, void 0),
        !o.isKeyOnly && /* @__PURE__ */ N(
          se,
          {
            className: me,
            disabled: a.disabled || !d || !M(r.chipIndex) && r.chipIndex !== n,
            name: le,
            onChange: re,
            onFocus: ee,
            placeholder: "value",
            ref: u,
            style: { width: o.valueFieldWidth }
          },
          void 0,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
            lineNumber: 434,
            columnNumber: 9
          },
          void 0
        ),
        /* @__PURE__ */ N(
          "button",
          {
            disabled: a.disabled,
            className: pe,
            onClick: (e) => !a.disabled && ne(e, n),
            children: /* @__PURE__ */ N(Ie, {}, void 0, !1, {
              fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
              lineNumber: 455,
              columnNumber: 9
            }, void 0)
          },
          void 0,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
            lineNumber: 450,
            columnNumber: 7
          },
          void 0
        ),
        !a.disabled && (r.isKeyFocused ? !h(o.key) : !h(o.value)) && r.chipIndex === n && !h(U(m, ["error", r.chipIndex, F], [])) && /* @__PURE__ */ N(ye, { show: p, ref: { refInputContainer: L, validationRulesRef: V }, children: Fe() }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
          lineNumber: 462,
          columnNumber: 11
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/FormChipCell/NewChipForm/NewChipForm.jsx",
      lineNumber: 413,
      columnNumber: 5
    },
    void 0
  );
};
E = be(E);
E.displayName = "NewChipForm";
E.propTypes = {
  chip: c.object.isRequired,
  chipIndex: c.number.isRequired,
  chipOptions: ve.isRequired,
  className: c.string,
  editConfig: c.object.isRequired,
  handleRemoveChip: c.func.isRequired,
  isEditable: c.bool.isRequired,
  keyName: c.string.isRequired,
  meta: c.object.isRequired,
  onChange: c.func.isRequired,
  setChipSizeIsRecalculated: c.func.isRequired,
  setEditConfig: c.func.isRequired,
  validationRules: c.object,
  valueName: c.string.isRequired
};
const De = E;
export {
  De as default
};
//# sourceMappingURL=NewChipForm.mjs.map
