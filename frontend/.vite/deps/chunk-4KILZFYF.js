import {
  ArrowDropDown_default,
  Grow_default,
  filledInputClasses_default,
  inputBaseClasses_default,
  inputClasses_default,
  outlinedInputClasses_default,
  useSlotProps_default
} from "./chunk-O7UKMWRB.js";
import {
  formControlState
} from "./chunk-IABPPNC3.js";
import {
  Backdrop_default,
  Fade_default,
  HTMLElementType,
  Modal_default,
  Portal_default,
  elementAcceptingRef_default,
  getReactElementRef,
  getTransitionProps
} from "./chunk-VKCI4RN7.js";
import {
  Paper_default,
  integerPropType_default
} from "./chunk-27JEQ5KO.js";
import {
  createChainedFunction_default,
  createSvgIcon,
  debounce_default,
  mergeSlotProps,
  ownerDocument,
  ownerDocument_default,
  ownerWindow_default,
  setRef,
  unsupportedProp_default,
  useControlled,
  useControlled_default,
  useId,
  useId_default
} from "./chunk-DQWVPCFP.js";
import {
  FormControlContext_default,
  useFormControl
} from "./chunk-FXX5XYWK.js";
import {
  isHostComponent_default
} from "./chunk-ER6TYJKG.js";
import {
  ButtonBase_default,
  isFocusVisible
} from "./chunk-KO2HBQB4.js";
import {
  Timeout,
  elementTypeAcceptingRef_default,
  refType_default,
  useTimeout
} from "./chunk-DMFOF6EB.js";
import {
  Transition_default
} from "./chunk-APYI7KVW.js";
import {
  chainPropTypes
} from "./chunk-JX37XSKT.js";
import {
  useEnhancedEffect_default as useEnhancedEffect_default2,
  useEventCallback_default,
  useEventCallback_default2,
  useForkRef_default
} from "./chunk-6F5I7GFX.js";
import {
  extractEventHandlers_default,
  useSlot
} from "./chunk-7OG2M46X.js";
import {
  useForkRef
} from "./chunk-V4AG42J4.js";
import {
  Typography_default
} from "./chunk-BE5JATBN.js";
import {
  createSimplePaletteValueFilter
} from "./chunk-G4FQZWC4.js";
import {
  capitalize_default
} from "./chunk-QFN6HB2D.js";
import {
  getUnit,
  toUnitless
} from "./chunk-7OGEO34U.js";
import {
  memoTheme_default
} from "./chunk-2YG2TPAN.js";
import {
  useDefaultProps
} from "./chunk-4OCZTN4S.js";
import {
  alpha,
  clamp_default,
  clsx_default,
  composeClasses,
  createStack,
  css,
  darken,
  duration,
  generateUtilityClass,
  generateUtilityClasses,
  identifier_default,
  keyframes,
  lighten,
  require_jsx_runtime,
  require_prop_types,
  require_react_is,
  resolveProps,
  rootShouldForwardProp_default,
  slotShouldForwardProp_default,
  styled_default,
  unstable_createUseMediaQuery,
  useEnhancedEffect_default,
  useRtl,
  useTheme
} from "./chunk-HVZZNRET.js";
import {
  require_react
} from "./chunk-TVFQMRVC.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@mui/material/esm/CircularProgress/circularProgressClasses.js
function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass("MuiCircularProgress", slot);
}
var circularProgressClasses = generateUtilityClasses("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
var circularProgressClasses_default = circularProgressClasses;

// node_modules/@mui/material/esm/CircularProgress/CircularProgress.js
var React = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var SIZE = 44;
var circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
var circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;
var rotateAnimation = typeof circularRotateKeyframe !== "string" ? css`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      ` : null;
var dashAnimation = typeof circularDashKeyframe !== "string" ? css`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      ` : null;
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    variant,
    color,
    disableShrink
  } = ownerState;
  const slots = {
    root: ["root", variant, `color${capitalize_default(color)}`],
    svg: ["svg"],
    circle: ["circle", `circle${capitalize_default(variant)}`, disableShrink && "circleDisableShrink"]
  };
  return composeClasses(slots, getCircularProgressUtilityClass, classes);
};
var CircularProgressRoot = styled_default("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`color${capitalize_default(ownerState.color)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: theme.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: rotateAnimation || {
      animation: `${circularRotateKeyframe} 1.4s linear infinite`
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  }))]
})));
var CircularProgressSVG = styled_default("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
});
var CircularProgressCircle = styled_default("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.circle, styles2[`circle${capitalize_default(ownerState.variant)}`], ownerState.disableShrink && styles2.circleDisableShrink];
  }
})(memoTheme_default(({
  theme
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: theme.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" && !ownerState.disableShrink,
    style: dashAnimation || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`
    }
  }]
})));
var CircularProgress = React.forwardRef(function CircularProgress2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCircularProgress"
  });
  const {
    className,
    color = "primary",
    disableShrink = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = "indeterminate",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disableShrink,
    size,
    thickness,
    value,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};
  if (variant === "determinate") {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps["aria-valuenow"] = Math.round(value);
    circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
    rootStyle.transform = "rotate(-90deg)";
  }
  return (0, import_jsx_runtime.jsx)(CircularProgressRoot, {
    className: clsx_default(classes.root, className),
    style: {
      width: size,
      height: size,
      ...rootStyle,
      ...style
    },
    ownerState,
    ref,
    role: "progressbar",
    ...rootProps,
    ...other,
    children: (0, import_jsx_runtime.jsx)(CircularProgressSVG, {
      className: classes.svg,
      ownerState,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
      children: (0, import_jsx_runtime.jsx)(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })
    })
  });
});
true ? CircularProgress.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types.default.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: chainPropTypes(import_prop_types.default.bool, (props) => {
    if (props.disableShrink && props.variant && props.variant !== "indeterminate") {
      return new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.");
    }
    return null;
  }),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * @ignore
   */
  style: import_prop_types.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: import_prop_types.default.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: import_prop_types.default.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: import_prop_types.default.oneOf(["determinate", "indeterminate"])
} : void 0;
var CircularProgress_default = CircularProgress;

// node_modules/@mui/material/esm/IconButton/iconButtonClasses.js
function getIconButtonUtilityClass(slot) {
  return generateUtilityClass("MuiIconButton", slot);
}
var iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]);
var iconButtonClasses_default = iconButtonClasses;

// node_modules/@mui/material/esm/IconButton/IconButton.js
var React2 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    disabled,
    color,
    edge,
    size,
    loading
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading", disabled && "disabled", color !== "default" && `color${capitalize_default(color)}`, edge && `edge${capitalize_default(edge)}`, `size${capitalize_default(size)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
var IconButtonRoot = styled_default(ButtonBase_default, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.loading && styles2.loading, ownerState.color !== "default" && styles2[`color${capitalize_default(ownerState.color)}`], ownerState.edge && styles2[`edge${capitalize_default(ownerState.edge)}`], styles2[`size${capitalize_default(ownerState.size)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: (props) => !props.disableRipple,
    style: {
      "--IconButton-hoverBg": theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), memoTheme_default(({
  theme
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      "--IconButton-hoverBg": theme.vars ? `rgba(${(theme.vars || theme).palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha((theme.vars || theme).palette[color].main, theme.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: theme.typography.pxToRem(28)
    }
  }],
  [`&.${iconButtonClasses_default.disabled}`]: {
    backgroundColor: "transparent",
    color: (theme.vars || theme).palette.action.disabled
  },
  [`&.${iconButtonClasses_default.loading}`]: {
    color: "transparent"
  }
})));
var IconButtonLoadingIndicator = styled_default("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (theme.vars || theme).palette.action.disabled,
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: "flex"
    }
  }]
}));
var IconButton = React2.forwardRef(function IconButton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiIconButton"
  });
  const {
    edge = false,
    children,
    className,
    color = "default",
    disabled = false,
    disableFocusRipple = false,
    size = "medium",
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    ...other
  } = props;
  const loadingId = useId_default(idProp);
  const loadingIndicator = loadingIndicatorProp ?? (0, import_jsx_runtime2.jsx)(CircularProgress_default, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    edge,
    color,
    disabled,
    disableFocusRipple,
    loading,
    loadingIndicator,
    size
  };
  const classes = useUtilityClasses2(ownerState);
  return (0, import_jsx_runtime2.jsxs)(IconButtonRoot, {
    id: loading ? loadingId : idProp,
    className: clsx_default(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled || loading,
    ref,
    ...other,
    ownerState,
    children: [typeof loading === "boolean" && // use plain HTML span to minimize the runtime overhead
    (0, import_jsx_runtime2.jsx)("span", {
      className: classes.loadingWrapper,
      style: {
        display: "contents"
      },
      children: (0, import_jsx_runtime2.jsx)(IconButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState,
        children: loading && loadingIndicator
      })
    }), children]
  });
});
true ? IconButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: chainPropTypes(import_prop_types2.default.node, (props) => {
    const found = React2.Children.toArray(props.children).some((child) => React2.isValidElement(child) && child.props.onClick);
    if (found) {
      return new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join("\n"));
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types2.default.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types2.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types2.default.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: import_prop_types2.default.oneOf(["end", "start", false]),
  /**
   * @ignore
   */
  id: import_prop_types2.default.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: import_prop_types2.default.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: import_prop_types2.default.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["small", "medium", "large"]), import_prop_types2.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
} : void 0;
var IconButton_default = IconButton;

// node_modules/@mui/material/esm/Popper/popperClasses.js
function getPopperUtilityClass(slot) {
  return generateUtilityClass("MuiPopper", slot);
}
var popperClasses = generateUtilityClasses("MuiPopper", ["root"]);

