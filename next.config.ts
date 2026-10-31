import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async redirects() {
    const redirects: Awaited<ReturnType<NonNullable<NextConfig['redirects']>>> = [
      // Canonicalisation : apex -> www (domaine principal servi en production)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'russieetudes.com' }],
        destination: 'https://www.russieetudes.com/:path*',
        permanent: true,
      },
      // Liens courts partenaires affichés dans les vidéos : /tssr -> fiche.
      // Next.js conserve la chaîne de requête, donc les UTM sont transmis.
      //
      // /tssr pointe sur la version arabe : la vidéo qui affiche ce lien est
      // en derja et son audience est tunisienne. La version française reste
      // servie par /fr/tssr et par son URL complète.
      { source: '/tssr', destination: '/ar/partenaires/tssr', statusCode: 301 },
      { source: '/ar/tssr', destination: '/ar/partenaires/tssr', statusCode: 301 },
      { source: '/fr/tssr', destination: '/partenaires/tssr', statusCode: 301 },
      { source: '/fr', destination: '/', permanent: true },
      { source: '/fr/:path*', destination: '/:path*', permanent: true },
      // L'e-learning a quitté /app pour son propre arbre : le suivi de
      // dossier et les cours de langue sont deux produits distincts.
      // Les liens déjà partagés doivent continuer de fonctionner.
      { source: '/app/cours', destination: '/elearning', statusCode: 301 },
      { source: '/app/cours/:path*', destination: '/elearning/:path*', statusCode: 301 },
      // Scission pharmacie-dentaire : 301 explicites (statusCode, car
      // permanent:true émettrait un 308) vers la page pharmacie, héritière SEO.
      { source: '/filieres/pharmacie-dentaire', destination: '/filieres/pharmacie', statusCode: 301 },
      { source: '/:lang(en|ar|ru)/filieres/pharmacie-dentaire', destination: '/:lang/filieres/pharmacie', statusCode: 301 },
      // La visite immersive est liée depuis l'en-tête et le pied de page
      // de tout le site : elle mérite une URL sans extension. L'ancienne
      // garde sa valeur grâce au 301.
      { source: '/immersion.html', destination: '/immersion', statusCode: 301 },
    ];
    return redirects;
  },
  async rewrites() {
    return [
      // Sert le fichier statique sous l'URL propre, sans le déplacer.
      { source: '/immersion', destination: '/immersion.html' },
    ];
  },
};

export default nextConfig;
