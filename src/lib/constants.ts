export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Depot {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number];
  description: string;
}

export const VALENCIA_CENTER: [number, number] = [39.4699, -0.3763];
export const DEFAULT_MAP_ZOOM = 11;

export const CENTRAL_DEPOT: Depot = {
  id: "depot-central",
  name: "Cocheras Centrales",
  address: "Polígono Industrial Vara de Quart, Valencia",
  coordinates: [39.4589, -0.4095],
  description: "Base operativa, taller y centro de control logístico de los 14 autobuses.",
};