// node_modules/@mui/material/esm/Popper/Popper.js
var import_prop_types4 = __toESM(require_prop_types(), 1);
var React4 = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/Popper/BasePopper.js
var React3 = __toESM(require_react(), 1);

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument2 = node.ownerDocument;
    return ownerDocument2 ? ownerDocument2.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css2 = getComputedStyle(currentNode);
    if (css2.transform !== "none" || css2.perspective !== "none" || css2.contain === "paint" || ["transform", "perspective"].indexOf(css2.willChange) !== -1 || isFirefox && css2.willChange === "filter" || isFirefox && css2.filter && css2.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/@mui/material/esm/Popper/BasePopper.js
var import_prop_types3 = __toESM(require_prop_types(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function flipPlacement(placement, direction) {
  if (direction === "ltr") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
function isHTMLElement2(element) {
  return element.nodeType !== void 0;
}
function isVirtualElement(element) {
  return !isHTMLElement2(element);
}
var useUtilityClasses3 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPopperUtilityClass, classes);
};
var defaultPopperOptions = {};
var PopperTooltip = React3.forwardRef(function PopperTooltip2(props, forwardedRef) {
  const {
    anchorEl,
    children,
    direction,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    slotProps = {},
    slots = {},
    TransitionProps,
    // @ts-ignore internal logic
    ownerState: ownerStateProp,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...other
  } = props;
  const tooltipRef = React3.useRef(null);
  const ownRef = useForkRef(tooltipRef, forwardedRef);
  const popperRef = React3.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = React3.useRef(handlePopperRef);
  useEnhancedEffect_default(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React3.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  const [placement, setPlacement] = React3.useState(rtlPlacement);
  const [resolvedAnchorElement, setResolvedAnchorElement] = React3.useState(resolveAnchorEl(anchorEl));
  React3.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  React3.useEffect(() => {
    if (anchorEl) {
      setResolvedAnchorElement(resolveAnchorEl(anchorEl));
    }
  }, [anchorEl]);
  useEnhancedEffect_default(() => {
    if (!resolvedAnchorElement || !open) {
      return void 0;
    }
    const handlePopperUpdate = (data) => {
      setPlacement(data.placement);
    };
    if (true) {
      if (resolvedAnchorElement && isHTMLElement2(resolvedAnchorElement) && resolvedAnchorElement.nodeType === 1) {
        const box = resolvedAnchorElement.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      }
    }
    let popperModifiers = [{
      name: "preventOverflow",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "flip",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "onUpdate",
      enabled: true,
      phase: "afterWrite",
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper2 = createPopper3(resolvedAnchorElement, tooltipRef.current, {
      placement: rtlPlacement,
      ...popperOptions,
      modifiers: popperModifiers
    });
    handlePopperRefRef.current(popper2);
    return () => {
      popper2.destroy();
      handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  const classes = useUtilityClasses3(props);
  const Root = slots.root ?? "div";
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tooltip",
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return (0, import_jsx_runtime3.jsx)(Root, {
    ...rootProps,
    children: typeof children === "function" ? children(childProps) : children
  });
});
var Popper = React3.forwardRef(function Popper2(props, forwardedRef) {
  const {
    anchorEl,
    children,
    container: containerProp,
    direction = "ltr",
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement = "bottom",
    popperOptions = defaultPopperOptions,
    popperRef,
    style,
    transition = false,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const [exited, setExited] = React3.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }
  let container;
  if (containerProp) {
    container = containerProp;
  } else if (anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    container = resolvedAnchorEl && isHTMLElement2(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
  }
  const display = !open && keepMounted && (!transition || exited) ? "none" : void 0;
  const transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : void 0;
  return (0, import_jsx_runtime3.jsx)(Portal_default, {
    disablePortal,
    container,
    children: (0, import_jsx_runtime3.jsx)(PopperTooltip, {
      anchorEl,
      direction,
      disablePortal,
      modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement,
      popperOptions,
      popperRef,
      slotProps,
      slots,
      ...other,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display,
        ...style
      },
      TransitionProps: transitionProps,
      children
    })
  });
});
true ? Popper.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: chainPropTypes(import_prop_types3.default.oneOfType([HTMLElementType, import_prop_types3.default.object, import_prop_types3.default.func]), (props) => {
    if (props.open) {
      const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && isHTMLElement2(resolvedAnchorEl) && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.getBoundingClientRect !== "function" || isVirtualElement(resolvedAnchorEl) && resolvedAnchorEl.contextElement != null && resolvedAnchorEl.contextElement.nodeType !== 1) {
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join("\n"));
      }
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: import_prop_types3.default.oneOfType([import_prop_types3.default.node, import_prop_types3.default.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types3.default.oneOfType([HTMLElementType, import_prop_types3.default.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: import_prop_types3.default.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types3.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types3.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types3.default.arrayOf(import_prop_types3.default.shape({
    data: import_prop_types3.default.object,
    effect: import_prop_types3.default.func,
    enabled: import_prop_types3.default.bool,
    fn: import_prop_types3.default.func,
    name: import_prop_types3.default.any,
    options: import_prop_types3.default.object,
    phase: import_prop_types3.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types3.default.arrayOf(import_prop_types3.default.string),
    requiresIfExists: import_prop_types3.default.arrayOf(import_prop_types3.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types3.default.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types3.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types3.default.shape({
    modifiers: import_prop_types3.default.array,
    onFirstUpdate: import_prop_types3.default.func,
    placement: import_prop_types3.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types3.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType_default,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types3.default.shape({
    root: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types3.default.shape({
    root: import_prop_types3.default.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types3.default.bool
} : void 0;
var BasePopper_default = Popper;

// node_modules/@mui/material/esm/Popper/Popper.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var PopperRoot = styled_default(BasePopper_default, {
  name: "MuiPopper",
  slot: "Root"
})({});
var Popper3 = React4.forwardRef(function Popper4(inProps, ref) {
  const isRtl = useRtl();
  const props = useDefaultProps({
    props: inProps,
    name: "MuiPopper"
  });
  const {
    anchorEl,
    component,
    components,
    componentsProps,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition,
    slots,
    slotProps,
    ...other
  } = props;
  const RootComponent = slots?.root ?? components?.Root;
  const otherProps = {
    anchorEl,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition,
    ...other
  };
  return (0, import_jsx_runtime4.jsx)(PopperRoot, {
    as: component,
    direction: isRtl ? "rtl" : "ltr",
    slots: {
      root: RootComponent
    },
    slotProps: slotProps ?? componentsProps,
    ...otherProps,
    ref
  });
});
true ? Popper3.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: import_prop_types4.default.oneOfType([HTMLElementType, import_prop_types4.default.object, import_prop_types4.default.func]),
  /**
   * Popper render function or node.
   */
  children: import_prop_types4.default.oneOfType([import_prop_types4.default.node, import_prop_types4.default.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types4.default.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  components: import_prop_types4.default.shape({
    Root: import_prop_types4.default.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   * @default {}
   */
  componentsProps: import_prop_types4.default.shape({
    root: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types4.default.oneOfType([HTMLElementType, import_prop_types4.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types4.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types4.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types4.default.arrayOf(import_prop_types4.default.shape({
    data: import_prop_types4.default.object,
    effect: import_prop_types4.default.func,
    enabled: import_prop_types4.default.bool,
    fn: import_prop_types4.default.func,
    name: import_prop_types4.default.any,
    options: import_prop_types4.default.object,
    phase: import_prop_types4.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types4.default.arrayOf(import_prop_types4.default.string),
    requiresIfExists: import_prop_types4.default.arrayOf(import_prop_types4.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types4.default.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types4.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types4.default.shape({
    modifiers: import_prop_types4.default.array,
    onFirstUpdate: import_prop_types4.default.func,
    placement: import_prop_types4.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types4.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType_default,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types4.default.shape({
    root: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types4.default.shape({
    root: import_prop_types4.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types4.default.bool
} : void 0;
var Popper_default = Popper3;

// node_modules/@mui/material/esm/Tooltip/tooltipClasses.js
function getTooltipUtilityClass(slot) {
  return generateUtilityClass("MuiTooltip", slot);
}
var tooltipClasses = generateUtilityClasses("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
var tooltipClasses_default = tooltipClasses;

// node_modules/@mui/material/esm/Tooltip/Tooltip.js
var React5 = __toESM(require_react(), 1);
var import_prop_types5 = __toESM(require_prop_types(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function round2(value) {
  return Math.round(value * 1e5) / 1e5;
}
var useUtilityClasses4 = (ownerState) => {
  const {
    classes,
    disableInteractive,
    arrow: arrow2,
    touch,
    placement
  } = ownerState;
  const slots = {
    popper: ["popper", !disableInteractive && "popperInteractive", arrow2 && "popperArrow"],
    tooltip: ["tooltip", arrow2 && "tooltipArrow", touch && "touch", `tooltipPlacement${capitalize_default(placement.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return composeClasses(slots, getTooltipUtilityClass, classes);
};
var TooltipPopper = styled_default(Popper_default, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.popper, !ownerState.disableInteractive && styles2.popperInteractive, ownerState.arrow && styles2.popperArrow, !ownerState.open && styles2.popperClose];
  }
})(memoTheme_default(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open
    }) => !open,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${tooltipClasses_default.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${tooltipClasses_default.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${tooltipClasses_default.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${tooltipClasses_default.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow && !ownerState.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${tooltipClasses_default.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow && !!ownerState.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${tooltipClasses_default.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow && !ownerState.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${tooltipClasses_default.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.arrow && !!ownerState.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${tooltipClasses_default.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
})));
var TooltipTooltip = styled_default("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.tooltip, ownerState.touch && styles2.touch, ownerState.arrow && styles2.tooltipArrow, styles2[`tooltipPlacement${capitalize_default(ownerState.placement.split("-")[0])}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  backgroundColor: theme.vars ? theme.vars.palette.Tooltip.bg : alpha(theme.palette.grey[700], 0.92),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  color: (theme.vars || theme).palette.common.white,
  fontFamily: theme.typography.fontFamily,
  padding: "4px 8px",
  fontSize: theme.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: theme.typography.fontWeightMedium,
  [`.${tooltipClasses_default.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${tooltipClasses_default.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${tooltipClasses_default.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${tooltipClasses_default.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.touch,
    style: {
      padding: "8px 16px",
      fontSize: theme.typography.pxToRem(14),
      lineHeight: `${round2(16 / 14)}em`,
      fontWeight: theme.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.isRtl,
    style: {
      [`.${tooltipClasses_default.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${tooltipClasses_default.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.isRtl && ownerState.touch,
    style: {
      [`.${tooltipClasses_default.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${tooltipClasses_default.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.isRtl,
    style: {
      [`.${tooltipClasses_default.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${tooltipClasses_default.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.isRtl && ownerState.touch,
    style: {
      [`.${tooltipClasses_default.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${tooltipClasses_default.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.touch,
    style: {
      [`.${tooltipClasses_default.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.touch,
    style: {
      [`.${tooltipClasses_default.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
})));
var TooltipArrow = styled_default("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(memoTheme_default(({
  theme
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: theme.vars ? theme.vars.palette.Tooltip.bg : alpha(theme.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
var hystersisOpen = false;
var hystersisTimer = new Timeout();
var cursorPosition = {
  x: 0,
  y: 0
};
function composeEventHandler(handler, eventHandler) {
  return (event, ...params) => {
    if (eventHandler) {
      eventHandler(event, ...params);
    }
    handler(event, ...params);
  };
}
var Tooltip = React5.forwardRef(function Tooltip2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTooltip"
  });
  const {
    arrow: arrow2 = false,
    children: childrenProp,
    classes: classesProp,
    components = {},
    componentsProps = {},
    describeChild = false,
    disableFocusListener = false,
    disableHoverListener = false,
    disableInteractive: disableInteractiveProp = false,
    disableTouchListener = false,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    followCursor = false,
    id: idProp,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = "bottom",
    PopperComponent: PopperComponentProp,
    PopperProps = {},
    slotProps = {},
    slots = {},
    title,
    TransitionComponent: TransitionComponentProp,
    TransitionProps,
    ...other
  } = props;
  const children = React5.isValidElement(childrenProp) ? childrenProp : (0, import_jsx_runtime5.jsx)("span", {
    children: childrenProp
  });
  const theme = useTheme();
  const isRtl = useRtl();
  const [childNode, setChildNode] = React5.useState();
  const [arrowRef, setArrowRef] = React5.useState(null);
  const ignoreNonTouchEvents = React5.useRef(false);
  const disableInteractive = disableInteractiveProp || followCursor;
  const closeTimer = useTimeout();
  const enterTimer = useTimeout();
  const leaveTimer = useTimeout();
  const touchTimer = useTimeout();
  const [openState, setOpenState] = useControlled_default({
    controlled: openProp,
    default: false,
    name: "Tooltip",
    state: "open"
  });
  let open = openState;
  if (true) {
    const {
      current: isControlled
    } = React5.useRef(openProp !== void 0);
    React5.useEffect(() => {
      if (childNode && childNode.disabled && !isControlled && title !== "" && childNode.tagName.toLowerCase() === "button") {
        console.warn(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join("\n"));
      }
    }, [title, childNode, isControlled]);
  }
  const id = useId_default(idProp);
  const prevUserSelect = React5.useRef();
  const stopTouchInteraction = useEventCallback_default2(() => {
    if (prevUserSelect.current !== void 0) {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      prevUserSelect.current = void 0;
    }
    touchTimer.clear();
  });
  React5.useEffect(() => stopTouchInteraction, [stopTouchInteraction]);
  const handleOpen = (event) => {
    hystersisTimer.clear();
    hystersisOpen = true;
    setOpenState(true);
    if (onOpen && !open) {
      onOpen(event);
    }
  };
  const handleClose = useEventCallback_default2(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (event) => {
      hystersisTimer.start(800 + leaveDelay, () => {
        hystersisOpen = false;
      });
      setOpenState(false);
      if (onClose && open) {
        onClose(event);
      }
      closeTimer.start(theme.transitions.duration.shortest, () => {
        ignoreNonTouchEvents.current = false;
      });
    }
  );
  const handleMouseOver = (event) => {
    if (ignoreNonTouchEvents.current && event.type !== "touchstart") {
      return;
    }
    if (childNode) {
      childNode.removeAttribute("title");
    }
    enterTimer.clear();
    leaveTimer.clear();
    if (enterDelay || hystersisOpen && enterNextDelay) {
      enterTimer.start(hystersisOpen ? enterNextDelay : enterDelay, () => {
        handleOpen(event);
      });
    } else {
      handleOpen(event);
    }
  };
  const handleMouseLeave = (event) => {
    enterTimer.clear();
    leaveTimer.start(leaveDelay, () => {
      handleClose(event);
    });
  };
  const [, setChildIsFocusVisible] = React5.useState(false);
  const handleBlur = (event) => {
    if (!isFocusVisible(event.target)) {
      setChildIsFocusVisible(false);
      handleMouseLeave(event);
    }
  };
  const handleFocus = (event) => {
    if (!childNode) {
      setChildNode(event.currentTarget);
    }
    if (isFocusVisible(event.target)) {
      setChildIsFocusVisible(true);
      handleMouseOver(event);
    }
  };
  const detectTouchStart = (event) => {
    ignoreNonTouchEvents.current = true;
    const childrenProps2 = children.props;
    if (childrenProps2.onTouchStart) {
      childrenProps2.onTouchStart(event);
    }
  };
  const handleTouchStart = (event) => {
    detectTouchStart(event);
    leaveTimer.clear();
    closeTimer.clear();
    stopTouchInteraction();
    prevUserSelect.current = document.body.style.WebkitUserSelect;
    document.body.style.WebkitUserSelect = "none";
    touchTimer.start(enterTouchDelay, () => {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      handleMouseOver(event);
    });
  };
  const handleTouchEnd = (event) => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }
    stopTouchInteraction();
    leaveTimer.start(leaveTouchDelay, () => {
      handleClose(event);
    });
  };
  React5.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleKeyDown(nativeEvent) {
      if (nativeEvent.key === "Escape") {
        handleClose(nativeEvent);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, open]);
  const handleRef = useForkRef_default(getReactElementRef(children), setChildNode, ref);
  if (!title && title !== 0) {
    open = false;
  }
  const popperRef = React5.useRef();
  const handleMouseMove = (event) => {
    const childrenProps2 = children.props;
    if (childrenProps2.onMouseMove) {
      childrenProps2.onMouseMove(event);
    }
    cursorPosition = {
      x: event.clientX,
      y: event.clientY
    };
    if (popperRef.current) {
      popperRef.current.update();
    }
  };
  const nameOrDescProps = {};
  const titleIsString = typeof title === "string";
  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps["aria-describedby"] = open ? id : null;
  } else {
    nameOrDescProps["aria-label"] = titleIsString ? title : null;
    nameOrDescProps["aria-labelledby"] = open && !titleIsString ? id : null;
  }
  const childrenProps = {
    ...nameOrDescProps,
    ...other,
    ...children.props,
    className: clsx_default(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef,
    ...followCursor ? {
      onMouseMove: handleMouseMove
    } : {}
  };
  if (true) {
    childrenProps["data-mui-internal-clone-element"] = true;
    React5.useEffect(() => {
      if (childNode && !childNode.getAttribute("data-mui-internal-clone-element")) {
        console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join("\n"));
      }
    }, [childNode]);
  }
  const interactiveWrapperListeners = {};
  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }
  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);
    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }
  if (!disableFocusListener) {
    childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);
    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }
  if (true) {
    if (children.props.title) {
      console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${children.props.title}\` or the Tooltip component.`].join("\n"));
    }
  }
  const ownerState = {
    ...props,
    isRtl,
    arrow: arrow2,
    disableInteractive,
    placement,
    PopperComponentProp,
    touch: ignoreNonTouchEvents.current
  };
  const resolvedPopperProps = typeof slotProps.popper === "function" ? slotProps.popper(ownerState) : slotProps.popper;
  const popperOptions = React5.useMemo(() => {
    let tooltipModifiers = [{
      name: "arrow",
      enabled: Boolean(arrowRef),
      options: {
        element: arrowRef,
        padding: 4
      }
    }];
    if (PopperProps.popperOptions?.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
    }
    if (resolvedPopperProps?.popperOptions?.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(resolvedPopperProps.popperOptions.modifiers);
    }
    return {
      ...PopperProps.popperOptions,
      ...resolvedPopperProps?.popperOptions,
      modifiers: tooltipModifiers
    };
  }, [arrowRef, PopperProps.popperOptions, resolvedPopperProps?.popperOptions]);
  const classes = useUtilityClasses4(ownerState);
  const resolvedTransitionProps = typeof slotProps.transition === "function" ? slotProps.transition(ownerState) : slotProps.transition;
  const externalForwardedProps = {
    slots: {
      popper: components.Popper,
      transition: components.Transition ?? TransitionComponentProp,
      tooltip: components.Tooltip,
      arrow: components.Arrow,
      ...slots
    },
    slotProps: {
      arrow: slotProps.arrow ?? componentsProps.arrow,
      popper: {
        ...PopperProps,
        ...resolvedPopperProps ?? componentsProps.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: slotProps.tooltip ?? componentsProps.tooltip,
      transition: {
        ...TransitionProps,
        ...resolvedTransitionProps ?? componentsProps.transition
      }
    }
  };
  const [PopperSlot, popperSlotProps] = useSlot("popper", {
    elementType: TooltipPopper,
    externalForwardedProps,
    ownerState,
    className: clsx_default(classes.popper, PopperProps?.className)
  });
  const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
    elementType: Grow_default,
    externalForwardedProps,
    ownerState
  });
  const [TooltipSlot, tooltipSlotProps] = useSlot("tooltip", {
    elementType: TooltipTooltip,
    className: classes.tooltip,
    externalForwardedProps,
    ownerState
  });
  const [ArrowSlot, arrowSlotProps] = useSlot("arrow", {
    elementType: TooltipArrow,
    className: classes.arrow,
    externalForwardedProps,
    ownerState,
    ref: setArrowRef
  });
  return (0, import_jsx_runtime5.jsxs)(React5.Fragment, {
    children: [React5.cloneElement(children, childrenProps), (0, import_jsx_runtime5.jsx)(PopperSlot, {
      as: PopperComponentProp ?? Popper_default,
      placement,
      anchorEl: followCursor ? {
        getBoundingClientRect: () => ({
          top: cursorPosition.y,
          left: cursorPosition.x,
          right: cursorPosition.x,
          bottom: cursorPosition.y,
          width: 0,
          height: 0
        })
      } : childNode,
      popperRef,
      open: childNode ? open : false,
      id,
      transition: true,
      ...interactiveWrapperListeners,
      ...popperSlotProps,
      popperOptions,
      children: ({
        TransitionProps: TransitionPropsInner
      }) => (0, import_jsx_runtime5.jsx)(TransitionSlot, {
        timeout: theme.transitions.duration.shorter,
        ...TransitionPropsInner,
        ...transitionSlotProps,
        children: (0, import_jsx_runtime5.jsxs)(TooltipSlot, {
          ...tooltipSlotProps,
          children: [title, arrow2 ? (0, import_jsx_runtime5.jsx)(ArrowSlot, {
            ...arrowSlotProps
          }) : null]
        })
      })
    })]
  });
});
true ? Tooltip.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: import_prop_types5.default.bool,
  /**
   * Tooltip reference element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types5.default.object,
  /**
   * @ignore
   */
  className: import_prop_types5.default.string,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: import_prop_types5.default.shape({
    Arrow: import_prop_types5.default.elementType,
    Popper: import_prop_types5.default.elementType,
    Tooltip: import_prop_types5.default.elementType,
    Transition: import_prop_types5.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: import_prop_types5.default.shape({
    arrow: import_prop_types5.default.object,
    popper: import_prop_types5.default.object,
    tooltip: import_prop_types5.default.object,
    transition: import_prop_types5.default.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: import_prop_types5.default.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: import_prop_types5.default.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: import_prop_types5.default.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: import_prop_types5.default.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: import_prop_types5.default.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: import_prop_types5.default.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: import_prop_types5.default.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: import_prop_types5.default.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: import_prop_types5.default.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: import_prop_types5.default.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: import_prop_types5.default.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: import_prop_types5.default.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: import_prop_types5.default.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: import_prop_types5.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types5.default.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: import_prop_types5.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @deprecated use the `slots.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: import_prop_types5.default.elementType,
  /**
   * Props applied to the [`Popper`](https://mui.com/material-ui/api/popper/) element.
   * @deprecated use the `slotProps.popper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PopperProps: import_prop_types5.default.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types5.default.shape({
    arrow: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object]),
    popper: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object]),
    tooltip: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object]),
    transition: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types5.default.shape({
    arrow: import_prop_types5.default.elementType,
    popper: import_prop_types5.default.elementType,
    tooltip: import_prop_types5.default.elementType,
    transition: import_prop_types5.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: import_prop_types5.default.node,
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: import_prop_types5.default.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: import_prop_types5.default.object
} : void 0;
var Tooltip_default = Tooltip;

// node_modules/@mui/material/esm/Button/buttonClasses.js
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]);
var buttonClasses_default = buttonClasses;

// node_modules/@mui/material/esm/ButtonGroup/ButtonGroupContext.js
var React6 = __toESM(require_react(), 1);
var ButtonGroupContext = React6.createContext({});
if (true) {
  ButtonGroupContext.displayName = "ButtonGroupContext";
}
var ButtonGroupContext_default = ButtonGroupContext;

// node_modules/@mui/material/esm/ButtonGroup/ButtonGroupButtonContext.js
var React7 = __toESM(require_react(), 1);
var ButtonGroupButtonContext = React7.createContext(void 0);
if (true) {
  ButtonGroupButtonContext.displayName = "ButtonGroupButtonContext";
}
var ButtonGroupButtonContext_default = ButtonGroupButtonContext;

// node_modules/@mui/material/esm/Button/Button.js
var React8 = __toESM(require_react(), 1);
var import_prop_types6 = __toESM(require_prop_types(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses5 = (ownerState) => {
  const {
    color,
    disableElevation,
    fullWidth,
    size,
    variant,
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading", variant, `${variant}${capitalize_default(color)}`, `size${capitalize_default(size)}`, `${variant}Size${capitalize_default(size)}`, `color${capitalize_default(color)}`, disableElevation && "disableElevation", fullWidth && "fullWidth", loading && `loadingPosition${capitalize_default(loadingPosition)}`],
    startIcon: ["icon", "startIcon", `iconSize${capitalize_default(size)}`],
    endIcon: ["icon", "endIcon", `iconSize${capitalize_default(size)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return {
    ...classes,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...composedClasses
  };
};
var commonIconStyles = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}];
var ButtonRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize_default(ownerState.color)}`], styles2[`size${capitalize_default(ownerState.size)}`], styles2[`${ownerState.variant}Size${capitalize_default(ownerState.size)}`], ownerState.color === "inherit" && styles2.colorInherit, ownerState.disableElevation && styles2.disableElevation, ownerState.fullWidth && styles2.fullWidth, ownerState.loading && styles2.loading];
  }
})(memoTheme_default(({
  theme
}) => {
  const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
  const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
  return {
    ...theme.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${buttonClasses_default.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: `var(--variant-containedColor)`,
        backgroundColor: `var(--variant-containedBg)`,
        boxShadow: (theme.vars || theme).shadows[2],
        "&:hover": {
          boxShadow: (theme.vars || theme).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (theme.vars || theme).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (theme.vars || theme).shadows[8]
        },
        [`&.${buttonClasses_default.focusVisible}`]: {
          boxShadow: (theme.vars || theme).shadows[6]
        },
        [`&.${buttonClasses_default.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled,
          boxShadow: (theme.vars || theme).shadows[0],
          backgroundColor: (theme.vars || theme).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: `var(--variant-outlinedBorder, currentColor)`,
        backgroundColor: `var(--variant-outlinedBg)`,
        color: `var(--variant-outlinedColor)`,
        [`&.${buttonClasses_default.disabled}`]: {
          border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: `var(--variant-textColor)`,
        backgroundColor: `var(--variant-textBg)`
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color
      },
      style: {
        "--variant-textColor": (theme.vars || theme).palette[color].main,
        "--variant-outlinedColor": (theme.vars || theme).palette[color].main,
        "--variant-outlinedBorder": theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)` : alpha(theme.palette[color].main, 0.5),
        "--variant-containedColor": (theme.vars || theme).palette[color].contrastText,
        "--variant-containedBg": (theme.vars || theme).palette[color].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (theme.vars || theme).palette[color].dark,
            "--variant-textBg": theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (theme.vars || theme).palette[color].main,
            "--variant-outlinedBg": theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
            "--variant-textBg": theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
            "--variant-outlinedBg": theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: true
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${buttonClasses_default.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${buttonClasses_default.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: true
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: theme.transitions.duration.short
        }),
        [`&.${buttonClasses_default.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
}));
var ButtonStartIcon = styled_default("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.startIcon, ownerState.loading && styles2.startIconLoadingStart, styles2[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: true
    },
    style: {
      transition: theme.transitions.create(["opacity"], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: true,
      fullWidth: true
    },
    style: {
      marginRight: -8
    }
  }, ...commonIconStyles]
}));
var ButtonEndIcon = styled_default("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.endIcon, ownerState.loading && styles2.endIconLoadingEnd, styles2[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: true
    },
    style: {
      transition: theme.transitions.create(["opacity"], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: true,
      fullWidth: true
    },
    style: {
      marginLeft: -8
    }
  }, ...commonIconStyles]
}));
var ButtonLoadingIndicator = styled_default("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (theme.vars || theme).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: true
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: true
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
}));
var ButtonLoadingIconPlaceholder = styled_default("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
});
var Button = React8.forwardRef(function Button2(inProps, ref) {
  const contextProps = React8.useContext(ButtonGroupContext_default);
  const buttonGroupButtonContextPositionClassName = React8.useContext(ButtonGroupButtonContext_default);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useDefaultProps({
    props: resolvedProps,
    name: "MuiButton"
  });
  const {
    children,
    color = "primary",
    component = "button",
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = "center",
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text",
    ...other
  } = props;
  const loadingId = useId_default(idProp);
  const loadingIndicator = loadingIndicatorProp ?? (0, import_jsx_runtime6.jsx)(CircularProgress_default, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    loading,
    loadingIndicator,
    loadingPosition,
    size,
    type,
    variant
  };
  const classes = useUtilityClasses5(ownerState);
  const startIcon = (startIconProp || loading && loadingPosition === "start") && (0, import_jsx_runtime6.jsx)(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp || (0, import_jsx_runtime6.jsx)(ButtonLoadingIconPlaceholder, {
      className: classes.loadingIconPlaceholder,
      ownerState
    })
  });
  const endIcon = (endIconProp || loading && loadingPosition === "end") && (0, import_jsx_runtime6.jsx)(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp || (0, import_jsx_runtime6.jsx)(ButtonLoadingIconPlaceholder, {
      className: classes.loadingIconPlaceholder,
      ownerState
    })
  });
  const positionClassName = buttonGroupButtonContextPositionClassName || "";
  const loader = typeof loading === "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    (0, import_jsx_runtime6.jsx)("span", {
      className: classes.loadingWrapper,
      style: {
        display: "contents"
      },
      children: loading && (0, import_jsx_runtime6.jsx)(ButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState,
        children: loadingIndicator
      })
    })
  ) : null;
  return (0, import_jsx_runtime6.jsxs)(ButtonRoot, {
    ownerState,
    className: clsx_default(contextProps.className, classes.root, className, positionClassName),
    component,
    disabled: disabled || loading,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx_default(classes.focusVisible, focusVisibleClassName),
    ref,
    type,
    id: loading ? loadingId : idProp,
    ...other,
    classes,
    children: [startIcon, loadingPosition !== "end" && loader, children, loadingPosition === "end" && loader, endIcon]
  });
});
true ? Button.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types6.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types6.default.object,
  /**
   * @ignore
   */
  className: import_prop_types6.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), import_prop_types6.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types6.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types6.default.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: import_prop_types6.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types6.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types6.default.bool,
  /**
   * Element placed after the children.
   */
  endIcon: import_prop_types6.default.node,
  /**
   * @ignore
   */
  focusVisibleClassName: import_prop_types6.default.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types6.default.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: import_prop_types6.default.string,
  /**
   * @ignore
   */
  id: import_prop_types6.default.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: import_prop_types6.default.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: import_prop_types6.default.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: import_prop_types6.default.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["small", "medium", "large"]), import_prop_types6.default.string]),
  /**
   * Element placed before the children.
   */
  startIcon: import_prop_types6.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object]),
  /**
   * @ignore
   */
  type: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["button", "reset", "submit"]), import_prop_types6.default.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["contained", "outlined", "text"]), import_prop_types6.default.string])
} : void 0;
var Button_default = Button;

// node_modules/@mui/material/esm/Stack/Stack.js
var import_prop_types7 = __toESM(require_prop_types(), 1);
var Stack = createStack({
  createStyledComponent: styled_default("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (inProps) => useDefaultProps({
    props: inProps,
    name: "MuiStack"
  })
});
true ? Stack.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types7.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types7.default.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: import_prop_types7.default.oneOfType([import_prop_types7.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types7.default.arrayOf(import_prop_types7.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types7.default.object]),
  /**
   * Add an element between each child.
   */
  divider: import_prop_types7.default.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.string])), import_prop_types7.default.number, import_prop_types7.default.object, import_prop_types7.default.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object, import_prop_types7.default.bool])), import_prop_types7.default.func, import_prop_types7.default.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: import_prop_types7.default.bool
} : void 0;
var Stack_default = Stack;

// node_modules/@mui/material/esm/Stack/stackClasses.js
var stackClasses = generateUtilityClasses("MuiStack", ["root"]);
var stackClasses_default = stackClasses;

// node_modules/@mui/material/esm/Checkbox/checkboxClasses.js
function getCheckboxUtilityClass(slot) {
  return generateUtilityClass("MuiCheckbox", slot);
}
var checkboxClasses = generateUtilityClasses("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]);
var checkboxClasses_default = checkboxClasses;

// node_modules/@mui/material/esm/Checkbox/Checkbox.js
var React13 = __toESM(require_react(), 1);
var import_prop_types9 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/internal/SwitchBase.js
var React9 = __toESM(require_react(), 1);
var import_prop_types8 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/internal/switchBaseClasses.js
function getSwitchBaseUtilityClass(slot) {
  return generateUtilityClass("PrivateSwitchBase", slot);
}
var switchBaseClasses = generateUtilityClasses("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);

// node_modules/@mui/material/esm/internal/SwitchBase.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses6 = (ownerState) => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", edge && `edge${capitalize_default(edge)}`],
    input: ["input"]
  };
  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
};
var SwitchBaseRoot = styled_default(ButtonBase_default)({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === "start" && ownerState.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge,
      ownerState
    }) => edge === "end" && ownerState.size !== "small",
    style: {
      marginRight: -12
    }
  }]
});
var SwitchBaseInput = styled_default("input", {
  shouldForwardProp: rootShouldForwardProp_default
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});
var SwitchBase = React9.forwardRef(function SwitchBase2(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required = false,
    tabIndex,
    type,
    value,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const [checked, setCheckedState] = useControlled_default({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "SwitchBase",
    state: "checked"
  });
  const muiFormControl = useFormControl();
  const handleFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = (event) => {
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === "checkbox" || type === "radio";
  const ownerState = {
    ...props,
    checked,
    disabled,
    disableFocusRipple,
    edge
  };
  const classes = useUtilityClasses6(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      input: inputProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    elementType: SwitchBaseRoot,
    className: classes.root,
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      ...externalForwardedProps,
      component: "span",
      ...other
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onFocus: (event) => {
        handlers.onFocus?.(event);
        handleFocus(event);
      },
      onBlur: (event) => {
        handlers.onBlur?.(event);
        handleBlur(event);
      }
    }),
    ownerState,
    additionalProps: {
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled,
      role: void 0,
      tabIndex: null
    }
  });
  const [InputSlot, inputSlotProps] = useSlot("input", {
    ref: inputRef,
    elementType: SwitchBaseInput,
    className: classes.input,
    externalForwardedProps,
    getSlotProps: (handlers) => ({
      ...handlers,
      onChange: (event) => {
        handlers.onChange?.(event);
        handleInputChange(event);
      }
    }),
    ownerState,
    additionalProps: {
      autoFocus,
      checked: checkedProp,
      defaultChecked,
      disabled,
      id: hasLabelFor ? id : void 0,
      name,
      readOnly,
      required,
      tabIndex,
      type,
      ...type === "checkbox" && value === void 0 ? {} : {
        value
      }
    }
  });
  return (0, import_jsx_runtime7.jsxs)(RootSlot, {
    ...rootSlotProps,
    children: [(0, import_jsx_runtime7.jsx)(InputSlot, {
      ...inputSlotProps
    }), checked ? checkedIcon : icon]
  });
});
true ? SwitchBase.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types8.default.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types8.default.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: import_prop_types8.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types8.default.object,
  /**
   * @ignore
   */
  className: import_prop_types8.default.string,
  /**
   * @ignore
   */
  defaultChecked: import_prop_types8.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types8.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types8.default.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: import_prop_types8.default.oneOf(["end", "start", false]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: import_prop_types8.default.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types8.default.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   */
  inputProps: import_prop_types8.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /*
   * @ignore
   */
  name: import_prop_types8.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types8.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types8.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types8.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types8.default.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: import_prop_types8.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types8.default.shape({
    input: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object]),
    root: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types8.default.shape({
    input: import_prop_types8.default.elementType,
    root: import_prop_types8.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types8.default.object,
  /**
   * @ignore
   */
  tabIndex: import_prop_types8.default.oneOfType([import_prop_types8.default.number, import_prop_types8.default.string]),
  /**
   * The input component prop `type`.
   */
  type: import_prop_types8.default.string.isRequired,
  /**
   * The value of the component.
   */
  value: import_prop_types8.default.any
} : void 0;
var SwitchBase_default = SwitchBase;

// node_modules/@mui/material/esm/internal/svg-icons/CheckBoxOutlineBlank.js
var React10 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var CheckBoxOutlineBlank_default = createSvgIcon((0, import_jsx_runtime8.jsx)("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank");

// node_modules/@mui/material/esm/internal/svg-icons/CheckBox.js
var React11 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var CheckBox_default = createSvgIcon((0, import_jsx_runtime9.jsx)("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox");

// node_modules/@mui/material/esm/internal/svg-icons/IndeterminateCheckBox.js
var React12 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var IndeterminateCheckBox_default = createSvgIcon((0, import_jsx_runtime10.jsx)("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");

// node_modules/@mui/material/esm/Checkbox/Checkbox.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses7 = (ownerState) => {
  const {
    classes,
    indeterminate,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", indeterminate && "indeterminate", `color${capitalize_default(color)}`, `size${capitalize_default(size)}`]
  };
  const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
  return {
    ...classes,
    // forward the disabled and checked classes to the SwitchBase
    ...composedClasses
  };
};
var CheckboxRoot = styled_default(SwitchBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.indeterminate && styles2.indeterminate, styles2[`size${capitalize_default(ownerState.size)}`], ownerState.color !== "default" && styles2[`color${capitalize_default(ownerState.color)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  variants: [{
    props: {
      color: "default",
      disableRipple: false
    },
    style: {
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disableRipple: false
    },
    style: {
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${checkboxClasses_default.checked}, &.${checkboxClasses_default.indeterminate}`]: {
        color: (theme.vars || theme).palette[color].main
      },
      [`&.${checkboxClasses_default.disabled}`]: {
        color: (theme.vars || theme).palette.action.disabled
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: false
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
})));
var defaultCheckedIcon = (0, import_jsx_runtime11.jsx)(CheckBox_default, {});
var defaultIcon = (0, import_jsx_runtime11.jsx)(CheckBoxOutlineBlank_default, {});
var defaultIndeterminateIcon = (0, import_jsx_runtime11.jsx)(IndeterminateCheckBox_default, {});
var Checkbox = React13.forwardRef(function Checkbox2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCheckbox"
  });
  const {
    checkedIcon = defaultCheckedIcon,
    color = "primary",
    icon: iconProp = defaultIcon,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = "medium",
    disableRipple = false,
    className,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  const ownerState = {
    ...props,
    disableRipple,
    color,
    indeterminate,
    size
  };
  const classes = useUtilityClasses7(ownerState);
  const externalInputProps = slotProps.input ?? inputProps;
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    elementType: CheckboxRoot,
    className: clsx_default(classes.root, className),
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      slots,
      slotProps,
      ...other
    },
    ownerState,
    additionalProps: {
      type: "checkbox",
      icon: React13.cloneElement(icon, {
        fontSize: icon.props.fontSize ?? size
      }),
      checkedIcon: React13.cloneElement(indeterminateIcon, {
        fontSize: indeterminateIcon.props.fontSize ?? size
      }),
      disableRipple,
      slots,
      slotProps: {
        input: mergeSlotProps(typeof externalInputProps === "function" ? externalInputProps(ownerState) : externalInputProps, {
          "data-indeterminate": indeterminate
        })
      }
    }
  });
  return (0, import_jsx_runtime11.jsx)(RootSlot, {
    ...rootSlotProps,
    classes
  });
});
true ? Checkbox.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types9.default.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: import_prop_types9.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types9.default.object,
  /**
   * @ignore
   */
  className: import_prop_types9.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types9.default.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: import_prop_types9.default.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types9.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: import_prop_types9.default.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: import_prop_types9.default.node,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types9.default.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: import_prop_types9.default.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: import_prop_types9.default.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: import_prop_types9.default.object,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types9.default.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: import_prop_types9.default.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["medium", "small"]), import_prop_types9.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types9.default.shape({
    input: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object]),
    root: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types9.default.shape({
    input: import_prop_types9.default.elementType,
    root: import_prop_types9.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: import_prop_types9.default.any
} : void 0;
var Checkbox_default = Checkbox;

// node_modules/@mui/material/esm/RadioGroup/useRadioGroup.js
var React15 = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/RadioGroup/RadioGroupContext.js
var React14 = __toESM(require_react(), 1);
var RadioGroupContext = React14.createContext(void 0);
if (true) {
  RadioGroupContext.displayName = "RadioGroupContext";
}
var RadioGroupContext_default = RadioGroupContext;

// node_modules/@mui/material/esm/RadioGroup/useRadioGroup.js
function useRadioGroup() {
  return React15.useContext(RadioGroupContext_default);
}

// node_modules/@mui/material/esm/Radio/radioClasses.js
function getRadioUtilityClass(slot) {
  return generateUtilityClass("MuiRadio", slot);
}
var radioClasses = generateUtilityClasses("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]);
var radioClasses_default = radioClasses;

// node_modules/@mui/material/esm/Radio/Radio.js
var React19 = __toESM(require_react(), 1);
var import_prop_types11 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Radio/RadioButtonIcon.js
var React18 = __toESM(require_react(), 1);
var import_prop_types10 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/internal/svg-icons/RadioButtonUnchecked.js
var React16 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var RadioButtonUnchecked_default = createSvgIcon((0, import_jsx_runtime12.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked");

// node_modules/@mui/material/esm/internal/svg-icons/RadioButtonChecked.js
var React17 = __toESM(require_react(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var RadioButtonChecked_default = createSvgIcon((0, import_jsx_runtime13.jsx)("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked");

// node_modules/@mui/material/esm/Radio/RadioButtonIcon.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var RadioButtonIconRoot = styled_default("span", {
  shouldForwardProp: rootShouldForwardProp_default
})({
  position: "relative",
  display: "flex"
});
var RadioButtonIconBackground = styled_default(RadioButtonUnchecked_default)({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
});
var RadioButtonIconDot = styled_default(RadioButtonChecked_default)(memoTheme_default(({
  theme
}) => ({
  left: 0,
  position: "absolute",
  transform: "scale(0)",
  transition: theme.transitions.create("transform", {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: {
      checked: true
    },
    style: {
      transform: "scale(1)",
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shortest
      })
    }
  }]
})));
function RadioButtonIcon(props) {
  const {
    checked = false,
    classes = {},
    fontSize
  } = props;
  const ownerState = {
    ...props,
    checked
  };
  return (0, import_jsx_runtime14.jsxs)(RadioButtonIconRoot, {
    className: classes.root,
    ownerState,
    children: [(0, import_jsx_runtime14.jsx)(RadioButtonIconBackground, {
      fontSize,
      className: classes.background,
      ownerState
    }), (0, import_jsx_runtime14.jsx)(RadioButtonIconDot, {
      fontSize,
      className: classes.dot,
      ownerState
    })]
  });
}
true ? RadioButtonIcon.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types10.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types10.default.object,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: import_prop_types10.default.oneOf(["small", "medium"])
} : void 0;
var RadioButtonIcon_default = RadioButtonIcon;

// node_modules/@mui/material/esm/Radio/Radio.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses8 = (ownerState) => {
  const {
    classes,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize_default(color)}`, size !== "medium" && `size${capitalize_default(size)}`]
  };
  return {
    ...classes,
    ...composeClasses(slots, getRadioUtilityClass, classes)
  };
};
var RadioRoot = styled_default(SwitchBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.size !== "medium" && styles2[`size${capitalize_default(ownerState.size)}`], styles2[`color${capitalize_default(ownerState.color)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${radioClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  },
  variants: [{
    props: {
      color: "default",
      disabled: false,
      disableRipple: false
    },
    style: {
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disabled: false,
      disableRipple: false
    },
    style: {
      "&:hover": {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disabled: false
    },
    style: {
      [`&.${radioClasses_default.checked}`]: {
        color: (theme.vars || theme).palette[color].main
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: false
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
})));
function areEqualValues(a, b) {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
var defaultCheckedIcon2 = (0, import_jsx_runtime15.jsx)(RadioButtonIcon_default, {
  checked: true
});
var defaultIcon2 = (0, import_jsx_runtime15.jsx)(RadioButtonIcon_default, {});
var Radio = React19.forwardRef(function Radio2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiRadio"
  });
  const {
    checked: checkedProp,
    checkedIcon = defaultCheckedIcon2,
    color = "primary",
    icon = defaultIcon2,
    name: nameProp,
    onChange: onChangeProp,
    size = "medium",
    className,
    disabled: disabledProp,
    disableRipple = false,
    slots = {},
    slotProps = {},
    inputProps,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === "undefined") {
      disabled = muiFormControl.disabled;
    }
  }
  disabled ??= false;
  const ownerState = {
    ...props,
    disabled,
    disableRipple,
    color,
    size
  };
  const classes = useUtilityClasses8(ownerState);
  const radioGroup = useRadioGroup();
  let checked = checkedProp;
  const onChange = createChainedFunction_default(onChangeProp, radioGroup && radioGroup.onChange);
  let name = nameProp;
  if (radioGroup) {
    if (typeof checked === "undefined") {
      checked = areEqualValues(radioGroup.value, props.value);
    }
    if (typeof name === "undefined") {
      name = radioGroup.name;
    }
  }
  const externalInputProps = slotProps.input ?? inputProps;
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    elementType: RadioRoot,
    className: clsx_default(classes.root, className),
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      slots,
      slotProps,
      ...other
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onChange: (event, ...args) => {
        handlers.onChange?.(event, ...args);
        onChange(event, ...args);
      }
    }),
    ownerState,
    additionalProps: {
      type: "radio",
      icon: React19.cloneElement(icon, {
        fontSize: icon.props.fontSize ?? size
      }),
      checkedIcon: React19.cloneElement(checkedIcon, {
        fontSize: checkedIcon.props.fontSize ?? size
      }),
      disabled,
      name,
      checked,
      slots,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof externalInputProps === "function" ? externalInputProps(ownerState) : externalInputProps
      }
    }
  });
  return (0, import_jsx_runtime15.jsx)(RootSlot, {
    ...rootSlotProps,
    classes
  });
});
true ? Radio.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types11.default.bool,
  /**
   * The icon to display when the component is checked.
   * @default <RadioButtonIcon checked />
   */
  checkedIcon: import_prop_types11.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types11.default.object,
  /**
   * @ignore
   */
  className: import_prop_types11.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types11.default.string]),
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types11.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: import_prop_types11.default.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <RadioButtonIcon />
   */
  icon: import_prop_types11.default.node,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types11.default.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: import_prop_types11.default.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: refType_default,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types11.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types11.default.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: import_prop_types11.default.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   * @default 'medium'
   */
  size: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["medium", "small"]), import_prop_types11.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types11.default.shape({
    input: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    root: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types11.default.shape({
    input: import_prop_types11.default.elementType,
    root: import_prop_types11.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: import_prop_types11.default.any
} : void 0;
var Radio_default = Radio;

// node_modules/@mui/material/esm/TableContainer/tableContainerClasses.js
function getTableContainerUtilityClass(slot) {
  return generateUtilityClass("MuiTableContainer", slot);
}
var tableContainerClasses = generateUtilityClasses("MuiTableContainer", ["root"]);
var tableContainerClasses_default = tableContainerClasses;

// node_modules/@mui/material/esm/TableContainer/TableContainer.js
var React20 = __toESM(require_react(), 1);
var import_prop_types12 = __toESM(require_prop_types(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses9 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableContainerUtilityClass, classes);
};
var TableContainerRoot = styled_default("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
});
var TableContainer = React20.forwardRef(function TableContainer2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableContainer"
  });
  const {
    className,
    component = "div",
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses9(ownerState);
  return (0, import_jsx_runtime16.jsx)(TableContainerRoot, {
    ref,
    as: component,
    className: clsx_default(classes.root, className),
    ownerState,
    ...other
  });
});
true ? TableContainer.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Table`.
   */
  children: import_prop_types12.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types12.default.object,
  /**
   * @ignore
   */
  className: import_prop_types12.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types12.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object])
} : void 0;
var TableContainer_default = TableContainer;

// node_modules/@mui/material/esm/Table/tableClasses.js
function getTableUtilityClass(slot) {
  return generateUtilityClass("MuiTable", slot);
}
var tableClasses = generateUtilityClasses("MuiTable", ["root", "stickyHeader"]);
var tableClasses_default = tableClasses;

// node_modules/@mui/material/esm/Table/Table.js
var React22 = __toESM(require_react(), 1);
var import_prop_types13 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Table/TableContext.js
var React21 = __toESM(require_react(), 1);
var TableContext = React21.createContext();
if (true) {
  TableContext.displayName = "TableContext";
}
var TableContext_default = TableContext;

// node_modules/@mui/material/esm/Table/Table.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses10 = (ownerState) => {
  const {
    classes,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ["root", stickyHeader && "stickyHeader"]
  };
  return composeClasses(slots, getTableUtilityClass, classes);
};
var TableRoot = styled_default("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.stickyHeader && styles2.stickyHeader];
  }
})(memoTheme_default(({
  theme
}) => ({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  "& caption": {
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: (theme.vars || theme).palette.text.secondary,
    textAlign: "left",
    captionSide: "bottom"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      borderCollapse: "separate"
    }
  }]
})));
var defaultComponent = "table";
var Table = React22.forwardRef(function Table2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTable"
  });
  const {
    className,
    component = defaultComponent,
    padding = "normal",
    size = "medium",
    stickyHeader = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    padding,
    size,
    stickyHeader
  };
  const classes = useUtilityClasses10(ownerState);
  const table = React22.useMemo(() => ({
    padding,
    size,
    stickyHeader
  }), [padding, size, stickyHeader]);
  return (0, import_jsx_runtime17.jsx)(TableContext_default.Provider, {
    value: table,
    children: (0, import_jsx_runtime17.jsx)(TableRoot, {
      as: component,
      role: component === defaultComponent ? null : "table",
      ref,
      className: clsx_default(classes.root, className),
      ownerState,
      ...other
    })
  });
});
true ? Table.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the table, normally `TableHead` and `TableBody`.
   */
  children: import_prop_types13.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types13.default.object,
  /**
   * @ignore
   */
  className: import_prop_types13.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types13.default.elementType,
  /**
   * Allows TableCells to inherit padding of the Table.
   * @default 'normal'
   */
  padding: import_prop_types13.default.oneOf(["checkbox", "none", "normal"]),
  /**
   * Allows TableCells to inherit size of the Table.
   * @default 'medium'
   */
  size: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["medium", "small"]), import_prop_types13.default.string]),
  /**
   * Set the header sticky.
   * @default false
   */
  stickyHeader: import_prop_types13.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object, import_prop_types13.default.bool])), import_prop_types13.default.func, import_prop_types13.default.object])
} : void 0;
var Table_default = Table;

// node_modules/@mui/material/esm/TableBody/tableBodyClasses.js
function getTableBodyUtilityClass(slot) {
  return generateUtilityClass("MuiTableBody", slot);
}
var tableBodyClasses = generateUtilityClasses("MuiTableBody", ["root"]);
var tableBodyClasses_default = tableBodyClasses;

// node_modules/@mui/material/esm/TableBody/TableBody.js
var React24 = __toESM(require_react(), 1);
var import_prop_types14 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Table/Tablelvl2Context.js
var React23 = __toESM(require_react(), 1);
var Tablelvl2Context = React23.createContext();
if (true) {
  Tablelvl2Context.displayName = "Tablelvl2Context";
}
var Tablelvl2Context_default = Tablelvl2Context;

// node_modules/@mui/material/esm/TableBody/TableBody.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses11 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableBodyUtilityClass, classes);
};
var TableBodyRoot = styled_default("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
});
var tablelvl2 = {
  variant: "body"
};
var defaultComponent2 = "tbody";
var TableBody = React24.forwardRef(function TableBody2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableBody"
  });
  const {
    className,
    component = defaultComponent2,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses11(ownerState);
  return (0, import_jsx_runtime18.jsx)(Tablelvl2Context_default.Provider, {
    value: tablelvl2,
    children: (0, import_jsx_runtime18.jsx)(TableBodyRoot, {
      className: clsx_default(classes.root, className),
      as: component,
      ref,
      role: component === defaultComponent2 ? null : "rowgroup",
      ownerState,
      ...other
    })
  });
});
true ? TableBody.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
   */
  children: import_prop_types14.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types14.default.object,
  /**
   * @ignore
   */
  className: import_prop_types14.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types14.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object])
} : void 0;
var TableBody_default = TableBody;

// node_modules/@mui/material/esm/TableRow/tableRowClasses.js
function getTableRowUtilityClass(slot) {
  return generateUtilityClass("MuiTableRow", slot);
}
var tableRowClasses = generateUtilityClasses("MuiTableRow", ["root", "selected", "hover", "head", "footer"]);
var tableRowClasses_default = tableRowClasses;

// node_modules/@mui/material/esm/TableRow/TableRow.js
var React25 = __toESM(require_react(), 1);
var import_prop_types15 = __toESM(require_prop_types(), 1);
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses12 = (ownerState) => {
  const {
    classes,
    selected,
    hover,
    head,
    footer
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", hover && "hover", head && "head", footer && "footer"]
  };
  return composeClasses(slots, getTableRowUtilityClass, classes);
};
var TableRowRoot = styled_default("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.head && styles2.head, ownerState.footer && styles2.footer];
  }
})(memoTheme_default(({
  theme
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${tableRowClasses_default.hover}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${tableRowClasses_default.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
    }
  }
})));
var defaultComponent3 = "tr";
var TableRow = React25.forwardRef(function TableRow2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableRow"
  });
  const {
    className,
    component = defaultComponent3,
    hover = false,
    selected = false,
    ...other
  } = props;
  const tablelvl24 = React25.useContext(Tablelvl2Context_default);
  const ownerState = {
    ...props,
    component,
    hover,
    selected,
    head: tablelvl24 && tablelvl24.variant === "head",
    footer: tablelvl24 && tablelvl24.variant === "footer"
  };
  const classes = useUtilityClasses12(ownerState);
  return (0, import_jsx_runtime19.jsx)(TableRowRoot, {
    as: component,
    ref,
    className: clsx_default(classes.root, className),
    role: component === defaultComponent3 ? null : "row",
    ownerState,
    ...other
  });
});
true ? TableRow.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Should be valid `<tr>` children such as `TableCell`.
   */
  children: import_prop_types15.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types15.default.object,
  /**
   * @ignore
   */
  className: import_prop_types15.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types15.default.elementType,
  /**
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hover: import_prop_types15.default.bool,
  /**
   * If `true`, the table row will have the selected shading.
   * @default false
   */
  selected: import_prop_types15.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object])
} : void 0;
var TableRow_default = TableRow;

// node_modules/@mui/material/esm/Skeleton/skeletonClasses.js
function getSkeletonUtilityClass(slot) {
  return generateUtilityClass("MuiSkeleton", slot);
}
var skeletonClasses = generateUtilityClasses("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
var skeletonClasses_default = skeletonClasses;

// node_modules/@mui/material/esm/Skeleton/Skeleton.js
var React26 = __toESM(require_react(), 1);
var import_prop_types16 = __toESM(require_prop_types(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses13 = (ownerState) => {
  const {
    classes,
    variant,
    animation,
    hasChildren,
    width,
    height
  } = ownerState;
  const slots = {
    root: ["root", variant, animation, hasChildren && "withChildren", hasChildren && !width && "fitContent", hasChildren && !height && "heightAuto"]
  };
  return composeClasses(slots, getSkeletonUtilityClass, classes);
};
var pulseKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`;
var waveKeyframe = keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`;
var pulseAnimation = typeof pulseKeyframe !== "string" ? css`
        animation: ${pulseKeyframe} 2s ease-in-out 0.5s infinite;
      ` : null;
var waveAnimation = typeof waveKeyframe !== "string" ? css`
        &::after {
          animation: ${waveKeyframe} 2s linear 0.5s infinite;
        }
      ` : null;
var SkeletonRoot = styled_default("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], ownerState.animation !== false && styles2[ownerState.animation], ownerState.hasChildren && styles2.withChildren, ownerState.hasChildren && !ownerState.width && styles2.fitContent, ownerState.hasChildren && !ownerState.height && styles2.heightAuto];
  }
})(memoTheme_default(({
  theme
}) => {
  const radiusUnit = getUnit(theme.shape.borderRadius) || "px";
  const radiusValue = toUnitless(theme.shape.borderRadius);
  return {
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: theme.vars ? theme.vars.palette.Skeleton.bg : alpha(theme.palette.text.primary, theme.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em",
    variants: [{
      props: {
        variant: "text"
      },
      style: {
        marginTop: 0,
        marginBottom: 0,
        height: "auto",
        transformOrigin: "0 55%",
        transform: "scale(1, 0.60)",
        borderRadius: `${radiusValue}${radiusUnit}/${Math.round(radiusValue / 0.6 * 10) / 10}${radiusUnit}`,
        "&:empty:before": {
          content: '"\\00a0"'
        }
      }
    }, {
      props: {
        variant: "circular"
      },
      style: {
        borderRadius: "50%"
      }
    }, {
      props: {
        variant: "rounded"
      },
      style: {
        borderRadius: (theme.vars || theme).shape.borderRadius
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.hasChildren,
      style: {
        "& > *": {
          visibility: "hidden"
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.hasChildren && !ownerState.width,
      style: {
        maxWidth: "fit-content"
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.hasChildren && !ownerState.height,
      style: {
        height: "auto"
      }
    }, {
      props: {
        animation: "pulse"
      },
      style: pulseAnimation || {
        animation: `${pulseKeyframe} 2s ease-in-out 0.5s infinite`
      }
    }, {
      props: {
        animation: "wave"
      },
      style: {
        position: "relative",
        overflow: "hidden",
        /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        "&::after": {
          background: `linear-gradient(
                90deg,
                transparent,
                ${(theme.vars || theme).palette.action.hover},
                transparent
              )`,
          content: '""',
          position: "absolute",
          transform: "translateX(-100%)",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0
        }
      }
    }, {
      props: {
        animation: "wave"
      },
      style: waveAnimation || {
        "&::after": {
          animation: `${waveKeyframe} 2s linear 0.5s infinite`
        }
      }
    }]
  };
}));
var Skeleton = React26.forwardRef(function Skeleton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSkeleton"
  });
  const {
    animation = "pulse",
    className,
    component = "span",
    height,
    style,
    variant = "text",
    width,
    ...other
  } = props;
  const ownerState = {
    ...props,
    animation,
    component,
    variant,
    hasChildren: Boolean(other.children)
  };
  const classes = useUtilityClasses13(ownerState);
  return (0, import_jsx_runtime20.jsx)(SkeletonRoot, {
    as: component,
    ref,
    className: clsx_default(classes.root, className),
    ownerState,
    ...other,
    style: {
      width,
      height,
      ...style
    }
  });
});
true ? Skeleton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation: import_prop_types16.default.oneOf(["pulse", "wave", false]),
  /**
   * Optional children to infer width and height from.
   */
  children: import_prop_types16.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types16.default.object,
  /**
   * @ignore
   */
  className: import_prop_types16.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types16.default.elementType,
  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: import_prop_types16.default.oneOfType([import_prop_types16.default.number, import_prop_types16.default.string]),
  /**
   * @ignore
   */
  style: import_prop_types16.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object]),
  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["circular", "rectangular", "rounded", "text"]), import_prop_types16.default.string]),
  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: import_prop_types16.default.oneOfType([import_prop_types16.default.number, import_prop_types16.default.string])
} : void 0;
var Skeleton_default = Skeleton;

// node_modules/@mui/material/esm/TableCell/tableCellClasses.js
function getTableCellUtilityClass(slot) {
  return generateUtilityClass("MuiTableCell", slot);
}
var tableCellClasses = generateUtilityClasses("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]);
var tableCellClasses_default = tableCellClasses;

// node_modules/@mui/material/esm/TableCell/TableCell.js
var React27 = __toESM(require_react(), 1);
var import_prop_types17 = __toESM(require_prop_types(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses14 = (ownerState) => {
  const {
    classes,
    variant,
    align,
    padding,
    size,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ["root", variant, stickyHeader && "stickyHeader", align !== "inherit" && `align${capitalize_default(align)}`, padding !== "normal" && `padding${capitalize_default(padding)}`, `size${capitalize_default(size)}`]
  };
  return composeClasses(slots, getTableCellUtilityClass, classes);
};
var TableCellRoot = styled_default("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`size${capitalize_default(ownerState.size)}`], ownerState.padding !== "normal" && styles2[`padding${capitalize_default(ownerState.padding)}`], ownerState.align !== "inherit" && styles2[`align${capitalize_default(ownerState.align)}`], ownerState.stickyHeader && styles2.stickyHeader];
  }
})(memoTheme_default(({
  theme
}) => ({
  ...theme.typography.body2,
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === "light" ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68)}`,
  textAlign: "left",
  padding: 16,
  variants: [{
    props: {
      variant: "head"
    },
    style: {
      color: (theme.vars || theme).palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    }
  }, {
    props: {
      variant: "body"
    },
    style: {
      color: (theme.vars || theme).palette.text.primary
    }
  }, {
    props: {
      variant: "footer"
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: "6px 16px",
      [`&.${tableCellClasses_default.paddingCheckbox}`]: {
        width: 24,
        // prevent the checkbox column from growing
        padding: "0 12px 0 16px",
        "& > *": {
          padding: 0
        }
      }
    }
  }, {
    props: {
      padding: "checkbox"
    },
    style: {
      width: 48,
      // prevent the checkbox column from growing
      padding: "0 0 0 4px"
    }
  }, {
    props: {
      padding: "none"
    },
    style: {
      padding: 0
    }
  }, {
    props: {
      align: "left"
    },
    style: {
      textAlign: "left"
    }
  }, {
    props: {
      align: "center"
    },
    style: {
      textAlign: "center"
    }
  }, {
    props: {
      align: "right"
    },
    style: {
      textAlign: "right",
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      align: "justify"
    },
    style: {
      textAlign: "justify"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 2,
      backgroundColor: (theme.vars || theme).palette.background.default
    }
  }]
})));
var TableCell = React27.forwardRef(function TableCell2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableCell"
  });
  const {
    align = "inherit",
    className,
    component: componentProp,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant: variantProp,
    ...other
  } = props;
  const table = React27.useContext(TableContext_default);
  const tablelvl24 = React27.useContext(Tablelvl2Context_default);
  const isHeadCell = tablelvl24 && tablelvl24.variant === "head";
  let component;
  if (componentProp) {
    component = componentProp;
  } else {
    component = isHeadCell ? "th" : "td";
  }
  let scope = scopeProp;
  if (component === "td") {
    scope = void 0;
  } else if (!scope && isHeadCell) {
    scope = "col";
  }
  const variant = variantProp || tablelvl24 && tablelvl24.variant;
  const ownerState = {
    ...props,
    align,
    component,
    padding: paddingProp || (table && table.padding ? table.padding : "normal"),
    size: sizeProp || (table && table.size ? table.size : "medium"),
    sortDirection,
    stickyHeader: variant === "head" && table && table.stickyHeader,
    variant
  };
  const classes = useUtilityClasses14(ownerState);
  let ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === "asc" ? "ascending" : "descending";
  }
  return (0, import_jsx_runtime21.jsx)(TableCellRoot, {
    as: component,
    ref,
    className: clsx_default(classes.root, className),
    "aria-sort": ariaSort,
    scope,
    ownerState,
    ...other
  });
});
true ? TableCell.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   * @default 'inherit'
   */
  align: import_prop_types17.default.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: import_prop_types17.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types17.default.object,
  /**
   * @ignore
   */
  className: import_prop_types17.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types17.default.elementType,
  /**
   * Sets the padding applied to the cell.
   * The prop defaults to the value (`'default'`) inherited from the parent Table component.
   */
  padding: import_prop_types17.default.oneOf(["checkbox", "none", "normal"]),
  /**
   * Set scope attribute.
   */
  scope: import_prop_types17.default.string,
  /**
   * Specify the size of the cell.
   * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
   */
  size: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["medium", "small"]), import_prop_types17.default.string]),
  /**
   * Set aria-sort direction.
   */
  sortDirection: import_prop_types17.default.oneOf(["asc", "desc", false]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object, import_prop_types17.default.bool])), import_prop_types17.default.func, import_prop_types17.default.object]),
  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["body", "footer", "head"]), import_prop_types17.default.string])
} : void 0;
var TableCell_default = TableCell;

// node_modules/@mui/material/esm/Collapse/collapseClasses.js
function getCollapseUtilityClass(slot) {
  return generateUtilityClass("MuiCollapse", slot);
}
var collapseClasses = generateUtilityClasses("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
var collapseClasses_default = collapseClasses;

// node_modules/@mui/material/esm/Collapse/Collapse.js
var React28 = __toESM(require_react(), 1);
var import_prop_types18 = __toESM(require_prop_types(), 1);
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses15 = (ownerState) => {
  const {
    orientation,
    classes
  } = ownerState;
  const slots = {
    root: ["root", `${orientation}`],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", `${orientation}`],
    wrapperInner: ["wrapperInner", `${orientation}`]
  };
  return composeClasses(slots, getCollapseUtilityClass, classes);
};
var CollapseRoot = styled_default("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.orientation], ownerState.state === "entered" && styles2.entered, ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px" && styles2.hidden];
  }
})(memoTheme_default(({
  theme
}) => ({
  height: 0,
  overflow: "hidden",
  transition: theme.transitions.create("height"),
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      height: "auto",
      width: 0,
      transition: theme.transitions.create("width")
    }
  }, {
    props: {
      state: "entered"
    },
    style: {
      height: "auto",
      overflow: "visible"
    }
  }, {
    props: {
      state: "entered",
      orientation: "horizontal"
    },
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.state === "exited" && !ownerState.in && ownerState.collapsedSize === "0px",
    style: {
      visibility: "hidden"
    }
  }]
})));
var CollapseWrapper = styled_default("div", {
  name: "MuiCollapse",
  slot: "Wrapper"
})({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
});
var CollapseWrapperInner = styled_default("div", {
  name: "MuiCollapse",
  slot: "WrapperInner"
})({
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
});
var Collapse = React28.forwardRef(function Collapse2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCollapse"
  });
  const {
    addEndListener,
    children,
    className,
    collapsedSize: collapsedSizeProp = "0px",
    component,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    orientation = "vertical",
    style,
    timeout = duration.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition_default,
    ...other
  } = props;
  const ownerState = {
    ...props,
    orientation,
    collapsedSize: collapsedSizeProp
  };
  const classes = useUtilityClasses15(ownerState);
  const theme = useTheme();
  const timer = useTimeout();
  const wrapperRef = React28.useRef(null);
  const autoTransitionDuration = React28.useRef();
  const collapsedSize = typeof collapsedSizeProp === "number" ? `${collapsedSizeProp}px` : collapsedSizeProp;
  const isHorizontal = orientation === "horizontal";
  const size = isHorizontal ? "width" : "height";
  const nodeRef = React28.useRef(null);
  const handleRef = useForkRef_default(ref, nodeRef);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const getWrapperSize = () => wrapperRef.current ? wrapperRef.current[isHorizontal ? "clientWidth" : "clientHeight"] : 0;
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    if (wrapperRef.current && isHorizontal) {
      wrapperRef.current.style.position = "absolute";
    }
    node.style[size] = collapsedSize;
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const wrapperSize = getWrapperSize();
    if (wrapperRef.current && isHorizontal) {
      wrapperRef.current.style.position = "";
    }
    const {
      duration: transitionDuration,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "enter"
    });
    if (timeout === "auto") {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
    }
    node.style[size] = `${wrapperSize}px`;
    node.style.transitionTimingFunction = transitionTimingFunction;
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback((node, isAppearing) => {
    node.style[size] = "auto";
    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  const handleExit = normalizedTransitionCallback((node) => {
    node.style[size] = `${getWrapperSize()}px`;
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleExiting = normalizedTransitionCallback((node) => {
    const wrapperSize = getWrapperSize();
    const {
      duration: transitionDuration,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: "exit"
    });
    if (timeout === "auto") {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === "string" ? transitionDuration : `${transitionDuration}ms`;
    }
    node.style[size] = collapsedSize;
    node.style.transitionTimingFunction = transitionTimingFunction;
    if (onExiting) {
      onExiting(node);
    }
  });
  const handleAddEndListener = (next) => {
    if (timeout === "auto") {
      timer.start(autoTransitionDuration.current || 0, next);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return (0, import_jsx_runtime22.jsx)(TransitionComponent, {
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef,
    timeout: timeout === "auto" ? null : timeout,
    ...other,
    children: (state, {
      ownerState: incomingOwnerState,
      ...restChildProps
    }) => (0, import_jsx_runtime22.jsx)(CollapseRoot, {
      as: component,
      className: clsx_default(classes.root, className, {
        "entered": classes.entered,
        "exited": !inProp && collapsedSize === "0px" && classes.hidden
      }[state]),
      style: {
        [isHorizontal ? "minWidth" : "minHeight"]: collapsedSize,
        ...style
      },
      ref: handleRef,
      ownerState: {
        ...ownerState,
        state
      },
      ...restChildProps,
      children: (0, import_jsx_runtime22.jsx)(CollapseWrapper, {
        ownerState: {
          ...ownerState,
          state
        },
        className: classes.wrapper,
        ref: wrapperRef,
        children: (0, import_jsx_runtime22.jsx)(CollapseWrapperInner, {
          ownerState: {
            ...ownerState,
            state
          },
          className: classes.wrapperInner,
          children
        })
      })
    })
  });
});
true ? Collapse.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: import_prop_types18.default.func,
  /**
   * The content node to be collapsed.
   */
  children: import_prop_types18.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types18.default.object,
  /**
   * @ignore
   */
  className: import_prop_types18.default.string,
  /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: import_prop_types18.default.oneOfType([import_prop_types18.default.number, import_prop_types18.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef_default,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: import_prop_types18.default.oneOfType([import_prop_types18.default.shape({
    enter: import_prop_types18.default.string,
    exit: import_prop_types18.default.string
  }), import_prop_types18.default.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: import_prop_types18.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types18.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types18.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types18.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types18.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types18.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types18.default.func,
  /**
   * The transition orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types18.default.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  style: import_prop_types18.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object, import_prop_types18.default.bool])), import_prop_types18.default.func, import_prop_types18.default.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["auto"]), import_prop_types18.default.number, import_prop_types18.default.shape({
    appear: import_prop_types18.default.number,
    enter: import_prop_types18.default.number,
    exit: import_prop_types18.default.number
  })])
} : void 0;
if (Collapse) {
  Collapse.muiSupportAuto = true;
}
var Collapse_default = Collapse;

// node_modules/@mui/material/esm/TableFooter/tableFooterClasses.js
function getTableFooterUtilityClass(slot) {
  return generateUtilityClass("MuiTableFooter", slot);
}
var tableFooterClasses = generateUtilityClasses("MuiTableFooter", ["root"]);
var tableFooterClasses_default = tableFooterClasses;

// node_modules/@mui/material/esm/TableFooter/TableFooter.js
var React29 = __toESM(require_react(), 1);
var import_prop_types19 = __toESM(require_prop_types(), 1);
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses16 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableFooterUtilityClass, classes);
};
var TableFooterRoot = styled_default("tfoot", {
  name: "MuiTableFooter",
  slot: "Root"
})({
  display: "table-footer-group"
});
var tablelvl22 = {
  variant: "footer"
};
var defaultComponent4 = "tfoot";
var TableFooter = React29.forwardRef(function TableFooter2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableFooter"
  });
  const {
    className,
    component = defaultComponent4,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses16(ownerState);
  return (0, import_jsx_runtime23.jsx)(Tablelvl2Context_default.Provider, {
    value: tablelvl22,
    children: (0, import_jsx_runtime23.jsx)(TableFooterRoot, {
      as: component,
      className: clsx_default(classes.root, className),
      ref,
      role: component === defaultComponent4 ? null : "rowgroup",
      ownerState,
      ...other
    })
  });
});
true ? TableFooter.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
   */
  children: import_prop_types19.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types19.default.object,
  /**
   * @ignore
   */
  className: import_prop_types19.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types19.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types19.default.oneOfType([import_prop_types19.default.arrayOf(import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object, import_prop_types19.default.bool])), import_prop_types19.default.func, import_prop_types19.default.object])
} : void 0;
var TableFooter_default = TableFooter;

// node_modules/@mui/material/esm/TableHead/tableHeadClasses.js
function getTableHeadUtilityClass(slot) {
  return generateUtilityClass("MuiTableHead", slot);
}
var tableHeadClasses = generateUtilityClasses("MuiTableHead", ["root"]);
var tableHeadClasses_default = tableHeadClasses;

// node_modules/@mui/material/esm/TableHead/TableHead.js
var React30 = __toESM(require_react(), 1);
var import_prop_types20 = __toESM(require_prop_types(), 1);
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses17 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableHeadUtilityClass, classes);
};
var TableHeadRoot = styled_default("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
});
var tablelvl23 = {
  variant: "head"
};
var defaultComponent5 = "thead";
var TableHead = React30.forwardRef(function TableHead2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableHead"
  });
  const {
    className,
    component = defaultComponent5,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses17(ownerState);
  return (0, import_jsx_runtime24.jsx)(Tablelvl2Context_default.Provider, {
    value: tablelvl23,
    children: (0, import_jsx_runtime24.jsx)(TableHeadRoot, {
      as: component,
      className: clsx_default(classes.root, className),
      ref,
      role: component === defaultComponent5 ? null : "rowgroup",
      ownerState,
      ...other
    })
  });
});
true ? TableHead.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
   */
  children: import_prop_types20.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types20.default.object,
  /**
   * @ignore
   */
  className: import_prop_types20.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types20.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types20.default.oneOfType([import_prop_types20.default.arrayOf(import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object, import_prop_types20.default.bool])), import_prop_types20.default.func, import_prop_types20.default.object])
} : void 0;
var TableHead_default = TableHead;

// node_modules/@mui/material/esm/FormControlLabel/formControlLabelClasses.js
function getFormControlLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControlLabel", slot);
}
var formControlLabelClasses = generateUtilityClasses("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
var formControlLabelClasses_default = formControlLabelClasses;

// node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js
var React31 = __toESM(require_react(), 1);
var import_prop_types21 = __toESM(require_prop_types(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses18 = (ownerState) => {
  const {
    classes,
    disabled,
    labelPlacement,
    error,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", `labelPlacement${capitalize_default(labelPlacement)}`, error && "error", required && "required"],
    label: ["label", disabled && "disabled"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
};
var FormControlLabelRoot = styled_default("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formControlLabelClasses_default.label}`]: styles2.label
    }, styles2.root, styles2[`labelPlacement${capitalize_default(ownerState.labelPlacement)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${formControlLabelClasses_default.disabled}`]: {
    cursor: "default"
  },
  [`& .${formControlLabelClasses_default.label}`]: {
    [`&.${formControlLabelClasses_default.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled
    }
  },
  variants: [{
    props: {
      labelPlacement: "start"
    },
    style: {
      flexDirection: "row-reverse",
      marginRight: -11
    }
  }, {
    props: {
      labelPlacement: "top"
    },
    style: {
      flexDirection: "column-reverse"
    }
  }, {
    props: {
      labelPlacement: "bottom"
    },
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      labelPlacement
    }) => labelPlacement === "start" || labelPlacement === "top" || labelPlacement === "bottom",
    style: {
      marginLeft: 16
      // used for row presentation of radio/checkbox
    }
  }]
})));
var AsteriskComponent = styled_default("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk"
})(memoTheme_default(({
  theme
}) => ({
  [`&.${formControlLabelClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
var FormControlLabel = React31.forwardRef(function FormControlLabel2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormControlLabel"
  });
  const {
    checked,
    className,
    componentsProps = {},
    control,
    disabled: disabledProp,
    disableTypography,
    inputRef,
    label: labelProp,
    labelPlacement = "end",
    name,
    onChange,
    required: requiredProp,
    slots = {},
    slotProps = {},
    value,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const disabled = disabledProp ?? control.props.disabled ?? muiFormControl?.disabled;
  const required = requiredProp ?? control.props.required;
  const controlProps = {
    disabled,
    required
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((key) => {
    if (typeof control.props[key] === "undefined" && typeof props[key] !== "undefined") {
      controlProps[key] = props[key];
    }
  });
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["error"]
  });
  const ownerState = {
    ...props,
    disabled,
    labelPlacement,
    required,
    error: fcs.error
  };
  const classes = useUtilityClasses18(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      ...componentsProps,
      ...slotProps
    }
  };
  const [TypographySlot, typographySlotProps] = useSlot("typography", {
    elementType: Typography_default,
    externalForwardedProps,
    ownerState
  });
  let label = labelProp;
  if (label != null && label.type !== Typography_default && !disableTypography) {
    label = (0, import_jsx_runtime25.jsx)(TypographySlot, {
      component: "span",
      ...typographySlotProps,
      className: clsx_default(classes.label, typographySlotProps?.className),
      children: label
    });
  }
  return (0, import_jsx_runtime25.jsxs)(FormControlLabelRoot, {
    className: clsx_default(classes.root, className),
    ownerState,
    ref,
    ...other,
    children: [React31.cloneElement(control, controlProps), required ? (0, import_jsx_runtime25.jsxs)("div", {
      children: [label, (0, import_jsx_runtime25.jsxs)(AsteriskComponent, {
        ownerState,
        "aria-hidden": true,
        className: classes.asterisk,
        children: [" ", "*"]
      })]
    }) : label]
  });
});
true ? FormControlLabel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component appears selected.
   */
  checked: import_prop_types21.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types21.default.object,
  /**
   * @ignore
   */
  className: import_prop_types21.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: import_prop_types21.default.shape({
    typography: import_prop_types21.default.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: import_prop_types21.default.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: import_prop_types21.default.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: import_prop_types21.default.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_default,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: import_prop_types21.default.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: import_prop_types21.default.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: import_prop_types21.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types21.default.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: import_prop_types21.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types21.default.shape({
    typography: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types21.default.shape({
    typography: import_prop_types21.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object, import_prop_types21.default.bool])), import_prop_types21.default.func, import_prop_types21.default.object]),
  /**
   * The value of the component.
   */
  value: import_prop_types21.default.any
} : void 0;
var FormControlLabel_default = FormControlLabel;

// node_modules/@mui/material/esm/useAutocomplete/useAutocomplete.js
var React33 = __toESM(require_react(), 1);

// node_modules/@mui/utils/esm/usePreviousProps/usePreviousProps.js
var React32 = __toESM(require_react(), 1);
var usePreviousProps = (value) => {
  const ref = React32.useRef({});
  React32.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
var usePreviousProps_default = usePreviousProps;

// node_modules/@mui/material/esm/useAutocomplete/useAutocomplete.js
function stripDiacritics(string) {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = "any",
    stringify,
    trim = false
  } = config;
  return (options, {
    inputValue,
    getOptionLabel
  }) => {
    let input = trim ? inputValue.trim() : inputValue;
    if (ignoreCase) {
      input = input.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
    }
    const filteredOptions = !input ? options : options.filter((option) => {
      let candidate = (stringify || getOptionLabel)(option);
      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }
      return matchFrom === "start" ? candidate.startsWith(input) : candidate.includes(input);
    });
    return typeof limit === "number" ? filteredOptions.slice(0, limit) : filteredOptions;
  };
}
var defaultFilterOptions = createFilterOptions();
var pageSize = 5;
var defaultIsActiveElementInListbox = (listboxRef) => listboxRef.current !== null && listboxRef.current.parentElement?.contains(document.activeElement);
var MULTIPLE_DEFAULT_VALUE = [];
function getInputValue(value, multiple, getOptionLabel, renderValue) {
  if (multiple || value == null || renderValue) {
    return "";
  }
  const optionLabel = getOptionLabel(value);
  return typeof optionLabel === "string" ? optionLabel : "";
}
function useAutocomplete(props) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox = defaultIsActiveElementInListbox,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix = "Mui",
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    componentName = "useAutocomplete",
    defaultValue = props.multiple ? MULTIPLE_DEFAULT_VALUE : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabled: disabledProp,
    disabledItemsFocusable = false,
    disableListWrap = false,
    filterOptions = defaultFilterOptions,
    filterSelectedOptions = false,
    freeSolo = false,
    getOptionDisabled,
    getOptionKey,
    getOptionLabel: getOptionLabelProp = (option) => option.label ?? option,
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    id: idProp,
    includeInputInList = false,
    inputValue: inputValueProp,
    isOptionEqualToValue = (option, value2) => option === value2,
    multiple = false,
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open: openProp,
    openOnFocus = false,
    options,
    readOnly = false,
    renderValue,
    selectOnFocus = !props.freeSolo,
    value: valueProp
  } = props;
  const id = useId(idProp);
  let getOptionLabel = getOptionLabelProp;
  getOptionLabel = (option) => {
    const optionLabel = getOptionLabelProp(option);
    if (typeof optionLabel !== "string") {
      if (true) {
        const erroneousReturn = optionLabel === void 0 ? "undefined" : `${typeof optionLabel} (${optionLabel})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${componentName} returned ${erroneousReturn} instead of a string for ${JSON.stringify(option)}.`);
      }
      return String(optionLabel);
    }
    return optionLabel;
  };
  const ignoreFocus = React33.useRef(false);
  const firstFocus = React33.useRef(true);
  const inputRef = React33.useRef(null);
  const listboxRef = React33.useRef(null);
  const [anchorEl, setAnchorEl] = React33.useState(null);
  const [focusedItem, setFocusedItem] = React33.useState(-1);
  const defaultHighlighted = autoHighlight ? 0 : -1;
  const highlightedIndexRef = React33.useRef(defaultHighlighted);
  const initialInputValue = React33.useRef(getInputValue(defaultValue ?? valueProp, multiple, getOptionLabel)).current;
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  });
  const [inputValue, setInputValueState] = useControlled({
    controlled: inputValueProp,
    default: initialInputValue,
    name: componentName,
    state: "inputValue"
  });
  const [focused, setFocused] = React33.useState(false);
  const resetInputValue = React33.useCallback((event, newValue, reason) => {
    const isOptionSelected = multiple ? value.length < newValue.length : newValue !== null;
    if (!isOptionSelected && !clearOnBlur) {
      return;
    }
    const newInputValue = getInputValue(newValue, multiple, getOptionLabel, renderValue);
    if (inputValue === newInputValue) {
      return;
    }
    setInputValueState(newInputValue);
    if (onInputChange) {
      onInputChange(event, newInputValue, reason);
    }
  }, [getOptionLabel, inputValue, multiple, onInputChange, setInputValueState, clearOnBlur, value, renderValue]);
  const [open, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: componentName,
    state: "open"
  });
  const [inputPristine, setInputPristine] = React33.useState(true);
  const inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  const popupOpen = open && !readOnly;
  const filteredOptions = popupOpen ? filterOptions(
    options.filter((option) => {
      if (filterSelectedOptions && (multiple ? value : [value]).some((value2) => value2 !== null && isOptionEqualToValue(option, value2))) {
        return false;
      }
      return true;
    }),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: inputValueIsSelectedValue && inputPristine ? "" : inputValue,
      getOptionLabel
    }
  ) : [];
  const previousProps = usePreviousProps_default({
    filteredOptions,
    value,
    inputValue
  });
  React33.useEffect(() => {
    const valueChange = value !== previousProps.value;
    if (focused && !valueChange) {
      return;
    }
    if (freeSolo && !valueChange) {
      return;
    }
    resetInputValue(null, value, "reset");
  }, [value, resetInputValue, focused, previousProps.value, freeSolo]);
  const listboxAvailable = open && filteredOptions.length > 0 && !readOnly;
  const focusItem = useEventCallback_default((itemToFocus) => {
    if (itemToFocus === -1) {
      inputRef.current.focus();
    } else {
      const indexType = renderValue ? "data-item-index" : "data-tag-index";
      anchorEl.querySelector(`[${indexType}="${itemToFocus}"]`).focus();
    }
  });
  React33.useEffect(() => {
    if (multiple && focusedItem > value.length - 1) {
      setFocusedItem(-1);
      focusItem(-1);
    }
  }, [value, multiple, focusedItem, focusItem]);
  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index < 0 || index >= filteredOptions.length) {
      return -1;
    }
    let nextFocus = index;
    while (true) {
      const option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`);
      const nextFocusDisabled = disabledItemsFocusable ? false : !option || option.disabled || option.getAttribute("aria-disabled") === "true";
      if (option && option.hasAttribute("tabindex") && !nextFocusDisabled) {
        return nextFocus;
      }
      if (direction === "next") {
        nextFocus = (nextFocus + 1) % filteredOptions.length;
      } else {
        nextFocus = (nextFocus - 1 + filteredOptions.length) % filteredOptions.length;
      }
      if (nextFocus === index) {
        return -1;
      }
    }
  }
  const setHighlightedIndex = useEventCallback_default(({
    event,
    index,
    reason
  }) => {
    highlightedIndexRef.current = index;
    if (index === -1) {
      inputRef.current.removeAttribute("aria-activedescendant");
    } else {
      inputRef.current.setAttribute("aria-activedescendant", `${id}-option-${index}`);
    }
    if (onHighlightChange && ["mouse", "keyboard", "touch"].includes(reason)) {
      onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
    }
    if (!listboxRef.current) {
      return;
    }
    const prev = listboxRef.current.querySelector(`[role="option"].${unstable_classNamePrefix}-focused`);
    if (prev) {
      prev.classList.remove(`${unstable_classNamePrefix}-focused`);
      prev.classList.remove(`${unstable_classNamePrefix}-focusVisible`);
    }
    let listboxNode = listboxRef.current;
    if (listboxRef.current.getAttribute("role") !== "listbox") {
      listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]');
    }
    if (!listboxNode) {
      return;
    }
    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }
    const option = listboxRef.current.querySelector(`[data-option-index="${index}"]`);
    if (!option) {
      return;
    }
    option.classList.add(`${unstable_classNamePrefix}-focused`);
    if (reason === "keyboard") {
      option.classList.add(`${unstable_classNamePrefix}-focusVisible`);
    }
    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== "mouse" && reason !== "touch") {
      const element = option;
      const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      const elementBottom = element.offsetTop + element.offsetHeight;
      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  const changeHighlightedIndex = useEventCallback_default(({
    event,
    diff,
    direction = "next",
    reason
  }) => {
    if (!popupOpen) {
      return;
    }
    const getNextIndex = () => {
      const maxIndex = filteredOptions.length - 1;
      if (diff === "reset") {
        return defaultHighlighted;
      }
      if (diff === "start") {
        return 0;
      }
      if (diff === "end") {
        return maxIndex;
      }
      const newIndex = highlightedIndexRef.current + diff;
      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }
        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }
        return maxIndex;
      }
      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }
        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }
        return 0;
      }
      return newIndex;
    };
    const nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason,
      event
    });
    if (autoComplete && diff !== "reset") {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        const option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option;
        const index = option.toLowerCase().indexOf(inputValue.toLowerCase());
        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  const getPreviousHighlightedOptionIndex = () => {
    const isSameValue = (value1, value2) => {
      const label1 = value1 ? getOptionLabel(value1) : "";
      const label2 = value2 ? getOptionLabel(value2) : "";
      return label1 === label2;
    };
    if (highlightedIndexRef.current !== -1 && previousProps.filteredOptions && previousProps.filteredOptions.length !== filteredOptions.length && previousProps.inputValue === inputValue && (multiple ? value.length === previousProps.value.length && previousProps.value.every((val, i) => getOptionLabel(value[i]) === getOptionLabel(val)) : isSameValue(previousProps.value, value))) {
      const previousHighlightedOption = previousProps.filteredOptions[highlightedIndexRef.current];
      if (previousHighlightedOption) {
        return filteredOptions.findIndex((option) => {
          return getOptionLabel(option) === getOptionLabel(previousHighlightedOption);
        });
      }
    }
    return -1;
  };
  const syncHighlightedIndex = React33.useCallback(() => {
    if (!popupOpen) {
      return;
    }
    const previousHighlightedOptionIndex = getPreviousHighlightedOptionIndex();
    if (previousHighlightedOptionIndex !== -1) {
      highlightedIndexRef.current = previousHighlightedOptionIndex;
      return;
    }
    const valueItem = multiple ? value[0] : value;
    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: "reset"
      });
      return;
    }
    if (!listboxRef.current) {
      return;
    }
    if (valueItem != null) {
      const currentOption = filteredOptions[highlightedIndexRef.current];
      if (multiple && currentOption && value.findIndex((val) => isOptionEqualToValue(currentOption, val)) !== -1) {
        return;
      }
      const itemIndex = filteredOptions.findIndex((optionItem) => isOptionEqualToValue(optionItem, valueItem));
      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: "reset"
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }
      return;
    }
    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    }
    setHighlightedIndex({
      index: highlightedIndexRef.current
    });
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    filteredOptions.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    multiple ? false : value,
    filterSelectedOptions,
    changeHighlightedIndex,
    setHighlightedIndex,
    popupOpen,
    inputValue,
    multiple
  ]);
  const handleListboxRef = useEventCallback_default((node) => {
    setRef(listboxRef, node);
    if (!node) {
      return;
    }
    syncHighlightedIndex();
  });
  if (true) {
    React33.useEffect(() => {
      if (!inputRef.current || inputRef.current.nodeName !== "INPUT") {
        if (inputRef.current && inputRef.current.nodeName === "TEXTAREA") {
          console.warn([`A textarea element was provided to ${componentName} where input was expected.`, `This is not a supported scenario but it may work under certain conditions.`, `A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).`, `Make sure to test keyboard navigation and add custom event handlers if necessary.`].join("\n"));
        } else {
          console.error([`MUI: Unable to find the input element. It was resolved to ${inputRef.current} while an HTMLInputElement was expected.`, `Instead, ${componentName} expects an input element.`, "", componentName === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join("\n"));
        }
      }
    }, [componentName]);
  }
  React33.useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);
  const handleOpen = (event) => {
    if (open) {
      return;
    }
    setOpenState(true);
    setInputPristine(true);
    if (onOpen) {
      onOpen(event);
    }
  };
  const handleClose = (event, reason) => {
    if (!open) {
      return;
    }
    setOpenState(false);
    if (onClose) {
      onClose(event, reason);
    }
  };
  const handleValue = (event, newValue, reason, details) => {
    if (multiple) {
      if (value.length === newValue.length && value.every((val, i) => val === newValue[i])) {
        return;
      }
    } else if (value === newValue) {
      return;
    }
    if (onChange) {
      onChange(event, newValue, reason, details);
    }
    setValueState(newValue);
  };
  const isTouch = React33.useRef(false);
  const selectNewValue = (event, option, reasonProp = "selectOption", origin = "options") => {
    let reason = reasonProp;
    let newValue = option;
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      if (true) {
        const matches = newValue.filter((val) => isOptionEqualToValue(option, val));
        if (matches.length > 1) {
          console.error([`MUI: The \`isOptionEqualToValue\` method of ${componentName} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${matches.length} matches.`].join("\n"));
        }
      }
      const itemIndex = newValue.findIndex((valueItem) => isOptionEqualToValue(option, valueItem));
      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== "freeSolo") {
        newValue.splice(itemIndex, 1);
        reason = "removeOption";
      }
    }
    resetInputValue(event, newValue, reason);
    handleValue(event, newValue, reason, {
      option
    });
    if (!disableCloseOnSelect && (!event || !event.ctrlKey && !event.metaKey)) {
      handleClose(event, reason);
    }
    if (blurOnSelect === true || blurOnSelect === "touch" && isTouch.current || blurOnSelect === "mouse" && !isTouch.current) {
      inputRef.current.blur();
    }
  };
  function validItemIndex(index, direction) {
    if (index === -1) {
      return -1;
    }
    let nextFocus = index;
    while (true) {
      if (direction === "next" && nextFocus === value.length || direction === "previous" && nextFocus === -1) {
        return -1;
      }
      const indexType = renderValue ? "data-item-index" : "data-tag-index";
      const option = anchorEl.querySelector(`[${indexType}="${nextFocus}"]`);
      if (!option || !option.hasAttribute("tabindex") || option.disabled || option.getAttribute("aria-disabled") === "true") {
        nextFocus += direction === "next" ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }
  const handleFocusItem = (event, direction) => {
    if (!multiple) {
      return;
    }
    if (inputValue === "") {
      handleClose(event, "toggleInput");
    }
    let nextItem2 = focusedItem;
    if (focusedItem === -1) {
      if (inputValue === "" && direction === "previous") {
        nextItem2 = value.length - 1;
      }
    } else {
      nextItem2 += direction === "next" ? 1 : -1;
      if (nextItem2 < 0) {
        nextItem2 = 0;
      }
      if (nextItem2 === value.length) {
        nextItem2 = -1;
      }
    }
    nextItem2 = validItemIndex(nextItem2, direction);
    setFocusedItem(nextItem2);
    focusItem(nextItem2);
  };
  const handleClear = (event) => {
    ignoreFocus.current = true;
    setInputValueState("");
    if (onInputChange) {
      onInputChange(event, "", "clear");
    }
    handleValue(event, multiple ? [] : null, "clear");
  };
  const handleKeyDown = (other) => (event) => {
    if (other.onKeyDown) {
      other.onKeyDown(event);
    }
    if (event.defaultMuiPrevented) {
      return;
    }
    if (focusedItem !== -1 && !["ArrowLeft", "ArrowRight"].includes(event.key)) {
      setFocusedItem(-1);
      focusItem(-1);
    }
    if (event.which !== 229) {
      switch (event.key) {
        case "Home":
          if (popupOpen && handleHomeEndKeys) {
            event.preventDefault();
            changeHighlightedIndex({
              diff: "start",
              direction: "next",
              reason: "keyboard",
              event
            });
          }
          break;
        case "End":
          if (popupOpen && handleHomeEndKeys) {
            event.preventDefault();
            changeHighlightedIndex({
              diff: "end",
              direction: "previous",
              reason: "keyboard",
              event
            });
          }
          break;
        case "PageUp":
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: "previous",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "PageDown":
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: "next",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "ArrowDown":
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "ArrowUp":
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event
          });
          handleOpen(event);
          break;
        case "ArrowLeft":
          if (!multiple && renderValue) {
            focusItem(0);
          } else {
            handleFocusItem(event, "previous");
          }
          break;
        case "ArrowRight":
          if (!multiple && renderValue) {
            focusItem(-1);
          } else {
            handleFocusItem(event, "next");
          }
          break;
        case "Enter":
          if (highlightedIndexRef.current !== -1 && popupOpen) {
            const option = filteredOptions[highlightedIndexRef.current];
            const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
            event.preventDefault();
            if (disabled) {
              return;
            }
            selectNewValue(event, option, "selectOption");
            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== "" && inputValueIsSelectedValue === false) {
            if (multiple) {
              event.preventDefault();
            }
            selectNewValue(event, inputValue, "createOption", "freeSolo");
          }
          break;
        case "Escape":
          if (popupOpen) {
            event.preventDefault();
            event.stopPropagation();
            handleClose(event, "escape");
          } else if (clearOnEscape && (inputValue !== "" || multiple && value.length > 0 || renderValue)) {
            event.preventDefault();
            event.stopPropagation();
            handleClear(event);
          }
          break;
        case "Backspace":
          if (multiple && !readOnly && inputValue === "" && value.length > 0) {
            const index = focusedItem === -1 ? value.length - 1 : focusedItem;
            const newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, "removeOption", {
              option: value[index]
            });
          }
          if (!multiple && renderValue && !readOnly) {
            setValueState(null);
            focusItem(-1);
          }
          break;
        case "Delete":
          if (multiple && !readOnly && inputValue === "" && value.length > 0 && focusedItem !== -1) {
            const index = focusedItem;
            const newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, "removeOption", {
              option: value[index]
            });
          }
          if (!multiple && renderValue && !readOnly) {
            setValueState(null);
            focusItem(-1);
          }
          break;
        default:
      }
    }
  };
  const handleFocus = (event) => {
    setFocused(true);
    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };
  const handleBlur = (event) => {
    if (unstable_isActiveElementInListbox(listboxRef)) {
      inputRef.current.focus();
      return;
    }
    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;
    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], "blur");
    } else if (autoSelect && freeSolo && inputValue !== "") {
      selectNewValue(event, inputValue, "blur", "freeSolo");
    } else if (clearOnBlur) {
      resetInputValue(event, value, "blur");
    }
    handleClose(event, "blur");
  };
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (inputValue !== newValue) {
      setInputValueState(newValue);
      setInputPristine(false);
      if (onInputChange) {
        onInputChange(event, newValue, "input");
      }
    }
    if (newValue === "") {
      if (!disableClearable && !multiple) {
        handleValue(event, null, "clear");
      }
    } else {
      handleOpen(event);
    }
  };
  const handleOptionMouseMove = (event) => {
    const index = Number(event.currentTarget.getAttribute("data-option-index"));
    if (highlightedIndexRef.current !== index) {
      setHighlightedIndex({
        event,
        index,
        reason: "mouse"
      });
    }
  };
  const handleOptionTouchStart = (event) => {
    setHighlightedIndex({
      event,
      index: Number(event.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    });
    isTouch.current = true;
  };
  const handleOptionClick = (event) => {
    const index = Number(event.currentTarget.getAttribute("data-option-index"));
    selectNewValue(event, filteredOptions[index], "selectOption");
    isTouch.current = false;
  };
  const handleItemDelete = (index) => (event) => {
    const newValue = value.slice();
    newValue.splice(index, 1);
    handleValue(event, newValue, "removeOption", {
      option: value[index]
    });
  };
  const handleSingleItemDelete = (event) => {
    handleValue(event, null, "removeOption", {
      option: value
    });
  };
  const handlePopupIndicator = (event) => {
    if (open) {
      handleClose(event, "toggleInput");
    } else {
      handleOpen(event);
    }
  };
  const handleMouseDown = (event) => {
    if (!event.currentTarget.contains(event.target)) {
      return;
    }
    if (event.target.getAttribute("id") !== id) {
      event.preventDefault();
    }
  };
  const handleClick = (event) => {
    if (!event.currentTarget.contains(event.target)) {
      return;
    }
    inputRef.current.focus();
    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }
    firstFocus.current = false;
  };
  const handleInputMouseDown = (event) => {
    if (!disabledProp && (inputValue === "" || !open)) {
      handlePopupIndicator(event);
    }
  };
  let dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  let groupedOptions = filteredOptions;
  if (groupBy) {
    const indexBy = /* @__PURE__ */ new Map();
    let warn = false;
    groupedOptions = filteredOptions.reduce((acc, option, index) => {
      const group = groupBy(option);
      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (true) {
          if (indexBy.get(group) && !warn) {
            console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${componentName} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`.");
            warn = true;
          }
          indexBy.set(group, true);
        }
        acc.push({
          key: index,
          index,
          group,
          options: [option]
        });
      }
      return acc;
    }, []);
  }
  if (disabledProp && focused) {
    handleBlur();
  }
  return {
    getRootProps: (other = {}) => ({
      ...other,
      onKeyDown: handleKeyDown(other),
      onMouseDown: handleMouseDown,
      onClick: handleClick
    }),
    getInputLabelProps: () => ({
      id: `${id}-label`,
      htmlFor: id
    }),
    getInputProps: () => ({
      id,
      value: inputValue,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onChange: handleInputChange,
      onMouseDown: handleInputMouseDown,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": popupOpen ? "" : null,
      "aria-autocomplete": autoComplete ? "both" : "list",
      "aria-controls": listboxAvailable ? `${id}-listbox` : void 0,
      "aria-expanded": listboxAvailable,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: inputRef,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: disabledProp
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: handleClear
    }),
    getItemProps: ({
      index = 0
    } = {}) => ({
      ...multiple && {
        key: index
      },
      ...renderValue ? {
        "data-item-index": index
      } : {
        "data-tag-index": index
      },
      tabIndex: -1,
      ...!readOnly && {
        onDelete: multiple ? handleItemDelete(index) : handleSingleItemDelete
      }
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: handlePopupIndicator
    }),
    // deprecated
    getTagProps: ({
      index
    }) => ({
      key: index,
      "data-tag-index": index,
      tabIndex: -1,
      ...!readOnly && {
        onDelete: handleItemDelete(index)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${id}-listbox`,
      "aria-labelledby": `${id}-label`,
      ref: handleListboxRef,
      onMouseDown: (event) => {
        event.preventDefault();
      }
    }),
    getOptionProps: ({
      index,
      option
    }) => {
      const selected = (multiple ? value : [value]).some((value2) => value2 != null && isOptionEqualToValue(option, value2));
      const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: getOptionKey?.(option) ?? getOptionLabel(option),
        tabIndex: -1,
        role: "option",
        id: `${id}-option-${index}`,
        onMouseMove: handleOptionMouseMove,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        "data-option-index": index,
        "aria-disabled": disabled,
        "aria-selected": selected
      };
    },
    id,
    inputValue,
    value,
    dirty,
    expanded: popupOpen && anchorEl,
    popupOpen,
    focused: focused || focusedItem !== -1,
    anchorEl,
    setAnchorEl,
    focusedItem,
    // deprecated
    focusedTag: focusedItem,
    groupedOptions
  };
}
var useAutocomplete_default = useAutocomplete;

