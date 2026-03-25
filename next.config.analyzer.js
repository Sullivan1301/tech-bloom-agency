/**
 * Configuration Bundle Analyzer
 * 
 * Usage:
 *   npm run build              # Build normal
 *   ANALYZE=true npm run build # Build avec analyse bundle
 * 
 * Résultat:
 *   Ouvre automatiquement une visualisation interactive du bundle
 *   Permet d'identifier les dépendances lourdes
 *   Aide à optimiser le tree-shaking
 */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  // ... votre config Next.js existante
  
  // Optimisations images
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 60,
  },
  
  // Compression
  compress: true,
  
  // Source maps uniquement en dev
  productionBrowserSourceMaps: false,
};

module.exports = withBundleAnalyzer(nextConfig);
