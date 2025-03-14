import MessageContext from "../context/MessageContext";
import { useContext } from "react";

function Child() {
const message = useContext(MessageContext)
    return (
        <div>
            <p>{message}</p>
        </div>
    )

}

export default Child