// node_modules/@mui/material/esm/ListSubheader/listSubheaderClasses.js
function getListSubheaderUtilityClass(slot) {
  return generateUtilityClass("MuiListSubheader", slot);
}
var listSubheaderClasses = generateUtilityClasses("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
var listSubheaderClasses_default = listSubheaderClasses;

// node_modules/@mui/material/esm/ListSubheader/ListSubheader.js
var React34 = __toESM(require_react(), 1);
var import_prop_types22 = __toESM(require_prop_types(), 1);
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses19 = (ownerState) => {
  const {
    classes,
    color,
    disableGutters,
    inset,
    disableSticky
  } = ownerState;
  const slots = {
    root: ["root", color !== "default" && `color${capitalize_default(color)}`, !disableGutters && "gutters", inset && "inset", !disableSticky && "sticky"]
  };
  return composeClasses(slots, getListSubheaderUtilityClass, classes);
};
var ListSubheaderRoot = styled_default("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "default" && styles2[`color${capitalize_default(ownerState.color)}`], !ownerState.disableGutters && styles2.gutters, ownerState.inset && styles2.inset, !ownerState.disableSticky && styles2.sticky];
  }
})(memoTheme_default(({
  theme
}) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (theme.vars || theme).palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(14),
  variants: [{
    props: {
      color: "primary"
    },
    style: {
      color: (theme.vars || theme).palette.primary.main
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.inset,
    style: {
      paddingLeft: 72
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disableSticky,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: (theme.vars || theme).palette.background.paper
    }
  }]
})));
var ListSubheader = React34.forwardRef(function ListSubheader2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiListSubheader"
  });
  const {
    className,
    color = "default",
    component = "li",
    disableGutters = false,
    disableSticky = false,
    inset = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    component,
    disableGutters,
    disableSticky,
    inset
  };
  const classes = useUtilityClasses19(ownerState);
  return (0, import_jsx_runtime26.jsx)(ListSubheaderRoot, {
    as: component,
    className: clsx_default(classes.root, className),
    ref,
    ownerState,
    ...other
  });
});
if (ListSubheader) {
  ListSubheader.muiSkipListHighlight = true;
}
true ? ListSubheader.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types22.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types22.default.object,
  /**
   * @ignore
   */
  className: import_prop_types22.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: import_prop_types22.default.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types22.default.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: import_prop_types22.default.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: import_prop_types22.default.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: import_prop_types22.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types22.default.oneOfType([import_prop_types22.default.arrayOf(import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object, import_prop_types22.default.bool])), import_prop_types22.default.func, import_prop_types22.default.object])
} : void 0;
var ListSubheader_default = ListSubheader;

