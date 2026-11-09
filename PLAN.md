# Plan

El agente trabaja una fase cada vez y marca las casillas al cerrarla.

## Fase 0 · Esqueleto

**Objetivo:** una versión mínima que se abre y funciona.

**Tareas:**
- [x] Crear la estructura mínima con Next.js, TypeScript y Tailwind CSS según `docs/project-info.md`.
- [x] Mostrar una primera pantalla con el nombre de la app ("Control de Flota y Rutas · Comunitat Valenciana").
- [x] Configurar el entorno de pruebas unitarias.

**Pruebas:**
- Una prueba automática comprueba que la app se abre y muestra su nombre. (Comprobado: 2 pruebas pasadas con Vitest).

**Hecho cuando:** la app se abre sin errores en `http://localhost:3000`, se ve su nombre y la prueba pasa.
**Cómo comprobarlo:** Ejecutar `npm run dev`, abrir `http://localhost:3000` en el navegador y ver la pantalla inicial; ejecutar `npm test` y ver la prueba en verde.

## Fase 1 · Mapa base de la Comunitat Valenciana

**Objetivo:** Integrar el mapa interactivo de Leaflet centrado en la Comunitat Valenciana con el marcador base de las cocheras centrales. *(Fase lo más pequeña y atómica posible)*.

**Tareas:**
- [x] Integrar Leaflet y OpenStreetMap (sin necesidad de claves de API).
- [x] Renderizar el mapa centrado en Valencia y la Comunitat Valenciana con controles de zoom y navegación.
- [x] Mostrar un marcador inicial en las Cocheras Centrales de la flota (Polígono Vara de Quart).

**Pruebas:**
- Prueba automática que comprueba que el componente del mapa se monta sin errores y contiene las coordenadas base de la Comunitat. (Comprobado: 4 pruebas pasadas con Vitest).

**Hecho cuando:** Al abrir la app en el navegador se muestra el mapa interactivo cargando las teselas de OpenStreetMap y el marcador de la base de cocheras.
**Cómo comprobarlo:** Abrir `http://localhost:3000`, mover y hacer zoom sobre el mapa de la Comunitat Valenciana y pulsar sobre el marcador de "Cocheras Centrales".

## Fase 2 · Flota de 14 autobuses y Panel de control

**Objetivo:** Mostrar los 14 autobuses en el mapa y un panel lateral de flota con matrícula, conductor y estado.

**Tareas:**
- [ ] Crear los datos de los 14 autobuses (matrículas españolas ej. `4821 KLM`, capacidad, conductor y estado operativo).
- [ ] Mostrar los 14 marcadores con iconos identificativos en el mapa.
- [ ] Crear el panel lateral con la lista de los 14 vehículos y filtro rápido por estado.
- [ ] Permitir hacer clic en un autobús de la lista para seleccionarlo y centrarlo en el mapa.

**Pruebas:**
- Prueba unitaria que valida que la flota contiene exactamente 14 autobuses únicos, con matrículas válidas y conductores asignados.

**Hecho cuando:** Se listan los 14 autobuses en el panel, se ven sus 14 iconos en el mapa y al hacer clic en uno queda seleccionado.
**Cómo comprobarlo:** Abrir la app, contar los 14 autobuses en el panel lateral y hacer clic en cualquiera para ver cómo se resalta su tarjeta y se enfoca en el mapa.

## Fase 3 · Rutas de Lunes a Viernes y Trazados

**Objetivo:** Cargar las 14 rutas semanales (polígonos industriales, colegios, interurbanas) y dibujar el trazado y paradas al seleccionar un autobús.

**Tareas:**
- [ ] Definir el catálogo de 14 rutas con paradas reales en la Comunitat Valenciana (Paterna, Almussafes, Sagunto, Gandía, etc.) y horarios de paso.
- [ ] Dibujar la polilínea del recorrido y las paradas intermedias en el mapa al seleccionar un autobús.
- [ ] Mostrar en el panel lateral la lista de paradas del autobús seleccionado con sus horas previstas.

**Pruebas:**
- Prueba unitaria que verifica que cada uno de los 14 autobuses tiene una ruta válida asignada con su secuencia de paradas y horarios.

