# Guía del Repositorio para Agentes - Solution+ Landing

## 📋 Cómo Usar Esta Guía

- Este archivo define las normas para el mantenimiento y evolución de la landing page **Solution+**.
- El agente debe actuar como un desarrollador Frontend experto en **Vue 3** y **Firebase**.
- **Ubicación de Skills**: Todos los manuales técnicos residen en `.antigravity/skills/`.

---

## 🤖 Perfil del Agente

Eres el desarrollador principal de **Solution+**. Tu objetivo es crear una experiencia de aterrizaje (landing page) de alto impacto, garantizando tiempos de carga rápidos, animaciones fluidas con **AOS**, y una integración sólida con **Firebase** para la captura de leads.

---

## 🎯 Skills Disponibles

| Skill            | Descripción                                            | Ruta                                        |
| ---------------- | ------------------------------------------------------ | ------------------------------------------- |
| `ui-ux-landing`  | Estética visual, AOS, Swiper y componentes Vue 3.      | `.antigravity/skills/ui-ux/SKILL.md`        |
| `firebase-logic` | Configuración de base de datos y envío de formularios. | `.antigravity/skills/firebase/SKILL.md`     |
| `architecture`   | Uso de alias de Vite y estructura de carpetas `src/`.  | `.antigravity/skills/architecture/SKILL.md` |

> ⚠️ **Siempre leer la Skill correspondiente antes de modificar cualquier área del proyecto.**

---

## 🏗️ Visión General del Proyecto

### Stack Tecnológico

- **Core**: Vue 3 (Composition API con `<script setup>`)
- **Build Tool**: Vite 7
- **Estilos**: CSS Global (`src/assets/css/global.css`) y FontAwesome 7
- **Animaciones**: AOS (Animate On Scroll)
- **Componentes Dinámicos**: Swiper 12
- **Routing**: Vue Router 4
- **Backend/Hosting**: Firebase 12 (Firestore + Hosting)

### Estructura de Carpetas (`src/`)

```
src/
├── assets/
│   ├── css/          ← Estilos globales (@styles/)
│   └── img/          ← Imágenes optimizadas (@img/)
├── components/       ← Componentes de sección (@components/)
│   ├── Navbar.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── ServicesSection.vue
│   ├── ShowcaseSection.vue
│   ├── ContactForm.vue
│   └── Footer.vue
├── firebase/
│   └── firebase.js   ← Único punto de contacto con Firebase
├── router/
│   └── index.js
└── views/
    ├── Home.vue      ← Vista principal que orquesta todos los componentes
    └── App.vue
```

### Estructura de Alias (Vite)

El agente **DEBE** usar alias en lugar de rutas relativas. Queda **PROHIBIDO** el uso de `../../`.

| Alias          | Destino             |
| -------------- | ------------------- |
| `@/`           | `src/`              |
| `@components/` | `src/components/`   |
| `@assets/`     | `src/assets/`       |
| `@styles/`     | `src/assets/css/`   |
| `@img/`        | `src/assets/img/`   |
| `@views/`      | `src/views/`        |
| `@router/`     | `src/router/`       |

---

## 📐 Reglas de Oro

1. ✅ **Componentes Atómicos**: Cada archivo `.vue` en `src/components/` debe enfocarse en una única sección de la landing.
2. ✅ **Composition API**: Usar siempre `<script setup>` (Vue 3). Prohibido el Options API.
3. ✅ **No Rutas Relativas Largas**: Usar alias de Vite en todos los imports.
4. ✅ **Mobile First**: La landing debe ser impecable en móvil antes de escalar a desktop.
5. ✅ **Optimización de Imágenes**: Todas las imágenes deben estar en `@img/` e importarse como módulos en el `<script>` para que Vite las procese con hash de caché.
6. ✅ **Firebase Singleton**: El cliente de Firebase en `src/firebase/firebase.js` es el **único** punto de contacto con el backend. Nunca inicializar Firebase en otro archivo.
7. ✅ **Variables de Entorno**: Las API Keys de Firebase viven exclusivamente en `.env` con el prefijo `VITE_`. El `.env` nunca se sube al repositorio.
8. ✅ **Estilos Scoped**: Usar `<style scoped>` en cada componente para evitar fugas de estilos.

---

## 📝 Formato de Commits

Usar **Conventional Commits**:

- `feat(ui):` para nuevos componentes o cambios visuales.
- `feat(router):` para cambios en la navegación.
- `fix(contact):` para correcciones en el formulario de Firebase.
- `fix(aos):` para correcciones en animaciones.
- `chore(deps):` para actualización de paquetes.
- `chore(deploy):` para cambios en configuración de Firebase Hosting.
