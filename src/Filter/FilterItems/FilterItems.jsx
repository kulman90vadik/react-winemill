
import React, { useState } from 'react';
import { useContext } from "react";
import AppContext from "../../context";

import FilterTop from '../FilterTop';

import './filter-items.scss';

const FilterItems = ({ filterArr, title }) => {
    const { setCollections, filterColor } = useContext(AppContext);
    const[onInputPrice, setOnInputPrice] = useState('');
    const[toInputPrice, setToInputPrice] = useState('');

    const [listHeight, setListHeight] = useState(true);

    // const filterColor = (item, title) => {
    //     console.log(`https://652cdf7ad0d1df5273efc824.mockapi.io/wine?${item.toLowerCase() ? `${title.toLowerCase()}=${item.toLowerCase()}` : ''}`);

    //     fetch(`https://652cdf7ad0d1df5273efc824.mockapi.io/wine?${item.toLowerCase() ? `${title.toLowerCase()}=${item.toLowerCase()}` : ''}`)
    //         .then((res) => res.json())
    //         .then((json) => {
    //             setCollections(json);
    //         })
    //         .catch((err) => {
    //             console.warn(err);
    //         })
    // }

    const checkOnInputPrice = (e) => {
        if(e.target.value !== '') return setOnInputPrice(e.target.value)
    }
    const checkToInputPrice = (e) => {
        if(e.target.value !== '') return setToInputPrice(e.target.value)
    }

    const addFilterPrice = () => {
        if (onInputPrice && toInputPrice) {
            fetch('https://652cdf7ad0d1df5273efc824.mockapi.io/wine')
                .then((res) => res.json())
                .then((json) => {
                    setCollections(
                        json.filter(el => Number(el.price) >= Number(onInputPrice) && Number(el.price) <= Number(toInputPrice))
                    );
                })
                .catch((err) => {
                    console.warn(err);
                })
    
                setOnInputPrice('');
                setToInputPrice('');    
        }
        else {
            console.log('nein')
        }
    }

    return (
        <div className="filter-items">

            <FilterTop title={title} setListHeight={setListHeight} />

            <ul className="filter-items__list" style={{ maxHeight: listHeight ? '500px' : '0px' }}>
                {(title === "Price") 
                ? 
                <li className="filter-price">
                    <div className="filter-price__box">
                        <input type="text" className="filter-price__input" placeholder='on' onChange={(e) => checkOnInputPrice(e)} value={onInputPrice}/>
                        <input type="text" className="filter-price__input" placeholder='to' onChange={(e) => checkToInputPrice(e)} value={toInputPrice}/>
                    </div>
                    <button className='filter-price__btn btn-reset' type='button' onClick={addFilterPrice}>ok</button>
                </li>
                :
                filterArr.map((item) => <li className="filter-items__item" key={item}>
                    <label htmlFor={item} className='filter-items__label'>
                        <input className='filter-items__input' type="radio" name={title} id={item} onClick={() => filterColor(item, title)} />
                        <span></span>
                        {item}
                    </label>
                </li>)
                }
            </ul>
            
        </div>
    );
}

export default FilterItems;