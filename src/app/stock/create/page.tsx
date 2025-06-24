import Image from "next/image";

export default function StockCreate() {
  return (
    <main className="main">
      <h1 className="title">Ajout d'un article</h1>
      <form className="form">
        <label>
          <span>Nom</span>
          <input type="text" />
          <span className="error"></span>
        </label>
        <label>
          <span>Prix</span>
          <input type="number" />
          <span className="error"></span>
        </label>
        <label>
          <span>Quantité</span>
          <input type="number" />
          <span className="error"></span>
        </label>
        <div className="error"></div>
        <button className="btn btn-primary">Ajouter</button>
      </form>
    </main>
  );
}
