// node_modules/@mui/material/esm/FormControl/formControlState.js
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}

export {
  formControlState
};
//# sourceMappingURL=chunk-IABPPNC3.js.map
