"use client";

import dynamic from "next/dynamic";

const FleetMap = dynamic(() => import("./FleetMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[550px] flex items-center justify-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-400">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
        <span>Iniciando mapa de la Comunitat Valenciana...</span>
      </div>
    </div>
  ),
});

export default function MapWrapper() {
  return <FleetMap />;
}
