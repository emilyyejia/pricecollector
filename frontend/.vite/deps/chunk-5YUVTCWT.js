import {
  HTMLElementType,
  Modal_default,
  elementAcceptingRef_default,
  getReactElementRef,
  getTransitionProps,
  reflow
} from "./chunk-WO4XXP7V.js";
import {
  Paper_default,
  integerPropType_default
} from "./chunk-5UP2DU7N.js";
import {
  useSlot
} from "./chunk-S4GB3355.js";
import {
  Transition_default
} from "./chunk-NWOGJ7D3.js";
import {
  chainPropTypes
} from "./chunk-JX37XSKT.js";
import {
  debounce_default,
  mergeSlotProps,
  ownerWindow_default
} from "./chunk-E447BZEB.js";
import {
  capitalize_default
} from "./chunk-YHVSXREB.js";
import {
  useForkRef_default
} from "./chunk-6UUAXMRE.js";
import {
  memoTheme_default
} from "./chunk-Q32NBGF6.js";
import {
  useDefaultProps
} from "./chunk-UFW5Y2JF.js";
import {
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  require_jsx_runtime,
  require_prop_types,
  rootShouldForwardProp_default,
  styled_default,
  useRtl,
  useTheme
} from "./chunk-O5DRZ2GD.js";
import {
  require_react
} from "./chunk-TVFQMRVC.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@mui/material/esm/Drawer/Drawer.js
var React2 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/Slide/Slide.js
var React = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function getTranslateValue(direction, node, resolvedContainer) {
  const rect = node.getBoundingClientRect();
  const containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
  const containerWindow = ownerWindow_default(node);
  let transform;
  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    const computedStyle = containerWindow.getComputedStyle(node);
    transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
  }
  let offsetX = 0;
  let offsetY = 0;
  if (transform && transform !== "none" && typeof transform === "string") {
    const transformValues = transform.split("(")[1].split(")")[0].split(",");
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }
  if (direction === "left") {
    if (containerRect) {
      return `translateX(${containerRect.right + offsetX - rect.left}px)`;
    }
    return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
  }
  if (direction === "right") {
    if (containerRect) {
      return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
    }
    return `translateX(-${rect.left + rect.width - offsetX}px)`;
  }
  if (direction === "up") {
    if (containerRect) {
      return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
    }
    return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
  }
  if (containerRect) {
    return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`;
  }
  return `translateY(-${rect.top + rect.height - offsetY}px)`;
}
function resolveContainer(containerPropProp) {
  return typeof containerPropProp === "function" ? containerPropProp() : containerPropProp;
}
function setTranslateValue(direction, node, containerProp) {
  const resolvedContainer = resolveContainer(containerProp);
  const transform = getTranslateValue(direction, node, resolvedContainer);
  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
var Slide = React.forwardRef(function Slide2(props, ref) {
  const theme = useTheme();
  const defaultEasing = {
    enter: theme.transitions.easing.easeOut,
    exit: theme.transitions.easing.sharp
  };
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    container: containerProp,
    direction = "down",
    easing: easingProp = defaultEasing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition_default,
    ...other
  } = props;
  const childrenRef = React.useRef(null);
  const handleRef = useForkRef_default(getReactElementRef(children), childrenRef, ref);
  const normalizedTransitionCallback = (callback) => (isAppearing) => {
    if (callback) {
      if (isAppearing === void 0) {
        callback(childrenRef.current);
      } else {
        callback(childrenRef.current, isAppearing);
      }
    }
  };
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    setTranslateValue(direction, node, containerProp);
    reflow(node);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", {
      ...transitionProps
    });
    node.style.transition = theme.transitions.create("transform", {
      ...transitionProps
    });
    node.style.webkitTransform = "none";
    node.style.transform = "none";
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", transitionProps);
    node.style.transition = theme.transitions.create("transform", transitionProps);
    setTranslateValue(direction, node, containerProp);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback((node) => {
    node.style.webkitTransition = "";
    node.style.transition = "";
    if (onExited) {
      onExited(node);
    }
  });
  const handleAddEndListener = (next) => {
    if (addEndListener) {
      addEndListener(childrenRef.current, next);
    }
  };
  const updatePosition = React.useCallback(() => {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current, containerProp);
    }
  }, [direction, containerProp]);
  React.useEffect(() => {
    if (inProp || direction === "down" || direction === "right") {
      return void 0;
    }
    const handleResize = debounce_default(() => {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current, containerProp);
      }
    });
    const containerWindow = ownerWindow_default(childrenRef.current);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [direction, inProp, containerProp]);
  React.useEffect(() => {
    if (!inProp) {
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return (0, import_jsx_runtime.jsx)(TransitionComponent, {
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    appear,
    in: inProp,
    timeout,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return React.cloneElement(children, {
        ref: handleRef,
        style: {
          visibility: state === "exited" && !inProp ? "hidden" : void 0,
          ...style,
          ...children.props.style
        },
        ...restChildProps
      });
    }
  });
});
true ? Slide.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: import_prop_types.default.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: import_prop_types.default.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: chainPropTypes(import_prop_types.default.oneOfType([HTMLElementType, import_prop_types.default.func]), (props) => {
    if (props.open) {
      const resolvedContainer = resolveContainer(props.container);
      if (resolvedContainer && resolvedContainer.nodeType === 1) {
        const box = resolvedContainer.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else if (!resolvedContainer || typeof resolvedContainer.getBoundingClientRect !== "function" || resolvedContainer.contextElement != null && resolvedContainer.contextElement.nodeType !== 1) {
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join("\n"));
      }
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: import_prop_types.default.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: import_prop_types.default.oneOfType([import_prop_types.default.shape({
    enter: import_prop_types.default.string,
    exit: import_prop_types.default.string
  }), import_prop_types.default.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: import_prop_types.default.bool,
  /**
   * @ignore
   */
  onEnter: import_prop_types.default.func,
  /**
   * @ignore
   */
  onEntered: import_prop_types.default.func,
  /**
   * @ignore
   */
  onEntering: import_prop_types.default.func,
  /**
   * @ignore
   */
  onExit: import_prop_types.default.func,
  /**
   * @ignore
   */
  onExited: import_prop_types.default.func,
  /**
   * @ignore
   */
  onExiting: import_prop_types.default.func,
  /**
   * @ignore
   */
  style: import_prop_types.default.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
    appear: import_prop_types.default.number,
    enter: import_prop_types.default.number,
    exit: import_prop_types.default.number
  })])
} : void 0;
var Slide_default = Slide;

// node_modules/@mui/material/esm/Drawer/drawerClasses.js
function getDrawerUtilityClass(slot) {
  return generateUtilityClass("MuiDrawer", slot);
}
var drawerClasses = generateUtilityClasses("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
var drawerClasses_default = drawerClasses;

// node_modules/@mui/material/esm/Drawer/Drawer.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, (ownerState.variant === "permanent" || ownerState.variant === "persistent") && styles.docked, styles.modal];
};
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    anchor,
    variant
  } = ownerState;
  const slots = {
    root: ["root", `anchor${capitalize_default(anchor)}`],
    docked: [(variant === "permanent" || variant === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${capitalize_default(anchor)}`, variant !== "temporary" && `paperAnchorDocked${capitalize_default(anchor)}`]
  };
  return composeClasses(slots, getDrawerUtilityClass, classes);
};
var DrawerRoot = styled_default(Modal_default, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver
})(memoTheme_default(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.drawer
})));
var DrawerDockedRoot = styled_default("div", {
  shouldForwardProp: rootShouldForwardProp_default,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: false,
  overridesResolver
})({
  flex: "0 0 auto"
});
var DrawerPaper = styled_default(Paper_default, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.paper, styles[`paperAnchor${capitalize_default(ownerState.anchor)}`], ownerState.variant !== "temporary" && styles[`paperAnchorDocked${capitalize_default(ownerState.anchor)}`]];
  }
})(memoTheme_default(({
  theme
}) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (theme.vars || theme).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchor === "left" && ownerState.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchor === "top" && ownerState.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchor === "right" && ownerState.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchor === "bottom" && ownerState.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }]
})));
var oppositeDirection = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function isHorizontal(anchor) {
  return ["left", "right"].includes(anchor);
}
function getAnchor({
  direction
}, anchor) {
  return direction === "rtl" && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}
