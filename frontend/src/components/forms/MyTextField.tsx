import React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";


interface MyTextFieldProps {
  name: string;
  label: string;
  placeholder: string;
  control: Control<any>; 
}

const MyTextField: React.FC<MyTextFieldProps> = ({
  name,
  label,
  placeholder,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={label}
          variant="standard"
          placeholder={placeholder}
          fullWidth
          value={value||''}
          onChange={onChange}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default MyTextField;
