import MapWrapper from "@/components/Map";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Barra superior de navegación y estado */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl shadow-lg shadow-amber-500/10">
              🚌
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-white tracking-tight">
                  Control de Flota y Rutas
                </h1>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Fase 1 · Mapa Base
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Comunitat Valenciana · 14 Autobuses · Vara de Quart
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Base: Vara de Quart</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700/60 text-slate-300">
              Flota: <strong className="text-amber-400">14 buses</strong>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal: Mapa interactivo */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 flex flex-col gap-4">
        {/* Banner informativo de Fase 1 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-300 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-base">📍</span>
            <span>
              <strong>Mapa operativo activo:</strong> Centrado en Valencia y la Comunitat Valenciana. Pulsa en el icono de las <strong>Cocheras Centrales</strong> para ver los detalles.
            </span>
          </div>
          <span className="text-slate-400 font-mono text-[11px]">
            Leaflet + OpenStreetMap (sin claves)
          </span>
        </div>

        {/* Contenedor del Mapa */}
        <div className="flex-1 w-full min-h-[550px] relative">
          <MapWrapper />
        </div>
      </div>
    </main>
  );
}
