"use server";

import { Article, NewArticle } from "@/types/Article";
import { sleep } from "./sleep";

const url = process.env.BACKEND_URL || "http://localhost:3333/api/articles";

export const getArticles = async () => {
  await sleep(300);
  console.log("url: ", url);
  const response = await fetch(url, {
    cache: "no-store",
  });
  const articles: Article[] = await response.json();
  return articles;
};

export const addArticle = async (newArticle: NewArticle) => {
  await sleep(300);
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(newArticle),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
