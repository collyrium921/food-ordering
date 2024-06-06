import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open }) {
    const dialog = useRef();
    useEffect(()=>{
        if(open){
            dialog.current.showModal();
        }
    },[open]);
  return createPortal(
    <dialog ref={dialog} className="modal">{children}</dialog>,
    document.getElementById("modal")
  );
}
