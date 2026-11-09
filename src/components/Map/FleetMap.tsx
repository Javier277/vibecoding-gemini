"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { CENTRAL_DEPOT, VALENCIA_CENTER, DEFAULT_MAP_ZOOM } from "@/lib/constants";

// Icono personalizado con HTML/CSS para evitar problemas de assets en Leaflet
const createDepotIcon = () => {
  return L.divIcon({
    className: "custom-depot-marker",
    html: `
      <div style="
        background: #0f172a;
        color: #f59e0b;
        border: 2px solid #f59e0b;
        border-radius: 9999px;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 14px rgba(0,0,0,0.4);
        font-size: 18px;
      ">
        🏢
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -20],
  });
};

export default function FleetMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-400">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
          <span>Cargando mapa de la Comunitat Valenciana...</span>
        </div>
      </div>
    );
  }

  const depotIcon = createDepotIcon();

  return (
    <div className="w-full h-full min-h-[550px] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative">
      <MapContainer
        center={VALENCIA_CENTER}
        zoom={DEFAULT_MAP_ZOOM}
        scrollWheelZoom={true}
        className="w-full h-full min-h-[550px] z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={CENTRAL_DEPOT.coordinates} icon={depotIcon}>
          <Popup className="custom-popup">
            <div className="p-1 text-slate-800">
              <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <span>🏢</span>
                <span>{CENTRAL_DEPOT.name}</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                {CENTRAL_DEPOT.address}
              </p>
              <div className="mt-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-1">
                {CENTRAL_DEPOT.description}
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Tarjeta flotante de información de base */}
      <div className="absolute top-4 right-4 z-[1000] bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 shadow-xl max-w-xs text-xs text-slate-200 pointer-events-auto">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-slate-100 uppercase tracking-wider text-[11px]">
            Base de Flota
          </span>
        </div>
        <p className="font-medium text-amber-400 text-sm">
          {CENTRAL_DEPOT.name}
        </p>
        <p className="text-slate-400 text-[11px] mt-0.5">
          {CENTRAL_DEPOT.address}
        </p>
        <div className="mt-2 pt-2 border-t border-slate-800 flex justify-between text-slate-400">
          <span>Capacidad base:</span>
          <span className="font-bold text-slate-200">14 autobuses</span>
        </div>
      </div>
    </div>
  );
}
