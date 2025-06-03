import { jsxDEV as t } from "react/jsx-dev-runtime";
import W, { useState as p, useMemo as m, useLayoutEffect as Z, useEffect as G, createElement as J } from "react";
import s from "prop-types";
import V from "classnames";
import { isNumber as j, isEmpty as x } from "lodash";
import f from "../Button/Button.mjs";
import Y from "../Modal/Modal.mjs";
import H from "./WizardSteps/WizardSteps.mjs";
import { TERTIARY_BUTTON as _, MODAL_MD as K } from "../../constants.mjs";
import { WIZARD_STEPS_CONFIG as Q, MODAL_SIZES as X } from "../../types.mjs";
import T from "../../images/back-arrow.svg.mjs";
/* empty css             */
const w = ({
  children: d,
  className: A = "",
  getActions: N = null,
  isWizardOpen: I,
  onWizardResolve: g,
  previewText: E = "",
  size: U = K,
  stepsConfig: o = [],
  subTitle: y = null,
  title: D
}) => {
  const M = V("wizard-form", A), [z, v] = p(!1), [n, l] = p(0), [c, h] = p(null), i = m(() => (o == null ? void 0 : o.filter((e) => !e.hidden)) || [], [o]);
  Z(() => {
    i.find((r, a) => (r.disabled && h(a), r.disabled)) || h(null);
  }, [i]), G(() => {
    const e = i.findIndex((r) => r.invalid);
    z && j(e) && e !== -1 && (l(e), v(!1));
  }, [z, i]);
  const R = m(() => W.Children.toArray(d).filter((e, r) => !x(o) && !o[r].hidden).map((e, r) => {
    const a = r === n, b = !j(c) || r < c ? W.cloneElement(e, { stepIsActive: a }) : null;
    return /* @__PURE__ */ t(
      "div",
      {
        className: a ? "wizard-form__visible-content-item" : "wizard-form__hidden-content-item",
        children: b
      },
      r,
      !1,
      {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
        lineNumber: 88,
        columnNumber: 11
      },
      void 0
    );
  }), [n, d, c, o]), u = m(() => i.length - 1 || 0, [i]), k = m(() => n === u, [n, u]), F = () => {
    l((e) => Math.min(++e, u));
  }, L = () => l((e) => Math.max(--e, 0)), O = () => {
    v(!0);
  }, S = (e) => l(e), q = (e) => {
    const r = [];
    return n !== 0 && r.push(
      /* @__PURE__ */ t(
        f,
        {
          id: "wizard-btn-back",
          icon: /* @__PURE__ */ t(T, {}, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
            lineNumber: 131,
            columnNumber: 17
          }, void 0),
          className: "wizard-form__back-button",
          onClick: L,
          disabled: n === 0,
          label: "Back",
          type: "button",
          variant: _
        },
        void 0,
        !1,
        {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
          lineNumber: 129,
          columnNumber: 9
        },
        void 0
      )
    ), r.push(
      /* @__PURE__ */ t(
        f,
        {
          id: "wizard-btn-next",
          icon: /* @__PURE__ */ t(T, {}, void 0, !1, {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
            lineNumber: 145,
            columnNumber: 15
          }, void 0),
          iconPosition: "right",
          className: "wizard-form__next-button",
          disabled: (e == null ? void 0 : e.nextIsDisabled) || k,
          onClick: F,
          label: "Next",
          type: "button",
          variant: _
        },
        void 0,
        !1,
        {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
          lineNumber: 143,
          columnNumber: 7
        },
        void 0
      )
    ), r;
  };
  return /* @__PURE__ */ t(
    Y,
    {
      actions: (() => {
        if (x(i)) return [];
        const e = q(i[n]), r = i.every((a) => !a.disabled);
        if (N) {
          const b = N({ allStepsAreEnabled: r, jumpToStep: S, goToFirstInvalidStep: O }).map((B, P) => /* @__PURE__ */ J(f, { ...B, key: P }));
          e.push(...b);
        }
        return e;
      })(),
      className: M,
      onClose: g,
      previewText: E,
      show: I,
      size: U,
      subTitle: y,
      title: D,
      children: [
        /* @__PURE__ */ t(
          H,
          {
            activeStepNumber: n,
            firstDisabledStepIdx: c,
            jumpToStep: S,
            steps: i
          },
          void 0,
          !1,
          {
            fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
            lineNumber: 185,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ t("div", { className: "wizard-form__content-container", children: /* @__PURE__ */ t("div", { className: "wizard-form__content", children: R }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
          lineNumber: 192,
          columnNumber: 9
        }, void 0) }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
          lineNumber: 191,
          columnNumber: 7
        }, void 0)
      ]
    },
    void 0,
    !0,
    {
      fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Wizard/Wizard.jsx",
      lineNumber: 175,
      columnNumber: 5
    },
    void 0
  );
};
w.propTypes = {
  children: s.node.isRequired,
  className: s.string,
  getActions: s.func,
  isWizardOpen: s.bool.isRequired,
  onWizardResolve: s.func.isRequired,
  previewText: s.string,
  size: X,
  stepsConfig: Q,
  subTitle: s.string,
  title: s.string.isRequired
};
w.Step = ({ children: d }) => d;
export {
  w as default
};
//# sourceMappingURL=Wizard.mjs.map
