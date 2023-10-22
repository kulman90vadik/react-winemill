import {useState} from "react";

import "./chipBasket.scss";

const Counter = () => {
    const[amount, setAmount] = useState(1);
    const min = 0;
    const increment = () => {
        setAmount(amount + 1)
    }

    const decrement = () => {
        if(amount > min) {
            setAmount(amount - 1)

        }
    }
    return (
        <>
        <button
            className="chipBasket__btn btn-reset"
            type="button"
            onClick={decrement}
        >
            -
        </button>
        {amount}
        <button
            className="chipBasket__btn btn-reset"
            type="button"
            onClick={increment}
        >
            +
        </button>
        </>
    )
}

export default Counter;
