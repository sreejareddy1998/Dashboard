# ML Inference Dashboard

A simple React + TypeScript dashboard to simulate Machine Learning inference using a mock API.

## 🚀 Features

- Select a mock ML model
- Input parameter for inference
- Simulated API call (mock inference)
- View results in:

  - Table format
  - Chart format

- Error handling using Snackbar

## 🤖 Technologies Used

- React + TypeScript
- Material UI (MUI)
- Chart.js via react-chartjs-2
- Vitest + React Testing Library for unit tests

## 📚 Project Structure

````
├── src/                        # Source code
│   ├── assets/                 # Static assets (images, fonts, etc.)
│   │
│   ├── components/             # Reusable React components
│   │   ├── InferenceForm.tsx
│   │   ├── ModelSelector.tsx
│   │   ├── ResultsChart.tsx
│   │   └── ResultsTable.tsx
│   │
│   ├── services/               # API or business logic
│   │   └── mockApi.ts
│   │
│   ├── test/                   # All test cases
│   │   ├── App.test.tsx
│   │   ├── InferenceForm.test.tsx
│   │   ├── ModelSelector.test.tsx
│   │   ├── ResultsChart.test.tsx
│   │   ├── ResultsTable.test.tsx
│   │   ├── mockApi.test.ts     # Tests for the API logic
│   │   └── setup.ts            # Test setup like RTL config, mocks
│   │
│   ├── App.tsx                 # Main app component
│   ├── index.tsx               # ReactDOM.render entry point
│   └── types.ts                # Shared TypeScript interfaces and types
│

## 📅 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/your-username/ml-inference-dashboard.git
cd ml-inference-dashboard
npm install
````

### 2. Start App

```bash
npm run start
```

The app runs at `http://localhost:3000`

### 3. Run Tests

```bash
npm run test
```

Runs all unit tests with Vitest.

## 💡 Mock API

The `runMockInference(model: string, param: string)` function returns 10 mocked results (with `id`, `label`, `score`, `x`, and `y`) using a simulated async delay. If `param === "error"`, it throws an error.

## 🔮 Sample Type

```ts
export interface InferenceResult {
  id: number;
  label: string;
  score: number;
  x: number;
  y: number;
}
```

## 🌍 Live Preview (optional)

If deployed, add:

```
https://your-deployment-url.vercel.app
```

## 📊 Example Test Case

```ts
test("renders table with results", () => {
  const results: InferenceResult[] = [
    { id: 1, label: "Model A-setosa", score: 92.1, x: 1, y: 10 },
    { id: 2, label: "Model A-versicolor", score: 83.7, x: 2, y: 20 },
  ];

  render(<ResultsTable results={results} />);
  expect(screen.getByText("1")).toBeInTheDocument();
  expect(screen.getByText("92.10")).toBeInTheDocument();
});
```

## 🙋 Author

Developed by **Sreeja**
