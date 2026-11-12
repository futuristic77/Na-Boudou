/**
 * Types partagés de NA-BOUDOU.
 * Ce fichier est un point de départ : les types métier
 * (Bien, Locataire, Propriétaire, etc.) seront ajoutés ici
 * au fil des phases de développement.
 */

/** Exemple de type métier (à faire évoluer en phase fonctionnelle). */
export interface EntityBase {
  id: string;
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}