// node_modules/@mui/material/esm/Chip/chipClasses.js
function getChipUtilityClass(slot) {
  return generateUtilityClass("MuiChip", slot);
}
var chipClasses = generateUtilityClasses("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]);
var chipClasses_default = chipClasses;

// node_modules/@mui/material/esm/Chip/Chip.js
var React36 = __toESM(require_react(), 1);
var import_prop_types23 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/internal/svg-icons/Cancel.js
var React35 = __toESM(require_react(), 1);
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var Cancel_default = createSvgIcon((0, import_jsx_runtime27.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");

// node_modules/@mui/material/esm/Chip/Chip.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses20 = (ownerState) => {
  const {
    classes,
    disabled,
    size,
    color,
    iconColor,
    onDelete,
    clickable,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant, disabled && "disabled", `size${capitalize_default(size)}`, `color${capitalize_default(color)}`, clickable && "clickable", clickable && `clickableColor${capitalize_default(color)}`, onDelete && "deletable", onDelete && `deletableColor${capitalize_default(color)}`, `${variant}${capitalize_default(color)}`],
    label: ["label", `label${capitalize_default(size)}`],
    avatar: ["avatar", `avatar${capitalize_default(size)}`, `avatarColor${capitalize_default(color)}`],
    icon: ["icon", `icon${capitalize_default(size)}`, `iconColor${capitalize_default(iconColor)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${capitalize_default(size)}`, `deleteIconColor${capitalize_default(color)}`, `deleteIcon${capitalize_default(variant)}Color${capitalize_default(color)}`]
  };
  return composeClasses(slots, getChipUtilityClass, classes);
};
var ChipRoot = styled_default("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    const {
      color,
      iconColor,
      clickable,
      onDelete,
      size,
      variant
    } = ownerState;
    return [{
      [`& .${chipClasses_default.avatar}`]: styles2.avatar
    }, {
      [`& .${chipClasses_default.avatar}`]: styles2[`avatar${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.avatar}`]: styles2[`avatarColor${capitalize_default(color)}`]
    }, {
      [`& .${chipClasses_default.icon}`]: styles2.icon
    }, {
      [`& .${chipClasses_default.icon}`]: styles2[`icon${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.icon}`]: styles2[`iconColor${capitalize_default(iconColor)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles2.deleteIcon
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles2[`deleteIcon${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles2[`deleteIconColor${capitalize_default(color)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles2[`deleteIcon${capitalize_default(variant)}Color${capitalize_default(color)}`]
    }, styles2.root, styles2[`size${capitalize_default(size)}`], styles2[`color${capitalize_default(color)}`], clickable && styles2.clickable, clickable && color !== "default" && styles2[`clickableColor${capitalize_default(color)})`], onDelete && styles2.deletable, onDelete && color !== "default" && styles2[`deletableColor${capitalize_default(color)}`], styles2[variant], styles2[`${variant}${capitalize_default(color)}`]];
  }
})(memoTheme_default(({
  theme
}) => {
  const textColor = theme.palette.mode === "light" ? theme.palette.grey[700] : theme.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (theme.vars || theme).palette.text.primary,
    backgroundColor: (theme.vars || theme).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${chipClasses_default.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${chipClasses_default.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
      fontSize: theme.typography.pxToRem(12)
    },
    [`& .${chipClasses_default.avatarColorPrimary}`]: {
      color: (theme.vars || theme).palette.primary.contrastText,
      backgroundColor: (theme.vars || theme).palette.primary.dark
    },
    [`& .${chipClasses_default.avatarColorSecondary}`]: {
      color: (theme.vars || theme).palette.secondary.contrastText,
      backgroundColor: (theme.vars || theme).palette.secondary.dark
    },
    [`& .${chipClasses_default.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: theme.typography.pxToRem(10)
    },
    [`& .${chipClasses_default.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${chipClasses_default.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.26)` : alpha(theme.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.4)` : alpha(theme.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${chipClasses_default.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${chipClasses_default.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["contrastText"])).map(([color]) => {
      return {
        props: {
          color
        },
        style: {
          backgroundColor: (theme.vars || theme).palette[color].main,
          color: (theme.vars || theme).palette[color].contrastText,
          [`& .${chipClasses_default.deleteIcon}`]: {
            color: theme.vars ? `rgba(${theme.vars.palette[color].contrastTextChannel} / 0.7)` : alpha(theme.palette[color].contrastText, 0.7),
            "&:hover, &:active": {
              color: (theme.vars || theme).palette[color].contrastText
            }
          }
        }
      };
    }), {
      props: (props) => props.iconColor === props.color,
      style: {
        [`& .${chipClasses_default.icon}`]: {
          color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
        }
      }
    }, {
      props: (props) => props.iconColor === props.color && props.color !== "default",
      style: {
        [`& .${chipClasses_default.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: true
      },
      style: {
        [`&.${chipClasses_default.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => {
      return {
        props: {
          color,
          onDelete: true
        },
        style: {
          [`&.${chipClasses_default.focusVisible}`]: {
            background: (theme.vars || theme).palette[color].dark
          }
        }
      };
    }), {
      props: {
        clickable: true
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
        },
        [`&.${chipClasses_default.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (theme.vars || theme).shadows[1]
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => ({
      props: {
        color,
        clickable: true
      },
      style: {
        [`&:hover, &.${chipClasses_default.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette[color].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[700]}`,
        [`&.${chipClasses_default.clickable}:hover`]: {
          backgroundColor: (theme.vars || theme).palette.action.hover
        },
        [`&.${chipClasses_default.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette.action.focus
        },
        [`& .${chipClasses_default.avatar}`]: {
          marginLeft: 4
        },
        [`& .${chipClasses_default.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${chipClasses_default.icon}`]: {
          marginLeft: 4
        },
        [`& .${chipClasses_default.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${chipClasses_default.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${chipClasses_default.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        variant: "outlined",
        color
      },
      style: {
        color: (theme.vars || theme).palette[color].main,
        border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.7)` : alpha(theme.palette[color].main, 0.7)}`,
        [`&.${chipClasses_default.clickable}:hover`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
        },
        [`&.${chipClasses_default.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette[color].main, theme.palette.action.focusOpacity)
        },
        [`& .${chipClasses_default.deleteIcon}`]: {
          color: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.7)` : alpha(theme.palette[color].main, 0.7),
          "&:hover, &:active": {
            color: (theme.vars || theme).palette[color].main
          }
        }
      }
    }))]
  };
}));
var ChipLabel = styled_default("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    const {
      size
    } = ownerState;
    return [styles2.label, styles2[`label${capitalize_default(size)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}
var Chip = React36.forwardRef(function Chip2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiChip"
  });
  const {
    avatar: avatarProp,
    className,
    clickable: clickableProp,
    color = "default",
    component: ComponentProp,
    deleteIcon: deleteIconProp,
    disabled = false,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    onKeyDown,
    onKeyUp,
    size = "medium",
    variant = "filled",
    tabIndex,
    skipFocusWhenDisabled = false,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const chipRef = React36.useRef(null);
  const handleRef = useForkRef_default(chipRef, ref);
  const handleDeleteIconClick = (event) => {
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };
  const handleKeyDown = (event) => {
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleKeyUp = (event) => {
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      }
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
  };
  const clickable = clickableProp !== false && onClick ? true : clickableProp;
  const component = clickable || onDelete ? ButtonBase_default : ComponentProp || "div";
  const ownerState = {
    ...props,
    component,
    disabled,
    size,
    color,
    iconColor: React36.isValidElement(iconProp) ? iconProp.props.color || color : color,
    onDelete: !!onDelete,
    clickable,
    variant
  };
  const classes = useUtilityClasses20(ownerState);
  const moreProps = component === ButtonBase_default ? {
    component: ComponentProp || "div",
    focusVisibleClassName: classes.focusVisible,
    ...onDelete && {
      disableRipple: true
    }
  } : {};
  let deleteIcon = null;
  if (onDelete) {
    deleteIcon = deleteIconProp && React36.isValidElement(deleteIconProp) ? React36.cloneElement(deleteIconProp, {
      className: clsx_default(deleteIconProp.props.className, classes.deleteIcon),
      onClick: handleDeleteIconClick
    }) : (0, import_jsx_runtime28.jsx)(Cancel_default, {
      className: classes.deleteIcon,
      onClick: handleDeleteIconClick
    });
  }
  let avatar = null;
  if (avatarProp && React36.isValidElement(avatarProp)) {
    avatar = React36.cloneElement(avatarProp, {
      className: clsx_default(classes.avatar, avatarProp.props.className)
    });
  }
  let icon = null;
  if (iconProp && React36.isValidElement(iconProp)) {
    icon = React36.cloneElement(iconProp, {
      className: clsx_default(classes.icon, iconProp.props.className)
    });
  }
  if (true) {
    if (avatar && icon) {
      console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one.");
    }
  }
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: ChipRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: true,
    ref: handleRef,
    className: clsx_default(classes.root, className),
    additionalProps: {
      disabled: clickable && disabled ? true : void 0,
      tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
      ...moreProps
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onClick: (event) => {
        handlers.onClick?.(event);
        onClick?.(event);
      },
      onKeyDown: (event) => {
        handlers.onKeyDown?.(event);
        handleKeyDown?.(event);
      },
      onKeyUp: (event) => {
        handlers.onKeyUp?.(event);
        handleKeyUp?.(event);
      }
    })
  });
  const [LabelSlot, labelProps] = useSlot("label", {
    elementType: ChipLabel,
    externalForwardedProps,
    ownerState,
    className: classes.label
  });
  return (0, import_jsx_runtime28.jsxs)(RootSlot, {
    as: component,
    ...rootProps,
    children: [avatar || icon, (0, import_jsx_runtime28.jsx)(LabelSlot, {
      ...labelProps,
      children: label
    }), deleteIcon]
  });
});
true ? Chip.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: import_prop_types23.default.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp_default,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types23.default.object,
  /**
   * @ignore
   */
  className: import_prop_types23.default.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: import_prop_types23.default.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: import_prop_types23.default.oneOfType([import_prop_types23.default.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types23.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types23.default.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: import_prop_types23.default.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types23.default.bool,
  /**
   * Icon element.
   */
  icon: import_prop_types23.default.element,
  /**
   * The content of the component.
   */
  label: import_prop_types23.default.node,
  /**
   * @ignore
   */
  onClick: import_prop_types23.default.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: import_prop_types23.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types23.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types23.default.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types23.default.oneOfType([import_prop_types23.default.oneOf(["medium", "small"]), import_prop_types23.default.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: import_prop_types23.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types23.default.shape({
    label: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object]),
    root: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types23.default.shape({
    label: import_prop_types23.default.elementType,
    root: import_prop_types23.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types23.default.oneOfType([import_prop_types23.default.arrayOf(import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object, import_prop_types23.default.bool])), import_prop_types23.default.func, import_prop_types23.default.object]),
  /**
   * @ignore
   */
  tabIndex: import_prop_types23.default.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: import_prop_types23.default.oneOfType([import_prop_types23.default.oneOf(["filled", "outlined"]), import_prop_types23.default.string])
} : void 0;
var Chip_default = Chip;

// node_modules/@mui/material/esm/Autocomplete/autocompleteClasses.js
function getAutocompleteUtilityClass(slot) {
  return generateUtilityClass("MuiAutocomplete", slot);
}
var autocompleteClasses = generateUtilityClasses("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var autocompleteClasses_default = autocompleteClasses;

// node_modules/@mui/material/esm/Autocomplete/Autocomplete.js
var React38 = __toESM(require_react(), 1);
var import_prop_types24 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/internal/svg-icons/Close.js
var React37 = __toESM(require_react(), 1);
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var Close_default = createSvgIcon((0, import_jsx_runtime29.jsx)("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");

// node_modules/@mui/material/esm/Autocomplete/Autocomplete.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var _ClearIcon;
var _ArrowDropDownIcon;
var useUtilityClasses21 = (ownerState) => {
  const {
    classes,
    disablePortal,
    expanded,
    focused,
    fullWidth,
    hasClearIcon,
    hasPopupIcon,
    inputFocused,
    popupOpen,
    size
  } = ownerState;
  const slots = {
    root: ["root", expanded && "expanded", focused && "focused", fullWidth && "fullWidth", hasClearIcon && "hasClearIcon", hasPopupIcon && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", inputFocused && "inputFocused"],
    tag: ["tag", `tagSize${capitalize_default(size)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", popupOpen && "popupIndicatorOpen"],
    popper: ["popper", disablePortal && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return composeClasses(slots, getAutocompleteUtilityClass, classes);
};
var AutocompleteRoot = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    const {
      fullWidth,
      hasClearIcon,
      hasPopupIcon,
      inputFocused,
      size
    } = ownerState;
    return [{
      [`& .${autocompleteClasses_default.tag}`]: styles2.tag
    }, {
      [`& .${autocompleteClasses_default.tag}`]: styles2[`tagSize${capitalize_default(size)}`]
    }, {
      [`& .${autocompleteClasses_default.inputRoot}`]: styles2.inputRoot
    }, {
      [`& .${autocompleteClasses_default.input}`]: styles2.input
    }, {
      [`& .${autocompleteClasses_default.input}`]: inputFocused && styles2.inputFocused
    }, styles2.root, fullWidth && styles2.fullWidth, hasPopupIcon && styles2.hasPopupIcon, hasClearIcon && styles2.hasClearIcon];
  }
})({
  [`&.${autocompleteClasses_default.focused} .${autocompleteClasses_default.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${autocompleteClasses_default.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${autocompleteClasses_default.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${autocompleteClasses_default.inputRoot}`]: {
    [`.${autocompleteClasses_default.hasPopupIcon}&, .${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 26 + 4
    },
    [`.${autocompleteClasses_default.hasPopupIcon}.${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 52 + 4
    },
    [`& .${autocompleteClasses_default.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${inputClasses_default.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${inputClasses_default.root}.${inputBaseClasses_default.sizeSmall}`]: {
    [`& .${inputClasses_default.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${outlinedInputClasses_default.root}`]: {
    padding: 9,
    [`.${autocompleteClasses_default.hasPopupIcon}&, .${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${autocompleteClasses_default.hasPopupIcon}.${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${autocompleteClasses_default.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${autocompleteClasses_default.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${outlinedInputClasses_default.root}.${inputBaseClasses_default.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${autocompleteClasses_default.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${filledInputClasses_default.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${autocompleteClasses_default.hasPopupIcon}&, .${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${autocompleteClasses_default.hasPopupIcon}.${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${filledInputClasses_default.input}`]: {
      padding: "7px 4px"
    },
    [`& .${autocompleteClasses_default.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${filledInputClasses_default.root}.${inputBaseClasses_default.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${filledInputClasses_default.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${inputBaseClasses_default.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${filledInputClasses_default.root}.${inputBaseClasses_default.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${autocompleteClasses_default.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${filledInputClasses_default.root}.${inputBaseClasses_default.hiddenLabel}.${inputBaseClasses_default.sizeSmall}`]: {
    [`& .${autocompleteClasses_default.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${autocompleteClasses_default.input}`]: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  },
  variants: [{
    props: {
      fullWidth: true
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      [`& .${autocompleteClasses_default.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: true
    },
    style: {
      [`& .${autocompleteClasses_default.input}`]: {
        opacity: 1
      }
    }
  }, {
    props: {
      multiple: true
    },
    style: {
      [`& .${autocompleteClasses_default.inputRoot}`]: {
        flexWrap: "wrap"
      }
    }
  }]
});
var AutocompleteEndAdornment = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment"
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
});
var AutocompleteClearIndicator = styled_default(IconButton_default, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator"
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
});
var AutocompletePopupIndicator = styled_default(IconButton_default, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.popupIndicator, ownerState.popupOpen && styles2.popupIndicatorOpen];
  }
})({
  padding: 2,
  marginRight: -2,
  variants: [{
    props: {
      popupOpen: true
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
});
var AutocompletePopper = styled_default(Popper_default, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${autocompleteClasses_default.option}`]: styles2.option
    }, styles2.popper, ownerState.disablePortal && styles2.popperDisablePortal];
  }
})(memoTheme_default(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.modal,
  variants: [{
    props: {
      disablePortal: true
    },
    style: {
      position: "absolute"
    }
  }]
})));
var AutocompletePaper = styled_default(Paper_default, {
  name: "MuiAutocomplete",
  slot: "Paper"
})(memoTheme_default(({
  theme
}) => ({
  ...theme.typography.body1,
  overflow: "auto"
})));
var AutocompleteLoading = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "Loading"
})(memoTheme_default(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  padding: "14px 16px"
})));
var AutocompleteNoOptions = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions"
})(memoTheme_default(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  padding: "14px 16px"
})));
var AutocompleteListbox = styled_default("ul", {
  name: "MuiAutocomplete",
  slot: "Listbox"
})(memoTheme_default(({
  theme
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${autocompleteClasses_default.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [theme.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${autocompleteClasses_default.focused}`]: {
      backgroundColor: (theme.vars || theme).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${autocompleteClasses_default.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      [`&.${autocompleteClasses_default.focused}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (theme.vars || theme).palette.action.selected
        }
      },
      [`&.${autocompleteClasses_default.focusVisible}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
      }
    }
  }
})));
var AutocompleteGroupLabel = styled_default(ListSubheader_default, {
  name: "MuiAutocomplete",
  slot: "GroupLabel"
})(memoTheme_default(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  top: -8
})));
var AutocompleteGroupUl = styled_default("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl"
})({
  padding: 0,
  [`& .${autocompleteClasses_default.option}`]: {
    paddingLeft: 24
  }
});
var Autocomplete = React38.forwardRef(function Autocomplete2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAutocomplete"
  });
  const {
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    ChipProps: ChipPropsProp,
    className,
    clearIcon = _ClearIcon || (_ClearIcon = (0, import_jsx_runtime30.jsx)(Close_default, {
      fontSize: "small"
    })),
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    clearText = "Clear",
    closeText = "Close",
    componentsProps,
    defaultValue = props.multiple ? [] : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabled = false,
    disabledItemsFocusable = false,
    disableListWrap = false,
    disablePortal = false,
    filterOptions,
    filterSelectedOptions = false,
    forcePopupIcon = "auto",
    freeSolo = false,
    fullWidth = false,
    getLimitTagsText = (more) => `+${more}`,
    getOptionDisabled,
    getOptionKey,
    getOptionLabel: getOptionLabelProp,
    isOptionEqualToValue,
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    id: idProp,
    includeInputInList = false,
    inputValue: inputValueProp,
    limitTags = -1,
    ListboxComponent: ListboxComponentProp,
    ListboxProps: ListboxPropsProp,
    loading = false,
    loadingText = "Loading…",
    multiple = false,
    noOptionsText = "No options",
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open,
    openOnFocus = false,
    openText = "Open",
    options,
    PaperComponent: PaperComponentProp,
    PopperComponent: PopperComponentProp,
    popupIcon = _ArrowDropDownIcon || (_ArrowDropDownIcon = (0, import_jsx_runtime30.jsx)(ArrowDropDown_default, {})),
    readOnly = false,
    renderGroup: renderGroupProp,
    renderInput,
    renderOption: renderOptionProp,
    renderTags,
    renderValue,
    selectOnFocus = !props.freeSolo,
    size = "medium",
    slots = {},
    slotProps = {},
    value: valueProp,
    ...other
  } = props;
  const {
    getRootProps,
    getInputProps,
    getInputLabelProps,
    getPopupIndicatorProps,
    getClearProps,
    getItemProps,
    getListboxProps,
    getOptionProps,
    value,
    dirty,
    expanded,
    id,
    popupOpen,
    focused,
    focusedItem,
    anchorEl,
    setAnchorEl,
    inputValue,
    groupedOptions
  } = useAutocomplete_default({
    ...props,
    componentName: "Autocomplete"
  });
  const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;
  const hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
  const {
    onMouseDown: handleInputMouseDown
  } = getInputProps();
  const {
    ref: listboxRef,
    ...otherListboxProps
  } = getListboxProps();
  const defaultGetOptionLabel = (option) => option.label ?? option;
  const getOptionLabel = getOptionLabelProp || defaultGetOptionLabel;
  const ownerState = {
    ...props,
    disablePortal,
    expanded,
    focused,
    fullWidth,
    getOptionLabel,
    hasClearIcon,
    hasPopupIcon,
    inputFocused: focusedItem === -1,
    popupOpen,
    size
  };
  const classes = useUtilityClasses21(ownerState);
  const externalForwardedProps = {
    slots: {
      paper: PaperComponentProp,
      popper: PopperComponentProp,
      ...slots
    },
    slotProps: {
      chip: ChipPropsProp,
      listbox: ListboxPropsProp,
      ...componentsProps,
      ...slotProps
    }
  };
  const [ListboxSlot, listboxProps] = useSlot("listbox", {
    elementType: AutocompleteListbox,
    externalForwardedProps,
    ownerState,
    className: classes.listbox,
    additionalProps: otherListboxProps,
    ref: listboxRef
  });
  const [PaperSlot, paperProps] = useSlot("paper", {
    elementType: Paper_default,
    externalForwardedProps,
    ownerState,
    className: classes.paper
  });
  const [PopperSlot, popperProps] = useSlot("popper", {
    elementType: Popper_default,
    externalForwardedProps,
    ownerState,
    className: classes.popper,
    additionalProps: {
      disablePortal,
      style: {
        width: anchorEl ? anchorEl.clientWidth : null
      },
      role: "presentation",
      anchorEl,
      open: popupOpen
    }
  });
  let startAdornment;
  const getCustomizedItemProps = (params) => ({
    className: classes.tag,
    disabled,
    ...getItemProps(params)
  });
  if (multiple) {
    if (value.length > 0) {
      if (renderTags) {
        startAdornment = renderTags(value, getCustomizedItemProps, ownerState);
      } else if (renderValue) {
        startAdornment = renderValue(value, getCustomizedItemProps, ownerState);
      } else {
        startAdornment = value.map((option, index) => {
          const {
            key,
            ...customItemProps
          } = getCustomizedItemProps({
            index
          });
          return (0, import_jsx_runtime30.jsx)(Chip_default, {
            label: getOptionLabel(option),
            size,
            ...customItemProps,
            ...externalForwardedProps.slotProps.chip
          }, key);
        });
      }
    }
  } else if (renderValue && value != null) {
    startAdornment = renderValue(value, getCustomizedItemProps, ownerState);
  }
  if (limitTags > -1 && Array.isArray(startAdornment)) {
    const more = startAdornment.length - limitTags;
    if (!focused && more > 0) {
      startAdornment = startAdornment.splice(0, limitTags);
      startAdornment.push((0, import_jsx_runtime30.jsx)("span", {
        className: classes.tag,
        children: getLimitTagsText(more)
      }, startAdornment.length));
    }
  }
  const defaultRenderGroup = (params) => (0, import_jsx_runtime30.jsxs)("li", {
    children: [(0, import_jsx_runtime30.jsx)(AutocompleteGroupLabel, {
      className: classes.groupLabel,
      ownerState,
      component: "div",
      children: params.group
    }), (0, import_jsx_runtime30.jsx)(AutocompleteGroupUl, {
      className: classes.groupUl,
      ownerState,
      children: params.children
    })]
  }, params.key);
  const renderGroup = renderGroupProp || defaultRenderGroup;
  const defaultRenderOption = (props2, option) => {
    const {
      key,
      ...otherProps
    } = props2;
    return (0, import_jsx_runtime30.jsx)("li", {
      ...otherProps,
      children: getOptionLabel(option)
    }, key);
  };
  const renderOption = renderOptionProp || defaultRenderOption;
  const renderListOption = (option, index) => {
    const optionProps = getOptionProps({
      option,
      index
    });
    return renderOption({
      ...optionProps,
      className: classes.option
    }, option, {
      selected: optionProps["aria-selected"],
      index,
      inputValue
    }, ownerState);
  };
  const clearIndicatorSlotProps = externalForwardedProps.slotProps.clearIndicator;
  const popupIndicatorSlotProps = externalForwardedProps.slotProps.popupIndicator;
  return (0, import_jsx_runtime30.jsxs)(React38.Fragment, {
    children: [(0, import_jsx_runtime30.jsx)(AutocompleteRoot, {
      ref,
      className: clsx_default(classes.root, className),
      ownerState,
      ...getRootProps(other),
      children: renderInput({
        id,
        disabled,
        fullWidth: true,
        size: size === "small" ? "small" : void 0,
        InputLabelProps: getInputLabelProps(),
        InputProps: {
          ref: setAnchorEl,
          className: classes.inputRoot,
          startAdornment,
          onMouseDown: (event) => {
            if (event.target === event.currentTarget) {
              handleInputMouseDown(event);
            }
          },
          ...(hasClearIcon || hasPopupIcon) && {
            endAdornment: (0, import_jsx_runtime30.jsxs)(AutocompleteEndAdornment, {
              className: classes.endAdornment,
              ownerState,
              children: [hasClearIcon ? (0, import_jsx_runtime30.jsx)(AutocompleteClearIndicator, {
                ...getClearProps(),
                "aria-label": clearText,
                title: clearText,
                ownerState,
                ...clearIndicatorSlotProps,
                className: clsx_default(classes.clearIndicator, clearIndicatorSlotProps?.className),
                children: clearIcon
              }) : null, hasPopupIcon ? (0, import_jsx_runtime30.jsx)(AutocompletePopupIndicator, {
                ...getPopupIndicatorProps(),
                disabled,
                "aria-label": popupOpen ? closeText : openText,
                title: popupOpen ? closeText : openText,
                ownerState,
                ...popupIndicatorSlotProps,
                className: clsx_default(classes.popupIndicator, popupIndicatorSlotProps?.className),
                children: popupIcon
              }) : null]
            })
          }
        },
        inputProps: {
          className: classes.input,
          disabled,
          readOnly,
          ...getInputProps()
        }
      })
    }), anchorEl ? (0, import_jsx_runtime30.jsx)(AutocompletePopper, {
      as: PopperSlot,
      ...popperProps,
      children: (0, import_jsx_runtime30.jsxs)(AutocompletePaper, {
        as: PaperSlot,
        ...paperProps,
        children: [loading && groupedOptions.length === 0 ? (0, import_jsx_runtime30.jsx)(AutocompleteLoading, {
          className: classes.loading,
          ownerState,
          children: loadingText
        }) : null, groupedOptions.length === 0 && !freeSolo && !loading ? (0, import_jsx_runtime30.jsx)(AutocompleteNoOptions, {
          className: classes.noOptions,
          ownerState,
          role: "presentation",
          onMouseDown: (event) => {
            event.preventDefault();
          },
          children: noOptionsText
        }) : null, groupedOptions.length > 0 ? (0, import_jsx_runtime30.jsx)(ListboxSlot, {
          as: ListboxComponentProp,
          ...listboxProps,
          children: groupedOptions.map((option, index) => {
            if (groupBy) {
              return renderGroup({
                key: option.key,
                group: option.group,
                children: option.options.map((option2, index2) => renderListOption(option2, option.index + index2))
              });
            }
            return renderListOption(option, index);
          })
        }) : null]
      })
    }) : null]
  });
});
true ? Autocomplete.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the portion of the selected suggestion that the user hasn't typed,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: import_prop_types24.default.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: import_prop_types24.default.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: import_prop_types24.default.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: import_prop_types24.default.oneOfType([import_prop_types24.default.oneOf(["mouse", "touch"]), import_prop_types24.default.bool]),
  /**
   * Props applied to the [`Chip`](https://mui.com/material-ui/api/chip/) element.
   * @deprecated Use `slotProps.chip` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ChipProps: import_prop_types24.default.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types24.default.object,
  /**
   * @ignore
   */
  className: import_prop_types24.default.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: import_prop_types24.default.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: import_prop_types24.default.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: import_prop_types24.default.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: import_prop_types24.default.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: import_prop_types24.default.string,
  /**
   * The props used for each slot inside.
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  componentsProps: import_prop_types24.default.shape({
    clearIndicator: import_prop_types24.default.object,
    paper: import_prop_types24.default.object,
    popper: import_prop_types24.default.object,
    popupIndicator: import_prop_types24.default.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: chainPropTypes(import_prop_types24.default.any, (props) => {
    if (props.multiple && props.defaultValue !== void 0 && !Array.isArray(props.defaultValue)) {
      return new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${props.defaultValue} was provided.`].join("\n"));
    }
    return null;
  }),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: import_prop_types24.default.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: import_prop_types24.default.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types24.default.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: import_prop_types24.default.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: import_prop_types24.default.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types24.default.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: import_prop_types24.default.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: import_prop_types24.default.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: import_prop_types24.default.oneOfType([import_prop_types24.default.oneOf(["auto"]), import_prop_types24.default.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: import_prop_types24.default.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types24.default.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: import_prop_types24.default.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: import_prop_types24.default.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: import_prop_types24.default.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: import_prop_types24.default.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} option The Autocomplete option.
   * @returns {string}
   */
  groupBy: import_prop_types24.default.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: import_prop_types24.default.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: import_prop_types24.default.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: import_prop_types24.default.bool,
  /**
   * The input value.
   */
  inputValue: import_prop_types24.default.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: import_prop_types24.default.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: integerPropType_default,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   * @deprecated Use `slotProps.listbox.component` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ListboxComponent: import_prop_types24.default.elementType,
  /**
   * Props applied to the Listbox element.
   * @deprecated Use `slotProps.listbox` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ListboxProps: import_prop_types24.default.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, for example `options` are empty).
   * @default false
   */
  loading: import_prop_types24.default.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: import_prop_types24.default.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: import_prop_types24.default.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: import_prop_types24.default.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: import_prop_types24.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: import_prop_types24.default.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: import_prop_types24.default.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`, `"blur"`, `"selectOption"`, `"removeOption"`
   */
  onInputChange: import_prop_types24.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types24.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: import_prop_types24.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types24.default.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: import_prop_types24.default.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: import_prop_types24.default.string,
  /**
   * A list of options that will be shown in the Autocomplete.
   */
  options: import_prop_types24.default.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   * @deprecated Use `slots.paper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperComponent: import_prop_types24.default.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   * @deprecated Use `slots.popper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PopperComponent: import_prop_types24.default.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: import_prop_types24.default.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: import_prop_types24.default.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: import_prop_types24.default.func,
  /**
   * Render the input.
   *
   * **Note:** The `renderInput` prop must return a `TextField` component or a compatible custom component
   * that correctly forwards `InputProps.ref` and spreads `inputProps`. This ensures proper integration
   * with the Autocomplete's internal logic (e.g., focus management and keyboard navigation).
   *
   * Avoid using components like `DatePicker` or `Select` directly, as they may not forward the required props,
   * leading to runtime errors or unexpected behavior.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: import_prop_types24.default.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: import_prop_types24.default.func,
  /**
   * Render the selected value when doing multiple selections.
   *
   * @deprecated Use `renderValue` prop instead
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: import_prop_types24.default.func,
  /**
   * Renders the selected value(s) as rich content in the input for both single and multiple selections.
   *
   * @param {AutocompleteRenderValue<Value, Multiple, FreeSolo>} value The `value` provided to the component.
   * @param {function} getItemProps The value item props.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderValue: import_prop_types24.default.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: import_prop_types24.default.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types24.default.oneOfType([import_prop_types24.default.oneOf(["small", "medium"]), import_prop_types24.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types24.default.shape({
    chip: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    clearIndicator: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    listbox: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    paper: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    popper: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    popupIndicator: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types24.default.shape({
    listbox: import_prop_types24.default.elementType,
    paper: import_prop_types24.default.elementType,
    popper: import_prop_types24.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types24.default.oneOfType([import_prop_types24.default.arrayOf(import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object, import_prop_types24.default.bool])), import_prop_types24.default.func, import_prop_types24.default.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: chainPropTypes(import_prop_types24.default.any, (props) => {
    if (props.multiple && props.value !== void 0 && !Array.isArray(props.value)) {
      return new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${props.value} was provided.`].join("\n"));
    }
    return null;
  })
} : void 0;
var Autocomplete_default = Autocomplete;

