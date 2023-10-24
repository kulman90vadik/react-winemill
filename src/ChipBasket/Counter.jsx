import {useState} from "react";

import "./chipBasket.scss";

const Counter = ({price, delCartBasket, id}) => {

    let startPrice = Number(price);

    const[statePrice, setStatePrice] = useState(Number(price));
    const[amount, setAmount] = useState(1);
    const min = 1;
    const increment = () => {
        setAmount(amount + 1);
        setStatePrice(prev => prev + startPrice);
    }

    const decrement = () => {
        if(amount > min) {
            setAmount(amount - 1);
            setStatePrice(prev => prev - startPrice);
        }
        else {
            delCartBasket(id);
            
        }
    }
    return (
        <>
         <div className="chipBasket__grid chipBasket__btns">
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
        </div>
        <div className="chipBasket__grid">{statePrice}</div>
        </>
    )
}

export default Counter;

