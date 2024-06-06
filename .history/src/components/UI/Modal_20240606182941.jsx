import { createPortal } from "react-dom"


export default function Modal({children}){
    return createPortal(
        <dialog></dialog>, document.getElementById("modal")
    )
}