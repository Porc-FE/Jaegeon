import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import Router from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
