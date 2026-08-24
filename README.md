# Portfolio di Gabriele Foroni

Portfolio statico costruito con Astro e pensato per GitHub Pages.

## Sviluppo locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy su GitHub Pages

1. Crea una repository GitHub per il sito.
2. Pubblica il branch `main`.
3. In `Settings > Pages`, seleziona `GitHub Actions`.
4. Il workflow `.github/workflows/deploy.yml` pubblica automaticamente il sito a ogni push su `main`.
