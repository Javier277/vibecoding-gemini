import { describe, it, expect } from "vitest";
import { VALENCIA_CENTER, DEFAULT_MAP_ZOOM, CENTRAL_DEPOT } from "./constants";

describe("Constantes de ubicación y cocheras", () => {
  it("contiene las coordenadas del centro de Valencia", () => {
    expect(VALENCIA_CENTER[0]).toBeCloseTo(39.4699, 2);
    expect(VALENCIA_CENTER[1]).toBeCloseTo(-0.3763, 2);
    expect(DEFAULT_MAP_ZOOM).toBe(11);
  });

  it("define correctamente las Cocheras Centrales en Vara de Quart", () => {
    expect(CENTRAL_DEPOT.name).toBe("Cocheras Centrales");
    expect(CENTRAL_DEPOT.address).toContain("Vara de Quart");
    expect(CENTRAL_DEPOT.coordinates[0]).toBeGreaterThan(39.0);
    expect(CENTRAL_DEPOT.coordinates[1]).toBeLessThan(0);
    expect(CENTRAL_DEPOT.description).toContain("14 autobuses");
  });
});
