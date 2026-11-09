export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-slate-900 text-slate-100">
      <div className="max-w-3xl w-full bg-slate-800/80 border border-slate-700 rounded-2xl p-8 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xl">
            🚌
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Fase 0 · Esqueleto
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
          Control de Flota y Rutas · Comunitat Valenciana
        </h1>

        <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
          Sistema logístico de control en directo por GPS para 14 autobuses en Valencia,
          optimización matemática de paradas y gestión de servicios especiales de fin de semana.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-700/60">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/40">
            <div className="text-2xl font-bold text-amber-400">14</div>
            <div className="text-xs text-slate-400 mt-1">Autobuses en flota</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/40">
            <div className="text-2xl font-bold text-blue-400">GPS Live</div>
            <div className="text-xs text-slate-400 mt-1">Simulación en directo</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/40">
            <div className="text-2xl font-bold text-emerald-400">TSP 2-Opt</div>
            <div className="text-xs text-slate-400 mt-1">Optimización de paradas</div>
          </div>
        </div>
      </div>
    </main>
  );
}
