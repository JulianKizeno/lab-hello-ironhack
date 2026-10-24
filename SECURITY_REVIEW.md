# Revisión de seguridad — 2026-10-24

Repositorio: `JulianKizeno/lab-hello-ironhack`. Rama: `security/review-2026-10-24`.

## Correcciones

- Replace the unsupported Create React App dependency tree with Vite/Vitest; preserve application source and build output directory
- Remove committed obsolete dependency trees; use corrected lockfiles and npm install

## Auditoría npm después de los cambios

| Proyecto | Críticas | Altas | Moderadas | Bajas | Total |
|---|---:|---:|---:|---:|---:|
| `.` | 0 | 0 | 0 | 0 | 0 |

## Verificación

- `.`: instalación correcta; build correcto; pruebas unitarias correctas.

## Límites y configuración

- La auditoría cubre el árbol npm resuelto, no demuestra ausencia de vulnerabilidades de lógica, infraestructura o servicios externos. No se ha desplegado ni fusionado este cambio.
- Migración de herramientas: usar Node 22.22.2+ o Node 24.15+ según engines, reinstalar con npm ci y revisar visualmente los flujos de la aplicación antes de fusionar. Protractor/TSLint obsoletos dejan de ser comandos disponibles donde se retiraron; los archivos e2e se conservan como referencia.
