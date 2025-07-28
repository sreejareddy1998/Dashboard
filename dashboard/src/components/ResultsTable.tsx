// src/components/ResultsTable.tsx
import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";
import type { InferenceResult } from "../types";

interface Props {
  results: InferenceResult[];
}

const ResultsTable: React.FC<Props> = ({ results }) => (
  <>
    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
      Results Table
    </Typography>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.id}</TableCell>
              <TableCell>{r.label}</TableCell>
              <TableCell>{r.score.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </>
);

export default ResultsTable;
