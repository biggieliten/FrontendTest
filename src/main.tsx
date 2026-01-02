import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./sass/index.scss";
import LandingPage from "./LandingPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
