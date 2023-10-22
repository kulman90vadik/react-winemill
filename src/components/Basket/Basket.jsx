import './basket.scss';

const Basket = ({onBasketHandler, basketCollectionsFilter}) => {
  return (
    <div className="basket">
      <div className="basket__top">
        <button className="btn-reset basket__text" onClick={onBasketHandler}>Корзина:</button>
        <div className="basket__number">{basketCollectionsFilter.length}</div>
      </div>
      <div className="basket__bottom">
        <div>0</div>
        <div>p</div>
      </div>
    </div>
  );
}
 
export default Basket;