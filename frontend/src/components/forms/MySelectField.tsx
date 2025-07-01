import * as React from "react";
import { Controller } from "react-hook-form";
import type { Control } from "react-hook-form";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


interface MySelectFieldProps {
  name: string;
  control: Control<any>; 
}

export default function MySelectField({
  name,
  control,
}: MySelectFieldProps): React.JSX.Element {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>Category</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Select
            labelId={`${name}-label`}
            id={`${name}-select`}
            value={value}
            onChange={onChange}
            label="Category"
            error={!!error}
          >
            <MenuItem value="food">Food</MenuItem>
            <MenuItem value="clothing">Clothing</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="transportation">Transportation</MenuItem>
            <MenuItem value="rent">Rent</MenuItem>
          </Select>
        )}
      />
    </FormControl>
  );
}
