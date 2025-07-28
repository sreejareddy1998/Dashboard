// src/App.tsx
import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  CircularProgress,
  Stack,
  Paper,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import ModelSelector from "./components/ModelSelector";
import InferenceForm from "./components/InferenceForm";
import ResultsTable from "./components/ResultsTable";
import ResultsChart from "./components/ResultsChart";
import { runMockInference } from "./services/mockApi";
import type { InferenceResult } from "./types";

const App: React.FC = () => {
  const [model, setModel] = useState<string>("Model A");
  const [param, setParam] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<InferenceResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleRun = async () => {
    setLoading(true);
    try {
      const res = await runMockInference(model, param);
      setResults(res);
      setError(null); // clear any previous error
    } catch (err: any) {
      console.error("Inference failed:", err);
      setError(err.message || "Unexpected error occurred");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f4f6f8",
        p: 2,
      }}>
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            🧠 ML Inference Dashboard
          </Typography>

          <Stack spacing={2}>
            <ModelSelector model={model} setModel={setModel} />
            <InferenceForm param={param} setParam={setParam} />
            <Button
              variant="contained"
              onClick={handleRun}
              disabled={loading || !param}
              fullWidth>
              Run Model
            </Button>

            {loading && (
              <Box textAlign="center" mt={2}>
                <CircularProgress />
                <Typography variant="body2" mt={1}>
                  Running inference...
                </Typography>
              </Box>
            )}
          </Stack>

          {results.length > 0 && (
            <>
              <ResultsTable results={results} />
              <Box mt={4}>
                <ResultsChart results={results} />
              </Box>
            </>
          )}
        </Paper>
      </Container>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert
          onClose={() => setError(null)}
          severity="error"
          sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default App;
