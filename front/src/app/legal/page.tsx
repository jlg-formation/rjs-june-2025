"use client";

import { useEffect, useRef, useState } from "react";

export default function Legal() {
  console.log("rendering Legal");
  const [dateTimeStr, setDateTimeStr] = useState("");
  const [counter, setCounter] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTimeStr(new Date().toLocaleString());
    }, 1000);

    return () => {
      console.log("nettoyage");
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (isCounting) {
      console.log("setInterval");
      timer.current = setInterval(() => {
        setCounter((c) => c + 1);
      }, 1000);
    } else if (timer.current) {
      console.log("clearInterval isCounting false");
      clearInterval(timer.current);
      timer.current = undefined;
    }

    return () => {
      console.log("housekeeping");
      if (timer.current) {
        console.log("clearInterval housekeeping");
        clearInterval(timer.current);
        timer.current = undefined;
      }
    };
  }, [isCounting]);

  const handleToggle = () => {
    setIsCounting((isCounting) => !isCounting);
  };

  return (
    <main className="main">
      <h1 className="title">Mentions Légales</h1>
      <p>{dateTimeStr}</p>
      <button className="btn" onClick={handleToggle}>
        counter = {counter}
      </button>
      <p>isCounting = {isCounting ? "true" : "false"}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        quas necessitatibus. Nostrum tempora aperiam sunt ipsum quibusdam
        tenetur, delectus ex nihil beatae animi vero explicabo, alias dolores
        quidem nemo deserunt!
      </p>
    </main>
  );
}
