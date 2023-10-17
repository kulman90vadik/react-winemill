import './basket.scss';

const Basket = () => {
  return (
    <div className="basket">
      <div className="basket__top">
        <div className="basket__text">Корзина:</div>
        <div className="basket__number">0</div>
      </div>
      <div className="basket__bottom">
        <div>0</div>
        <div>p</div>
      </div>
    </div>
  );
}
 
export default Basket;