import "./chipBasket.scss";

const ChipBasket = ({ openBasket, onBasketHandler, basketCollections}) => {

  const result = basketCollections.reduce((acc, item) => {
    if (acc.includes(item)) return acc; 
    return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
  }, []);


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
      
      {result.map(item => {

        return (
          <li key={item.id}>
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
