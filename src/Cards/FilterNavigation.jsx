import { useContext, React } from "react";
import AppContext from "../context";

import "./filter-nav.scss";

let names = ["Names of wine brands", "Familie Torres", "Domaine de la Romaneé-Conti", "Château Margaux", "Penfolds", "La Rioja Alta"];

const FilterNavigation = () => {

    const { onAddFilter, onOpen, blockHidden, count } = useContext(AppContext);

    return (
        <div className="filter-nav">
            <ul className="filter-nav__list">

                <li className="filter-nav__item">
                    <button type="button" className="filter-nav__name btn-reset" onClick={() => onOpen
                    (blockHidden)}>
                        {names[count]}
                        <svg className={`filter-nav__svg ${blockHidden ? 'filter-nav__svg--active' : ''}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" />
                        </svg>
                    </button>

                    <div className="filter-nav__info" style={{ maxHeight: blockHidden ? '500px' : '0px' }}>
                        {
                            names.map((el, index) => <button className="filter-nav__btn btn-reset" key={el} onClick={() => onAddFilter(index)}>{el}</button>)
                        }
                    </div>

                </li>

            </ul>
        </div>
    );
}

export default FilterNavigation;