import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col justify-center">
      <h1>Gérez efficacement votre stock !</h1>
      <Link href="/stock">Voir le stock</Link>
    </main>
  );
}
