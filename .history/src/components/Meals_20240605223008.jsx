export default function Meals(){
    fetch('http://localhost:3000/meals', {method: 'GET'});

    return(
        <ul id="meals">

        </ul>
    )
}