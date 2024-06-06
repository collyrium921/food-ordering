import { useState } from "react";

export default function Meals() {
  const [loadedMeals, setLoadMeals] = useState([]);

  async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals", {
      method: "GET",
    });
    if (!response.ok) {
    }
    const meals = await response.json();
    setLoadMeals(meals);
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
