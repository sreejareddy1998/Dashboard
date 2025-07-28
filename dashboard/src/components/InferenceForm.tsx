// src/components/InferenceForm.tsx
import React from "react";
import { TextField } from "@mui/material";

interface Props {
  param: string;
  setParam: (value: string) => void;
}

const InferenceForm: React.FC<Props> = ({ param, setParam }) => (
  <TextField
    label="Parameter"
    value={param}
    onChange={(e) => setParam(e.target.value)}
    fullWidth
    margin="normal"
  />
);

export default InferenceForm;
