import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center gap-4">
      <h1 className="text-center text-3xl font-bold">
        Gérez efficacement votre stock !
      </h1>
      <Link href="/stock" className="btn btn-primary">
        <span>Voir le stock</span>
        <ChevronRightIcon className="size-5" />
      </Link>
    </main>
  );
}
