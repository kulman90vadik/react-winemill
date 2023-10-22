import './cabinet.scss';

const Cabinet = () => {
    return (
        <ul className="cabinet">
            <li className="cabinet__item">
                <button className="cabinet__btn cabinet__btn--grey" type="button">
                    Регистрация
                </button>
            </li>
            <li className="cabinet__item">
                <button className="cabinet__btn cabinet__btn--grey" type="button">
                    Вход
                </button>
            </li>
            <li className="cabinet__item">
                <button className="cabinet__btn cabinet__btn--cabinet" type="button">
                    Личный кабинет
                </button>
            </li>
        </ul>
    );
}
export default Cabinet;