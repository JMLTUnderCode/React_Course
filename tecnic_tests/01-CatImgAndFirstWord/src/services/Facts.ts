import React from "react";
import { RANDOM_FACT_URL } from "../constants";

export const getRandomFact = async () => {
  const response = await fetch(RANDOM_FACT_URL);
  const data = await response.json();
  if (data) {
    return data.fact;
  } else {
    throw new Error(`${RANDOM_FACT_URL} failed with data ${data}`);
  }
};