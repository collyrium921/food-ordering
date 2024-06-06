import { currencyFormatter } from "../util/formatting";

export default function CartItem({item}){
    return (
        <li className="cart-item">
            <p>
                {item.name} - {item.quantity}*{currencyFormatter.format(item.price)}
            </p>
            <p className="cart-item-actions">
                <button>-</button>
                <span>QTY</span>
                <button>+</button>
            </p>
        </li>
    )
}