// node_modules/@mui/material/esm/InputAdornment/inputAdornmentClasses.js
function getInputAdornmentUtilityClass(slot) {
  return generateUtilityClass("MuiInputAdornment", slot);
}
var inputAdornmentClasses = generateUtilityClasses("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var inputAdornmentClasses_default = inputAdornmentClasses;

// node_modules/@mui/material/esm/InputAdornment/InputAdornment.js
var React39 = __toESM(require_react(), 1);
var import_prop_types25 = __toESM(require_prop_types(), 1);
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var _span;
var overridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, styles2[`position${capitalize_default(ownerState.position)}`], ownerState.disablePointerEvents === true && styles2.disablePointerEvents, styles2[ownerState.variant]];
};
var useUtilityClasses22 = (ownerState) => {
  const {
    classes,
    disablePointerEvents,
    hiddenLabel,
    position,
    size,
    variant
  } = ownerState;
  const slots = {
    root: ["root", disablePointerEvents && "disablePointerEvents", position && `position${capitalize_default(position)}`, variant, hiddenLabel && "hiddenLabel", size && `size${capitalize_default(size)}`]
  };
  return composeClasses(slots, getInputAdornmentUtilityClass, classes);
};
var InputAdornmentRoot = styled_default("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver
})(memoTheme_default(({
  theme
}) => ({
  display: "flex",
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (theme.vars || theme).palette.action.active,
  variants: [{
    props: {
      variant: "filled"
    },
    style: {
      [`&.${inputAdornmentClasses_default.positionStart}&:not(.${inputAdornmentClasses_default.hiddenLabel})`]: {
        marginTop: 16
      }
    }
  }, {
    props: {
      position: "start"
    },
    style: {
      marginRight: 8
    }
  }, {
    props: {
      position: "end"
    },
    style: {
      marginLeft: 8
    }
  }, {
    props: {
      disablePointerEvents: true
    },
    style: {
      pointerEvents: "none"
    }
  }]
})));
var InputAdornment = React39.forwardRef(function InputAdornment2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiInputAdornment"
  });
  const {
    children,
    className,
    component = "div",
    disablePointerEvents = false,
    disableTypography = false,
    position,
    variant: variantProp,
    ...other
  } = props;
  const muiFormControl = useFormControl() || {};
  let variant = variantProp;
  if (variantProp && muiFormControl.variant) {
    if (true) {
      if (variantProp === muiFormControl.variant) {
        console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one.");
      }
    }
  }
  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }
  const ownerState = {
    ...props,
    hiddenLabel: muiFormControl.hiddenLabel,
    size: muiFormControl.size,
    disablePointerEvents,
    position,
    variant
  };
  const classes = useUtilityClasses22(ownerState);
  return (0, import_jsx_runtime31.jsx)(FormControlContext_default.Provider, {
    value: null,
    children: (0, import_jsx_runtime31.jsx)(InputAdornmentRoot, {
      as: component,
      ownerState,
      className: clsx_default(classes.root, className),
      ref,
      ...other,
      children: typeof children === "string" && !disableTypography ? (0, import_jsx_runtime31.jsx)(Typography_default, {
        color: "textSecondary",
        children
      }) : (0, import_jsx_runtime31.jsxs)(React39.Fragment, {
        children: [position === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          _span || (_span = (0, import_jsx_runtime31.jsx)("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "​"
          }))
        ) : null, children]
      })
    })
  });
});
true ? InputAdornment.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: import_prop_types25.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types25.default.object,
  /**
   * @ignore
   */
  className: import_prop_types25.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types25.default.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: import_prop_types25.default.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: import_prop_types25.default.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: import_prop_types25.default.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types25.default.oneOfType([import_prop_types25.default.arrayOf(import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object, import_prop_types25.default.bool])), import_prop_types25.default.func, import_prop_types25.default.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: import_prop_types25.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var InputAdornment_default = InputAdornment;

// node_modules/@mui/material/esm/useMediaQuery/index.js
var useMediaQuery = unstable_createUseMediaQuery({
  themeId: identifier_default
});
var useMediaQuery_default = useMediaQuery;

// node_modules/@mui/material/esm/DialogActions/dialogActionsClasses.js
function getDialogActionsUtilityClass(slot) {
  return generateUtilityClass("MuiDialogActions", slot);
}
var dialogActionsClasses = generateUtilityClasses("MuiDialogActions", ["root", "spacing"]);
var dialogActionsClasses_default = dialogActionsClasses;

// node_modules/@mui/material/esm/DialogActions/DialogActions.js
var React40 = __toESM(require_react(), 1);
var import_prop_types26 = __toESM(require_prop_types(), 1);
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses23 = (ownerState) => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ["root", !disableSpacing && "spacing"]
  };
  return composeClasses(slots, getDialogActionsUtilityClass, classes);
};
var DialogActionsRoot = styled_default("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.disableSpacing && styles2.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
});
var DialogActions = React40.forwardRef(function DialogActions2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogActions"
  });
  const {
    className,
    disableSpacing = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableSpacing
  };
  const classes = useUtilityClasses23(ownerState);
  return (0, import_jsx_runtime32.jsx)(DialogActionsRoot, {
    className: clsx_default(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
true ? DialogActions.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types26.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types26.default.object,
  /**
   * @ignore
   */
  className: import_prop_types26.default.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: import_prop_types26.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types26.default.oneOfType([import_prop_types26.default.arrayOf(import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object, import_prop_types26.default.bool])), import_prop_types26.default.func, import_prop_types26.default.object])
} : void 0;
var DialogActions_default = DialogActions;

// node_modules/@mui/material/esm/DialogContent/dialogContentClasses.js
function getDialogContentUtilityClass(slot) {
  return generateUtilityClass("MuiDialogContent", slot);
}
var dialogContentClasses = generateUtilityClasses("MuiDialogContent", ["root", "dividers"]);
var dialogContentClasses_default = dialogContentClasses;

// node_modules/@mui/material/esm/DialogTitle/dialogTitleClasses.js
function getDialogTitleUtilityClass(slot) {
  return generateUtilityClass("MuiDialogTitle", slot);
}
var dialogTitleClasses = generateUtilityClasses("MuiDialogTitle", ["root"]);
var dialogTitleClasses_default = dialogTitleClasses;

