import { useEffect } from 'react';

// IDs dos badges verificáveis no Credly
const BADGE_IDS = [
  '8940acc1-236b-44f1-97c2-7d0f04066541', // CCNA: Introduction to Networks
  '8d4b7e81-a408-4613-83fb-49a3fdbbc212', // Network Defense
  '9be8dbb4-7a86-4f98-aa83-2aa3255fb90d', // Network Technician Career Path
];

/**
 * Renderiza os badges oficiais do Credly. O embed.js da Credly varre o DOM
 * procurando elementos [data-share-badge-id]; injetamos o script após a
 * montagem para garantir que os badges já existam quando ele rodar.
 */
export default function CredlyBadges() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {BADGE_IDS.map((id) => (
        <div
          key={id}
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id={id}
          data-share-badge-host="https://www.credly.com"
        />
      ))}
    </div>
  );
}
