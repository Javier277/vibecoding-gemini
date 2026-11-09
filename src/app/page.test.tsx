import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Fase 0 · Esqueleto de la aplicación", () => {
  it("muestra el nombre de la app correctamente", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeDefined();
    expect(heading.textContent).toContain("Control de Flota y Rutas · Comunitat Valenciana");
  });

  it("muestra la información de los 14 autobuses y GPS simulado", () => {
    render(<Home />);
    expect(screen.getByText("14")).toBeDefined();
    expect(screen.getByText("Autobuses en flota")).toBeDefined();
    expect(screen.getByText("GPS Live")).toBeDefined();
  });
});
