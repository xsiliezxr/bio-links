# bio-links
Links de bio con React + Vite + Tailwind CSS v4 + GSAP.

    pnpm install
    cp .env.example .env   # pon tus datos
    pnpm dev

- Datos y enlaces: `.env` (todo `VITE_*`). Lee `src/config/`.
- Agregar una red: variable en `.env.example` + una línea en `src/config/env.js`, `src/config/site.js` y `src/lib/icons.js`.
- Cambiar qué va como botón o solo ícono: campo `tier` ('list' | 'icon') en `src/config/site.js`.
- Credly y Microsoft Learn se configuran con `VITE_LINK_CREDLY` y `VITE_LINK_MICROSOFT_LEARN`. Si quedan vacíos, no se muestran.
- Se puede agregar un enlace adicional con `VITE_CUSTOM_LINK_LABEL`, `VITE_CUSTOM_LINK_URL`, `VITE_CUSTOM_LINK_ICON` y `VITE_CUSTOM_LINK_NOTE`. Los iconos disponibles son `link`, `book`, `certificate`, `code` y `award`.
- Foto: reemplaza `public/avatar.svg` o pon la ruta/URL en `VITE_PROFILE_AVATAR_URL`.
- Netlify: sube `pnpm-lock.yaml` y carga las variables en Site settings → Environment variables.

Tailwind v4 se integra con el plugin oficial de Vite en `vite.config.js`; no requiere `tailwind.config.js` ni una cadena PostCSS adicional.

Los enlaces de Instagram, LinkedIn, X y Facebook intentan abrir su aplicación nativa en teléfonos compatibles y vuelven a la URL web si la aplicación no está instalada. En desktop siempre usan la URL web. La decisión final también depende de las restricciones del navegador interno de cada red social.
