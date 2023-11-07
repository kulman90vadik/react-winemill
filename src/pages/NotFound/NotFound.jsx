import './NotFound.scss';

const NotFound = () => {
  return ( 
    <div className="NotFound" >
      <div className="NotFound__container" style={{backgroundImage: `url("images/NotFound.jpg")`}}>
        <div className="NotFound__wrapper">
          <div className="NotFound__top">
            <span className="NotFound__haeding">Ooooops...</span>
            <span className="NotFound__number">404</span>
          </div>
          <h1 className="NotFound__title">We can't seem to find the page you're looking for</h1>
        </div>
      </div>
    </div>
  );
}
 
export default NotFound;