// node_modules/@mui/material/esm/DialogContent/DialogContent.js
var React41 = __toESM(require_react(), 1);
var import_prop_types27 = __toESM(require_prop_types(), 1);
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses24 = (ownerState) => {
  const {
    classes,
    dividers
  } = ownerState;
  const slots = {
    root: ["root", dividers && "dividers"]
  };
  return composeClasses(slots, getDialogContentUtilityClass, classes);
};
var DialogContentRoot = styled_default("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.dividers && styles2.dividers];
  }
})(memoTheme_default(({
  theme
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.dividers,
    style: {
      [`.${dialogTitleClasses_default.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
})));
var DialogContent = React41.forwardRef(function DialogContent2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogContent"
  });
  const {
    className,
    dividers = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    dividers
  };
  const classes = useUtilityClasses24(ownerState);
  return (0, import_jsx_runtime33.jsx)(DialogContentRoot, {
    className: clsx_default(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
true ? DialogContent.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types27.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types27.default.object,
  /**
   * @ignore
   */
  className: import_prop_types27.default.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: import_prop_types27.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types27.default.oneOfType([import_prop_types27.default.arrayOf(import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object, import_prop_types27.default.bool])), import_prop_types27.default.func, import_prop_types27.default.object])
} : void 0;
var DialogContent_default = DialogContent;

// node_modules/@mui/material/esm/Dialog/dialogClasses.js
function getDialogUtilityClass(slot) {
  return generateUtilityClass("MuiDialog", slot);
}
var dialogClasses = generateUtilityClasses("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
var dialogClasses_default = dialogClasses;

// node_modules/@mui/material/esm/Dialog/Dialog.js
var React43 = __toESM(require_react(), 1);
var import_prop_types28 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Dialog/DialogContext.js
var React42 = __toESM(require_react(), 1);
var DialogContext = React42.createContext({});
if (true) {
  DialogContext.displayName = "DialogContext";
}
var DialogContext_default = DialogContext;

// node_modules/@mui/material/esm/Dialog/Dialog.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var DialogBackdrop = styled_default(Backdrop_default, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (props, styles2) => styles2.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
});
var useUtilityClasses25 = (ownerState) => {
  const {
    classes,
    scroll,
    maxWidth,
    fullWidth,
    fullScreen
  } = ownerState;
  const slots = {
    root: ["root"],
    container: ["container", `scroll${capitalize_default(scroll)}`],
    paper: ["paper", `paperScroll${capitalize_default(scroll)}`, `paperWidth${capitalize_default(String(maxWidth))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen"]
  };
  return composeClasses(slots, getDialogUtilityClass, classes);
};
var DialogRoot = styled_default(Modal_default, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
});
var DialogContainer = styled_default("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.container, styles2[`scroll${capitalize_default(ownerState.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
});
var DialogPaper = styled_default(Paper_default, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.paper, styles2[`scrollPaper${capitalize_default(ownerState.scroll)}`], styles2[`paperWidth${capitalize_default(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles2.paperFullWidth, ownerState.fullScreen && styles2.paperFullScreen];
  }
})(memoTheme_default(({
  theme
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
      [`&.${dialogClasses_default.paperScrollBody}`]: {
        [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(theme.breakpoints.values).filter((maxWidth) => maxWidth !== "xs").map((maxWidth) => ({
    props: {
      maxWidth
    },
    style: {
      maxWidth: `${theme.breakpoints.values[maxWidth]}${theme.breakpoints.unit}`,
      [`&.${dialogClasses_default.paperScrollBody}`]: {
        [theme.breakpoints.down(theme.breakpoints.values[maxWidth] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${dialogClasses_default.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
})));
var Dialog = React43.forwardRef(function Dialog2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialog"
  });
  const theme = useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledbyProp,
    "aria-modal": ariaModal = true,
    BackdropComponent,
    BackdropProps,
    children,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = false,
    maxWidth = "sm",
    onClick,
    onClose,
    open,
    PaperComponent = Paper_default,
    PaperProps = {},
    scroll = "paper",
    slots = {},
    slotProps = {},
    TransitionComponent = Fade_default,
    transitionDuration = defaultTransitionDuration,
    TransitionProps,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll
  };
  const classes = useUtilityClasses25(ownerState);
  const backdropClick = React43.useRef();
  const handleMouseDown = (event) => {
    backdropClick.current = event.target === event.currentTarget;
  };
  const handleBackdropClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (!backdropClick.current) {
      return;
    }
    backdropClick.current = null;
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const ariaLabelledby = useId(ariaLabelledbyProp);
  const dialogContextValue = React43.useMemo(() => {
    return {
      titleId: ariaLabelledby
    };
  }, [ariaLabelledby]);
  const backwardCompatibleSlots = {
    transition: TransitionComponent,
    ...slots
  };
  const backwardCompatibleSlotProps = {
    transition: TransitionProps,
    paper: PaperProps,
    backdrop: BackdropProps,
    ...slotProps
  };
  const externalForwardedProps = {
    slots: backwardCompatibleSlots,
    slotProps: backwardCompatibleSlotProps
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    elementType: DialogRoot,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState,
    className: clsx_default(classes.root, className),
    ref
  });
  const [BackdropSlot, backdropSlotProps] = useSlot("backdrop", {
    elementType: DialogBackdrop,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState
  });
  const [PaperSlot, paperSlotProps] = useSlot("paper", {
    elementType: DialogPaper,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState,
    className: clsx_default(classes.paper, PaperProps.className)
  });
  const [ContainerSlot, containerSlotProps] = useSlot("container", {
    elementType: DialogContainer,
    externalForwardedProps,
    ownerState,
    className: classes.container
  });
  const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
    elementType: Fade_default,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      appear: true,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }
  });
  return (0, import_jsx_runtime34.jsx)(RootSlot, {
    closeAfterTransition: true,
    slots: {
      backdrop: BackdropSlot
    },
    slotProps: {
      backdrop: {
        transitionDuration,
        as: BackdropComponent,
        ...backdropSlotProps
      }
    },
    disableEscapeKeyDown,
    onClose,
    open,
    onClick: handleBackdropClick,
    ...rootSlotProps,
    ...other,
    children: (0, import_jsx_runtime34.jsx)(TransitionSlot, {
      ...transitionSlotProps,
      children: (0, import_jsx_runtime34.jsx)(ContainerSlot, {
        onMouseDown: handleMouseDown,
        ...containerSlotProps,
        children: (0, import_jsx_runtime34.jsx)(PaperSlot, {
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby,
          "aria-modal": ariaModal,
          ...paperSlotProps,
          children: (0, import_jsx_runtime34.jsx)(DialogContext_default.Provider, {
            value: dialogContextValue,
            children
          })
        })
      })
    })
  });
});
true ? Dialog.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": import_prop_types28.default.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": import_prop_types28.default.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": import_prop_types28.default.oneOfType([import_prop_types28.default.oneOf(["false", "true"]), import_prop_types28.default.bool]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: import_prop_types28.default.elementType,
  /**
   * @ignore
   */
  BackdropProps: import_prop_types28.default.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: import_prop_types28.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types28.default.object,
  /**
   * @ignore
   */
  className: import_prop_types28.default.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types28.default.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: import_prop_types28.default.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: import_prop_types28.default.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: import_prop_types28.default.oneOfType([import_prop_types28.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types28.default.string]),
  /**
   * @ignore
   */
  onClick: import_prop_types28.default.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types28.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types28.default.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: import_prop_types28.default.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: import_prop_types28.default.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: import_prop_types28.default.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types28.default.shape({
    backdrop: import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object]),
    container: import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object]),
    paper: import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object]),
    root: import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object]),
    transition: import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types28.default.shape({
    backdrop: import_prop_types28.default.elementType,
    container: import_prop_types28.default.elementType,
    paper: import_prop_types28.default.elementType,
    root: import_prop_types28.default.elementType,
    transition: import_prop_types28.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types28.default.oneOfType([import_prop_types28.default.arrayOf(import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object, import_prop_types28.default.bool])), import_prop_types28.default.func, import_prop_types28.default.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: import_prop_types28.default.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: import_prop_types28.default.oneOfType([import_prop_types28.default.number, import_prop_types28.default.shape({
    appear: import_prop_types28.default.number,
    enter: import_prop_types28.default.number,
    exit: import_prop_types28.default.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: import_prop_types28.default.object
} : void 0;
var Dialog_default = Dialog;

// node_modules/@mui/material/esm/Tab/tabClasses.js
function getTabUtilityClass(slot) {
  return generateUtilityClass("MuiTab", slot);
}
var tabClasses = generateUtilityClasses("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]);
var tabClasses_default = tabClasses;

// node_modules/@mui/material/esm/Tab/Tab.js
var React44 = __toESM(require_react(), 1);
var import_prop_types29 = __toESM(require_prop_types(), 1);
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses26 = (ownerState) => {
  const {
    classes,
    textColor,
    fullWidth,
    wrapped,
    icon,
    label,
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", icon && label && "labelIcon", `textColor${capitalize_default(textColor)}`, fullWidth && "fullWidth", wrapped && "wrapped", selected && "selected", disabled && "disabled"],
    icon: ["iconWrapper", "icon"]
  };
  return composeClasses(slots, getTabUtilityClass, classes);
};
var TabRoot = styled_default(ButtonBase_default, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.label && ownerState.icon && styles2.labelIcon, styles2[`textColor${capitalize_default(ownerState.textColor)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.wrapped && styles2.wrapped, {
      [`& .${tabClasses_default.iconWrapper}`]: styles2.iconWrapper
    }, {
      [`& .${tabClasses_default.icon}`]: styles2.icon
    }];
  }
})(memoTheme_default(({
  theme
}) => ({
  ...theme.typography.button,
  maxWidth: 360,
  minWidth: 90,
  position: "relative",
  minHeight: 48,
  flexShrink: 0,
  padding: "12px 16px",
  overflow: "hidden",
  whiteSpace: "normal",
  textAlign: "center",
  lineHeight: 1.25,
  variants: [{
    props: ({
      ownerState
    }) => ownerState.label && (ownerState.iconPosition === "top" || ownerState.iconPosition === "bottom"),
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.label && ownerState.iconPosition !== "top" && ownerState.iconPosition !== "bottom",
    style: {
      flexDirection: "row"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.icon && ownerState.label,
    style: {
      minHeight: 72,
      paddingTop: 9,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState,
      iconPosition
    }) => ownerState.icon && ownerState.label && iconPosition === "top",
    style: {
      [`& > .${tabClasses_default.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState,
      iconPosition
    }) => ownerState.icon && ownerState.label && iconPosition === "bottom",
    style: {
      [`& > .${tabClasses_default.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState,
      iconPosition
    }) => ownerState.icon && ownerState.label && iconPosition === "start",
    style: {
      [`& > .${tabClasses_default.icon}`]: {
        marginRight: theme.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState,
      iconPosition
    }) => ownerState.icon && ownerState.label && iconPosition === "end",
    style: {
      [`& > .${tabClasses_default.icon}`]: {
        marginLeft: theme.spacing(1)
      }
    }
  }, {
    props: {
      textColor: "inherit"
    },
    style: {
      color: "inherit",
      opacity: 0.6,
      // same opacity as theme.palette.text.secondary
      [`&.${tabClasses_default.selected}`]: {
        opacity: 1
      },
      [`&.${tabClasses_default.disabled}`]: {
        opacity: (theme.vars || theme).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary,
      [`&.${tabClasses_default.selected}`]: {
        color: (theme.vars || theme).palette.primary.main
      },
      [`&.${tabClasses_default.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary,
      [`&.${tabClasses_default.selected}`]: {
        color: (theme.vars || theme).palette.secondary.main
      },
      [`&.${tabClasses_default.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.fullWidth,
    style: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: "none"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.wrapped,
    style: {
      fontSize: theme.typography.pxToRem(12)
    }
  }]
})));
var Tab = React44.forwardRef(function Tab2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTab"
  });
  const {
    className,
    disabled = false,
    disableFocusRipple = false,
    // eslint-disable-next-line react/prop-types
    fullWidth,
    icon: iconProp,
    iconPosition = "top",
    // eslint-disable-next-line react/prop-types
    indicator,
    label,
    onChange,
    onClick,
    onFocus,
    // eslint-disable-next-line react/prop-types
    selected,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus,
    // eslint-disable-next-line react/prop-types
    textColor = "inherit",
    value,
    wrapped = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disabled,
    disableFocusRipple,
    selected,
    icon: !!iconProp,
    iconPosition,
    label: !!label,
    fullWidth,
    textColor,
    wrapped
  };
  const classes = useUtilityClasses26(ownerState);
  const icon = iconProp && label && React44.isValidElement(iconProp) ? React44.cloneElement(iconProp, {
    className: clsx_default(classes.icon, iconProp.props.className)
  }) : iconProp;
  const handleClick = (event) => {
    if (!selected && onChange) {
      onChange(event, value);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const handleFocus = (event) => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  return (0, import_jsx_runtime35.jsxs)(TabRoot, {
    focusRipple: !disableFocusRipple,
    className: clsx_default(classes.root, className),
    ref,
    role: "tab",
    "aria-selected": selected,
    disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    ownerState,
    tabIndex: selected ? 0 : -1,
    ...other,
    children: [iconPosition === "top" || iconPosition === "start" ? (0, import_jsx_runtime35.jsxs)(React44.Fragment, {
      children: [icon, label]
    }) : (0, import_jsx_runtime35.jsxs)(React44.Fragment, {
      children: [label, icon]
    }), indicator]
  });
});
true ? Tab.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp_default,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types29.default.object,
  /**
   * @ignore
   */
  className: import_prop_types29.default.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types29.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types29.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types29.default.bool,
  /**
   * The icon to display.
   */
  icon: import_prop_types29.default.oneOfType([import_prop_types29.default.element, import_prop_types29.default.string]),
  /**
   * The position of the icon relative to the label.
   * @default 'top'
   */
  iconPosition: import_prop_types29.default.oneOf(["bottom", "end", "start", "top"]),
  /**
   * The label element.
   */
  label: import_prop_types29.default.node,
  /**
   * @ignore
   */
  onChange: import_prop_types29.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types29.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types29.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types29.default.oneOfType([import_prop_types29.default.arrayOf(import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object, import_prop_types29.default.bool])), import_prop_types29.default.func, import_prop_types29.default.object]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: import_prop_types29.default.any,
  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   * @default false
   */
  wrapped: import_prop_types29.default.bool
} : void 0;
var Tab_default = Tab;

// node_modules/@mui/material/esm/TabScrollButton/tabScrollButtonClasses.js
function getTabScrollButtonUtilityClass(slot) {
  return generateUtilityClass("MuiTabScrollButton", slot);
}
var tabScrollButtonClasses = generateUtilityClasses("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]);
var tabScrollButtonClasses_default = tabScrollButtonClasses;

// node_modules/@mui/material/esm/TabScrollButton/TabScrollButton.js
var React47 = __toESM(require_react(), 1);
var import_prop_types30 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/internal/svg-icons/KeyboardArrowLeft.js
var React45 = __toESM(require_react(), 1);
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var KeyboardArrowLeft_default = createSvgIcon((0, import_jsx_runtime36.jsx)("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft");

// node_modules/@mui/material/esm/internal/svg-icons/KeyboardArrowRight.js
var React46 = __toESM(require_react(), 1);
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var KeyboardArrowRight_default = createSvgIcon((0, import_jsx_runtime37.jsx)("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight");

// node_modules/@mui/material/esm/TabScrollButton/TabScrollButton.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses27 = (ownerState) => {
  const {
    classes,
    orientation,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", orientation, disabled && "disabled"]
  };
  return composeClasses(slots, getTabScrollButtonUtilityClass, classes);
};
var TabScrollButtonRoot = styled_default(ButtonBase_default, {
  name: "MuiTabScrollButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.orientation && styles2[ownerState.orientation]];
  }
})({
  width: 40,
  flexShrink: 0,
  opacity: 0.8,
  [`&.${tabScrollButtonClasses_default.disabled}`]: {
    opacity: 0
  },
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      width: "100%",
      height: 40,
      "& svg": {
        transform: "var(--TabScrollButton-svgRotate)"
      }
    }
  }]
});
var TabScrollButton = React47.forwardRef(function TabScrollButton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTabScrollButton"
  });
  const {
    className,
    slots = {},
    slotProps = {},
    direction,
    orientation,
    disabled,
    ...other
  } = props;
  const isRtl = useRtl();
  const ownerState = {
    isRtl,
    ...props
  };
  const classes = useUtilityClasses27(ownerState);
  const StartButtonIcon = slots.StartScrollButtonIcon ?? KeyboardArrowLeft_default;
  const EndButtonIcon = slots.EndScrollButtonIcon ?? KeyboardArrowRight_default;
  const startButtonIconProps = useSlotProps_default({
    elementType: StartButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  const endButtonIconProps = useSlotProps_default({
    elementType: EndButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState
  });
  return (0, import_jsx_runtime38.jsx)(TabScrollButtonRoot, {
    component: "div",
    className: clsx_default(classes.root, className),
    ref,
    role: null,
    ownerState,
    tabIndex: null,
    ...other,
    style: {
      ...other.style,
      ...orientation === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${isRtl ? -90 : 90}deg)`
      }
    },
    children: direction === "left" ? (0, import_jsx_runtime38.jsx)(StartButtonIcon, {
      ...startButtonIconProps
    }) : (0, import_jsx_runtime38.jsx)(EndButtonIcon, {
      ...endButtonIconProps
    })
  });
});
true ? TabScrollButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types30.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types30.default.object,
  /**
   * @ignore
   */
  className: import_prop_types30.default.string,
  /**
   * The direction the button should indicate.
   */
  direction: import_prop_types30.default.oneOf(["left", "right"]).isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types30.default.bool,
  /**
   * The component orientation (layout flow direction).
   */
  orientation: import_prop_types30.default.oneOf(["horizontal", "vertical"]).isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   * @default {}
   */
  slotProps: import_prop_types30.default.shape({
    endScrollButtonIcon: import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object]),
    startScrollButtonIcon: import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types30.default.shape({
    EndScrollButtonIcon: import_prop_types30.default.elementType,
    StartScrollButtonIcon: import_prop_types30.default.elementType
  }),
  /**
   * @ignore
   */
  style: import_prop_types30.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types30.default.oneOfType([import_prop_types30.default.arrayOf(import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object, import_prop_types30.default.bool])), import_prop_types30.default.func, import_prop_types30.default.object])
} : void 0;
var TabScrollButton_default = TabScrollButton;

// node_modules/@mui/material/esm/Tabs/tabsClasses.js
function getTabsUtilityClass(slot) {
  return generateUtilityClass("MuiTabs", slot);
}
var tabsClasses = generateUtilityClasses("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);
var tabsClasses_default = tabsClasses;

// node_modules/@mui/material/esm/Tabs/Tabs.js
var React49 = __toESM(require_react(), 1);
var import_react_is = __toESM(require_react_is(), 1);
var import_prop_types32 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/internal/animate.js
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to, options = {}, cb = () => {
}) {
  const {
    ease = easeInOutSin,
    duration: duration2 = 300
    // standard
  } = options;
  let start2 = null;
  const from = element[property];
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
  };
  const step = (timestamp) => {
    if (cancelled) {
      cb(new Error("Animation cancelled"));
      return;
    }
    if (start2 === null) {
      start2 = timestamp;
    }
    const time = Math.min(1, (timestamp - start2) / duration2);
    element[property] = ease(time) * (to - from) + from;
    if (time >= 1) {
      requestAnimationFrame(() => {
        cb(null);
      });
      return;
    }
    requestAnimationFrame(step);
  };
  if (from === to) {
    cb(new Error("Element already at target position"));
    return cancel;
  }
  requestAnimationFrame(step);
  return cancel;
}

// node_modules/@mui/material/esm/Tabs/ScrollbarSize.js
var React48 = __toESM(require_react(), 1);
var import_prop_types31 = __toESM(require_prop_types(), 1);
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var styles = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll"
};
function ScrollbarSize(props) {
  const {
    onChange,
    ...other
  } = props;
  const scrollbarHeight = React48.useRef();
  const nodeRef = React48.useRef(null);
  const setMeasurements = () => {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };
  useEnhancedEffect_default2(() => {
    const handleResize = debounce_default(() => {
      const prevHeight = scrollbarHeight.current;
      setMeasurements();
      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    const containerWindow = ownerWindow_default(nodeRef.current);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [onChange]);
  React48.useEffect(() => {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return (0, import_jsx_runtime39.jsx)("div", {
    style: styles,
    ...other,
    ref: nodeRef
  });
}
true ? ScrollbarSize.propTypes = {
  onChange: import_prop_types31.default.func.isRequired
} : void 0;

// node_modules/@mui/material/esm/Tabs/Tabs.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var nextItem = (list, item) => {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return list.firstChild;
};
var previousItem = (list, item) => {
  if (list === item) {
    return list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return list.lastChild;
};
var moveFocus = (list, currentFocus, traversalFunction) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};
var useUtilityClasses28 = (ownerState) => {
  const {
    vertical,
    fixed,
    hideScrollbar,
    scrollableX,
    scrollableY,
    centered,
    scrollButtonsHideMobile,
    classes
  } = ownerState;
  const slots = {
    root: ["root", vertical && "vertical"],
    scroller: ["scroller", fixed && "fixed", hideScrollbar && "hideScrollbar", scrollableX && "scrollableX", scrollableY && "scrollableY"],
    list: ["list", "flexContainer", vertical && "flexContainerVertical", vertical && "vertical", centered && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", scrollButtonsHideMobile && "scrollButtonsHideMobile"],
    scrollableX: [scrollableX && "scrollableX"],
    hideScrollbar: [hideScrollbar && "hideScrollbar"]
  };
  return composeClasses(slots, getTabsUtilityClass, classes);
};
var TabsRoot = styled_default("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${tabsClasses_default.scrollButtons}`]: styles2.scrollButtons
    }, {
      [`& .${tabsClasses_default.scrollButtons}`]: ownerState.scrollButtonsHideMobile && styles2.scrollButtonsHideMobile
    }, styles2.root, ownerState.vertical && styles2.vertical];
  }
})(memoTheme_default(({
  theme
}) => ({
  overflow: "hidden",
  minHeight: 48,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  display: "flex",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.scrollButtonsHideMobile,
    style: {
      [`& .${tabsClasses_default.scrollButtons}`]: {
        [theme.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
})));
var TabsScroller = styled_default("div", {
  name: "MuiTabs",
  slot: "Scroller",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.scroller, ownerState.fixed && styles2.fixed, ownerState.hideScrollbar && styles2.hideScrollbar, ownerState.scrollableX && styles2.scrollableX, ownerState.scrollableY && styles2.scrollableY];
  }
})({
  position: "relative",
  display: "inline-block",
  flex: "1 1 auto",
  whiteSpace: "nowrap",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.fixed,
    style: {
      overflowX: "hidden",
      width: "100%"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hideScrollbar,
    style: {
      // Hide dimensionless scrollbar on macOS
      scrollbarWidth: "none",
      // Firefox
      "&::-webkit-scrollbar": {
        display: "none"
        // Safari + Chrome
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.scrollableX,
    style: {
      overflowX: "auto",
      overflowY: "hidden"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.scrollableY,
    style: {
      overflowY: "auto",
      overflowX: "hidden"
    }
  }]
});
var List = styled_default("div", {
  name: "MuiTabs",
  slot: "List",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.list, styles2.flexContainer, ownerState.vertical && styles2.flexContainerVertical, ownerState.centered && styles2.centered];
  }
})({
  display: "flex",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.vertical,
    style: {
      flexDirection: "column"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.centered,
    style: {
      justifyContent: "center"
    }
  }]
});
var TabsIndicator = styled_default("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(memoTheme_default(({
  theme
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  transition: theme.transitions.create(),
  variants: [{
    props: {
      indicatorColor: "primary"
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.primary.main
    }
  }, {
    props: {
      indicatorColor: "secondary"
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.secondary.main
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.vertical,
    style: {
      height: "100%",
      width: 2,
      right: 0
    }
  }]
})));
var TabsScrollbarSize = styled_default(ScrollbarSize)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
});
var defaultIndicatorStyle = {};
var warnedOnceTabPresent = false;
var Tabs = React49.forwardRef(function Tabs2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTabs"
  });
  const theme = useTheme();
  const isRtl = useRtl();
  const {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    action,
    centered = false,
    children: childrenProp,
    className,
    component = "div",
    allowScrollButtonsMobile = false,
    indicatorColor = "primary",
    onChange,
    orientation = "horizontal",
    ScrollButtonComponent,
    // TODO: remove in v7 (deprecated in v6)
    scrollButtons = "auto",
    selectionFollowsFocus,
    slots = {},
    slotProps = {},
    TabIndicatorProps = {},
    // TODO: remove in v7 (deprecated in v6)
    TabScrollButtonProps = {},
    // TODO: remove in v7 (deprecated in v6)
    textColor = "primary",
    value,
    variant = "standard",
    visibleScrollbar = false,
    ...other
  } = props;
  const scrollable = variant === "scrollable";
  const vertical = orientation === "vertical";
  const scrollStart = vertical ? "scrollTop" : "scrollLeft";
  const start2 = vertical ? "top" : "left";
  const end2 = vertical ? "bottom" : "right";
  const clientSize = vertical ? "clientHeight" : "clientWidth";
  const size = vertical ? "height" : "width";
  const ownerState = {
    ...props,
    component,
    allowScrollButtonsMobile,
    indicatorColor,
    orientation,
    vertical,
    scrollButtons,
    textColor,
    variant,
    visibleScrollbar,
    fixed: !scrollable,
    hideScrollbar: scrollable && !visibleScrollbar,
    scrollableX: scrollable && !vertical,
    scrollableY: scrollable && vertical,
    centered: centered && !scrollable,
    scrollButtonsHideMobile: !allowScrollButtonsMobile
  };
  const classes = useUtilityClasses28(ownerState);
  const startScrollButtonIconProps = useSlotProps_default({
    elementType: slots.StartScrollButtonIcon,
    externalSlotProps: slotProps.startScrollButtonIcon,
    ownerState
  });
  const endScrollButtonIconProps = useSlotProps_default({
    elementType: slots.EndScrollButtonIcon,
    externalSlotProps: slotProps.endScrollButtonIcon,
    ownerState
  });
  if (true) {
    if (centered && scrollable) {
      console.error('MUI: You can not use the `centered={true}` and `variant="scrollable"` properties at the same time on a `Tabs` component.');
    }
  }
  const [mounted, setMounted] = React49.useState(false);
  const [indicatorStyle, setIndicatorStyle] = React49.useState(defaultIndicatorStyle);
  const [displayStartScroll, setDisplayStartScroll] = React49.useState(false);
  const [displayEndScroll, setDisplayEndScroll] = React49.useState(false);
  const [updateScrollObserver, setUpdateScrollObserver] = React49.useState(false);
  const [scrollerStyle, setScrollerStyle] = React49.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  });
  const valueToIndex = /* @__PURE__ */ new Map();
  const tabsRef = React49.useRef(null);
  const tabListRef = React49.useRef(null);
  const externalForwardedProps = {
    slots,
    slotProps: {
      indicator: TabIndicatorProps,
      scrollButton: TabScrollButtonProps,
      ...slotProps
    }
  };
  const getTabsMeta = () => {
    const tabsNode = tabsRef.current;
    let tabsMeta;
    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }
    let tabMeta;
    if (tabsNode && value !== false) {
      const children2 = tabListRef.current.children;
      if (children2.length > 0) {
        const tab = children2[valueToIndex.get(value)];
        if (true) {
          if (!tab) {
            console.error([`MUI: The \`value\` provided to the Tabs component is invalid.`, `None of the Tabs' children match with "${value}".`, valueToIndex.keys ? `You can provide one of the following values: ${Array.from(valueToIndex.keys()).join(", ")}.` : null].join("\n"));
          }
        }
        tabMeta = tab ? tab.getBoundingClientRect() : null;
        if (true) {
          if (!warnedOnceTabPresent && tabMeta && tabMeta.width === 0 && tabMeta.height === 0 && // if the whole Tabs component is hidden, don't warn
          tabsMeta.clientWidth !== 0) {
            tabsMeta = null;
            console.error(["MUI: The `value` provided to the Tabs component is invalid.", `The Tab with this \`value\` ("${value}") is not part of the document layout.`, "Make sure the tab item is present in the document or that it's not `display: none`."].join("\n"));
            warnedOnceTabPresent = true;
          }
        }
      }
    }
    return {
      tabsMeta,
      tabMeta
    };
  };
  const updateIndicatorState = useEventCallback_default2(() => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    let startValue = 0;
    let startIndicator;
    if (vertical) {
      startIndicator = "top";
      if (tabMeta && tabsMeta) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      }
    } else {
      startIndicator = isRtl ? "right" : "left";
      if (tabMeta && tabsMeta) {
        startValue = (isRtl ? -1 : 1) * (tabMeta[startIndicator] - tabsMeta[startIndicator] + tabsMeta.scrollLeft);
      }
    }
    const newIndicatorStyle = {
      [startIndicator]: startValue,
      // May be wrong until the font is loaded.
      [size]: tabMeta ? tabMeta[size] : 0
    };
    if (typeof indicatorStyle[startIndicator] !== "number" || typeof indicatorStyle[size] !== "number") {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      const dStart = Math.abs(indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]);
      const dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });
  const scroll = (scrollValue, {
    animation = true
  } = {}) => {
    if (animation) {
      animate(scrollStart, tabsRef.current, scrollValue, {
        duration: theme.transitions.duration.standard
      });
    } else {
      tabsRef.current[scrollStart] = scrollValue;
    }
  };
  const moveTabsScroll = (delta) => {
    let scrollValue = tabsRef.current[scrollStart];
    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1);
    }
    scroll(scrollValue);
  };
  const getScrollSize = () => {
    const containerSize = tabsRef.current[clientSize];
    let totalSize = 0;
    const children2 = Array.from(tabListRef.current.children);
    for (let i = 0; i < children2.length; i += 1) {
      const tab = children2[i];
      if (totalSize + tab[clientSize] > containerSize) {
        if (i === 0) {
          totalSize = containerSize;
        }
        break;
      }
      totalSize += tab[clientSize];
    }
    return totalSize;
  };
  const handleStartScrollClick = () => {
    moveTabsScroll(-1 * getScrollSize());
  };
  const handleEndScrollClick = () => {
    moveTabsScroll(getScrollSize());
  };
  const [ScrollbarSlot, {
    onChange: scrollbarOnChange,
    ...scrollbarSlotProps
  }] = useSlot("scrollbar", {
    className: clsx_default(classes.scrollableX, classes.hideScrollbar),
    elementType: TabsScrollbarSize,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState
  });
  const handleScrollbarSizeChange = React49.useCallback((scrollbarWidth) => {
    scrollbarOnChange?.(scrollbarWidth);
    setScrollerStyle({
      overflow: null,
      scrollbarWidth
    });
  }, [scrollbarOnChange]);
  const [ScrollButtonsSlot, scrollButtonSlotProps] = useSlot("scrollButtons", {
    className: clsx_default(classes.scrollButtons, TabScrollButtonProps.className),
    elementType: TabScrollButton_default,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      orientation,
      slots: {
        StartScrollButtonIcon: slots.startScrollButtonIcon || slots.StartScrollButtonIcon,
        EndScrollButtonIcon: slots.endScrollButtonIcon || slots.EndScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: startScrollButtonIconProps,
        endScrollButtonIcon: endScrollButtonIconProps
      }
    }
  });
  const getConditionalElements = () => {
    const conditionalElements2 = {};
    conditionalElements2.scrollbarSizeListener = scrollable ? (0, import_jsx_runtime40.jsx)(ScrollbarSlot, {
      ...scrollbarSlotProps,
      onChange: handleScrollbarSizeChange
    }) : null;
    const scrollButtonsActive = displayStartScroll || displayEndScroll;
    const showScrollButtons = scrollable && (scrollButtons === "auto" && scrollButtonsActive || scrollButtons === true);
    conditionalElements2.scrollButtonStart = showScrollButtons ? (0, import_jsx_runtime40.jsx)(ScrollButtonsSlot, {
      direction: isRtl ? "right" : "left",
      onClick: handleStartScrollClick,
      disabled: !displayStartScroll,
      ...scrollButtonSlotProps
    }) : null;
    conditionalElements2.scrollButtonEnd = showScrollButtons ? (0, import_jsx_runtime40.jsx)(ScrollButtonsSlot, {
      direction: isRtl ? "left" : "right",
      onClick: handleEndScrollClick,
      disabled: !displayEndScroll,
      ...scrollButtonSlotProps
    }) : null;
    return conditionalElements2;
  };
  const scrollSelectedIntoView = useEventCallback_default2((animation) => {
    const {
      tabsMeta,
      tabMeta
    } = getTabsMeta();
    if (!tabMeta || !tabsMeta) {
      return;
    }
    if (tabMeta[start2] < tabsMeta[start2]) {
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start2] - tabsMeta[start2]);
      scroll(nextScrollStart, {
        animation
      });
    } else if (tabMeta[end2] > tabsMeta[end2]) {
      const nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end2] - tabsMeta[end2]);
      scroll(nextScrollStart, {
        animation
      });
    }
  });
  const updateScrollButtonState = useEventCallback_default2(() => {
    if (scrollable && scrollButtons !== false) {
      setUpdateScrollObserver(!updateScrollObserver);
    }
  });
  React49.useEffect(() => {
    const handleResize = debounce_default(() => {
      if (tabsRef.current) {
        updateIndicatorState();
      }
    });
    let resizeObserver;
    const handleMutation = (records) => {
      records.forEach((record) => {
        record.removedNodes.forEach((item) => {
          resizeObserver?.unobserve(item);
        });
        record.addedNodes.forEach((item) => {
          resizeObserver?.observe(item);
        });
      });
      handleResize();
      updateScrollButtonState();
    };
    const win = ownerWindow_default(tabsRef.current);
    win.addEventListener("resize", handleResize);
    let mutationObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      Array.from(tabListRef.current.children).forEach((child) => {
        resizeObserver.observe(child);
      });
    }
    if (typeof MutationObserver !== "undefined") {
      mutationObserver = new MutationObserver(handleMutation);
      mutationObserver.observe(tabListRef.current, {
        childList: true
      });
    }
    return () => {
      handleResize.clear();
      win.removeEventListener("resize", handleResize);
      mutationObserver?.disconnect();
      resizeObserver?.disconnect();
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  React49.useEffect(() => {
    const tabListChildren = Array.from(tabListRef.current.children);
    const length = tabListChildren.length;
    if (typeof IntersectionObserver !== "undefined" && length > 0 && scrollable && scrollButtons !== false) {
      const firstTab = tabListChildren[0];
      const lastTab = tabListChildren[length - 1];
      const observerOptions = {
        root: tabsRef.current,
        threshold: 0.99
      };
      const handleScrollButtonStart = (entries) => {
        setDisplayStartScroll(!entries[0].isIntersecting);
      };
      const firstObserver = new IntersectionObserver(handleScrollButtonStart, observerOptions);
      firstObserver.observe(firstTab);
      const handleScrollButtonEnd = (entries) => {
        setDisplayEndScroll(!entries[0].isIntersecting);
      };
      const lastObserver = new IntersectionObserver(handleScrollButtonEnd, observerOptions);
      lastObserver.observe(lastTab);
      return () => {
        firstObserver.disconnect();
        lastObserver.disconnect();
      };
    }
    return void 0;
  }, [scrollable, scrollButtons, updateScrollObserver, childrenProp?.length]);
  React49.useEffect(() => {
    setMounted(true);
  }, []);
  React49.useEffect(() => {
    updateIndicatorState();
  });
  React49.useEffect(() => {
    scrollSelectedIntoView(defaultIndicatorStyle !== indicatorStyle);
  }, [scrollSelectedIntoView, indicatorStyle]);
  React49.useImperativeHandle(action, () => ({
    updateIndicator: updateIndicatorState,
    updateScrollButtons: updateScrollButtonState
  }), [updateIndicatorState, updateScrollButtonState]);
  const [IndicatorSlot, indicatorSlotProps] = useSlot("indicator", {
    className: clsx_default(classes.indicator, TabIndicatorProps.className),
    elementType: TabsIndicator,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      style: indicatorStyle
    }
  });
  const indicator = (0, import_jsx_runtime40.jsx)(IndicatorSlot, {
    ...indicatorSlotProps
  });
  let childIndex = 0;
  const children = React49.Children.map(childrenProp, (child) => {
    if (!React49.isValidElement(child)) {
      return null;
    }
    if (true) {
      if ((0, import_react_is.isFragment)(child)) {
        console.error(["MUI: The Tabs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    const childValue = child.props.value === void 0 ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;
    childIndex += 1;
    return React49.cloneElement(child, {
      fullWidth: variant === "fullWidth",
      indicator: selected && !mounted && indicator,
      selected,
      selectionFollowsFocus,
      onChange,
      textColor,
      value: childValue,
      ...childIndex === 1 && value === false && !child.props.tabIndex ? {
        tabIndex: 0
      } : {}
    });
  });
  const handleKeyDown = (event) => {
    if (event.altKey || event.shiftKey || event.ctrlKey || event.metaKey) {
      return;
    }
    const list = tabListRef.current;
    const currentFocus = ownerDocument_default(list).activeElement;
    const role = currentFocus.getAttribute("role");
    if (role !== "tab") {
      return;
    }
    let previousItemKey = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
    let nextItemKey = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
    if (orientation === "horizontal" && isRtl) {
      previousItemKey = "ArrowRight";
      nextItemKey = "ArrowLeft";
    }
    switch (event.key) {
      case previousItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;
      case nextItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;
      case "Home":
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;
      case "End":
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;
      default:
        break;
    }
  };
  const conditionalElements = getConditionalElements();
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: TabsRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      component
    },
    ownerState
  });
  const [ScrollerSlot, scrollerSlotProps] = useSlot("scroller", {
    ref: tabsRef,
    className: classes.scroller,
    elementType: TabsScroller,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      style: {
        overflow: scrollerStyle.overflow,
        [vertical ? `margin${isRtl ? "Left" : "Right"}` : "marginBottom"]: visibleScrollbar ? void 0 : -scrollerStyle.scrollbarWidth
      }
    }
  });
  const [ListSlot, listSlotProps] = useSlot("list", {
    ref: tabListRef,
    className: clsx_default(classes.list, classes.flexContainer),
    elementType: List,
    externalForwardedProps,
    ownerState,
    getSlotProps: (handlers) => ({
      ...handlers,
      onKeyDown: (event) => {
        handleKeyDown(event);
        handlers.onKeyDown?.(event);
      }
    })
  });
  return (0, import_jsx_runtime40.jsxs)(RootSlot, {
    ...rootSlotProps,
    children: [conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, (0, import_jsx_runtime40.jsxs)(ScrollerSlot, {
      ...scrollerSlotProps,
      children: [(0, import_jsx_runtime40.jsx)(ListSlot, {
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-orientation": orientation === "vertical" ? "vertical" : null,
        role: "tablist",
        ...listSlotProps,
        children
      }), mounted && indicator]
    }), conditionalElements.scrollButtonEnd]
  });
});
true ? Tabs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: refType_default,
  /**
   * If `true`, the scroll buttons aren't forced hidden on mobile.
   * By default the scroll buttons are hidden on mobile and takes precedence over `scrollButtons`.
   * @default false
   */
  allowScrollButtonsMobile: import_prop_types32.default.bool,
  /**
   * The label for the Tabs as a string.
   */
  "aria-label": import_prop_types32.default.string,
  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  "aria-labelledby": import_prop_types32.default.string,
  /**
   * If `true`, the tabs are centered.
   * This prop is intended for large views.
   * @default false
   */
  centered: import_prop_types32.default.bool,
  /**
   * The content of the component.
   */
  children: import_prop_types32.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types32.default.object,
  /**
   * @ignore
   */
  className: import_prop_types32.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types32.default.elementType,
  /**
   * Determines the color of the indicator.
   * @default 'primary'
   */
  indicatorColor: import_prop_types32.default.oneOfType([import_prop_types32.default.oneOf(["primary", "secondary"]), import_prop_types32.default.string]),
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {any} value We default to the index of the child (number)
   */
  onChange: import_prop_types32.default.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: import_prop_types32.default.oneOf(["horizontal", "vertical"]),
  /**
   * The component used to render the scroll buttons.
   * @deprecated use the `slots.scrollButtons` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default TabScrollButton
   */
  ScrollButtonComponent: import_prop_types32.default.elementType,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `true` will always present them.
   * - `false` will never present them.
   *
   * By default the scroll buttons are hidden on mobile.
   * This behavior can be disabled with `allowScrollButtonsMobile`.
   * @default 'auto'
   */
  scrollButtons: import_prop_types32.default.oneOf(["auto", false, true]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: import_prop_types32.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types32.default.shape({
    endScrollButtonIcon: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object]),
    indicator: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object]),
    list: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object]),
    root: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object]),
    scrollbar: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object]),
    scrollButtons: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object]),
    scroller: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object]),
    startScrollButtonIcon: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types32.default.shape({
    endScrollButtonIcon: import_prop_types32.default.elementType,
    EndScrollButtonIcon: import_prop_types32.default.elementType,
    indicator: import_prop_types32.default.elementType,
    list: import_prop_types32.default.elementType,
    root: import_prop_types32.default.elementType,
    scrollbar: import_prop_types32.default.elementType,
    scrollButtons: import_prop_types32.default.elementType,
    scroller: import_prop_types32.default.elementType,
    startScrollButtonIcon: import_prop_types32.default.elementType,
    StartScrollButtonIcon: import_prop_types32.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types32.default.oneOfType([import_prop_types32.default.arrayOf(import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object, import_prop_types32.default.bool])), import_prop_types32.default.func, import_prop_types32.default.object]),
  /**
   * Props applied to the tab indicator element.
   * @deprecated use the `slotProps.indicator` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default  {}
   */
  TabIndicatorProps: import_prop_types32.default.object,
  /**
   * Props applied to the [`TabScrollButton`](https://mui.com/material-ui/api/tab-scroll-button/) element.
   * @deprecated use the `slotProps.scrollButtons` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TabScrollButtonProps: import_prop_types32.default.object,
  /**
   * Determines the color of the `Tab`.
   * @default 'primary'
   */
  textColor: import_prop_types32.default.oneOf(["inherit", "primary", "secondary"]),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `false`.
   */
  value: import_prop_types32.default.any,
  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  - `fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   * @default 'standard'
   */
  variant: import_prop_types32.default.oneOf(["fullWidth", "scrollable", "standard"]),
  /**
   * If `true`, the scrollbar is visible. It can be useful when displaying
   * a long vertical list of tabs.
   * @default false
   */
  visibleScrollbar: import_prop_types32.default.bool
} : void 0;
var Tabs_default = Tabs;

// node_modules/@mui/material/esm/Slider/sliderClasses.js
function getSliderUtilityClass(slot) {
  return generateUtilityClass("MuiSlider", slot);
}
var sliderClasses = generateUtilityClasses("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]);
var sliderClasses_default = sliderClasses;

// node_modules/@mui/material/esm/Slider/Slider.js
var React52 = __toESM(require_react(), 1);
var import_prop_types34 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Slider/useSlider.js
var React50 = __toESM(require_react(), 1);

// node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js
var visuallyHidden = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
var visuallyHidden_default = visuallyHidden;

// node_modules/@mui/material/esm/utils/areArraysEqual.js
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}
var areArraysEqual_default = areArraysEqual;

// node_modules/@mui/material/esm/Slider/useSlider.js
var INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function getNewValue(currentValue, step, direction, min2, max2) {
  return direction === 1 ? Math.min(currentValue + step, max2) : Math.max(currentValue - step, min2);
}
function asc(a, b) {
  return a - b;
}
function findClosest(values, currentValue) {
  const {
    index: closestIndex
  } = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null) ?? {};
  return closestIndex;
}
function trackFinger(event, touchId) {
  if (touchId.current !== void 0 && event.changedTouches) {
    const touchEvent = event;
    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min2, max2) {
  return (value - min2) * 100 / (max2 - min2);
}
function percentToValue(percent, min2, max2) {
  return (max2 - min2) * percent + min2;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split("e-");
    const matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min2) {
  const nearest = Math.round((value - min2) / step) * step + min2;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values,
  newValue,
  index
}) {
  const output = values.slice();
  output[index] = newValue;
  return output.sort(asc);
}
function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  const doc = ownerDocument(sliderRef.current);
  if (!sliderRef.current?.contains(doc.activeElement) || Number(doc?.activeElement?.getAttribute("data-index")) !== activeIndex) {
    sliderRef.current?.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
function areValuesEqual(newValue, oldValue) {
  if (typeof newValue === "number" && typeof oldValue === "number") {
    return newValue === oldValue;
  }
  if (typeof newValue === "object" && typeof oldValue === "object") {
    return areArraysEqual_default(newValue, oldValue);
  }
  return false;
}
var axisProps = {
  horizontal: {
    offset: (percent) => ({
      left: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  "horizontal-reverse": {
    offset: (percent) => ({
      right: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: (percent) => ({
      bottom: `${percent}%`
    }),
    leap: (percent) => ({
      height: `${percent}%`
    })
  }
};
var Identity = (x) => x;
var cachedSupportsTouchActionNone;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === void 0) {
    if (typeof CSS !== "undefined" && typeof CSS.supports === "function") {
      cachedSupportsTouchActionNone = CSS.supports("touch-action", "none");
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }
  return cachedSupportsTouchActionNone;
}
function useSlider(parameters) {
  const {
    "aria-labelledby": ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max: max2 = 100,
    min: min2 = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = "horizontal",
    rootRef: ref,
    scale = Identity,
    step = 1,
    shiftStep = 10,
    tabIndex,
    value: valueProp
  } = parameters;
  const touchId = React50.useRef(void 0);
  const [active, setActive] = React50.useState(-1);
  const [open, setOpen] = React50.useState(-1);
  const [dragging, setDragging] = React50.useState(false);
  const moveCount = React50.useRef(0);
  const lastChangedValue = React50.useRef(null);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue ?? min2,
    name: "Slider"
  });
  const handleChange = onChange && ((event, value, thumbIndex) => {
    const nativeEvent = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: {
        value,
        name
      }
    });
    lastChangedValue.current = value;
    onChange(clonedEvent, value, thumbIndex);
  });
  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map((value) => value == null ? min2 : clamp_default(value, min2, max2));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max2 - min2) / step) + 1)].map((_, index) => ({
    value: min2 + step * index
  })) : marksProp || [];
  const marksValues = marks.map((mark) => mark.value);
  const [focusedThumbIndex, setFocusedThumbIndex] = React50.useState(-1);
  const sliderRef = React50.useRef(null);
  const handleRef = useForkRef(ref, sliderRef);
  const createHandleHiddenInputFocus = (otherHandlers) => (event) => {
    const index = Number(event.currentTarget.getAttribute("data-index"));
    if (isFocusVisible(event.target)) {
      setFocusedThumbIndex(index);
    }
    setOpen(index);
    otherHandlers?.onFocus?.(event);
  };
  const createHandleHiddenInputBlur = (otherHandlers) => (event) => {
    if (!isFocusVisible(event.target)) {
      setFocusedThumbIndex(-1);
    }
    setOpen(-1);
    otherHandlers?.onBlur?.(event);
  };
  const changeValue = (event, valueInput) => {
    const index = Number(event.currentTarget.getAttribute("data-index"));
    const value = values[index];
    const marksIndex = marksValues.indexOf(value);
    let newValue = valueInput;
    if (marks && step == null) {
      const maxMarksValue = marksValues[marksValues.length - 1];
      if (newValue >= maxMarksValue) {
        newValue = maxMarksValue;
      } else if (newValue <= marksValues[0]) {
        newValue = marksValues[0];
      } else {
        newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
      }
    }
    newValue = clamp_default(newValue, min2, max2);
    if (range) {
      if (disableSwap) {
        newValue = clamp_default(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index
      });
      let activeIndex = index;
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }
      focusThumb({
        sliderRef,
        activeIndex
      });
    }
    setValueState(newValue);
    setFocusedThumbIndex(index);
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(event, newValue, index);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, lastChangedValue.current ?? newValue);
    }
  };
  const createHandleHiddenInputKeyDown = (otherHandlers) => (event) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      const index = Number(event.currentTarget.getAttribute("data-index"));
      const value = values[index];
      let newValue = null;
      if (step != null) {
        const stepSize = event.shiftKey ? shiftStep : step;
        switch (event.key) {
          case "ArrowUp":
            newValue = getNewValue(value, stepSize, 1, min2, max2);
            break;
          case "ArrowRight":
            newValue = getNewValue(value, stepSize, isRtl ? -1 : 1, min2, max2);
            break;
          case "ArrowDown":
            newValue = getNewValue(value, stepSize, -1, min2, max2);
            break;
          case "ArrowLeft":
            newValue = getNewValue(value, stepSize, isRtl ? 1 : -1, min2, max2);
            break;
          case "PageUp":
            newValue = getNewValue(value, shiftStep, 1, min2, max2);
            break;
          case "PageDown":
            newValue = getNewValue(value, shiftStep, -1, min2, max2);
            break;
          case "Home":
            newValue = min2;
            break;
          case "End":
            newValue = max2;
            break;
          default:
            break;
        }
      } else if (marks) {
        const maxMarksValue = marksValues[marksValues.length - 1];
        const currentMarkIndex = marksValues.indexOf(value);
        const decrementKeys = [isRtl ? "ArrowRight" : "ArrowLeft", "ArrowDown", "PageDown", "Home"];
        const incrementKeys = [isRtl ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
        if (decrementKeys.includes(event.key)) {
          if (currentMarkIndex === 0) {
            newValue = marksValues[0];
          } else {
            newValue = marksValues[currentMarkIndex - 1];
          }
        } else if (incrementKeys.includes(event.key)) {
          if (currentMarkIndex === marksValues.length - 1) {
            newValue = maxMarksValue;
          } else {
            newValue = marksValues[currentMarkIndex + 1];
          }
        }
      }
      if (newValue != null) {
        changeValue(event, newValue);
      }
    }
    otherHandlers?.onKeyDown?.(event);
  };
  useEnhancedEffect_default(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      document.activeElement?.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }
  const createHandleHiddenInputChange = (otherHandlers) => (event) => {
    otherHandlers.onChange?.(event);
    changeValue(event, event.target.valueAsNumber);
  };
  const previousIndex = React50.useRef(void 0);
  let axis = orientation;
  if (isRtl && orientation === "horizontal") {
    axis += "-reverse";
  }
  const getFingerNewValue = ({
    finger,
    move = false
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width,
      height,
      bottom: bottom2,
      left: left2
    } = slider.getBoundingClientRect();
    let percent;
    if (axis.startsWith("vertical")) {
      percent = (bottom2 - finger.y) / height;
    } else {
      percent = (finger.x - left2) / width;
    }
    if (axis.includes("-reverse")) {
      percent = 1 - percent;
    }
    let newValue;
    newValue = percentToValue(percent, min2, max2);
    if (step) {
      newValue = roundValueToStep(newValue, step, min2);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp_default(newValue, min2, max2);
    let activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values, newValue);
      } else {
        activeIndex = previousIndex.current;
      }
      if (disableSwap) {
        newValue = clamp_default(newValue, values[activeIndex - 1] || -Infinity, values[activeIndex + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index: activeIndex
      });
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }
    return {
      newValue,
      activeIndex
    };
  };
  const handleTouchMove = useEventCallback_default((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    if (!finger) {
      return;
    }
    moveCount.current += 1;
    if (nativeEvent.type === "mousemove" && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = useEventCallback_default((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);
    if (!finger) {
      return;
    }
    const {
      newValue
    } = getFingerNewValue({
      finger,
      move: true
    });
    setActive(-1);
    if (nativeEvent.type === "touchend") {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, lastChangedValue.current ?? newValue);
    }
    touchId.current = void 0;
    stopListening();
  });
  const handleTouchStart = useEventCallback_default((nativeEvent) => {
    if (disabled) {
      return;
    }
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(nativeEvent, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("touchmove", handleTouchMove, {
      passive: true
    });
    doc.addEventListener("touchend", handleTouchEnd, {
      passive: true
    });
  });
  const stopListening = React50.useCallback(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener("mousemove", handleTouchMove);
    doc.removeEventListener("mouseup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  React50.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener("touchstart", handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  React50.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const createHandleMouseDown = (otherHandlers) => (event) => {
    otherHandlers.onMouseDown?.(event);
    if (disabled) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(event, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("mousemove", handleTouchMove, {
      passive: true
    });
    doc.addEventListener("mouseup", handleTouchEnd);
  };
  const trackOffset = valueToPercent(range ? values[0] : min2, min2, max2);
  const trackLeap = valueToPercent(values[values.length - 1], min2, max2) - trackOffset;
  const getRootProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers_default(externalProps);
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(externalHandlers || {})
    };
    const mergedEventHandlers = {
      ...externalHandlers,
      ...ownEventHandlers
    };
    return {
      ...externalProps,
      ref: handleRef,
      ...mergedEventHandlers
    };
  };
  const createHandleMouseOver = (otherHandlers) => (event) => {
    otherHandlers.onMouseOver?.(event);
    const index = Number(event.currentTarget.getAttribute("data-index"));
    setOpen(index);
  };
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    otherHandlers.onMouseLeave?.(event);
    setOpen(-1);
  };
  const getThumbProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers_default(externalProps);
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(externalHandlers || {}),
      onMouseLeave: createHandleMouseLeave(externalHandlers || {})
    };
    return {
      ...externalProps,
      ...externalHandlers,
      ...ownEventHandlers
    };
  };
  const getThumbStyle = (index) => {
    return {
      // So the non active thumb doesn't show its label on hover.
      pointerEvents: active !== -1 && active !== index ? "none" : void 0
    };
  };
  let cssWritingMode;
  if (orientation === "vertical") {
    cssWritingMode = isRtl ? "vertical-rl" : "vertical-lr";
  }
  const getHiddenInputProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers_default(externalProps);
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(externalHandlers || {}),
      onFocus: createHandleHiddenInputFocus(externalHandlers || {}),
      onBlur: createHandleHiddenInputBlur(externalHandlers || {}),
      onKeyDown: createHandleHiddenInputKeyDown(externalHandlers || {})
    };
    const mergedEventHandlers = {
      ...externalHandlers,
      ...ownEventHandlers
    };
    return {
      tabIndex,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max2),
      "aria-valuemin": scale(min2),
      name,
      type: "range",
      min: parameters.min,
      max: parameters.max,
      step: parameters.step === null && parameters.marks ? "any" : parameters.step ?? void 0,
      disabled,
      ...externalProps,
      ...mergedEventHandlers,
      style: {
        ...visuallyHidden_default,
        direction: isRtl ? "rtl" : "ltr",
        // So that VoiceOver's focus indicator matches the thumb's dimensions
        width: "100%",
        height: "100%",
        writingMode: cssWritingMode
      }
    };
  };
  return {
    active,
    axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks,
    open,
    range,
    rootRef: handleRef,
    trackLeap,
    trackOffset,
    values,
    getThumbStyle
  };
}

// node_modules/@mui/material/esm/utils/shouldSpreadAdditionalProps.js
var shouldSpreadAdditionalProps = (Slot) => {
  return !Slot || !isHostComponent_default(Slot);
};
var shouldSpreadAdditionalProps_default = shouldSpreadAdditionalProps;

// node_modules/@mui/material/esm/Slider/SliderValueLabel.js
var React51 = __toESM(require_react(), 1);
var import_prop_types33 = __toESM(require_prop_types(), 1);
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var useValueLabelClasses = (props) => {
  const {
    open
  } = props;
  const utilityClasses = {
    offset: clsx_default(open && sliderClasses_default.valueLabelOpen),
    circle: sliderClasses_default.valueLabelCircle,
    label: sliderClasses_default.valueLabelLabel
  };
  return utilityClasses;
};
function SliderValueLabel(props) {
  const {
    children,
    className,
    value
  } = props;
  const classes = useValueLabelClasses(props);
  if (!children) {
    return null;
  }
  return React51.cloneElement(children, {
    className: children.props.className
  }, (0, import_jsx_runtime41.jsxs)(React51.Fragment, {
    children: [children.props.children, (0, import_jsx_runtime41.jsx)("span", {
      className: clsx_default(classes.offset, className),
      "aria-hidden": true,
      children: (0, import_jsx_runtime41.jsx)("span", {
        className: classes.circle,
        children: (0, import_jsx_runtime41.jsx)("span", {
          className: classes.label,
          children: value
        })
      })
    })]
  }));
}
true ? SliderValueLabel.propTypes = {
  children: import_prop_types33.default.element.isRequired,
  className: import_prop_types33.default.string,
  value: import_prop_types33.default.node
} : void 0;

// node_modules/@mui/material/esm/Slider/Slider.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
function Identity2(x) {
  return x;
}
var SliderRoot = styled_default("span", {
  name: "MuiSlider",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`color${capitalize_default(ownerState.color)}`], ownerState.size !== "medium" && styles2[`size${capitalize_default(ownerState.size)}`], ownerState.marked && styles2.marked, ownerState.orientation === "vertical" && styles2.vertical, ownerState.track === "inverted" && styles2.trackInverted, ownerState.track === false && styles2.trackFalse];
  }
})(memoTheme_default(({
  theme
}) => ({
  borderRadius: 12,
  boxSizing: "content-box",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  touchAction: "none",
  WebkitTapHighlightColor: "transparent",
  "@media print": {
    colorAdjust: "exact"
  },
  [`&.${sliderClasses_default.disabled}`]: {
    pointerEvents: "none",
    cursor: "default",
    color: (theme.vars || theme).palette.grey[400]
  },
  [`&.${sliderClasses_default.dragging}`]: {
    [`& .${sliderClasses_default.thumb}, & .${sliderClasses_default.track}`]: {
      transition: "none"
    }
  },
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), {
    props: {
      orientation: "horizontal"
    },
    style: {
      height: 4,
      width: "100%",
      padding: "13px 0",
      // The primary input mechanism of the device includes a pointing device of limited accuracy.
      "@media (pointer: coarse)": {
        // Reach 42px touch target, about ~8mm on screen.
        padding: "20px 0"
      }
    }
  }, {
    props: {
      orientation: "horizontal",
      size: "small"
    },
    style: {
      height: 2
    }
  }, {
    props: {
      orientation: "horizontal",
      marked: true
    },
    style: {
      marginBottom: 20
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      width: 4,
      padding: "0 13px",
      // The primary input mechanism of the device includes a pointing device of limited accuracy.
      "@media (pointer: coarse)": {
        // Reach 42px touch target, about ~8mm on screen.
        padding: "0 20px"
      }
    }
  }, {
    props: {
      orientation: "vertical",
      size: "small"
    },
    style: {
      width: 2
    }
  }, {
    props: {
      orientation: "vertical",
      marked: true
    },
    style: {
      marginRight: 44
    }
  }]
})));
var SliderRail = styled_default("span", {
  name: "MuiSlider",
  slot: "Rail"
})({
  display: "block",
  position: "absolute",
  borderRadius: "inherit",
  backgroundColor: "currentColor",
  opacity: 0.38,
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "100%",
      height: "inherit",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      width: "inherit",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }, {
    props: {
      track: "inverted"
    },
    style: {
      opacity: 1
    }
  }]
});
var SliderTrack = styled_default("span", {
  name: "MuiSlider",
  slot: "Track"
})(memoTheme_default(({
  theme
}) => {
  return {
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    border: "1px solid currentColor",
    backgroundColor: "currentColor",
    transition: theme.transitions.create(["left", "width", "bottom", "height"], {
      duration: theme.transitions.duration.shortest
    }),
    variants: [{
      props: {
        size: "small"
      },
      style: {
        border: "none"
      }
    }, {
      props: {
        orientation: "horizontal"
      },
      style: {
        height: "inherit",
        top: "50%",
        transform: "translateY(-50%)"
      }
    }, {
      props: {
        orientation: "vertical"
      },
      style: {
        width: "inherit",
        left: "50%",
        transform: "translateX(-50%)"
      }
    }, {
      props: {
        track: false
      },
      style: {
        display: "none"
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color,
        track: "inverted"
      },
      style: {
        ...theme.vars ? {
          backgroundColor: theme.vars.palette.Slider[`${color}Track`],
          borderColor: theme.vars.palette.Slider[`${color}Track`]
        } : {
          backgroundColor: lighten(theme.palette[color].main, 0.62),
          borderColor: lighten(theme.palette[color].main, 0.62),
          ...theme.applyStyles("dark", {
            backgroundColor: darken(theme.palette[color].main, 0.5)
          }),
          ...theme.applyStyles("dark", {
            borderColor: darken(theme.palette[color].main, 0.5)
          })
        }
      }
    }))]
  };
}));
var SliderThumb = styled_default("span", {
  name: "MuiSlider",
  slot: "Thumb",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.thumb, styles2[`thumbColor${capitalize_default(ownerState.color)}`], ownerState.size !== "medium" && styles2[`thumbSize${capitalize_default(ownerState.size)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  position: "absolute",
  width: 20,
  height: 20,
  boxSizing: "border-box",
  borderRadius: "50%",
  outline: 0,
  backgroundColor: "currentColor",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: theme.transitions.create(["box-shadow", "left", "bottom"], {
    duration: theme.transitions.duration.shortest
  }),
  "&::before": {
    position: "absolute",
    content: '""',
    borderRadius: "inherit",
    width: "100%",
    height: "100%",
    boxShadow: (theme.vars || theme).shadows[2]
  },
  "&::after": {
    position: "absolute",
    content: '""',
    borderRadius: "50%",
    // 42px is the hit target
    width: 42,
    height: 42,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  [`&.${sliderClasses_default.disabled}`]: {
    "&:hover": {
      boxShadow: "none"
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      width: 12,
      height: 12,
      "&::before": {
        boxShadow: "none"
      }
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      top: "50%",
      transform: "translate(-50%, -50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: "50%",
      transform: "translate(-50%, 50%)"
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&:hover, &.${sliderClasses_default.focusVisible}`]: {
        ...theme.vars ? {
          boxShadow: `0px 0px 0px 8px rgba(${theme.vars.palette[color].mainChannel} / 0.16)`
        } : {
          boxShadow: `0px 0px 0px 8px ${alpha(theme.palette[color].main, 0.16)}`
        },
        "@media (hover: none)": {
          boxShadow: "none"
        }
      },
      [`&.${sliderClasses_default.active}`]: {
        ...theme.vars ? {
          boxShadow: `0px 0px 0px 14px rgba(${theme.vars.palette[color].mainChannel} / 0.16)`
        } : {
          boxShadow: `0px 0px 0px 14px ${alpha(theme.palette[color].main, 0.16)}`
        }
      }
    }
  }))]
})));
var SliderValueLabel2 = styled_default(SliderValueLabel, {
  name: "MuiSlider",
  slot: "ValueLabel"
})(memoTheme_default(({
  theme
}) => ({
  zIndex: 1,
  whiteSpace: "nowrap",
  ...theme.typography.body2,
  fontWeight: 500,
  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.shortest
  }),
  position: "absolute",
  backgroundColor: (theme.vars || theme).palette.grey[600],
  borderRadius: 2,
  color: (theme.vars || theme).palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem 0.75rem",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      transform: "translateY(-100%) scale(0)",
      top: "-10px",
      transformOrigin: "bottom center",
      "&::before": {
        position: "absolute",
        content: '""',
        width: 8,
        height: 8,
        transform: "translate(-50%, 50%) rotate(45deg)",
        backgroundColor: "inherit",
        bottom: 0,
        left: "50%"
      },
      [`&.${sliderClasses_default.valueLabelOpen}`]: {
        transform: "translateY(-100%) scale(1)"
      }
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      transform: "translateY(-50%) scale(0)",
      right: "30px",
      top: "50%",
      transformOrigin: "right center",
      "&::before": {
        position: "absolute",
        content: '""',
        width: 8,
        height: 8,
        transform: "translate(-50%, -50%) rotate(45deg)",
        backgroundColor: "inherit",
        right: -8,
        top: "50%"
      },
      [`&.${sliderClasses_default.valueLabelOpen}`]: {
        transform: "translateY(-50%) scale(1)"
      }
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      fontSize: theme.typography.pxToRem(12),
      padding: "0.25rem 0.5rem"
    }
  }, {
    props: {
      orientation: "vertical",
      size: "small"
    },
    style: {
      right: "20px"
    }
  }]
})));
true ? SliderValueLabel2.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types34.default.element.isRequired,
  /**
   * @ignore
   */
  index: import_prop_types34.default.number.isRequired,
  /**
   * @ignore
   */
  open: import_prop_types34.default.bool.isRequired,
  /**
   * @ignore
   */
  value: import_prop_types34.default.node
} : void 0;
var SliderMark = styled_default("span", {
  name: "MuiSlider",
  slot: "Mark",
  shouldForwardProp: (prop) => slotShouldForwardProp_default(prop) && prop !== "markActive",
  overridesResolver: (props, styles2) => {
    const {
      markActive
    } = props;
    return [styles2.mark, markActive && styles2.markActive];
  }
})(memoTheme_default(({
  theme
}) => ({
  position: "absolute",
  width: 2,
  height: 2,
  borderRadius: 1,
  backgroundColor: "currentColor",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      top: "50%",
      transform: "translate(-1px, -50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: "50%",
      transform: "translate(-50%, 1px)"
    }
  }, {
    props: {
      markActive: true
    },
    style: {
      backgroundColor: (theme.vars || theme).palette.background.paper,
      opacity: 0.8
    }
  }]
})));
var SliderMarkLabel = styled_default("span", {
  name: "MuiSlider",
  slot: "MarkLabel",
  shouldForwardProp: (prop) => slotShouldForwardProp_default(prop) && prop !== "markLabelActive"
})(memoTheme_default(({
  theme
}) => ({
  ...theme.typography.body2,
  color: (theme.vars || theme).palette.text.secondary,
  position: "absolute",
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      top: 30,
      transform: "translateX(-50%)",
      "@media (pointer: coarse)": {
        top: 40
      }
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: 36,
      transform: "translateY(50%)",
      "@media (pointer: coarse)": {
        left: 44
      }
    }
  }, {
    props: {
      markLabelActive: true
    },
    style: {
      color: (theme.vars || theme).palette.text.primary
    }
  }]
})));
var useUtilityClasses29 = (ownerState) => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track,
    classes,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", dragging && "dragging", marked && "marked", orientation === "vertical" && "vertical", track === "inverted" && "trackInverted", track === false && "trackFalse", color && `color${capitalize_default(color)}`, size && `size${capitalize_default(size)}`],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", disabled && "disabled", size && `thumbSize${capitalize_default(size)}`, color && `thumbColor${capitalize_default(color)}`],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return composeClasses(slots, getSliderUtilityClass, classes);
};
var Forward = ({
  children
}) => children;
var Slider = React52.forwardRef(function Slider2(inputProps, ref) {
  const props = useDefaultProps({
    props: inputProps,
    name: "MuiSlider"
  });
  const isRtl = useRtl();
  const {
    "aria-label": ariaLabel,
    "aria-valuetext": ariaValuetext,
    "aria-labelledby": ariaLabelledby,
    // eslint-disable-next-line react/prop-types
    component = "span",
    components = {},
    componentsProps = {},
    color = "primary",
    classes: classesProp,
    className,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max: max2 = 100,
    min: min2 = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = "horizontal",
    shiftStep = 10,
    size = "medium",
    step = 1,
    scale = Identity2,
    slotProps,
    slots,
    tabIndex,
    track = "normal",
    value: valueProp,
    valueLabelDisplay = "off",
    valueLabelFormat = Identity2,
    ...other
  } = props;
  const ownerState = {
    ...props,
    isRtl,
    max: max2,
    min: min2,
    classes: classesProp,
    disabled,
    disableSwap,
    orientation,
    marks: marksProp,
    color,
    size,
    step,
    shiftStep,
    scale,
    track,
    valueLabelDisplay,
    valueLabelFormat
  };
  const {
    axisProps: axisProps2,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    open,
    active,
    axis,
    focusedThumbIndex,
    range,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap,
    getThumbStyle
  } = useSlider({
    ...ownerState,
    rootRef: ref
  });
  ownerState.marked = marks.length > 0 && marks.some((mark) => mark.label);
  ownerState.dragging = dragging;
  ownerState.focusedThumbIndex = focusedThumbIndex;
  const classes = useUtilityClasses29(ownerState);
  const RootSlot = slots?.root ?? components.Root ?? SliderRoot;
  const RailSlot = slots?.rail ?? components.Rail ?? SliderRail;
  const TrackSlot = slots?.track ?? components.Track ?? SliderTrack;
  const ThumbSlot = slots?.thumb ?? components.Thumb ?? SliderThumb;
  const ValueLabelSlot = slots?.valueLabel ?? components.ValueLabel ?? SliderValueLabel2;
  const MarkSlot = slots?.mark ?? components.Mark ?? SliderMark;
  const MarkLabelSlot = slots?.markLabel ?? components.MarkLabel ?? SliderMarkLabel;
  const InputSlot = slots?.input ?? components.Input ?? "input";
  const rootSlotProps = slotProps?.root ?? componentsProps.root;
  const railSlotProps = slotProps?.rail ?? componentsProps.rail;
  const trackSlotProps = slotProps?.track ?? componentsProps.track;
  const thumbSlotProps = slotProps?.thumb ?? componentsProps.thumb;
  const valueLabelSlotProps = slotProps?.valueLabel ?? componentsProps.valueLabel;
  const markSlotProps = slotProps?.mark ?? componentsProps.mark;
  const markLabelSlotProps = slotProps?.markLabel ?? componentsProps.markLabel;
  const inputSlotProps = slotProps?.input ?? componentsProps.input;
  const rootProps = useSlotProps_default({
    elementType: RootSlot,
    getSlotProps: getRootProps,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    additionalProps: {
      ...shouldSpreadAdditionalProps_default(RootSlot) && {
        as: component
      }
    },
    ownerState: {
      ...ownerState,
      ...rootSlotProps?.ownerState
    },
    className: [classes.root, className]
  });
  const railProps = useSlotProps_default({
    elementType: RailSlot,
    externalSlotProps: railSlotProps,
    ownerState,
    className: classes.rail
  });
  const trackProps = useSlotProps_default({
    elementType: TrackSlot,
    externalSlotProps: trackSlotProps,
    additionalProps: {
      style: {
        ...axisProps2[axis].offset(trackOffset),
        ...axisProps2[axis].leap(trackLeap)
      }
    },
    ownerState: {
      ...ownerState,
      ...trackSlotProps?.ownerState
    },
    className: classes.track
  });
  const thumbProps = useSlotProps_default({
    elementType: ThumbSlot,
    getSlotProps: getThumbProps,
    externalSlotProps: thumbSlotProps,
    ownerState: {
      ...ownerState,
      ...thumbSlotProps?.ownerState
    },
    className: classes.thumb
  });
  const valueLabelProps = useSlotProps_default({
    elementType: ValueLabelSlot,
    externalSlotProps: valueLabelSlotProps,
    ownerState: {
      ...ownerState,
      ...valueLabelSlotProps?.ownerState
    },
    className: classes.valueLabel
  });
  const markProps = useSlotProps_default({
    elementType: MarkSlot,
    externalSlotProps: markSlotProps,
    ownerState,
    className: classes.mark
  });
  const markLabelProps = useSlotProps_default({
    elementType: MarkLabelSlot,
    externalSlotProps: markLabelSlotProps,
    ownerState,
    className: classes.markLabel
  });
  const inputSliderProps = useSlotProps_default({
    elementType: InputSlot,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: inputSlotProps,
    ownerState
  });
  return (0, import_jsx_runtime42.jsxs)(RootSlot, {
    ...rootProps,
    children: [(0, import_jsx_runtime42.jsx)(RailSlot, {
      ...railProps
    }), (0, import_jsx_runtime42.jsx)(TrackSlot, {
      ...trackProps
    }), marks.filter((mark) => mark.value >= min2 && mark.value <= max2).map((mark, index) => {
      const percent = valueToPercent(mark.value, min2, max2);
      const style = axisProps2[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values.includes(mark.value);
      } else {
        markActive = track === "normal" && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === "inverted" && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }
      return (0, import_jsx_runtime42.jsxs)(React52.Fragment, {
        children: [(0, import_jsx_runtime42.jsx)(MarkSlot, {
          "data-index": index,
          ...markProps,
          ...!isHostComponent_default(MarkSlot) && {
            markActive
          },
          style: {
            ...style,
            ...markProps.style
          },
          className: clsx_default(markProps.className, markActive && classes.markActive)
        }), mark.label != null ? (0, import_jsx_runtime42.jsx)(MarkLabelSlot, {
          "aria-hidden": true,
          "data-index": index,
          ...markLabelProps,
          ...!isHostComponent_default(MarkLabelSlot) && {
            markLabelActive: markActive
          },
          style: {
            ...style,
            ...markLabelProps.style
          },
          className: clsx_default(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        }) : null]
      }, index);
    }), values.map((value, index) => {
      const percent = valueToPercent(value, min2, max2);
      const style = axisProps2[axis].offset(percent);
      const ValueLabelComponent = valueLabelDisplay === "off" ? Forward : ValueLabelSlot;
      return (
        /* TODO v6: Change component structure. It will help in avoiding the complicated React.cloneElement API added in SliderValueLabel component. Should be: Thumb -> Input, ValueLabel. Follow Joy UI's Slider structure. */
        (0, import_jsx_runtime42.jsx)(ValueLabelComponent, {
          ...!isHostComponent_default(ValueLabelComponent) && {
            valueLabelFormat,
            valueLabelDisplay,
            value: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index) : valueLabelFormat,
            index,
            open: open === index || active === index || valueLabelDisplay === "on",
            disabled
          },
          ...valueLabelProps,
          children: (0, import_jsx_runtime42.jsx)(ThumbSlot, {
            "data-index": index,
            ...thumbProps,
            className: clsx_default(classes.thumb, thumbProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
            style: {
              ...style,
              ...getThumbStyle(index),
              ...thumbProps.style
            },
            children: (0, import_jsx_runtime42.jsx)(InputSlot, {
              "data-index": index,
              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
              "aria-valuenow": scale(value),
              "aria-labelledby": ariaLabelledby,
              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
              value: values[index],
              ...inputSliderProps
            })
          })
        }, index)
      );
    })]
  });
});
true ? Slider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The label of the slider.
   */
  "aria-label": chainPropTypes(import_prop_types34.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  /**
   * The id of the element containing a label for the slider.
   */
  "aria-labelledby": import_prop_types34.default.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": chainPropTypes(import_prop_types34.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  /**
   * @ignore
   */
  children: import_prop_types34.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types34.default.object,
  /**
   * @ignore
   */
  className: import_prop_types34.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types34.default.oneOfType([import_prop_types34.default.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), import_prop_types34.default.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: import_prop_types34.default.shape({
    Input: import_prop_types34.default.elementType,
    Mark: import_prop_types34.default.elementType,
    MarkLabel: import_prop_types34.default.elementType,
    Rail: import_prop_types34.default.elementType,
    Root: import_prop_types34.default.elementType,
    Thumb: import_prop_types34.default.elementType,
    Track: import_prop_types34.default.elementType,
    ValueLabel: import_prop_types34.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: import_prop_types34.default.shape({
    input: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    mark: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    markLabel: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    rail: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    root: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    thumb: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    track: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    valueLabel: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.shape({
      children: import_prop_types34.default.element,
      className: import_prop_types34.default.string,
      open: import_prop_types34.default.bool,
      style: import_prop_types34.default.object,
      value: import_prop_types34.default.node,
      valueLabelDisplay: import_prop_types34.default.oneOf(["auto", "off", "on"])
    })])
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types34.default.oneOfType([import_prop_types34.default.arrayOf(import_prop_types34.default.number), import_prop_types34.default.number]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types34.default.bool,
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: import_prop_types34.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: import_prop_types34.default.func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: import_prop_types34.default.func,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: import_prop_types34.default.oneOfType([import_prop_types34.default.arrayOf(import_prop_types34.default.shape({
    label: import_prop_types34.default.node,
    value: import_prop_types34.default.number.isRequired
  })), import_prop_types34.default.bool]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: import_prop_types34.default.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: import_prop_types34.default.number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: import_prop_types34.default.string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {Value} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: import_prop_types34.default.func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {Value} value The new value.
   */
  onChangeCommitted: import_prop_types34.default.func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types34.default.oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  scale: import_prop_types34.default.func,
  /**
   * The granularity with which the slider can step through values when using Page Up/Page Down or Shift + Arrow Up/Arrow Down.
   * @default 10
   */
  shiftStep: import_prop_types34.default.number,
  /**
   * The size of the slider.
   * @default 'medium'
   */
  size: import_prop_types34.default.oneOfType([import_prop_types34.default.oneOf(["small", "medium"]), import_prop_types34.default.string]),
  /**
   * The props used for each slot inside the Slider.
   * @default {}
   */
  slotProps: import_prop_types34.default.shape({
    input: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    mark: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    markLabel: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    rail: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    root: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    thumb: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    track: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    valueLabel: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.shape({
      children: import_prop_types34.default.element,
      className: import_prop_types34.default.string,
      open: import_prop_types34.default.bool,
      style: import_prop_types34.default.object,
      value: import_prop_types34.default.node,
      valueLabelDisplay: import_prop_types34.default.oneOf(["auto", "off", "on"])
    })])
  }),
  /**
   * The components used for each slot inside the Slider.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types34.default.shape({
    input: import_prop_types34.default.elementType,
    mark: import_prop_types34.default.elementType,
    markLabel: import_prop_types34.default.elementType,
    rail: import_prop_types34.default.elementType,
    root: import_prop_types34.default.elementType,
    thumb: import_prop_types34.default.elementType,
    track: import_prop_types34.default.elementType,
    valueLabel: import_prop_types34.default.elementType
  }),
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: import_prop_types34.default.number,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types34.default.oneOfType([import_prop_types34.default.arrayOf(import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object, import_prop_types34.default.bool])), import_prop_types34.default.func, import_prop_types34.default.object]),
  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: import_prop_types34.default.number,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: import_prop_types34.default.oneOf(["inverted", "normal", false]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: import_prop_types34.default.oneOfType([import_prop_types34.default.arrayOf(import_prop_types34.default.number), import_prop_types34.default.number]),
  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   * @default 'off'
   */
  valueLabelDisplay: import_prop_types34.default.oneOf(["auto", "off", "on"]),
  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  valueLabelFormat: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.string])
} : void 0;
var Slider_default = Slider;

// node_modules/@mui/material/esm/Badge/badgeClasses.js
function getBadgeUtilityClass(slot) {
  return generateUtilityClass("MuiBadge", slot);
}
var badgeClasses = generateUtilityClasses("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]);
var badgeClasses_default = badgeClasses;

// node_modules/@mui/material/esm/Badge/Badge.js
var React53 = __toESM(require_react(), 1);
var import_prop_types35 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Badge/useBadge.js
function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false
  } = parameters;
  const prevProps = usePreviousProps_default({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  let invisible = invisibleProp;
  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }
  const {
    badgeContent,
    max: max2 = maxProp
  } = invisible ? prevProps : parameters;
  const displayValue = badgeContent && Number(badgeContent) > max2 ? `${max2}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max: max2,
    displayValue
  };
}
var useBadge_default = useBadge;

// node_modules/@mui/material/esm/Badge/Badge.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var RADIUS_STANDARD = 10;
var RADIUS_DOT = 4;
var useUtilityClasses30 = (ownerState) => {
  const {
    color,
    anchorOrigin,
    invisible,
    overlap,
    variant,
    classes = {}
  } = ownerState;
  const slots = {
    root: ["root"],
    badge: ["badge", variant, invisible && "invisible", `anchorOrigin${capitalize_default(anchorOrigin.vertical)}${capitalize_default(anchorOrigin.horizontal)}`, `anchorOrigin${capitalize_default(anchorOrigin.vertical)}${capitalize_default(anchorOrigin.horizontal)}${capitalize_default(overlap)}`, `overlap${capitalize_default(overlap)}`, color !== "default" && `color${capitalize_default(color)}`]
  };
  return composeClasses(slots, getBadgeUtilityClass, classes);
};
var BadgeRoot = styled_default("span", {
  name: "MuiBadge",
  slot: "Root"
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
});
var BadgeBadge = styled_default("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.badge, styles2[ownerState.variant], styles2[`anchorOrigin${capitalize_default(ownerState.anchorOrigin.vertical)}${capitalize_default(ownerState.anchorOrigin.horizontal)}${capitalize_default(ownerState.overlap)}`], ownerState.color !== "default" && styles2[`color${capitalize_default(ownerState.color)}`], ownerState.invisible && styles2.invisible];
  }
})(memoTheme_default(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(12),
  minWidth: RADIUS_STANDARD * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: RADIUS_STANDARD * 2,
  borderRadius: RADIUS_STANDARD,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: theme.transitions.create("transform", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["contrastText"])).map(([color]) => ({
    props: {
      color
    },
    style: {
      backgroundColor: (theme.vars || theme).palette[color].main,
      color: (theme.vars || theme).palette[color].contrastText
    }
  })), {
    props: {
      variant: "dot"
    },
    style: {
      borderRadius: RADIUS_DOT,
      height: RADIUS_DOT * 2,
      minWidth: RADIUS_DOT * 2,
      padding: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "rectangular",
    style: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${badgeClasses_default.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "rectangular",
    style: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${badgeClasses_default.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "rectangular",
    style: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${badgeClasses_default.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "rectangular",
    style: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${badgeClasses_default.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "circular",
    style: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${badgeClasses_default.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "right" && ownerState.overlap === "circular",
    style: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${badgeClasses_default.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "circular",
    style: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${badgeClasses_default.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "bottom" && ownerState.anchorOrigin.horizontal === "left" && ownerState.overlap === "circular",
    style: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${badgeClasses_default.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: {
      invisible: true
    },
    style: {
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen
      })
    }
  }]
})));
function getAnchorOrigin(anchorOrigin) {
  return {
    vertical: anchorOrigin?.vertical ?? "top",
    horizontal: anchorOrigin?.horizontal ?? "right"
  };
}
var Badge = React53.forwardRef(function Badge2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiBadge"
  });
  const {
    anchorOrigin: anchorOriginProp,
    className,
    classes: classesProp,
    component,
    components = {},
    componentsProps = {},
    children,
    overlap: overlapProp = "rectangular",
    color: colorProp = "default",
    invisible: invisibleProp = false,
    max: maxProp = 99,
    badgeContent: badgeContentProp,
    slots,
    slotProps,
    showZero = false,
    variant: variantProp = "standard",
    ...other
  } = props;
  const {
    badgeContent,
    invisible: invisibleFromHook,
    max: max2,
    displayValue: displayValueFromHook
  } = useBadge_default({
    max: maxProp,
    invisible: invisibleProp,
    badgeContent: badgeContentProp,
    showZero
  });
  const prevProps = usePreviousProps_default({
    anchorOrigin: getAnchorOrigin(anchorOriginProp),
    color: colorProp,
    overlap: overlapProp,
    variant: variantProp,
    badgeContent: badgeContentProp
  });
  const invisible = invisibleFromHook || badgeContent == null && variantProp !== "dot";
  const {
    color = colorProp,
    overlap = overlapProp,
    anchorOrigin: anchorOriginPropProp,
    variant = variantProp
  } = invisible ? prevProps : props;
  const anchorOrigin = getAnchorOrigin(anchorOriginPropProp);
  const displayValue = variant !== "dot" ? displayValueFromHook : void 0;
  const ownerState = {
    ...props,
    badgeContent,
    invisible,
    max: max2,
    displayValue,
    showZero,
    anchorOrigin,
    color,
    overlap,
    variant
  };
  const classes = useUtilityClasses30(ownerState);
  const externalForwardedProps = {
    slots: {
      root: slots?.root ?? components.Root,
      badge: slots?.badge ?? components.Badge
    },
    slotProps: {
      root: slotProps?.root ?? componentsProps.root,
      badge: slotProps?.badge ?? componentsProps.badge
    }
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: BadgeRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    className: clsx_default(classes.root, className),
    ref,
    additionalProps: {
      as: component
    }
  });
  const [BadgeSlot, badgeProps] = useSlot("badge", {
    elementType: BadgeBadge,
    externalForwardedProps,
    ownerState,
    className: classes.badge
  });
  return (0, import_jsx_runtime43.jsxs)(RootSlot, {
    ...rootProps,
    children: [children, (0, import_jsx_runtime43.jsx)(BadgeSlot, {
      ...badgeProps,
      children: displayValue
    })]
  });
});
true ? Badge.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The anchor of the badge.
   * @default {
   *   vertical: 'top',
   *   horizontal: 'right',
   * }
   */
  anchorOrigin: import_prop_types35.default.shape({
    horizontal: import_prop_types35.default.oneOf(["left", "right"]),
    vertical: import_prop_types35.default.oneOf(["bottom", "top"])
  }),
  /**
   * The content rendered within the badge.
   */
  badgeContent: import_prop_types35.default.node,
  /**
   * The badge will be added relative to this node.
   */
  children: import_prop_types35.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types35.default.object,
  /**
   * @ignore
   */
  className: import_prop_types35.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: import_prop_types35.default.oneOfType([import_prop_types35.default.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types35.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types35.default.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: import_prop_types35.default.shape({
    Badge: import_prop_types35.default.elementType,
    Root: import_prop_types35.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: import_prop_types35.default.shape({
    badge: import_prop_types35.default.oneOfType([import_prop_types35.default.func, import_prop_types35.default.object]),
    root: import_prop_types35.default.oneOfType([import_prop_types35.default.func, import_prop_types35.default.object])
  }),
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: import_prop_types35.default.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: import_prop_types35.default.number,
  /**
   * Wrapped shape the badge should overlap.
   * @default 'rectangular'
   */
  overlap: import_prop_types35.default.oneOf(["circular", "rectangular"]),
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: import_prop_types35.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types35.default.shape({
    badge: import_prop_types35.default.oneOfType([import_prop_types35.default.func, import_prop_types35.default.object]),
    root: import_prop_types35.default.oneOfType([import_prop_types35.default.func, import_prop_types35.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types35.default.shape({
    badge: import_prop_types35.default.elementType,
    root: import_prop_types35.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types35.default.oneOfType([import_prop_types35.default.arrayOf(import_prop_types35.default.oneOfType([import_prop_types35.default.func, import_prop_types35.default.object, import_prop_types35.default.bool])), import_prop_types35.default.func, import_prop_types35.default.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: import_prop_types35.default.oneOfType([import_prop_types35.default.oneOf(["dot", "standard"]), import_prop_types35.default.string])
} : void 0;
var Badge_default = Badge;

// node_modules/@mui/material/esm/TableSortLabel/tableSortLabelClasses.js
function getTableSortLabelUtilityClass(slot) {
  return generateUtilityClass("MuiTableSortLabel", slot);
}
var tableSortLabelClasses = generateUtilityClasses("MuiTableSortLabel", ["root", "active", "icon", "iconDirectionDesc", "iconDirectionAsc", "directionDesc", "directionAsc"]);
var tableSortLabelClasses_default = tableSortLabelClasses;

// node_modules/@mui/material/esm/TableSortLabel/TableSortLabel.js
var import_prop_types36 = __toESM(require_prop_types(), 1);
var React55 = __toESM(require_react(), 1);

// node_modules/@mui/material/esm/internal/svg-icons/ArrowDownward.js
var React54 = __toESM(require_react(), 1);
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var ArrowDownward_default = createSvgIcon((0, import_jsx_runtime44.jsx)("path", {
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
}), "ArrowDownward");

// node_modules/@mui/material/esm/TableSortLabel/TableSortLabel.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses31 = (ownerState) => {
  const {
    classes,
    direction,
    active
  } = ownerState;
  const slots = {
    root: ["root", active && "active", `direction${capitalize_default(direction)}`],
    icon: ["icon", `iconDirection${capitalize_default(direction)}`]
  };
  return composeClasses(slots, getTableSortLabelUtilityClass, classes);
};
var TableSortLabelRoot = styled_default(ButtonBase_default, {
  name: "MuiTableSortLabel",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.active && styles2.active];
  }
})(memoTheme_default(({
  theme
}) => ({
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "flex-start",
  flexDirection: "inherit",
  alignItems: "center",
  "&:focus": {
    color: (theme.vars || theme).palette.text.secondary
  },
  "&:hover": {
    color: (theme.vars || theme).palette.text.secondary,
    [`& .${tableSortLabelClasses_default.icon}`]: {
      opacity: 0.5
    }
  },
  [`&.${tableSortLabelClasses_default.active}`]: {
    color: (theme.vars || theme).palette.text.primary,
    [`& .${tableSortLabelClasses_default.icon}`]: {
      opacity: 1,
      color: (theme.vars || theme).palette.text.secondary
    }
  }
})));
var TableSortLabelIcon = styled_default("span", {
  name: "MuiTableSortLabel",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, styles2[`iconDirection${capitalize_default(ownerState.direction)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  fontSize: 18,
  marginRight: 4,
  marginLeft: 4,
  opacity: 0,
  transition: theme.transitions.create(["opacity", "transform"], {
    duration: theme.transitions.duration.shorter
  }),
  userSelect: "none",
  variants: [{
    props: {
      direction: "desc"
    },
    style: {
      transform: "rotate(0deg)"
    }
  }, {
    props: {
      direction: "asc"
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
})));
var TableSortLabel = React55.forwardRef(function TableSortLabel2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableSortLabel"
  });
  const {
    active = false,
    children,
    className,
    direction = "asc",
    hideSortIcon = false,
    IconComponent = ArrowDownward_default,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    active,
    direction,
    hideSortIcon,
    IconComponent
  };
  const classes = useUtilityClasses31(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: TableSortLabelRoot,
    externalForwardedProps,
    ownerState,
    className: clsx_default(classes.root, className),
    ref
  });
  const [IconSlot, iconProps] = useSlot("icon", {
    elementType: TableSortLabelIcon,
    externalForwardedProps,
    ownerState,
    className: classes.icon
  });
  return (0, import_jsx_runtime45.jsxs)(RootSlot, {
    disableRipple: true,
    component: "span",
    ...rootProps,
    ...other,
    children: [children, hideSortIcon && !active ? null : (0, import_jsx_runtime45.jsx)(IconSlot, {
      as: IconComponent,
      ...iconProps
    })]
  });
});
true ? TableSortLabel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the label will have the active styling (should be true for the sorted column).
   * @default false
   */
  active: import_prop_types36.default.bool,
  /**
   * Label contents, the arrow will be appended automatically.
   */
  children: import_prop_types36.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types36.default.object,
  /**
   * @ignore
   */
  className: import_prop_types36.default.string,
  /**
   * The current sort direction.
   * @default 'asc'
   */
  direction: import_prop_types36.default.oneOf(["asc", "desc"]),
  /**
   * Hide sort icon when active is false.
   * @default false
   */
  hideSortIcon: import_prop_types36.default.bool,
  /**
   * Sort icon to use.
   * @default ArrowDownwardIcon
   */
  IconComponent: import_prop_types36.default.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types36.default.shape({
    icon: import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object]),
    root: import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types36.default.shape({
    icon: import_prop_types36.default.elementType,
    root: import_prop_types36.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types36.default.oneOfType([import_prop_types36.default.arrayOf(import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object, import_prop_types36.default.bool])), import_prop_types36.default.func, import_prop_types36.default.object])
} : void 0;
var TableSortLabel_default = TableSortLabel;

// node_modules/@mui/material/esm/Alert/alertClasses.js
function getAlertUtilityClass(slot) {
  return generateUtilityClass("MuiAlert", slot);
}
var alertClasses = generateUtilityClasses("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
var alertClasses_default = alertClasses;

// node_modules/@mui/material/esm/Alert/Alert.js
var React60 = __toESM(require_react(), 1);
var import_prop_types37 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/internal/svg-icons/SuccessOutlined.js
var React56 = __toESM(require_react(), 1);
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var SuccessOutlined_default = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined");

// node_modules/@mui/material/esm/internal/svg-icons/ReportProblemOutlined.js
var React57 = __toESM(require_react(), 1);
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var ReportProblemOutlined_default = createSvgIcon((0, import_jsx_runtime47.jsx)("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined");

// node_modules/@mui/material/esm/internal/svg-icons/ErrorOutline.js
var React58 = __toESM(require_react(), 1);
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var ErrorOutline_default = createSvgIcon((0, import_jsx_runtime48.jsx)("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline");

// node_modules/@mui/material/esm/internal/svg-icons/InfoOutlined.js
var React59 = __toESM(require_react(), 1);
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var InfoOutlined_default = createSvgIcon((0, import_jsx_runtime49.jsx)("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined");

// node_modules/@mui/material/esm/Alert/Alert.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses32 = (ownerState) => {
  const {
    variant,
    color,
    severity,
    classes
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize_default(color || severity)}`, `${variant}${capitalize_default(color || severity)}`, `${variant}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return composeClasses(slots, getAlertUtilityClass, classes);
};
var AlertRoot = styled_default(Paper_default, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize_default(ownerState.color || ownerState.severity)}`]];
  }
})(memoTheme_default(({
  theme
}) => {
  const getColor = theme.palette.mode === "light" ? darken : lighten;
  const getBackgroundColor = theme.palette.mode === "light" ? lighten : darken;
  return {
    ...theme.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
      props: {
        colorSeverity: color,
        variant: "standard"
      },
      style: {
        color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
        backgroundColor: theme.vars ? theme.vars.palette.Alert[`${color}StandardBg`] : getBackgroundColor(theme.palette[color].light, 0.9),
        [`& .${alertClasses_default.icon}`]: theme.vars ? {
          color: theme.vars.palette.Alert[`${color}IconColor`]
        } : {
          color: theme.palette[color].main
        }
      }
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
      props: {
        colorSeverity: color,
        variant: "outlined"
      },
      style: {
        color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
        border: `1px solid ${(theme.vars || theme).palette[color].light}`,
        [`& .${alertClasses_default.icon}`]: theme.vars ? {
          color: theme.vars.palette.Alert[`${color}IconColor`]
        } : {
          color: theme.palette[color].main
        }
      }
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => ({
      props: {
        colorSeverity: color,
        variant: "filled"
      },
      style: {
        fontWeight: theme.typography.fontWeightMedium,
        ...theme.vars ? {
          color: theme.vars.palette.Alert[`${color}FilledColor`],
          backgroundColor: theme.vars.palette.Alert[`${color}FilledBg`]
        } : {
          backgroundColor: theme.palette.mode === "dark" ? theme.palette[color].dark : theme.palette[color].main,
          color: theme.palette.getContrastText(theme.palette[color].main)
        }
      }
    }))]
  };
}));
var AlertIcon = styled_default("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
});
var AlertMessage = styled_default("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
});
var AlertAction = styled_default("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
});
var defaultIconMapping = {
  success: (0, import_jsx_runtime50.jsx)(SuccessOutlined_default, {
    fontSize: "inherit"
  }),
  warning: (0, import_jsx_runtime50.jsx)(ReportProblemOutlined_default, {
    fontSize: "inherit"
  }),
  error: (0, import_jsx_runtime50.jsx)(ErrorOutline_default, {
    fontSize: "inherit"
  }),
  info: (0, import_jsx_runtime50.jsx)(InfoOutlined_default, {
    fontSize: "inherit"
  })
};
var Alert = React60.forwardRef(function Alert2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAlert"
  });
  const {
    action,
    children,
    className,
    closeText = "Close",
    color,
    components = {},
    componentsProps = {},
    icon,
    iconMapping = defaultIconMapping,
    onClose,
    role = "alert",
    severity = "success",
    slotProps = {},
    slots = {},
    variant = "standard",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    severity,
    variant,
    colorSeverity: color || severity
  };
  const classes = useUtilityClasses32(ownerState);
  const externalForwardedProps = {
    slots: {
      closeButton: components.CloseButton,
      closeIcon: components.CloseIcon,
      ...slots
    },
    slotProps: {
      ...componentsProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    shouldForwardComponentProp: true,
    className: clsx_default(classes.root, className),
    elementType: AlertRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    additionalProps: {
      role,
      elevation: 0
    }
  });
  const [IconSlot, iconSlotProps] = useSlot("icon", {
    className: classes.icon,
    elementType: AlertIcon,
    externalForwardedProps,
    ownerState
  });
  const [MessageSlot, messageSlotProps] = useSlot("message", {
    className: classes.message,
    elementType: AlertMessage,
    externalForwardedProps,
    ownerState
  });
  const [ActionSlot, actionSlotProps] = useSlot("action", {
    className: classes.action,
    elementType: AlertAction,
    externalForwardedProps,
    ownerState
  });
  const [CloseButtonSlot, closeButtonProps] = useSlot("closeButton", {
    elementType: IconButton_default,
    externalForwardedProps,
    ownerState
  });
  const [CloseIconSlot, closeIconProps] = useSlot("closeIcon", {
    elementType: Close_default,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime50.jsxs)(RootSlot, {
    ...rootSlotProps,
    children: [icon !== false ? (0, import_jsx_runtime50.jsx)(IconSlot, {
      ...iconSlotProps,
      children: icon || iconMapping[severity] || defaultIconMapping[severity]
    }) : null, (0, import_jsx_runtime50.jsx)(MessageSlot, {
      ...messageSlotProps,
      children
    }), action != null ? (0, import_jsx_runtime50.jsx)(ActionSlot, {
      ...actionSlotProps,
      children: action
    }) : null, action == null && onClose ? (0, import_jsx_runtime50.jsx)(ActionSlot, {
      ...actionSlotProps,
      children: (0, import_jsx_runtime50.jsx)(CloseButtonSlot, {
        size: "small",
        "aria-label": closeText,
        title: closeText,
        color: "inherit",
        onClick: onClose,
        ...closeButtonProps,
        children: (0, import_jsx_runtime50.jsx)(CloseIconSlot, {
          fontSize: "small",
          ...closeIconProps
        })
      })
    }) : null]
  });
});
true ? Alert.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: import_prop_types37.default.node,
  /**
   * The content of the component.
   */
  children: import_prop_types37.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types37.default.object,
  /**
   * @ignore
   */
  className: import_prop_types37.default.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: import_prop_types37.default.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: import_prop_types37.default.oneOfType([import_prop_types37.default.oneOf(["error", "info", "success", "warning"]), import_prop_types37.default.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: import_prop_types37.default.shape({
    CloseButton: import_prop_types37.default.elementType,
    CloseIcon: import_prop_types37.default.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: import_prop_types37.default.shape({
    closeButton: import_prop_types37.default.object,
    closeIcon: import_prop_types37.default.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: import_prop_types37.default.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: import_prop_types37.default.shape({
    error: import_prop_types37.default.node,
    info: import_prop_types37.default.node,
    success: import_prop_types37.default.node,
    warning: import_prop_types37.default.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: import_prop_types37.default.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: import_prop_types37.default.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: import_prop_types37.default.oneOfType([import_prop_types37.default.oneOf(["error", "info", "success", "warning"]), import_prop_types37.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types37.default.shape({
    action: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object]),
    closeButton: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object]),
    closeIcon: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object]),
    icon: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object]),
    message: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object]),
    root: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types37.default.shape({
    action: import_prop_types37.default.elementType,
    closeButton: import_prop_types37.default.elementType,
    closeIcon: import_prop_types37.default.elementType,
    icon: import_prop_types37.default.elementType,
    message: import_prop_types37.default.elementType,
    root: import_prop_types37.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types37.default.oneOfType([import_prop_types37.default.arrayOf(import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object, import_prop_types37.default.bool])), import_prop_types37.default.func, import_prop_types37.default.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: import_prop_types37.default.oneOfType([import_prop_types37.default.oneOf(["filled", "outlined", "standard"]), import_prop_types37.default.string])
} : void 0;
var Alert_default = Alert;

// node_modules/@mui/material/esm/AlertTitle/alertTitleClasses.js
function getAlertTitleUtilityClass(slot) {
  return generateUtilityClass("MuiAlertTitle", slot);
}
var alertTitleClasses = generateUtilityClasses("MuiAlertTitle", ["root"]);
var alertTitleClasses_default = alertTitleClasses;

// node_modules/@mui/material/esm/AlertTitle/AlertTitle.js
var React61 = __toESM(require_react(), 1);
var import_prop_types38 = __toESM(require_prop_types(), 1);
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses33 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getAlertTitleUtilityClass, classes);
};
var AlertTitleRoot = styled_default(Typography_default, {
  name: "MuiAlertTitle",
  slot: "Root"
})(memoTheme_default(({
  theme
}) => {
  return {
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: -2
  };
}));
var AlertTitle = React61.forwardRef(function AlertTitle2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAlertTitle"
  });
  const {
    className,
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses33(ownerState);
  return (0, import_jsx_runtime51.jsx)(AlertTitleRoot, {
    gutterBottom: true,
    component: "div",
    ownerState,
    ref,
    className: clsx_default(classes.root, className),
    ...other
  });
});
true ? AlertTitle.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types38.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types38.default.object,
  /**
   * @ignore
   */
  className: import_prop_types38.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types38.default.oneOfType([import_prop_types38.default.arrayOf(import_prop_types38.default.oneOfType([import_prop_types38.default.func, import_prop_types38.default.object, import_prop_types38.default.bool])), import_prop_types38.default.func, import_prop_types38.default.object])
} : void 0;
var AlertTitle_default = AlertTitle;

