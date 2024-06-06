import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";

export default function Meals() {
  useHttp('http://localhost:3000/meals',)

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
