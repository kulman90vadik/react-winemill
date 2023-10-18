import "./chipBasket.scss";

const ChipBasket = ({ openBasket, onBasketHandler, basketCollections}) => {
  return (
    <div className={`chipBasket ${openBasket ? "chipBasket--active" : ""} `}>
      <div className="chipBasket__content">
        <button
          className="chipBasket__close btn-reset"
          type="button"
          onClick={onBasketHandler}
        >
          &times;
        </button>

    <ul className="">
      {basketCollections.map(item => {
        return (
          <li>
            {item.name}
          </li>
        )
      })}
    </ul>

      </div>
    </div>
  );
};

export default ChipBasket;
