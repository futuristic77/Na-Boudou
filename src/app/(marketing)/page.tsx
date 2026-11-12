import Link from "next/link";

/**
 * Page d'accueil publique (groupe de route "marketing").
 * Contenu volontairement minimal en phase 01 : direction
 * artistique et contenu final arrivent dans une phase dédiée.
 */
export default function MarketingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-950 px-6 text-center text-slate-100">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        NA-BOUDOU
      </h1>
      <p className="max-w-xl text-slate-400">
        Les fondations techniques du projet sont en place. La direction
        artistique et les fonctionnalités métier arriveront dans les prochaines
        phases.
      </p>
      <Link
        href="/dashboard"
        className="rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-white"
      >
        Accéder au tableau de bord (structure)
      </Link>
    </main>
  );
}
