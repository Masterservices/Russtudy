/**
 * Libellés de choix des formulaires publics.
 *
 * Les options affichées portent un emoji décoratif (« 🩺 Médecine »). Cet
 * emoji sert au repérage visuel dans le sélecteur, pas à l'information : une
 * fois recopié dans un message WhatsApp il n'ajoute rien, et il survit mal au
 * transport — il arrive régulièrement chez le consultant sous la forme d'un
 * losange « � », ce qui donne un message abîmé au premier contact.
 *
 * On sépare donc l'affichage de la donnée transmise : l'interface garde son
 * emoji, le message n'emporte que le texte.
 */

/** Retire l'emoji de tête d'un libellé d'option, et rien d'autre. */
export function plainChoice(label: string): string {
  return label.replace(/^[^\p{L}\p{N}]+/u, '').trim();
}
