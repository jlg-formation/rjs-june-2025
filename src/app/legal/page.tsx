"use client";

import { useEffect, useState } from "react";

export default function Legal() {
  const [dateTimeStr, setDateTimeStr] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer", dateTimeStr);
      setDateTimeStr(new Date().toLocaleString());
    }, 1000);

    return () => {
      console.log("nettoyage");
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="main">
      <h1 className="title">Mentions Légales</h1>
      <p>{dateTimeStr}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        quas necessitatibus. Nostrum tempora aperiam sunt ipsum quibusdam
        tenetur, delectus ex nihil beatae animi vero explicabo, alias dolores
        quidem nemo deserunt!
      </p>
    </main>
  );
}
