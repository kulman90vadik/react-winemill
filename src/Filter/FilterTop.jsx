import { useState } from 'react';
import './FilterItems/filter-items.scss';

const FilterTop = ({title, setListHeight}) => {

    const [btnBool, setBrnBool] = useState(true);

    const onToList = () => {
        setBrnBool(!btnBool);
        setListHeight(!btnBool)
    }

    return ( 
        <div className="filter-items__top">
            <div className="filter-items__title">{title}</div>
            <button className={`btn-reset filter-items__btn ${btnBool ? '' : 'filter-items__btn--plus'}`} onClick={onToList}></button>
        </div>
    );
}

export default FilterTop;