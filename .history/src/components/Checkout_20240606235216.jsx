import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout(){
    const userProgressCtx = useContext(UserProgressContext)
    const cartCtx =   useContext(CartContext)
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
      );
    return (
        <Modal open={userProgressCtx.progress === 'checkout'}>
            <form action="">
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>

                <Input label="Full Name" type="text" id="full-name" />
                <Input label="Email" type="email" id="email" />
                <Input label="Street" type="text" id="street" />

                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>

                <p className="modal-actions">
                    <Button type="button" textOnly>Close</Button>
                    <Button>Place Order</Button>
                </p>
            </form>
        </Modal>
    )
}