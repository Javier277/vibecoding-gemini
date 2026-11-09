# Información del proyecto

## Qué es
Una aplicación web interactiva de simulación y control logístico para una empresa de transporte en autobús en la Comunitat Valenciana. Permite visualizar en un mapa interactivo el movimiento en tiempo real simulado de una flota de 14 autobuses con seguimiento GPS, optimizar el orden de paradas de las rutas para ahorrar kilómetros y tiempo, y gestionar la asignación de autobuses para eventos discrecionales (bodas, congresos y celebraciones) durante los fines de semana.

## Para quién
Para el **gestor de tráfico y operaciones de flota** (único usuario, sin login). Necesita supervisar de un solo vistazo la ubicación de cada vehículo en el mapa, comprobar si van a tiempo o con retraso, y optimizar las rutas para reducir costes operativos y desgaste de la flota.

## Funciones
- **Mapa interactivo de la Comunitat Valenciana:**
  - Visualización geográfica completa (Valencia, Alicante y Castellón) centrada en el área metropolitana y conexiones regionales.
  - Renderizado con Leaflet y OpenStreetMap (gratuito, sin claves).
  - Marcadores interactivos para los 14 autobuses con icono orientado, matrícula y estado.
  - Trazado de rutas y paradas activas al seleccionar un autobús.
- **Simulación GPS en directo:**
  - Movimiento continuo y fluido de los autobuses sobre las rutas según la hora actual de simulación.
  - Reloj de simulación con controles: Pausa, Play, velocidades aceleradas (x1, x5, x10, x60) y selector manual de hora.
  - Selector de día de la semana (Lunes a Domingo) para alternar automáticamente entre operativa regular y fin de semana.
- **Panel de control de flota:**
  - Lista de los 14 autobuses con matrícula española (ej. `4821 KLM`), modelo, capacidad, conductor asignado y estado operativo.
  - Estados posibles: `En ruta`, `En parada`, `En espera`, `Libre en cochera`, `En evento especial`.
  - Indicador de puntualidad (a tiempo / retraso estimado en minutos).
- **Detalle de ruta y telemetría:**
  - Ficha detallada del autobús seleccionado: itinerario completo, orden de paradas, hora programada de paso, próxima parada y progreso en porcentaje.
- **Rutas de Lunes a Viernes:**
  - 14 rutas fijas diferenciadas (una por autobús), realistas para la provincia de Valencia y limítrofes:
    - Rutas a polígonos industriales y parques empresariales (Fuente del Jarro, Ford Almussafes, Parc Tecnològic de Paterna, Juan Carlos I de Almussafes, Polígono El Oliveral).
    - Rutas de transporte escolar e institutos (La Cañada, Bétera, Moncada, El Vedat de Torrent).
    - Rutas interurbanas regulares (Valencia - Gandía, Valencia - Sagunto/Puerto de Sagunto, Valencia - Cullera, Valencia - Requena, Valencia - Xàtiva).
- **Servicios de Sábado y Domingo (Bodas y Eventos):**
  - Servicios discrecionales a enclaves conocidos de celebraciones y eventos en la Comunitat (ej. Campo Aníbal, Masía de las Estrellas, Cartuja de Ara Christi, Huerto de Santa María, Vallesa de Mandor, eventos en Roig Arena / Ciudad de las Artes y las Ciencias).
  - Planificador de fin de semana: asignación de autobuses libres a eventos programados, con detección automática y bloqueo de solapamientos horarios.
- **Optimizador de rutas (TSP):**
  - Algoritmo de optimización del orden de paradas intermedias para una ruta seleccionada.
  - Comparativa gráfica e indicadores "Antes vs Después": kilómetros totales, tiempo estimado y porcentaje de ahorro conseguido.
  - Opción de aplicar la ruta optimizada a la simulación activa.

## Fuera de alcance
- Cuentas de usuario, sistema de autenticación, roles o gestión de contraseñas.
- Aplicación móvil nativa para conductores o interfaz de cara al pasajero/cliente.
- Dispositivos GPS físicos, hardware o conexión a APIs de telemetría reales (toda la cinemática es simulada en memoria).
- Servidor dedicado y base de datos persistente (la aplicación corre íntegramente en el navegador en la fase de prototipo).
- Tráfico en tiempo real procedente de fuentes externas (ej. Google Maps Traffic).
- Módulos de facturación, emisión de billetes, nóminas de conductores o mantenimiento mecánico detallado.
- Reasignación dinámica de autobuses a rutas fijas de lunes a viernes (cada autobús tiene su línea habitual asignada).

## Tecnología
- **Base:** Next.js (App Router o Pages Router con TypeScript) / React moderno con Tailwind CSS para una interfaz limpia, profesional y tipo dashboard de transporte.
- **Mapas:** Leaflet y `react-leaflet` con teselas de OpenStreetMap (sin coste ni necesidad de tokens de API).
- **Lógica desacoplada:** El motor de simulación temporal, el cálculo de posiciones GPS por interpolación y el algoritmo de optimización de rutas (Heurística TSP / 2-Opt) residen en módulos TypeScript puros en `lib/` o `services/`, aislados de los componentes visuales para facilitar las pruebas unitarias.
- **Pruebas:**
  - Pruebas unitarias de algoritmos y estados con Vitest o Jest.
  - Pruebas end-to-end de interfaz con Playwright en el directorio `e2e/`.
- **Despliegue:** Preparado para Vercel o GitHub Pages (despliegue exclusivamente con autorización explícita según AGENTS.md).

## Datos y claves
- **Flota predefinida:** 14 autobuses con datos realistas en ficheros JSON/TypeScript:
  - Matrícula con formato español (4 números + 3 letras, ej. `2341 LKP`).
  - Nombre del conductor y capacidad (entre 30 y 60 plazas).
  - Cocheras centrales situadas en Valencia (Polígono Vara de Quart).
- **Rutas y coordenadas:** Puntos geográficos reales de la Comunitat Valenciana para paradas y waypoints.
- **Sin claves de terceros:** No se requieren claves de pago. Si en el futuro se incorporase algún servicio opcional, se documentará en `.env.example` y se alojará en `.env`.

## Cómo se prueba
- **Prueba de optimización de paradas:**
  - Dado un recorrido con punto de salida (km 0) y paradas desordenadas en km 10, km 5 y km 20: orden original 0→10→5→20 (30 km). Orden optimizado 0→5→10→20 (20 km). Ahorro verificable del 33% en distancia.
- **Prueba de asignación de fin de semana:**
  - Con eventos solapados en el mismo tramo horario, el sistema impide que un mismo autobús sea asignado a más de un servicio simultáneo.
- **Prueba del motor de simulación temporal:**
  - Con aceleración x60, un trayecto de 30 minutos simulados se completa en exactamente 30 segundos reales.
  - La posición GPS interpolada nunca produce saltos a coordenadas fuera de la ruta establecida.
- **Prueba de integridad de flota:**
  - Se valida que existen exactamente 14 autobuses, con matrículas únicas válidas y rutas asignadas de lunes a viernes.
