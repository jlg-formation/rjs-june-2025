import { getArticles } from "@/utils/articles-db";
import { ArrowPathIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function Stock() {
  console.log("Rendering Stock");

  const articles = await getArticles();
  console.log("xxx articles: ", articles);
  return (
    <main className="main">
      <h1 className="title">Liste des articles</h1>
      <div>
        <nav className="flex gap-1">
          <button title="Rafraîchir" className="btn">
            <ArrowPathIcon className="size-6" />
          </button>
          <Link title="Ajouter" href={"/stock/create"} className="btn">
            <PlusIcon className="size-6" />
          </Link>
        </nav>
        <div className="flex h-8 items-center font-bold"></div>
        <table className="table">
          <thead>
            <tr>
              <th className="name">Nom</th>
              <th className="price">Prix</th>
              <th className="qty">Quantité</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((a) => (
              <tr key={a.id}>
                <td className="name">{a.name}</td>
                <td className="price">1.23 €</td>
                <td className="qty">12</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
