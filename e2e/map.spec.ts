import { test, expect } from "@playwright/test";

test.describe("E2E - Control de Flota y Mapa", () => {
  test("carga la página principal, el encabezado y el mapa interactivo", async ({ page }) => {
    await page.goto("/");

    // Comprobar el título principal
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Control de Flota y Rutas");

    // Comprobar que los badges de estado están visibles
    await expect(page.getByText("Base: Vara de Quart")).toBeVisible();
    await expect(page.getByText("14 buses")).toBeVisible();

    // Comprobar que el contenedor de Leaflet se ha renderizado
    const mapElement = page.locator(".leaflet-container");
    await expect(mapElement).toBeVisible();

    // Comprobar que el marcador de Cocheras Centrales está presente en el DOM
    const depotMarker = page.locator(".custom-depot-marker");
    await expect(depotMarker).toBeVisible();

    // Tomar una captura de pantalla para verificar visualmente
    await page.screenshot({ path: "e2e/screenshot-fase1.png", fullPage: true });
  });
});
