export default function MealItem({meal}){
    return (
        <li className="meal-item">
            <article>
                <img src={meal.image} alt={meal.name} />
            </article>
        </li>
    )
}