"use client";

import {  } from "react";
import styles from "./styles/styles.module.scss";
import NewRecipe from "./components/newRecipe/NewRecipe";

export default function Home() {
  return (
    <main className={styles.main}>
      <NewRecipe propName={""} />
    </main>
  );
}
