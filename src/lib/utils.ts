/**
 * Fonctions utilitaires partagées de NA-BOUDOU.
 */

/** Formate une date ISO en format français lisible. */
export function formatDateFR(isoDate: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
  }).format(new Date(isoDate));
}

/** Formate un montant en FCFA (à ajuster selon la devise cible). */
export function formatCurrencyFCFA(amount: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(amount);
}