var Drawer = React2.forwardRef(function Drawer2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDrawer"
  });
  const theme = useTheme();
  const isRtl = useRtl();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    anchor: anchorProp = "left",
    BackdropProps,
    children,
    className,
    elevation = 16,
    hideBackdrop = false,
    ModalProps: {
      BackdropProps: BackdropPropsProp,
      ...ModalProps
    } = {},
    onClose,
    open = false,
    PaperProps = {},
    SlideProps,
    // eslint-disable-next-line react/prop-types
    TransitionComponent,
    transitionDuration = defaultTransitionDuration,
    variant = "temporary",
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const mounted = React2.useRef(false);
  React2.useEffect(() => {
    mounted.current = true;
  }, []);
  const anchorInvariant = getAnchor({
    direction: isRtl ? "rtl" : "ltr"
  }, anchorProp);
  const anchor = anchorProp;
  const ownerState = {
    ...props,
    anchor,
    elevation,
    open,
    variant,
    ...other
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    slots: {
      transition: TransitionComponent,
      ...slots
    },
    slotProps: {
      paper: PaperProps,
      transition: SlideProps,
      ...slotProps,
      backdrop: mergeSlotProps(slotProps.backdrop || {
        ...BackdropProps,
        ...BackdropPropsProp
      }, {
        transitionDuration
      })
    }
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    elementType: DrawerRoot,
    className: clsx_default(classes.root, classes.modal, className),
    shouldForwardComponentProp: true,
    ownerState,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      ...ModalProps
    },
    additionalProps: {
      open,
      onClose,
      hideBackdrop,
      slots: {
        backdrop: externalForwardedProps.slots.backdrop
      },
      slotProps: {
        backdrop: externalForwardedProps.slotProps.backdrop
      }
    }
  });
  const [PaperSlot, paperSlotProps] = useSlot("paper", {
    elementType: DrawerPaper,
    shouldForwardComponentProp: true,
    className: clsx_default(classes.paper, PaperProps.className),
    ownerState,
    externalForwardedProps,
    additionalProps: {
      elevation: variant === "temporary" ? elevation : 0,
      square: true
    }
  });
  const [DockedSlot, dockedSlotProps] = useSlot("docked", {
    elementType: DrawerDockedRoot,
    ref,
    className: clsx_default(classes.root, classes.docked, className),
    ownerState,
    externalForwardedProps,
    additionalProps: other
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  });
  const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
    elementType: Slide_default,
    ownerState,
    externalForwardedProps,
    additionalProps: {
      in: open,
      direction: oppositeDirection[anchorInvariant],
      timeout: transitionDuration,
      appear: mounted.current
    }
  });
  const drawer = (0, import_jsx_runtime2.jsx)(PaperSlot, {
    ...paperSlotProps,
    children
  });
  if (variant === "permanent") {
    return (0, import_jsx_runtime2.jsx)(DockedSlot, {
      ...dockedSlotProps,
      children: drawer
    });
  }
  const slidingDrawer = (0, import_jsx_runtime2.jsx)(TransitionSlot, {
    ...transitionSlotProps,
    children: drawer
  });
  if (variant === "persistent") {
    return (0, import_jsx_runtime2.jsx)(DockedSlot, {
      ...dockedSlotProps,
      children: slidingDrawer
    });
  }
  return (0, import_jsx_runtime2.jsx)(RootSlot, {
    ...rootSlotProps,
    children: slidingDrawer
  });
});
true ? Drawer.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: import_prop_types2.default.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: import_prop_types2.default.object,
  /**
   * The content of the component.
   */
  children: import_prop_types2.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: integerPropType_default,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: import_prop_types2.default.bool,
  /**
   * Props applied to the [`Modal`](https://mui.com/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: import_prop_types2.default.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types2.default.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: import_prop_types2.default.bool,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @deprecated use the `slotProps.paper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PaperProps: import_prop_types2.default.object,
  /**
   * Props applied to the [`Slide`](https://mui.com/material-ui/api/slide/) element.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SlideProps: import_prop_types2.default.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    backdrop: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    docked: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    paper: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    transition: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    backdrop: import_prop_types2.default.elementType,
    docked: import_prop_types2.default.elementType,
    paper: import_prop_types2.default.elementType,
    root: import_prop_types2.default.elementType,
    transition: import_prop_types2.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.shape({
    appear: import_prop_types2.default.number,
    enter: import_prop_types2.default.number,
    exit: import_prop_types2.default.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: import_prop_types2.default.oneOf(["permanent", "persistent", "temporary"])
} : void 0;
var Drawer_default = Drawer;

export {
  Slide_default,
  getDrawerUtilityClass,
  drawerClasses_default,
  isHorizontal,
  getAnchor,
  Drawer_default
};
//# sourceMappingURL=chunk-5YUVTCWT.js.map
