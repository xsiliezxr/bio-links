# bio-links
Links de bio con React + Vite + GSAP.

    pnpm install
    cp .env.example .env   # pon tus datos
    pnpm dev

- Datos y enlaces: `.env` (todo `VITE_*`). Lee `src/config/`.
- Agregar una red: variable en `.env.example` + una línea en `src/config/env.js`, `src/config/site.js` y `src/lib/icons.js`.
- Cambiar qué va como botón o solo ícono: campo `tier` ('list' | 'icon') en `src/config/site.js`.
- Foto: reemplaza `public/avatar.svg` o pon la ruta/URL en `VITE_PROFILE_AVATAR_URL`.
- Netlify: sube `pnpm-lock.yaml` y carga las variables en Site settings → Environment variables.
