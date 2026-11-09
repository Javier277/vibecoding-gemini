import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Fase 1 · Mapa Base de la Comunitat Valenciana", () => {
  it("muestra el encabezado con el título y el badge de Fase 1", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toContain("Control de Flota y Rutas");
    expect(screen.getByText("Fase 1 · Mapa Base")).toBeDefined();
  });

  it("muestra la información de base operativa y flota de 14 autobuses", () => {
    render(<Home />);
    expect(screen.getByText("Base: Vara de Quart")).toBeDefined();
    expect(screen.getByText("14 buses")).toBeDefined();
  });
});