// node_modules/@mui/material/esm/DialogTitle/DialogTitle.js
var React62 = __toESM(require_react(), 1);
var import_prop_types39 = __toESM(require_prop_types(), 1);
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses34 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDialogTitleUtilityClass, classes);
};
var DialogTitleRoot = styled_default(Typography_default, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
});
var DialogTitle = React62.forwardRef(function DialogTitle2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogTitle"
  });
  const {
    className,
    id: idProp,
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses34(ownerState);
  const {
    titleId = idProp
  } = React62.useContext(DialogContext_default);
  return (0, import_jsx_runtime52.jsx)(DialogTitleRoot, {
    component: "h2",
    className: clsx_default(classes.root, className),
    ownerState,
    ref,
    variant: "h6",
    id: idProp ?? titleId,
    ...other
  });
});
true ? DialogTitle.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types39.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types39.default.object,
  /**
   * @ignore
   */
  className: import_prop_types39.default.string,
  /**
   * @ignore
   */
  id: import_prop_types39.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.oneOfType([import_prop_types39.default.func, import_prop_types39.default.object, import_prop_types39.default.bool])), import_prop_types39.default.func, import_prop_types39.default.object])
} : void 0;
var DialogTitle_default = DialogTitle;

// node_modules/@mui/material/esm/LinearProgress/linearProgressClasses.js
function getLinearProgressUtilityClass(slot) {
  return generateUtilityClass("MuiLinearProgress", slot);
}
var linearProgressClasses = generateUtilityClasses("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "bar1", "bar2", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
var linearProgressClasses_default = linearProgressClasses;

// node_modules/@mui/material/esm/LinearProgress/LinearProgress.js
var React63 = __toESM(require_react(), 1);
var import_prop_types40 = __toESM(require_prop_types(), 1);
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var TRANSITION_DURATION = 4;
var indeterminate1Keyframe = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`;
var indeterminate1Animation = typeof indeterminate1Keyframe !== "string" ? css`
        animation: ${indeterminate1Keyframe} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null;
var indeterminate2Keyframe = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`;
var indeterminate2Animation = typeof indeterminate2Keyframe !== "string" ? css`
        animation: ${indeterminate2Keyframe} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null;
var bufferKeyframe = keyframes`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`;
var bufferAnimation = typeof bufferKeyframe !== "string" ? css`
        animation: ${bufferKeyframe} 3s infinite linear;
      ` : null;
var useUtilityClasses35 = (ownerState) => {
  const {
    classes,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize_default(color)}`, variant],
    dashed: ["dashed", `dashedColor${capitalize_default(color)}`],
    bar1: ["bar", "bar1", `barColor${capitalize_default(color)}`, (variant === "indeterminate" || variant === "query") && "bar1Indeterminate", variant === "determinate" && "bar1Determinate", variant === "buffer" && "bar1Buffer"],
    bar2: ["bar", "bar2", variant !== "buffer" && `barColor${capitalize_default(color)}`, variant === "buffer" && `color${capitalize_default(color)}`, (variant === "indeterminate" || variant === "query") && "bar2Indeterminate", variant === "buffer" && "bar2Buffer"]
  };
  return composeClasses(slots, getLinearProgressUtilityClass, classes);
};
var getColorShade = (theme, color) => {
  if (theme.vars) {
    return theme.vars.palette.LinearProgress[`${color}Bg`];
  }
  return theme.palette.mode === "light" ? lighten(theme.palette[color].main, 0.62) : darken(theme.palette[color].main, 0.5);
};
var LinearProgressRoot = styled_default("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`color${capitalize_default(ownerState.color)}`], styles2[ownerState.variant]];
  }
})(memoTheme_default(({
  theme
}) => ({
  position: "relative",
  overflow: "hidden",
  display: "block",
  height: 4,
  // Fix Safari's bug during composition of different paint.
  zIndex: 0,
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      backgroundColor: getColorShade(theme, color)
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.color === "inherit" && ownerState.variant !== "buffer",
    style: {
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "currentColor",
        opacity: 0.3
      }
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      backgroundColor: "transparent"
    }
  }, {
    props: {
      variant: "query"
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
})));
var LinearProgressDashed = styled_default("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.dashed, styles2[`dashedColor${capitalize_default(ownerState.color)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  position: "absolute",
  marginTop: 0,
  height: "100%",
  width: "100%",
  backgroundSize: "10px 10px",
  backgroundPosition: "0 -23px",
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      opacity: 0.3,
      backgroundImage: `radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)`
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => {
    const backgroundColor = getColorShade(theme, color);
    return {
      props: {
        color
      },
      style: {
        backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 16%, transparent 42%)`
      }
    };
  })]
})), bufferAnimation || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${bufferKeyframe} 3s infinite linear`
});
var LinearProgressBar1 = styled_default("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.bar, styles2.bar1, styles2[`barColor${capitalize_default(ownerState.color)}`], (ownerState.variant === "indeterminate" || ownerState.variant === "query") && styles2.bar1Indeterminate, ownerState.variant === "determinate" && styles2.bar1Determinate, ownerState.variant === "buffer" && styles2.bar1Buffer];
  }
})(memoTheme_default(({
  theme
}) => ({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      backgroundColor: "currentColor"
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      backgroundColor: (theme.vars || theme).palette[color].main
    }
  })), {
    props: {
      variant: "determinate"
    },
    style: {
      transition: `transform .${TRANSITION_DURATION}s linear`
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      zIndex: 1,
      transition: `transform .${TRANSITION_DURATION}s linear`
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" || ownerState.variant === "query",
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" || ownerState.variant === "query",
    style: indeterminate1Animation || {
      animation: `${indeterminate1Keyframe} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
    }
  }]
})));
var LinearProgressBar2 = styled_default("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.bar, styles2.bar2, styles2[`barColor${capitalize_default(ownerState.color)}`], (ownerState.variant === "indeterminate" || ownerState.variant === "query") && styles2.bar2Indeterminate, ownerState.variant === "buffer" && styles2.bar2Buffer];
  }
})(memoTheme_default(({
  theme
}) => ({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      "--LinearProgressBar2-barColor": (theme.vars || theme).palette[color].main
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.variant !== "buffer" && ownerState.color !== "inherit",
    style: {
      backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant !== "buffer" && ownerState.color === "inherit",
    style: {
      backgroundColor: "currentColor"
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      opacity: 0.3
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      variant: "buffer"
    },
    style: {
      backgroundColor: getColorShade(theme, color),
      transition: `transform .${TRANSITION_DURATION}s linear`
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" || ownerState.variant === "query",
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" || ownerState.variant === "query",
    style: indeterminate2Animation || {
      animation: `${indeterminate2Keyframe} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
    }
  }]
})));
var LinearProgress = React63.forwardRef(function LinearProgress2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiLinearProgress"
  });
  const {
    className,
    color = "primary",
    value,
    valueBuffer,
    variant = "indeterminate",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    variant
  };
  const classes = useUtilityClasses35(ownerState);
  const isRtl = useRtl();
  const rootProps = {};
  const inlineStyles = {
    bar1: {},
    bar2: {}
  };
  if (variant === "determinate" || variant === "buffer") {
    if (value !== void 0) {
      rootProps["aria-valuenow"] = Math.round(value);
      rootProps["aria-valuemin"] = 0;
      rootProps["aria-valuemax"] = 100;
      let transform = value - 100;
      if (isRtl) {
        transform = -transform;
      }
      inlineStyles.bar1.transform = `translateX(${transform}%)`;
    } else if (true) {
      console.error("MUI: You need to provide a value prop when using the determinate or buffer variant of LinearProgress .");
    }
  }
  if (variant === "buffer") {
    if (valueBuffer !== void 0) {
      let transform = (valueBuffer || 0) - 100;
      if (isRtl) {
        transform = -transform;
      }
      inlineStyles.bar2.transform = `translateX(${transform}%)`;
    } else if (true) {
      console.error("MUI: You need to provide a valueBuffer prop when using the buffer variant of LinearProgress.");
    }
  }
  return (0, import_jsx_runtime53.jsxs)(LinearProgressRoot, {
    className: clsx_default(classes.root, className),
    ownerState,
    role: "progressbar",
    ...rootProps,
    ref,
    ...other,
    children: [variant === "buffer" ? (0, import_jsx_runtime53.jsx)(LinearProgressDashed, {
      className: classes.dashed,
      ownerState
    }) : null, (0, import_jsx_runtime53.jsx)(LinearProgressBar1, {
      className: classes.bar1,
      ownerState,
      style: inlineStyles.bar1
    }), variant === "determinate" ? null : (0, import_jsx_runtime53.jsx)(LinearProgressBar2, {
      className: classes.bar2,
      ownerState,
      style: inlineStyles.bar2
    })]
  });
});
true ? LinearProgress.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types40.default.object,
  /**
   * @ignore
   */
  className: import_prop_types40.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types40.default.oneOfType([import_prop_types40.default.oneOf(["inherit", "primary", "secondary"]), import_prop_types40.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types40.default.oneOfType([import_prop_types40.default.arrayOf(import_prop_types40.default.oneOfType([import_prop_types40.default.func, import_prop_types40.default.object, import_prop_types40.default.bool])), import_prop_types40.default.func, import_prop_types40.default.object]),
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: import_prop_types40.default.number,
  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: import_prop_types40.default.number,
  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */
  variant: import_prop_types40.default.oneOf(["buffer", "determinate", "indeterminate", "query"])
} : void 0;
var LinearProgress_default = LinearProgress;

// node_modules/@mui/material/esm/Pagination/paginationClasses.js
function getPaginationUtilityClass(slot) {
  return generateUtilityClass("MuiPagination", slot);
}
var paginationClasses = generateUtilityClasses("MuiPagination", ["root", "ul", "outlined", "text"]);
var paginationClasses_default = paginationClasses;

// node_modules/@mui/material/esm/usePagination/usePagination.js
function usePagination(props = {}) {
  const {
    boundaryCount = 1,
    componentName = "usePagination",
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props;
  const [page, setPageState] = useControlled({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: "page"
  });
  const handleClick = (event, value) => {
    if (!pageProp) {
      setPageState(value);
    }
    if (handleChange) {
      handleChange(event, value);
    }
  };
  const range = (start2, end2) => {
    const length = end2 - start2 + 1;
    return Array.from({
      length
    }, (_, i) => start2 + i);
  };
  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  );
  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    count - boundaryCount - 1
  );
  const itemList = [
    ...showFirstButton ? ["first"] : [],
    ...hidePrevButton ? [] : ["previous"],
    ...startPages,
    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...siblingsStart > boundaryCount + 2 ? ["start-ellipsis"] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : [],
    // Sibling pages
    ...range(siblingsStart, siblingsEnd),
    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...siblingsEnd < count - boundaryCount - 1 ? ["end-ellipsis"] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : [],
    ...endPages,
    ...hideNextButton ? [] : ["next"],
    ...showLastButton ? ["last"] : []
  ];
  const buttonPage = (type) => {
    switch (type) {
      case "first":
        return 1;
      case "previous":
        return page - 1;
      case "next":
        return page + 1;
      case "last":
        return count;
      default:
        return null;
    }
  };
  const items = itemList.map((item) => {
    return typeof item === "number" ? {
      onClick: (event) => {
        handleClick(event, item);
      },
      type: "page",
      page: item,
      selected: item === page,
      disabled,
      "aria-current": item === page ? "page" : void 0
    } : {
      onClick: (event) => {
        handleClick(event, buttonPage(item));
      },
      type: item,
      page: buttonPage(item),
      selected: false,
      disabled: disabled || !item.includes("ellipsis") && (item === "next" || item === "last" ? page >= count : page <= 1)
    };
  });
  return {
    items,
    ...other
  };
}

