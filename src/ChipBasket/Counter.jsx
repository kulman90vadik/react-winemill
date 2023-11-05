import {useState, useContext} from "react";

import "./chipBasket.scss";
import AppContext from "../context";

const Counter = ({price, delMinusCartBasket, id}) => {
    const {setSumm} = useContext(AppContext);

    let startPrice = Number(price);

    const[statePrice, setStatePrice] = useState(Number(price));
    const[amount, setAmount] = useState(1);
    const min = 1;

    const increment = () => {
        setAmount(amount + 1);
        setStatePrice(prev => prev + startPrice);
        setSumm(prev => prev + startPrice);
    }

    const decrement = () => {
        if(amount > min) {
            setAmount(amount - 1);
            setStatePrice(prev => prev - startPrice);
            setSumm(prev => prev - startPrice);
        }
        else {
            setSumm(prev => prev - startPrice);
            delMinusCartBasket(id, statePrice, price);
        }
    }

    return (
        <>
        <div className="chipBasket__grid chipBasket__btns">
            <button
                className="chipBasket__btn btn-reset"
                type="button"
                onClick={decrement}
            > - </button>
            {amount}
            <button
                className="chipBasket__btn btn-reset"
                type="button"
                onClick={increment}
            > + </button>
        </div>
        <div className="chipBasket__grid chipBasket__total">{statePrice}</div>
        </>
    )
}

export default Counter;

