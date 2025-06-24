"use server";

import { Article, NewArticle } from "@/types/Article";
import { sleep } from "./sleep";

console.log("xxx loading db");

const articles: Article[] = [
  { id: "a1", name: "Toto", price: 12.45, qty: 1234 },
  { id: "a2", name: "Titi", price: 12.45, qty: 1234 },
];

export const getArticles = async () => {
  await sleep(2000);
  console.log("articles: ", articles);
  return articles;
};

export const addArticle = async (newArticle: NewArticle) => {
  await sleep(2000);
  const a: Article = { ...newArticle, id: Math.random() + "xxx" };
  console.log("a: ", a);
  articles.push(a);
  console.log("articles: ", articles);
};
