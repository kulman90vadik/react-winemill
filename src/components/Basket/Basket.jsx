import './basket.scss';

const Basket = ({onBasketHandler, basketCollections}) => {
  return (
    <div className="basket">
      <div className="basket__top">
        <button className="btn-reset basket__text" onClick={onBasketHandler}>Корзина:</button>
        <div className="basket__number">{basketCollections.length}</div>
      </div>
      <div className="basket__bottom">
        <div>0</div>
        <div>p</div>
      </div>
    </div>
  );
}
 
export default Basket;