// node_modules/@mui/material/esm/PaginationItem/paginationItemClasses.js
function getPaginationItemUtilityClass(slot) {
  return generateUtilityClass("MuiPaginationItem", slot);
}
var paginationItemClasses = generateUtilityClasses("MuiPaginationItem", ["root", "page", "sizeSmall", "sizeLarge", "text", "textPrimary", "textSecondary", "outlined", "outlinedPrimary", "outlinedSecondary", "rounded", "ellipsis", "firstLast", "previousNext", "focusVisible", "disabled", "selected", "icon", "colorPrimary", "colorSecondary"]);
var paginationItemClasses_default = paginationItemClasses;

// node_modules/@mui/material/esm/PaginationItem/PaginationItem.js
var React68 = __toESM(require_react(), 1);
var import_prop_types41 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/internal/svg-icons/FirstPage.js
var React64 = __toESM(require_react(), 1);
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var FirstPage_default = createSvgIcon((0, import_jsx_runtime54.jsx)("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), "FirstPage");

// node_modules/@mui/material/esm/internal/svg-icons/LastPage.js
var React65 = __toESM(require_react(), 1);
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var LastPage_default = createSvgIcon((0, import_jsx_runtime55.jsx)("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), "LastPage");

// node_modules/@mui/material/esm/internal/svg-icons/NavigateBefore.js
var React66 = __toESM(require_react(), 1);
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var NavigateBefore_default = createSvgIcon((0, import_jsx_runtime56.jsx)("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), "NavigateBefore");

// node_modules/@mui/material/esm/internal/svg-icons/NavigateNext.js
var React67 = __toESM(require_react(), 1);
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var NavigateNext_default = createSvgIcon((0, import_jsx_runtime57.jsx)("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "NavigateNext");

// node_modules/@mui/material/esm/PaginationItem/PaginationItem.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var overridesResolver2 = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, styles2[ownerState.variant], styles2[`size${capitalize_default(ownerState.size)}`], ownerState.variant === "text" && styles2[`text${capitalize_default(ownerState.color)}`], ownerState.variant === "outlined" && styles2[`outlined${capitalize_default(ownerState.color)}`], ownerState.shape === "rounded" && styles2.rounded, ownerState.type === "page" && styles2.page, (ownerState.type === "start-ellipsis" || ownerState.type === "end-ellipsis") && styles2.ellipsis, (ownerState.type === "previous" || ownerState.type === "next") && styles2.previousNext, (ownerState.type === "first" || ownerState.type === "last") && styles2.firstLast];
};
var useUtilityClasses36 = (ownerState) => {
  const {
    classes,
    color,
    disabled,
    selected,
    size,
    shape,
    type,
    variant
  } = ownerState;
  const slots = {
    root: ["root", `size${capitalize_default(size)}`, variant, shape, color !== "standard" && `color${capitalize_default(color)}`, color !== "standard" && `${variant}${capitalize_default(color)}`, disabled && "disabled", selected && "selected", {
      page: "page",
      first: "firstLast",
      last: "firstLast",
      "start-ellipsis": "ellipsis",
      "end-ellipsis": "ellipsis",
      previous: "previousNext",
      next: "previousNext"
    }[type]],
    icon: ["icon"]
  };
  return composeClasses(slots, getPaginationItemUtilityClass, classes);
};
var PaginationItemEllipsis = styled_default("div", {
  name: "MuiPaginationItem",
  slot: "Root",
  overridesResolver: overridesResolver2
})(memoTheme_default(({
  theme
}) => ({
  ...theme.typography.body2,
  borderRadius: 32 / 2,
  textAlign: "center",
  boxSizing: "border-box",
  minWidth: 32,
  padding: "0 6px",
  margin: "0 3px",
  color: (theme.vars || theme).palette.text.primary,
  height: "auto",
  [`&.${paginationItemClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      minWidth: 26,
      borderRadius: 26 / 2,
      margin: "0 1px",
      padding: "0 4px"
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      minWidth: 40,
      borderRadius: 40 / 2,
      padding: "0 10px",
      fontSize: theme.typography.pxToRem(15)
    }
  }]
})));
var PaginationItemPage = styled_default(ButtonBase_default, {
  name: "MuiPaginationItem",
  slot: "Root",
  overridesResolver: overridesResolver2
})(memoTheme_default(({
  theme
}) => ({
  ...theme.typography.body2,
  borderRadius: 32 / 2,
  textAlign: "center",
  boxSizing: "border-box",
  minWidth: 32,
  height: 32,
  padding: "0 6px",
  margin: "0 3px",
  color: (theme.vars || theme).palette.text.primary,
  [`&.${paginationItemClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${paginationItemClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  transition: theme.transitions.create(["color", "background-color"], {
    duration: theme.transitions.duration.short
  }),
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${paginationItemClasses_default.selected}`]: {
    backgroundColor: (theme.vars || theme).palette.action.selected,
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (theme.vars || theme).palette.action.selected
      }
    },
    [`&.${paginationItemClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    },
    [`&.${paginationItemClasses_default.disabled}`]: {
      opacity: 1,
      color: (theme.vars || theme).palette.action.disabled,
      backgroundColor: (theme.vars || theme).palette.action.selected
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      minWidth: 26,
      height: 26,
      borderRadius: 26 / 2,
      margin: "0 1px",
      padding: "0 4px"
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      minWidth: 40,
      height: 40,
      borderRadius: 40 / 2,
      padding: "0 10px",
      fontSize: theme.typography.pxToRem(15)
    }
  }, {
    props: {
      shape: "rounded"
    },
    style: {
      borderRadius: (theme.vars || theme).shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
      [`&.${paginationItemClasses_default.selected}`]: {
        [`&.${paginationItemClasses_default.disabled}`]: {
          borderColor: (theme.vars || theme).palette.action.disabledBackground,
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    }
  }, {
    props: {
      variant: "text"
    },
    style: {
      [`&.${paginationItemClasses_default.selected}`]: {
        [`&.${paginationItemClasses_default.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark", "contrastText"])).map(([color]) => ({
    props: {
      variant: "text",
      color
    },
    style: {
      [`&.${paginationItemClasses_default.selected}`]: {
        color: (theme.vars || theme).palette[color].contrastText,
        backgroundColor: (theme.vars || theme).palette[color].main,
        "&:hover": {
          backgroundColor: (theme.vars || theme).palette[color].dark,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: (theme.vars || theme).palette[color].main
          }
        },
        [`&.${paginationItemClasses_default.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette[color].dark
        },
        [`&.${paginationItemClasses_default.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled
        }
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
    props: {
      variant: "outlined",
      color
    },
    style: {
      [`&.${paginationItemClasses_default.selected}`]: {
        color: (theme.vars || theme).palette[color].main,
        border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)` : alpha(theme.palette[color].main, 0.5)}`,
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.activatedOpacity})` : alpha(theme.palette[color].main, theme.palette.action.activatedOpacity),
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette[color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${paginationItemClasses_default.focusVisible}`]: {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette[color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity)
        }
      }
    }
  }))]
})));
var PaginationItemPageIcon = styled_default("div", {
  name: "MuiPaginationItem",
  slot: "Icon"
})(memoTheme_default(({
  theme
}) => ({
  fontSize: theme.typography.pxToRem(20),
  margin: "0 -8px",
  variants: [{
    props: {
      size: "small"
    },
    style: {
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      fontSize: theme.typography.pxToRem(22)
    }
  }]
})));
var PaginationItem = React68.forwardRef(function PaginationItem2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiPaginationItem"
  });
  const {
    className,
    color = "standard",
    component,
    components = {},
    disabled = false,
    page,
    selected = false,
    shape = "circular",
    size = "medium",
    slots = {},
    slotProps = {},
    type = "page",
    variant = "text",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disabled,
    selected,
    shape,
    size,
    type,
    variant
  };
  const isRtl = useRtl();
  const classes = useUtilityClasses36(ownerState);
  const externalForwardedProps = {
    slots: {
      previous: slots.previous ?? components.previous,
      next: slots.next ?? components.next,
      first: slots.first ?? components.first,
      last: slots.last ?? components.last
    },
    slotProps
  };
  const [PreviousSlot, previousSlotProps] = useSlot("previous", {
    elementType: NavigateBefore_default,
    externalForwardedProps,
    ownerState
  });
  const [NextSlot, nextSlotProps] = useSlot("next", {
    elementType: NavigateNext_default,
    externalForwardedProps,
    ownerState
  });
  const [FirstSlot, firstSlotProps] = useSlot("first", {
    elementType: FirstPage_default,
    externalForwardedProps,
    ownerState
  });
  const [LastSlot, lastSlotProps] = useSlot("last", {
    elementType: LastPage_default,
    externalForwardedProps,
    ownerState
  });
  const rtlAwareType = isRtl ? {
    previous: "next",
    next: "previous",
    first: "last",
    last: "first"
  }[type] : type;
  const IconSlot = {
    previous: PreviousSlot,
    next: NextSlot,
    first: FirstSlot,
    last: LastSlot
  }[rtlAwareType];
  const iconSlotProps = {
    previous: previousSlotProps,
    next: nextSlotProps,
    first: firstSlotProps,
    last: lastSlotProps
  }[rtlAwareType];
  return type === "start-ellipsis" || type === "end-ellipsis" ? (0, import_jsx_runtime58.jsx)(PaginationItemEllipsis, {
    ref,
    ownerState,
    className: clsx_default(classes.root, className),
    children: "…"
  }) : (0, import_jsx_runtime58.jsxs)(PaginationItemPage, {
    ref,
    ownerState,
    component,
    disabled,
    className: clsx_default(classes.root, className),
    ...other,
    children: [type === "page" && page, IconSlot ? (0, import_jsx_runtime58.jsx)(PaginationItemPageIcon, {
      ...iconSlotProps,
      className: classes.icon,
      as: IconSlot
    }) : null]
  });
});
true ? PaginationItem.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types41.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types41.default.object,
  /**
   * @ignore
   */
  className: import_prop_types41.default.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: import_prop_types41.default.oneOfType([import_prop_types41.default.oneOf(["primary", "secondary", "standard"]), import_prop_types41.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types41.default.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  components: import_prop_types41.default.shape({
    first: import_prop_types41.default.elementType,
    last: import_prop_types41.default.elementType,
    next: import_prop_types41.default.elementType,
    previous: import_prop_types41.default.elementType
  }),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types41.default.bool,
  /**
   * The current page number.
   */
  page: import_prop_types41.default.node,
  /**
   * If `true` the pagination item is selected.
   * @default false
   */
  selected: import_prop_types41.default.bool,
  /**
   * The shape of the pagination item.
   * @default 'circular'
   */
  shape: import_prop_types41.default.oneOf(["circular", "rounded"]),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types41.default.oneOfType([import_prop_types41.default.oneOf(["small", "medium", "large"]), import_prop_types41.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types41.default.shape({
    first: import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object]),
    last: import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object]),
    next: import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object]),
    previous: import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types41.default.shape({
    first: import_prop_types41.default.elementType,
    last: import_prop_types41.default.elementType,
    next: import_prop_types41.default.elementType,
    previous: import_prop_types41.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types41.default.oneOfType([import_prop_types41.default.arrayOf(import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object, import_prop_types41.default.bool])), import_prop_types41.default.func, import_prop_types41.default.object]),
  /**
   * The type of pagination item.
   * @default 'page'
   */
  type: import_prop_types41.default.oneOf(["end-ellipsis", "first", "last", "next", "page", "previous", "start-ellipsis"]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: import_prop_types41.default.oneOfType([import_prop_types41.default.oneOf(["outlined", "text"]), import_prop_types41.default.string])
} : void 0;
var PaginationItem_default = PaginationItem;

// node_modules/@mui/material/esm/Pagination/Pagination.js
var React69 = __toESM(require_react(), 1);
var import_prop_types42 = __toESM(require_prop_types(), 1);
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses37 = (ownerState) => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant],
    ul: ["ul"]
  };
  return composeClasses(slots, getPaginationUtilityClass, classes);
};
var PaginationRoot = styled_default("nav", {
  name: "MuiPagination",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant]];
  }
})({});
var PaginationUl = styled_default("ul", {
  name: "MuiPagination",
  slot: "Ul"
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
});
function defaultGetAriaLabel(type, page, selected) {
  if (type === "page") {
    return `${selected ? "" : "Go to "}page ${page}`;
  }
  return `Go to ${type} page`;
}
var Pagination = React69.forwardRef(function Pagination2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiPagination"
  });
  const {
    boundaryCount = 1,
    className,
    color = "standard",
    count = 1,
    defaultPage = 1,
    disabled = false,
    getItemAriaLabel = defaultGetAriaLabel,
    hideNextButton = false,
    hidePrevButton = false,
    onChange,
    page,
    renderItem = (item) => (0, import_jsx_runtime59.jsx)(PaginationItem_default, {
      ...item
    }),
    shape = "circular",
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    size = "medium",
    variant = "text",
    ...other
  } = props;
  const {
    items
  } = usePagination({
    ...props,
    componentName: "Pagination"
  });
  const ownerState = {
    ...props,
    boundaryCount,
    color,
    count,
    defaultPage,
    disabled,
    getItemAriaLabel,
    hideNextButton,
    hidePrevButton,
    renderItem,
    shape,
    showFirstButton,
    showLastButton,
    siblingCount,
    size,
    variant
  };
  const classes = useUtilityClasses37(ownerState);
  return (0, import_jsx_runtime59.jsx)(PaginationRoot, {
    "aria-label": "pagination navigation",
    className: clsx_default(classes.root, className),
    ownerState,
    ref,
    ...other,
    children: (0, import_jsx_runtime59.jsx)(PaginationUl, {
      className: classes.ul,
      ownerState,
      children: items.map((item, index) => (0, import_jsx_runtime59.jsx)("li", {
        children: renderItem({
          ...item,
          color,
          "aria-label": getItemAriaLabel(item.type, item.page, item.selected),
          shape,
          size,
          variant
        })
      }, index))
    })
  });
});
true ? Pagination.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount: integerPropType_default,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types42.default.object,
  /**
   * @ignore
   */
  className: import_prop_types42.default.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: import_prop_types42.default.oneOfType([import_prop_types42.default.oneOf(["primary", "secondary", "standard"]), import_prop_types42.default.string]),
  /**
   * The total number of pages.
   * @default 1
   */
  count: integerPropType_default,
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage: integerPropType_default,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types42.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis'). Defaults to 'page'.
   * @param {number | null} page The page number to format.
   * @param {boolean} selected If true, the current page is selected.
   * @returns {string}
   */
  getItemAriaLabel: import_prop_types42.default.func,
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton: import_prop_types42.default.bool,
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton: import_prop_types42.default.bool,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange: import_prop_types42.default.func,
  /**
   * The current page. Unlike `TablePagination`, which starts numbering from `0`, this pagination starts from `1`.
   */
  page: integerPropType_default,
  /**
   * Render the item.
   * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
   * @returns {ReactNode}
   * @default (item) => <PaginationItem {...item} />
   */
  renderItem: import_prop_types42.default.func,
  /**
   * The shape of the pagination items.
   * @default 'circular'
   */
  shape: import_prop_types42.default.oneOf(["circular", "rounded"]),
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: import_prop_types42.default.bool,
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: import_prop_types42.default.bool,
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount: integerPropType_default,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: import_prop_types42.default.oneOfType([import_prop_types42.default.oneOf(["small", "medium", "large"]), import_prop_types42.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types42.default.oneOfType([import_prop_types42.default.arrayOf(import_prop_types42.default.oneOfType([import_prop_types42.default.func, import_prop_types42.default.object, import_prop_types42.default.bool])), import_prop_types42.default.func, import_prop_types42.default.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: import_prop_types42.default.oneOfType([import_prop_types42.default.oneOf(["outlined", "text"]), import_prop_types42.default.string])
} : void 0;
var Pagination_default = Pagination;

// node_modules/@mui/material/esm/Switch/switchClasses.js
function getSwitchUtilityClass(slot) {
  return generateUtilityClass("MuiSwitch", slot);
}
var switchClasses = generateUtilityClasses("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]);
var switchClasses_default = switchClasses;

// node_modules/@mui/material/esm/Switch/Switch.js
var React70 = __toESM(require_react(), 1);
var import_prop_types43 = __toESM(require_prop_types(), 1);
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses38 = (ownerState) => {
  const {
    classes,
    edge,
    size,
    color,
    checked,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", edge && `edge${capitalize_default(edge)}`, `size${capitalize_default(size)}`],
    switchBase: ["switchBase", `color${capitalize_default(color)}`, checked && "checked", disabled && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getSwitchUtilityClass, classes);
  return {
    ...classes,
    // forward the disabled and checked classes to the SwitchBase
    ...composedClasses
  };
};
var SwitchRoot = styled_default("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.edge && styles2[`edge${capitalize_default(ownerState.edge)}`], styles2[`size${capitalize_default(ownerState.size)}`]];
  }
})({
  display: "inline-flex",
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: "middle",
  // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [{
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -8
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -8
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${switchClasses_default.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${switchClasses_default.switchBase}`]: {
        padding: 4,
        [`&.${switchClasses_default.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
});
var SwitchSwitchBase = styled_default(SwitchBase_default, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.switchBase, {
      [`& .${switchClasses_default.input}`]: styles2.input
    }, ownerState.color !== "default" && styles2[`color${capitalize_default(ownerState.color)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: theme.vars ? theme.vars.palette.Switch.defaultColor : `${theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.grey[300]}`,
  transition: theme.transitions.create(["left", "transform"], {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${switchClasses_default.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${switchClasses_default.disabled}`]: {
    color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : `${theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600]}`
  },
  [`&.${switchClasses_default.checked} + .${switchClasses_default.track}`]: {
    opacity: 0.5
  },
  [`&.${switchClasses_default.disabled} + .${switchClasses_default.track}`]: {
    opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : `${theme.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${switchClasses_default.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), memoTheme_default(({
  theme
}) => ({
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${switchClasses_default.checked}`]: {
        color: (theme.vars || theme).palette[color].main,
        "&:hover": {
          backgroundColor: theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${switchClasses_default.disabled}`]: {
          color: theme.vars ? theme.vars.palette.Switch[`${color}DisabledColor`] : `${theme.palette.mode === "light" ? lighten(theme.palette[color].main, 0.62) : darken(theme.palette[color].main, 0.55)}`
        }
      },
      [`&.${switchClasses_default.checked} + .${switchClasses_default.track}`]: {
        backgroundColor: (theme.vars || theme).palette[color].main
      }
    }
  }))]
})));
var SwitchTrack = styled_default("span", {
  name: "MuiSwitch",
  slot: "Track"
})(memoTheme_default(({
  theme
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: theme.transitions.create(["opacity", "background-color"], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : `${theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white}`,
  opacity: theme.vars ? theme.vars.opacity.switchTrack : `${theme.palette.mode === "light" ? 0.38 : 0.3}`
})));
var SwitchThumb = styled_default("span", {
  name: "MuiSwitch",
  slot: "Thumb"
})(memoTheme_default(({
  theme
}) => ({
  boxShadow: (theme.vars || theme).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
})));
var Switch = React70.forwardRef(function Switch2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSwitch"
  });
  const {
    className,
    color = "primary",
    edge = false,
    size = "medium",
    sx,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    edge,
    size
  };
  const classes = useUtilityClasses38(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    className: clsx_default(classes.root, className),
    elementType: SwitchRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      sx
    }
  });
  const [ThumbSlot, thumbSlotProps] = useSlot("thumb", {
    className: classes.thumb,
    elementType: SwitchThumb,
    externalForwardedProps,
    ownerState
  });
  const icon = (0, import_jsx_runtime60.jsx)(ThumbSlot, {
    ...thumbSlotProps
  });
  const [TrackSlot, trackSlotProps] = useSlot("track", {
    className: classes.track,
    elementType: SwitchTrack,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime60.jsxs)(RootSlot, {
    ...rootSlotProps,
    children: [(0, import_jsx_runtime60.jsx)(SwitchSwitchBase, {
      type: "checkbox",
      icon,
      checkedIcon: icon,
      ref,
      ownerState,
      ...other,
      classes: {
        ...classes,
        root: classes.switchBase
      },
      slots: {
        ...slots.switchBase && {
          root: slots.switchBase
        },
        ...slots.input && {
          input: slots.input
        }
      },
      slotProps: {
        ...slotProps.switchBase && {
          root: typeof slotProps.switchBase === "function" ? slotProps.switchBase(ownerState) : slotProps.switchBase
        },
        ...slotProps.input && {
          input: typeof slotProps.input === "function" ? slotProps.input(ownerState) : slotProps.input
        }
      }
    }), (0, import_jsx_runtime60.jsx)(TrackSlot, {
      ...trackSlotProps
    })]
  });
});
true ? Switch.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types43.default.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: import_prop_types43.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types43.default.object,
  /**
   * @ignore
   */
  className: import_prop_types43.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types43.default.oneOfType([import_prop_types43.default.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types43.default.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: import_prop_types43.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types43.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: import_prop_types43.default.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: import_prop_types43.default.oneOf(["end", "start", false]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: import_prop_types43.default.node,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types43.default.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: import_prop_types43.default.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: refType_default,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types43.default.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: import_prop_types43.default.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size: import_prop_types43.default.oneOfType([import_prop_types43.default.oneOf(["medium", "small"]), import_prop_types43.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types43.default.shape({
    input: import_prop_types43.default.oneOfType([import_prop_types43.default.func, import_prop_types43.default.object]),
    root: import_prop_types43.default.oneOfType([import_prop_types43.default.func, import_prop_types43.default.object]),
    switchBase: import_prop_types43.default.oneOfType([import_prop_types43.default.func, import_prop_types43.default.object]),
    thumb: import_prop_types43.default.oneOfType([import_prop_types43.default.func, import_prop_types43.default.object]),
    track: import_prop_types43.default.oneOfType([import_prop_types43.default.func, import_prop_types43.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types43.default.shape({
    input: import_prop_types43.default.elementType,
    root: import_prop_types43.default.elementType,
    switchBase: import_prop_types43.default.elementType,
    thumb: import_prop_types43.default.elementType,
    track: import_prop_types43.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types43.default.oneOfType([import_prop_types43.default.arrayOf(import_prop_types43.default.oneOfType([import_prop_types43.default.func, import_prop_types43.default.object, import_prop_types43.default.bool])), import_prop_types43.default.func, import_prop_types43.default.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: import_prop_types43.default.any
} : void 0;
var Switch_default = Switch;

export {
  getCircularProgressUtilityClass,
  circularProgressClasses_default,
  CircularProgress_default,
  getIconButtonUtilityClass,
  iconButtonClasses_default,
  IconButton_default,
  getPopperUtilityClass,
  Popper_default,
  getTooltipUtilityClass,
  tooltipClasses_default,
  Tooltip_default,
  getButtonUtilityClass,
  buttonClasses_default,
  ButtonGroupContext_default,
  ButtonGroupButtonContext_default,
  Button_default,
  Stack_default,
  stackClasses_default,
  getCheckboxUtilityClass,
  checkboxClasses_default,
  Checkbox_default,
  RadioGroupContext_default,
  useRadioGroup,
  getRadioUtilityClass,
  radioClasses_default,
  Radio_default,
  getTableContainerUtilityClass,
  tableContainerClasses_default,
  TableContainer_default,
  getTableUtilityClass,
  tableClasses_default,
  Table_default,
  getTableBodyUtilityClass,
  tableBodyClasses_default,
  TableBody_default,
  getTableRowUtilityClass,
  tableRowClasses_default,
  TableRow_default,
  getSkeletonUtilityClass,
  skeletonClasses_default,
  Skeleton_default,
  getTableCellUtilityClass,
  tableCellClasses_default,
  TableCell_default,
  getCollapseUtilityClass,
  collapseClasses_default,
  Collapse_default,
  getTableFooterUtilityClass,
  tableFooterClasses_default,
  TableFooter_default,
  getTableHeadUtilityClass,
  tableHeadClasses_default,
  TableHead_default,
  getFormControlLabelUtilityClasses,
  formControlLabelClasses_default,
  FormControlLabel_default,
  createFilterOptions,
  useAutocomplete_default,
  getListSubheaderUtilityClass,
  listSubheaderClasses_default,
  ListSubheader_default,
  getChipUtilityClass,
  chipClasses_default,
  Chip_default,
  getAutocompleteUtilityClass,
  autocompleteClasses_default,
  Autocomplete_default,
  getInputAdornmentUtilityClass,
  inputAdornmentClasses_default,
  InputAdornment_default,
  useMediaQuery_default,
  getDialogActionsUtilityClass,
  dialogActionsClasses_default,
  DialogActions_default,
  visuallyHidden_default,
  getDialogContentUtilityClass,
  dialogContentClasses_default,
  getDialogTitleUtilityClass,
  dialogTitleClasses_default,
  DialogContent_default,
  getDialogUtilityClass,
  dialogClasses_default,
  Dialog_default,
  getTabUtilityClass,
  tabClasses_default,
  Tab_default,
  KeyboardArrowLeft_default,
  KeyboardArrowRight_default,
  getTabScrollButtonUtilityClass,
  tabScrollButtonClasses_default,
  TabScrollButton_default,
  getTabsUtilityClass,
  tabsClasses_default,
  Tabs_default,
  getSliderUtilityClass,
  sliderClasses_default,
  SliderRoot,
  SliderRail,
  SliderTrack,
  SliderThumb,
  SliderValueLabel2 as SliderValueLabel,
  SliderMark,
  SliderMarkLabel,
  Slider_default,
  getBadgeUtilityClass,
  badgeClasses_default,
  Badge_default,
  getTableSortLabelUtilityClass,
  tableSortLabelClasses_default,
  TableSortLabel_default,
  getAlertUtilityClass,
  alertClasses_default,
  Alert_default,
  getAlertTitleUtilityClass,
  alertTitleClasses_default,
  AlertTitle_default,
  DialogTitle_default,
  getLinearProgressUtilityClass,
  linearProgressClasses_default,
  LinearProgress_default,
  getPaginationUtilityClass,
  paginationClasses_default,
  usePagination,
  getPaginationItemUtilityClass,
  paginationItemClasses_default,
  FirstPage_default,
  LastPage_default,
  PaginationItem_default,
  Pagination_default,
  getSwitchUtilityClass,
  switchClasses_default,
  Switch_default
};
//# sourceMappingURL=chunk-4KILZFYF.js.map
