export default function CartItem(){
    return (
        <li className="cart-item">
            <p>
                NAME - QTY*PRICE
            </p>
            <p>
                <button>-</button>
                <span>QTY</span>
                <button>+</button>
            </p>
        </li>
    )
}