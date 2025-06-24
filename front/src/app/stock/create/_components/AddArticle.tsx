"use client";

import { NewArticle } from "@/types/Article";
import { addArticle } from "@/utils/articles-db";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AddArticle() {
  const [name, setName] = useState("Truc");
  const [price, setPrice] = useState("0");
  const [qty, setQty] = useState("1");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newArticle: NewArticle = {
      name,
      price: parseFloat(price),
      qty: parseInt(qty),
    };
    await addArticle(newArticle);
    router.push("/stock");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <span>Nom</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="error"></span>
      </label>
      <label>
        <span>Prix</span>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <span className="error"></span>
      </label>
      <label>
        <span>Quantité</span>
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <span className="error"></span>
      </label>
      <div className="error"></div>
      <button className="btn btn-primary">Ajouter</button>
    </form>
  );
}
