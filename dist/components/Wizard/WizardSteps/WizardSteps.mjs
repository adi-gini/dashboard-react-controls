import { jsxDEV as t } from "react/jsx-dev-runtime";
import "react";
import s from "prop-types";
import f from "classnames";
import { isNumber as b } from "lodash";
import N from "../../Button/Button.mjs";
import { WIZARD_STEPS_CONFIG as z } from "../../../types.mjs";
/* empty css                  */
const S = ({ activeStepNumber: o, firstDisabledStepIdx: a = null, jumpToStep: n, steps: m }) => {
  const p = (e, r) => f(
    "wizard-steps__item",
    e === o && "wizard-steps__item_active",
    r && "wizard-steps__item_invalid"
  ), d = (e, r) => {
    e.preventDefault(), n(r);
  };
  return /* @__PURE__ */ t("div", { className: "wizard-steps", children: m.map(({ id: e, label: r, invalid: l }, i) => {
    const c = b(a) && i >= a;
    return /* @__PURE__ */ t(
      N,
      {
        className: p(i, l),
        disabled: c,
        icon: /* @__PURE__ */ t("span", { className: "wizard-steps__indicator", children: i + 1 }, void 0, !1, {
          fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Wizard/WizardSteps/WizardSteps.jsx",
          lineNumber: 50,
          columnNumber: 19
        }, void 0),
        label: r,
        onClick: (u) => d(u, i)
      },
      e,
      !1,
      {
        fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Wizard/WizardSteps/WizardSteps.jsx",
        lineNumber: 47,
        columnNumber: 11
      },
      void 0
    );
  }) }, void 0, !1, {
    fileName: "/Users/adiunger/project/dashboard-react-controls/src/lib/components/Wizard/WizardSteps/WizardSteps.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, void 0);
};
S.propTypes = {
  activeStepNumber: s.number.isRequired,
  firstDisabledStepIdx: s.oneOfType([s.number, s.oneOf([null])]),
  jumpToStep: s.func.isRequired,
  steps: z.isRequired
};
export {
  S as default
};
//# sourceMappingURL=WizardSteps.mjs.map
