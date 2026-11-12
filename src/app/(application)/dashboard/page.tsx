/**
 * Tableau de bord (groupe de route "application").
 * Écran temporaire de validation de la structure — les vraies
 * fonctionnalités (biens, locataires, rapports…) seront branchées
 * sur les dossiers src/features/ dans les prochaines phases.
 */
export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold">Tableau de bord — NA-BOUDOU</h1>
        <p className="mt-2 text-slate-600">
          Structure de l&apos;application initialisée. Modules prévus : biens,
          locataires, propriétaires, maintenance, dépenses, rapports.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Biens",
            "Locataires",
            "Propriétaires",
            "Maintenance",
            "Dépenses",
            "Rapports",
          ].map((module) => (
            <li
              key={module}
              className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-500"
            >
              {module} — à venir
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