**Hecho cuando:** Al pulsar sobre cualquier autobús, su recorrido vial y paradas se pintan claramente sobre el mapa y se muestra su itinerario en el panel.
**Cómo comprobarlo:** Hacer clic en el autobús de la ruta a Ford Almussafes o al Parque Tecnológico y ver las paradas y el trazado dibujados en el mapa.

## Fase 4 · Simulación GPS en directo y Reloj de simulación

**Objetivo:** Animar el movimiento GPS de los 14 autobuses a lo largo de sus itinerarios con un reloj acelerable.

**Tareas:**
- [ ] Implementar la función de interpolación de posición GPS según la hora de la simulación.
- [ ] Crear la barra de control temporal: Play, Pausa, hora actual y velocidades (x1, x5, x10, x60).
- [ ] Actualizar en tiempo real el estado de cada autobús (En ruta, En parada, Próxima parada, Retraso estimado).

**Pruebas:**
- Prueba unitaria de la lógica de simulación: verificar que a velocidad x60 un trayecto de 30 minutos simulados se completa en 30 segundos reales y la posición calculada se mantiene sobre la ruta.

**Hecho cuando:** Al pulsar Play o acelerar la velocidad a x10 o x60, los autobuses avanzan fluidamente por sus carreteras según la hora.
**Cómo comprobarlo:** Pulsar Play a velocidad x60 y comprobar visualmente en el mapa cómo los autobuses se desplazan de parada en parada y el reloj avanza.

## Fase 5 · Optimizador de rutas (Algoritmo TSP y Comparativa de Ahorro)

**Objetivo:** Reordenar las paradas intermedias de una ruta para minimizar distancia y tiempo, mostrando la comparativa antes/después.

**Tareas:**
- [ ] Implementar el algoritmo de optimización de paradas (heurística TSP / 2-Opt) en módulo puro TypeScript `lib/optimizer.ts`.
- [ ] Añadir el botón "Optimizar ruta" en el panel de detalle del autobús.
- [ ] Mostrar tarjeta comparativa "Antes vs Después": km originales vs optimizados, tiempo y porcentaje de ahorro.
- [ ] Permitir aplicar la ruta optimizada a la simulación activa.

**Pruebas:**
- Prueba unitaria matemática: verificar que para un conjunto de paradas desordenadas el algoritmo devuelve un orden con menor o igual distancia total (ej. caso de prueba documentado con 33% de ahorro).

**Hecho cuando:** Al pulsar "Optimizar ruta", la app calcula el orden óptimo de paradas y muestra el ahorro en km y minutos con la comparativa gráfica.
**Cómo comprobarlo:** Seleccionar una ruta, pulsar "Optimizar ruta" y comprobar que aparece el cartel con los kilómetros y minutos ahorrados y el nuevo orden de paradas.

## Fase 6 · Fines de semana: Bodas, Eventos y Asignación sin solapes

**Objetivo:** Planificar los servicios de fin de semana para bodas y eventos en masías de la Comunitat Valenciana, asignando autobuses libres sin solapamientos.

**Tareas:**
- [ ] Añadir selector de día de la semana (Lunes a Domingo) en la barra superior.
- [ ] Crear el catálogo de eventos de fin de semana (bodas en Campo Aníbal, Masía de las Estrellas, Cartuja de Ara Christi, etc.).
- [ ] Crear panel de asignación de fin de semana para asignar autobuses disponibles a eventos.
- [ ] Detectar y bloquear automáticamente solapamientos de horario (un autobús no puede cubrir dos eventos simultáneos).

**Pruebas:**
- Prueba unitaria del asignador: verificar que intentar asignar un mismo autobús a dos eventos con horarios coincidentes es rechazado con un error de conflicto.

**Hecho cuando:** Al cambiar el día a Sábado o Domingo, el mapa muestra los eventos especiales y el gestor puede asignar autobuses disponibles validando solapamientos.
**Cómo comprobarlo:** Seleccionar Sábado, asignar el Bus 1 a una boda a las 18:00, e intentar asignarlo a otro evento a las 18:30 para comprobar que el sistema muestra la alerta de conflicto y lo bloquea.
