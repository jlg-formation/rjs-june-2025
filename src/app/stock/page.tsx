import Link from "next/link";

export default function Stock() {
  return (
    <main>
      <h1>Liste des articles</h1>
      <div>
        <nav>
          <button>Rafraîchir</button>
          <Link href="/stock/create">Ajouter</Link>
          <button>Supprimer</button>
        </nav>
        <div>Chargement des articles...</div>
      </div>
    </main>
  );
}
