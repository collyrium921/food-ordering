export default function CartItem(){
    return (
        <li className="cart-item">
            <p>
                NAME - QTY*PRICE
            </p>
            <p className="cart-item-actions">
                <button>-</button>
                <span>QTY</span>
                <button>+</button>
            </p>
        </li>
    )
}