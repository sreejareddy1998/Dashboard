// src/components/ModelSelector.tsx
import React from "react";
import { Select, MenuItem } from "@mui/material";

const MODELS = ["Model A", "Model B"];

interface Props {
  model: string;
  setModel: (model: string) => void;
}

const ModelSelector: React.FC<Props> = ({ model, setModel }) => (
  <Select
    value={model}
    onChange={(e) => setModel(e.target.value)}
    fullWidth
    sx={{ mt: 2, mb: 2 }}>
    {MODELS.map((m) => (
      <MenuItem key={m} value={m}>
        {m}
      </MenuItem>
    ))}
  </Select>
);

export default ModelSelector;
